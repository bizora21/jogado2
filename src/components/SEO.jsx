import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "lojarapidamz - E-commerce Premium em Moçambique | Entrega Grátis",
  description = "Loja online premium em Moçambique. Cintas modeladoras, tapetes decorativos, cortadores e cabelos femininos. Entrega grátis em Maputo, Matola e Beira. Pague na entrega!",
  keywords = "loja online moçambique, cintas modeladoras, tapetes decorativos, cortadores, cabelos femininos, entrega grátis maputo, e-commerce moçambique",
  image = "https://lojarapidamz.com/og-image.jpg",
  url = "https://lojarapidamz.com",
  type = "website",
  product = null,
  article = null
}) => {
  // Dados estruturados para e-commerce
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "name": "lojarapidamz",
    "description": "E-commerce premium em Moçambique com entrega grátis",
    "url": url,
    "logo": "https://lojarapidamz.com/logo.png",
    "image": image,
    "telephone": "+258840000000",
    "email": "contato@lojarapidamz.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MZ",
      "addressLocality": "Maputo",
      "addressRegion": "Maputo"
    },
    "sameAs": [
      "https://www.facebook.com/lojarapidamz",
      "https://www.instagram.com/lojarapidamz"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "MZN",
      "availability": "https://schema.org/InStock",
      "lowPrice": "450",
      "highPrice": "3500"
    },
    "paymentAccepted": ["M-Pesa", "E-Mola", "Cash"],
    "priceRange": "450-3500 MZN",
    "openingHours": "Mo-Su 08:00-20:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo de Produtos lojarapidamz",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Cintas Modeladoras",
          "itemListElement": []
        },
        {
          "@type": "OfferCatalog", 
          "name": "Tapetes Decorativos",
          "itemListElement": []
        },
        {
          "@type": "OfferCatalog",
          "name": "Cortadores",
          "itemListElement": []
        },
        {
          "@type": "OfferCatalog",
          "name": "Cabelos Femininos",
          "itemListElement": []
        }
      ]
    }
  }

  // Schema para produto específico
  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "sku": `LRMZ-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "lojarapidamz"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "MZN",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "lojarapidamz"
      },
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined,
    "category": product.category
  } : null

  // Schema para artigo
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": "lojarapidamz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "lojarapidamz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lojarapidamz.com/logo.png"
      }
    },
    "datePublished": article.publishDate,
    "dateModified": article.modifiedDate || article.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  } : null

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://lojarapidamz.com"
      }
    ]
  }

  // FAQ Schema para páginas de produto
  const faqSchema = product ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona a entrega?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferecemos entrega grátis para Maputo, Matola e Beira. O prazo de entrega é de 1-2 dias úteis. Para outras cidades, consulte as condições de frete."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são as formas de pagamento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aceitamos pagamento na entrega via M-Pesa, E-Mola ou dinheiro. Não é necessário pagar antecipadamente."
        }
      },
      {
        "@type": "Question",
        "name": "Posso trocar o produto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, oferecemos trocas e devoluções em até 7 dias após o recebimento do produto, desde que esteja em perfeitas condições."
        }
      }
    ]
  } : null

  return (
    <Helmet>
      {/* Meta Tags Básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="lojarapidamz" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_MZ" />
      <meta property="og:site_name" content="lojarapidamz" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Mobile & App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="lojarapidamz" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Performance & Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="MZ" />
      <meta name="geo.placename" content="Maputo" />
      <meta name="geo.position" content="-25.9692;32.5732" />
      <meta name="ICBM" content="-25.9692, 32.5732" />
      
      {/* Business Info */}
      <meta name="contact" content="contato@lojarapidamz.com" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//wa.me" />
      <link rel="dns-prefetch" href="//api.whatsapp.com" />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Additional Meta for E-commerce */}
      <meta name="price" content="450-3500 MZN" />
      <meta name="priceCurrency" content="MZN" />
      <meta name="availability" content="InStock" />
      <meta name="condition" content="NewCondition" />
      
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      
      {/* Bing Webmaster */}
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      
      {/* Yandex Verification */}
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
    </Helmet>
  )
}

export default SEO

