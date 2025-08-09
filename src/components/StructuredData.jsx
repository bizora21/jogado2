import React from 'react';

const StructuredData = ({ type, data }) => {
  const structuredData = {
    "@context": "https://schema.org",
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// Dados estruturados para a organização
export const OrganizationStructuredData = () => (
  <StructuredData
    type="Organization"
    data={{
      "@type": "Organization",
      "name": "LojaOnline.mz",
      "url": "https://lojaonline.mz",
      "logo": "https://lojaonline.mz/logo.png",
      "description": "A melhor loja online de Moçambique com produtos de qualidade e entrega rápida em Maputo, Matola e Beira.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MZ",
        "addressLocality": "Maputo",
        "addressRegion": "Maputo"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+258123456789",
        "contactType": "customer service",
        "availableLanguage": ["pt", "en"]
      },
      "sameAs": [
        "https://wa.me/258123456789"
      ]
    }}
  />
);

// Dados estruturados para produtos
export const ProductStructuredData = ({ product }) => (
  <StructuredData
    type="Product"
    data={{
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": product.image,
      "brand": {
        "@type": "Brand",
        "name": "LojaOnline.mz"
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "MZN",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "LojaOnline.mz"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating,
        "reviewCount": product.reviews
      }
    }}
  />
);

// Dados estruturados para loja online
export const WebSiteStructuredData = () => (
  <StructuredData
    type="WebSite"
    data={{
      "@type": "WebSite",
      "name": "LojaOnline.mz",
      "url": "https://lojaonline.mz",
      "description": "Loja online moderna em Moçambique com produtos de qualidade. Entrega grátis em Maputo, Matola e Beira.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://lojaonline.mz/produtos?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }}
  />
);

// Dados estruturados para breadcrumbs
export const BreadcrumbStructuredData = ({ items }) => (
  <StructuredData
    type="BreadcrumbList"
    data={{
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }}
  />
);

// Dados estruturados para avaliações
export const ReviewStructuredData = ({ reviews }) => (
  <StructuredData
    type="Review"
    data={{
      "@type": "Review",
      "reviewBody": reviews.text,
      "author": {
        "@type": "Person",
        "name": reviews.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": reviews.rating,
        "bestRating": "5"
      }
    }}
  />
);

export default StructuredData;

