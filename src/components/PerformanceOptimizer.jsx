import React, { useEffect, useState, useCallback } from 'react'

// Hook para Web Vitals
const useWebVitals = () => {
  const [vitals, setVitals] = useState({})

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

// Hook para detectar conexão lenta
const useConnectionSpeed = () => {
  const [connectionSpeed, setConnectionSpeed] = useState('fast')

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = navigator.connection
      const updateConnectionSpeed = () => {
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          setConnectionSpeed('slow')
        } else if (connection.effectiveType === '3g') {
          setConnectionSpeed('medium')
        } else {
          setConnectionSpeed('fast')
        }
      }

      updateConnectionSpeed()
      connection.addEventListener('change', updateConnectionSpeed)

      return () => {
        connection.removeEventListener('change', updateConnectionSpeed)
      }
    }
  }, [])

  return connectionSpeed
}

// Hook para cache inteligente
const useSmartCache = (key, ttl = 300000) => { // 5 minutos por padrão
  const [cachedData, setCachedData] = useState(null)

  const setCache = useCallback((data) => {
    const cacheItem = {
      data,
      timestamp: Date.now(),
      ttl
    }
    localStorage.setItem(key, JSON.stringify(cacheItem))
    setCachedData(data)
  }, [key, ttl])

  const getCache = useCallback(() => {
    try {
      const cached = localStorage.getItem(key)
      if (cached) {
        const { data, timestamp, ttl: cachedTtl } = JSON.parse(cached)
        if (Date.now() - timestamp < cachedTtl) {
          setCachedData(data)
          return data
        } else {
          localStorage.removeItem(key)
        }
      }
    } catch (error) {
      console.warn('Erro ao acessar cache:', error)
    }
    return null
  }, [key])

  useEffect(() => {
    getCache()
  }, [getCache])

  return { cachedData, setCache, getCache }
}

// Componente para preload de recursos críticos
const ResourcePreloader = ({ resources = [] }) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = resource.type || 'preload'
      link.href = resource.href
      if (resource.as) link.as = resource.as
      if (resource.type === 'preload' && resource.crossorigin) {
        link.crossOrigin = resource.crossorigin
      }
      document.head.appendChild(link)
    })
  }, [resources])

  return null
}

// Componente para lazy loading de imagens
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = React.useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  )
}

// Componente para lazy loading de componentes
const LazyComponent = ({ children, fallback = null, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  )
}

// Hook para scroll otimizado
const useOptimizedScroll = (callback, delay = 100) => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let timeoutId = null

    const handleScroll = () => {
      setIsScrolling(true)
      
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        setIsScrolling(false)
        if (callback) callback()
      }, delay)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [callback, delay])

  return isScrolling
}

// Componente principal de otimização
const PerformanceOptimizer = ({ children, config = {} }) => {
  const vitals = useWebVitals()
  const connectionSpeed = useConnectionSpeed()
  const [performanceMode, setPerformanceMode] = useState('normal')

  // Configurações padrão
  const defaultConfig = {
    enableWebVitals: true,
    enableSmartCache: true,
    enableResourcePreload: true,
    criticalResources: [
      { href: '/fonts/inter.woff2', as: 'font', type: 'preload', crossorigin: 'anonymous' },
      { href: '/css/critical.css', as: 'style', type: 'preload' }
    ],
    ...config
  }

  // Ajustar modo de performance baseado na conexão
  useEffect(() => {
    if (connectionSpeed === 'slow') {
      setPerformanceMode('lite')
    } else if (connectionSpeed === 'medium') {
      setPerformanceMode('balanced')
    } else {
      setPerformanceMode('full')
    }
  }, [connectionSpeed])

  // Otimizações baseadas no modo de performance
  useEffect(() => {
    if (performanceMode === 'lite') {
      // Reduzir animações
      document.documentElement.style.setProperty('--animation-duration', '0.1s')
      // Reduzir qualidade de imagens
      document.documentElement.classList.add('performance-lite')
    } else if (performanceMode === 'balanced') {
      document.documentElement.style.setProperty('--animation-duration', '0.2s')
      document.documentElement.classList.add('performance-balanced')
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0.3s')
      document.documentElement.classList.remove('performance-lite', 'performance-balanced')
    }
  }, [performanceMode])

  // Monitorar Web Vitals e otimizar automaticamente
  useEffect(() => {
    if (defaultConfig.enableWebVitals && vitals.LCP > 2500) {
      // LCP ruim, ativar modo lite
      setPerformanceMode('lite')
    }
  }, [vitals, defaultConfig.enableWebVitals])

  return (
    <>
      {defaultConfig.enableResourcePreload && (
        <ResourcePreloader resources={defaultConfig.criticalResources} />
      )}
      
      {/* Adicionar CSS crítico inline */}
      <style>{`
        .performance-lite img {
          image-rendering: -webkit-optimize-contrast;
        }
        
        .performance-lite * {
          animation-duration: 0.1s !important;
          transition-duration: 0.1s !important;
        }
        
        .performance-balanced * {
          animation-duration: 0.2s !important;
          transition-duration: 0.2s !important;
        }
        
        /* Otimizações de layout */
        .card-hover {
          will-change: transform;
        }
        
        .gradient-bg {
          will-change: background;
        }
        
        /* Contenção de layout */
        .aspect-ratio-container {
          aspect-ratio: var(--aspect-ratio, 1);
        }
      `}</style>
      
      {children}
    </>
  )
}

// Componente para otimização de fontes
const FontOptimizer = () => {
  useEffect(() => {
    // Preload de fontes críticas
    const fontPreloads = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ]

    fontPreloads.forEach(fontUrl => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = fontUrl
      link.as = 'style'
      link.onload = function() {
        this.onload = null
        this.rel = 'stylesheet'
      }
      document.head.appendChild(link)
    })
  }, [])

  return null
}

export {
  PerformanceOptimizer,
  OptimizedImage,
  LazyComponent,
  FontOptimizer,
  useWebVitals,
  useConnectionSpeed,
  useSmartCache,
  useOptimizedScroll
}

