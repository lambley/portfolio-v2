# Portfolio - v2

Updated and simplified personal portfolio website. The old one was an initial attempt with Rails and React - this updated version takes the same content and functionality and uses NextJS only.

## Development

If you want to run this locally, you can do so by running the following commands:

```bash
npm install
npm run dev
```

Local development will be available at `http://localhost:3000`.

## Deployment

This project is deployed to Vercel. Any changes pushed to the `main` branch will be automatically deployed.

## About the app

The site is a mix of client and server side rendering:
- The main page is statically generated
- The blog posts are server side rendered
- The projects page is client side rendered
