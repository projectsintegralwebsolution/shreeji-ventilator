/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config) => {
    return config;
  },
  async redirects() {
    return [
      // Base root & home variations
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/home.php', destination: '/', permanent: true },
      { source: '/home.html', destination: '/', permanent: true },

      // About Us variations
      { source: '/aboutus', destination: '/about', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/Aboutus', destination: '/about', permanent: true },
      { source: '/About-Us', destination: '/about', permanent: true },
      { source: '/About', destination: '/about', permanent: true },
      { source: '/aboutus.php', destination: '/about', permanent: true },
      { source: '/about.php', destination: '/about', permanent: true },
      { source: '/aboutus.html', destination: '/about', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },

      // Products variations & casing
      { source: '/Products', destination: '/products', permanent: true },
      { source: '/products.php', destination: '/products', permanent: true },
      { source: '/products.html', destination: '/products', permanent: true },
      { source: '/product.php', destination: '/products', permanent: true },
      { source: '/product.html', destination: '/products', permanent: true },

      // Contact variations
      { source: '/contactus', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/Contact', destination: '/contact', permanent: true },
      { source: '/Contact-Us', destination: '/contact', permanent: true },
      { source: '/contactus.php', destination: '/contact', permanent: true },
      { source: '/contact.php', destination: '/contact', permanent: true },
      { source: '/contactus.html', destination: '/contact', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },

      // Certificates & Events & Applications & Privacy & Calculator & Blog
      { source: '/certificate.php', destination: '/certificate', permanent: true },
      { source: '/certificates.php', destination: '/certificate', permanent: true },
      { source: '/certificates', destination: '/certificate', permanent: true },
      { source: '/certificate.html', destination: '/certificate', permanent: true },
      { source: '/events.php', destination: '/events', permanent: true },
      { source: '/events.html', destination: '/events', permanent: true },
      { source: '/applications.php', destination: '/applications', permanent: true },
      { source: '/application.php', destination: '/applications', permanent: true },
      { source: '/applications.html', destination: '/applications', permanent: true },
      { source: '/calculator.php', destination: '/calculator', permanent: true },
      { source: '/calculator.html', destination: '/calculator', permanent: true },
      { source: '/blog.php', destination: '/blog', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/privacy-policy.php', destination: '/privacy-policy', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
      { source: '/privacy.php', destination: '/privacy-policy', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/client.php', destination: '/', permanent: true },
      { source: '/clients.php', destination: '/', permanent: true },
      { source: '/clients', destination: '/', permanent: true },

      // PDF and Catalog legacy assets
      { source: '/pdf/shreejibrochure.pdf', destination: '/products', permanent: true },
      { source: '/pdf/shreeji-catlog.pdf', destination: '/products', permanent: true },
      { source: '/pdf/shreejibrochure', destination: '/products', permanent: true },
      { source: '/pdf/shreeji-catlog', destination: '/products', permanent: true },
      { source: '/brochure.pdf', destination: '/products', permanent: true },
      { source: '/catlog.pdf', destination: '/products', permanent: true },
      { source: '/catalog.pdf', destination: '/products', permanent: true },
      { source: '/shreejibrochure.pdf', destination: '/products', permanent: true },
      { source: '/shreeji-catlog.pdf', destination: '/products', permanent: true },

      // Product .php and .html legacy 301 redirects to clean SEO routes
      { source: '/heavy-duty-industrial-exhaust-fan.php', destination: '/heavy-duty-industrial-exhaust-fan', permanent: true },
      { source: '/heavy-duty-industrial-exhaust-fan.html', destination: '/heavy-duty-industrial-exhaust-fan', permanent: true },
      { source: '/roof-air-ventilator.php', destination: '/roof-air-ventilator', permanent: true },
      { source: '/roof-air-ventilator.html', destination: '/roof-air-ventilator', permanent: true },
      { source: '/turbo-air-ventilator.php', destination: '/turbo-air-ventilator', permanent: true },
      { source: '/turbo-air-ventilator.html', destination: '/turbo-air-ventilator', permanent: true },
      { source: '/wind-driven-ventilator.php', destination: '/wind-driven-ventilator', permanent: true },
      { source: '/wind-driven-ventilator.html', destination: '/wind-driven-ventilator', permanent: true },
      { source: '/wind-operate-ventilator.php', destination: '/wind-operate-ventilator', permanent: true },
      { source: '/wind-operate-ventilator.html', destination: '/wind-operate-ventilator', permanent: true },
      { source: '/natural-air-ventilator.php', destination: '/natural-air-ventilator', permanent: true },
      { source: '/natural-air-ventilator.html', destination: '/natural-air-ventilator', permanent: true },
      { source: '/roof-ventilator.php', destination: '/roof-ventilator', permanent: true },
      { source: '/roof-ventilator.html', destination: '/roof-ventilator', permanent: true },
      { source: '/turbine-ventilator.php', destination: '/turbine-ventilator', permanent: true },
      { source: '/turbine-ventilator.html', destination: '/turbine-ventilator', permanent: true },
      { source: '/wind-turbine-ventilator.php', destination: '/wind-turbine-ventilator', permanent: true },
      { source: '/wind-turbine-ventilator.html', destination: '/wind-turbine-ventilator', permanent: true },
      { source: '/powerless-ventilator.php', destination: '/powerless-ventilator', permanent: true },
      { source: '/powerless-ventilator.html', destination: '/powerless-ventilator', permanent: true },
      { source: '/eco-ventilator.php', destination: '/eco-ventilator', permanent: true },
      { source: '/eco-ventilator.html', destination: '/eco-ventilator', permanent: true },
      { source: '/roof-extractor.php', destination: '/roof-extractor', permanent: true },
      { source: '/roof-extractor.html', destination: '/roof-extractor', permanent: true },
      { source: '/turbo-ventilator.php', destination: '/turbo-ventilator', permanent: true },
      { source: '/turbo-ventilator.html', destination: '/turbo-ventilator', permanent: true },
      { source: '/wind-ventilator.php', destination: '/wind-ventilator', permanent: true },
      { source: '/wind-ventilator.html', destination: '/wind-ventilator', permanent: true },
      { source: '/motorized-turbo-ventilator.php', destination: '/motorized-turbo-ventilator', permanent: true },
      { source: '/motorized-turbo-ventilator.html', destination: '/motorized-turbo-ventilator', permanent: true },
      { source: '/power-ventilator.php', destination: '/power-ventilator', permanent: true },
      { source: '/power-ventilator.html', destination: '/power-ventilator', permanent: true },
      { source: '/force-ventilator.php', destination: '/force-ventilator', permanent: true },
      { source: '/force-ventilator.html', destination: '/force-ventilator', permanent: true },
      { source: '/motorised-ventilator.php', destination: '/motorised-ventilator', permanent: true },
      { source: '/motorised-ventilator.html', destination: '/motorised-ventilator', permanent: true },
      { source: '/motorized-ventilator.php', destination: '/motorised-ventilator', permanent: true },
      { source: '/motorized-ventilator', destination: '/motorised-ventilator', permanent: true },
      { source: '/motorised-roof-ventilator.php', destination: '/motorised-roof-ventilator', permanent: true },
      { source: '/motorised-roof-ventilator.html', destination: '/motorised-roof-ventilator', permanent: true },
      { source: '/motorized-roof-ventilator.php', destination: '/motorised-roof-ventilator', permanent: true },
      { source: '/motorized-roof-ventilator', destination: '/motorised-roof-ventilator', permanent: true },
      { source: '/roof-extractor-fan.php', destination: '/roof-extractor-fan', permanent: true },
      { source: '/roof-extractor-fan.html', destination: '/roof-extractor-fan', permanent: true },
      { source: '/motorized-roof-air-ventilator.php', destination: '/motorized-roof-air-ventilator', permanent: true },
      { source: '/motorized-roof-air-ventilator.html', destination: '/motorized-roof-air-ventilator', permanent: true },
      { source: '/hvls-fan.php', destination: '/hvls-fan', permanent: true },
      { source: '/hvls-fan.html', destination: '/hvls-fan', permanent: true },

      // Legacy products prefix direct 301 mappings
      { source: '/products/:slug', destination: '/:slug', permanent: true }
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
