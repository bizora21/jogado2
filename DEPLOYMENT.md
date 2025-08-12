# 🚀 Guia de Deployment - Loja Rapida MZ

## Opções de Hospedagem Recomendadas

### 1. Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

**Vantagens:**
- Deploy automático via Git
- CDN global
- HTTPS automático
- Domínio personalizado gratuito

### 2. Netlify
```bash
# Build local
npm run build

# Deploy via Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**Vantagens:**
- Integração contínua
- Forms handling
- Edge functions
- Analytics integrado

### 3. GitHub Pages
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar ao package.json
"homepage": "https://[username].github.io/loja-rapida-mz",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### 4. Cloudflare Pages
1. Conectar repositório GitHub
2. Configurar build:
   - **Build command**: `npm run build`
   - **Build output**: `dist`
3. Deploy automático

## Configurações de Produção

### Variáveis de Ambiente
```env
VITE_WHATSAPP_NUMBER=25863181415
VITE_SITE_URL=https://lojarapidamz.com
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Otimizações de Build
```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
}
```

## Domínio Personalizado

### Configuração DNS
```
Type: CNAME
Name: www
Value: [hosting-provider-url]

Type: A
Name: @
Value: [hosting-provider-ip]
```

### SSL/HTTPS
- Todos os provedores recomendados oferecem SSL gratuito
- Configuração automática via Let's Encrypt

## Monitorização

### Google Analytics 4
```html
<!-- Adicionar ao index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Performance Monitoring
- **Core Web Vitals**: Monitorizar via Google Search Console
- **Uptime**: Usar UptimeRobot ou similar
- **Speed**: PageSpeed Insights regular

## SEO e Indexação

### Google Search Console
1. Verificar propriedade do site
2. Submeter sitemap: `https://lojarapidamz.com/sitemap.xml`
3. Monitorizar indexação

### Meta Tags Essenciais
```html
<meta name="description" content="Loja online moderna em Moçambique...">
<meta name="keywords" content="loja online moçambique, produtos domésticos...">
<meta property="og:title" content="Loja Rapida MZ">
<meta property="og:description" content="...">
<meta property="og:image" content="https://lojarapidamz.com/og-image.jpg">
```

## Backup e Segurança

### Backup Automático
- Código: Git repository (GitHub/GitLab)
- Assets: Cloud storage (Cloudinary/AWS S3)
- Configurações: Documentadas neste guia

### Segurança
- **HTTPS**: Obrigatório em produção
- **Headers de Segurança**: CSP, HSTS
- **Validação**: Sanitização de inputs
- **Rate Limiting**: Proteção contra spam

## Manutenção

### Atualizações Regulares
```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar dependências
npm update

# Audit de segurança
npm audit
```

### Monitorização de Performance
- **Lighthouse**: Auditoria mensal
- **GTMetrix**: Teste de velocidade
- **WebPageTest**: Análise detalhada

## Troubleshooting

### Problemas Comuns

**Build falha:**
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install
```

**Imagens não carregam:**
- Verificar paths absolutos vs relativos
- Confirmar assets na pasta `public/`

**WhatsApp não funciona:**
- Verificar formato do número: +25863181415
- Testar encoding da mensagem

## Checklist de Deploy

- [ ] Build local sem erros
- [ ] Testes em diferentes browsers
- [ ] Verificar responsividade mobile
- [ ] Testar integração WhatsApp
- [ ] Configurar domínio personalizado
- [ ] Ativar SSL/HTTPS
- [ ] Configurar Google Analytics
- [ ] Submeter sitemap ao Google
- [ ] Testar performance (Lighthouse)
- [ ] Configurar monitorização uptime

## Suporte Pós-Deploy

### Contactos Técnicos
- **Desenvolvedor**: [email]
- **Hosting**: Suporte do provedor escolhido
- **Domínio**: Registrar do domínio

### Documentação Adicional
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Documentation](https://vercel.com/docs)

---

**Nota**: Este guia assume conhecimento básico de desenvolvimento web. Para suporte adicional, contactar a equipa de desenvolvimento.

