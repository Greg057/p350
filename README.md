# john's Portfolio

Software Engineer portfolio built with Next.js and deployed on GitHub Pages.

## 🚀 Built With

- **Next.js 14** - React framework with App Router
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and better development experience  
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **GitHub Actions** - Automated deployment to GitHub Pages
- **[Koderra.io](https://koderra.io)** - Portfolio builder platform

## 🔧 Development

This project is automatically built and deployed using GitHub Actions. Any push to the main branch will trigger a new deployment.

### Local Development

```bash
npm install
npm run dev
```

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── app/
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Portfolio page with embedded data
│   └── globals.css              # Global styles
├── components/ui/               # UI components (shadcn/ui)
├── lib/utils.ts                 # Utility functions
└── utils/devicon-mapping.ts     # Technology icon mapping
```

## 🌟 Features

- **Static Generation** - Pre-built at deployment for optimal performance
- **Responsive Design** - Mobile-first design that works on all devices
- **Dark Mode** - Built-in dark mode support
- **SEO Optimized** - Meta tags and structured data
- **Fast Loading** - Optimized assets and lazy loading

## 📧 Contact

Feel free to reach out if you have any questions or would like to collaborate!

---

*Portfolio built with Next.js and deployed on GitHub Pages*