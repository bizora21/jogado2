import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead = ({
  title = 'lojarapida - E-commerce Premium em Moçambique | Entrega Grátis',
  description = 'Loja online premium em Moçambique com produtos de qualidade: cintas modeladoras, decoração, utensílios de cozinha e beleza. Entrega grátis, pagamento na entrega.',
  keywords = 'loja online moçambique, e-commerce maputo, cintas modeladoras, decoração casa, utensílios cozinha, entrega grátis moçambique',
  image = 'https://lojarapidamz.com/images/og-image.jpg',
  url = 'https://lojarapidamz.com',
  type = 'website',
  author = 'lojarapida',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'pt_MZ',
  siteName = 'lojarapida'
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lojarapidamz.com/#organization",
        "name": "lojarapida",
        "url": "https://lojarapidamz.com",
        "sameAs": [
          `https://wa.me/258863181415`
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://lojarapidamz.com/logo.png",
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+258863181415",
          "contactType": "customer service",
          "availableLanguage": ["Portuguese"],
          "areaServed": "MZ"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MZ",
          "addressLocality": "Maputo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://lojarapidamz.com/#website",
        "url": "https://lojarapidamz.com",
        "name": "lojarapida",
        "description": description,
        "publisher": {
          "@id": "https://lojarapidamz.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://lojarapidamz.com/busca?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "pt-MZ"
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": "https://lojarapidamz.com/#website"
        },
        "about": {
          "@id": "https://lojarapidamz.com/#organization"
        },
        "datePublished": publishedTime || new Date().toISOString(),
        "dateModified": modifiedTime || new Date().toISOString(),
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": "https://lojarapidamz.com"
            }
          ]
        },
        "inLanguage": "pt-MZ"
      }
    ]
  }

  // Adicionar dados estruturados específicos para e-commerce
  if (type === 'product') {
    structuredData["@graph"].push({
      "@type": "Product",
      "name": title,
      "description": description,
      "image": image,
      "brand": {
        "@type": "Brand",
        "name": "lojarapida"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "MZN",
        "seller": {
          "@id": "https://lojarapidamz.com/#organization"
        }
      }
    })
  }

  // Adicionar dados estruturados para artigos
  if (type === 'article') {
    structuredData["@graph"].push({
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": image,
      "author": {
        "@type": "Organization",
        "@id": "https://lojarapidamz.com/#organization"
      },
      "publisher": {
        "@id": "https://lojarapidamz.com/#organization"
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "articleSection": section,
      "keywords": tags.join(', '),
      "inLanguage": "pt-MZ"
    })
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Language and Locale */}
      <meta name="language" content="Portuguese" />
      <meta httpEquiv="content-language" content="pt-MZ" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Article specific Open Graph */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime || publishedTime} />
          <meta property="article:author" content={author} />
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="application-name" content="lojarapida" />
      
      {/* Geo Tags for Mozambique */}
      <meta name="geo.region" content="MZ" />
      <meta name="geo.placename" content="Maputo" />
      <meta name="geo.position" content="-25.9692;32.5732" />
      <meta name="ICBM" content="-25.9692, 32.5732" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://wa.me" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//wa.me" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional Performance Hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  )
}

export default SEOHead

