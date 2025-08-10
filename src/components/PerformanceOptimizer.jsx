import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { debounce } from 'lodash-es'

// Hook para lazy loading de imagens
export const useLazyLoading = () => {
  useEffect(() => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          const src = img.getAttribute('data-src')
          if (src) {
            img.src = src
            img.removeAttribute('data-src')
            img.classList.add('loaded')
          }
          observer.unobserve(img)
        }
      })
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    })

    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => imageObserver.observe(img))

    return () => {
      lazyImages.forEach(img => imageObserver.unobserve(img))
    }
  }, [])
}

// Hook para preload de recursos críticos
export const usePreloadResources = (resources = []) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = resource.type
      link.href = resource.url
      if (resource.crossorigin) {
        link.crossOrigin = resource.crossorigin
      }
      document.head.appendChild(link)
    })
  }, [resources])
}

// Hook para otimização de scroll
export const useOptimizedScroll = (callback, delay = 16) => {
  const debouncedCallback = useMemo(
    () => debounce(callback, delay),
    [callback, delay]
  )

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          debouncedCallback()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      debouncedCallback.cancel()
    }
  }, [debouncedCallback])
}

// Hook para Web Vitals
export const useWebVitals = () => {
  const [vitals, setVitals] = useState({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null
  })

  useEffect(() => {
    const reportVital = (vital) => {
      setVitals(prev => ({
        ...prev,
        [vital.name]: vital.value
      }))
    }

    // Importar web-vitals dinamicamente
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportVital)
      getFID(reportVital)
      getFCP(reportVital)
      getLCP(reportVital)
      getTTFB(reportVital)
    }).catch(() => {
      // Fallback se web-vitals não estiver disponível
      console.log('Web Vitals não disponível')
    })
  }, [])

  return vitals
}

// Componente para otimização de imagens
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  lazy = true, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setError(true)
  }, [])

  if (lazy) {
    return (
      <img
        data-src={src}
        src={placeholder}
        alt={alt}
        className={`${className} ${loaded ? 'loaded' : 'loading'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        decoding="async"
        {...props}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? 'loaded' : 'loading'}`}
      onLoad={handleLoad}
      onError={handleError}
      decoding="async"
      {...props}
    />
  )
}

// Componente para carregamento diferido de componentes
export const LazyComponent = ({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 rounded h-32"></div>,
  rootMargin = '100px'
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref)
        }
      },
      { rootMargin }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, rootMargin])

  return (
    <div ref={setRef}>
      {isVisible ? children : fallback}
    </div>
  )
}

// Hook para cache de dados
export const useCache = (key, fetcher, options = {}) => {
  const { ttl = 5 * 60 * 1000, enabled = true } = options // 5 minutos por padrão
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getCachedData = useCallback(() => {
    if (!enabled) return null
    
    try {
      const cached = localStorage.getItem(`cache_${key}`)
      if (cached) {
        const { data, timestamp } = JSON.parse(cached)
        if (Date.now() - timestamp < ttl) {
          return data
        }
      }
    } catch (e) {
      console.warn('Cache read error:', e)
    }
    return null
  }, [key, ttl, enabled])

  const setCachedData = useCallback((data) => {
    if (!enabled) return
    
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify({
        data,
        timestamp: Date.now()
      }))
    } catch (e) {
      console.warn('Cache write error:', e)
    }
  }, [key, enabled])

  const fetchData = useCallback(async () => {
    const cached = getCachedData()
    if (cached) {
      setData(cached)
      return cached
    }

    setLoading(true)
    setError(null)

    try {
      const result = await fetcher()
      setData(result)
      setCachedData(result)
      return result
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetcher, getCachedData, setCachedData])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}

// Componente para otimização de fontes
export const FontOptimizer = () => {
  useEffect(() => {
    // Preload de fontes críticas
    const fontPreloads = [
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        as: 'style'
      }
    ]

    fontPreloads.forEach(font => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = font.href
      link.as = font.as
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Font display swap para melhor performance
    const style = document.createElement('style')
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
      }
    `
    document.head.appendChild(style)
  }, [])

  return null
}

// Hook para detecção de conexão lenta
export const useConnectionSpeed = () => {
  const [connectionSpeed, setConnectionSpeed] = useState('unknown')

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = navigator.connection
      setConnectionSpeed(connection.effectiveType)

      const handleChange = () => {
        setConnectionSpeed(connection.effectiveType)
      }

      connection.addEventListener('change', handleChange)
      return () => connection.removeEventListener('change', handleChange)
    }
  }, [])

  return connectionSpeed
}

// Componente principal de otimização
const PerformanceOptimizer = ({ children }) => {
  const connectionSpeed = useConnectionSpeed()
  const vitals = useWebVitals()

  // Configurar otimizações baseadas na conexão
  useEffect(() => {
    if (connectionSpeed === 'slow-2g' || connectionSpeed === '2g') {
      // Reduzir qualidade de imagens para conexões lentas
      document.documentElement.classList.add('slow-connection')
    } else {
      document.documentElement.classList.remove('slow-connection')
    }
  }, [connectionSpeed])

  // Log de Web Vitals para monitoramento
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', vitals)
    }
  }, [vitals])

  // Preload de recursos críticos
  usePreloadResources([
    { url: '/fonts/inter-var.woff2', type: 'font', crossorigin: 'anonymous' },
    { url: '/images/hero-image.webp', type: 'image' }
  ])

  // Lazy loading de imagens
  useLazyLoading()

  return (
    <>
      <FontOptimizer />
      {children}
    </>
  )
}

export default PerformanceOptimizer

