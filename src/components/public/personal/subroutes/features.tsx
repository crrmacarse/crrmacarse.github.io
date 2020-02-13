import React from 'react';

const GithubPage = () => (
  <div>
    <div className="title">
      <h1 className="text-5xl">Project Features</h1>
      <a href="https://github.com/crrmacarse/crrmacarse.github.io/blob/source/FEATURES.MD">Docs version</a>
    </div>
    <div className="content">
      <ul>
        <li>Written in Typescript ♥</li>
        <li>Composed from scratch(https://github.com/crrmacarse/crrmacarse.github.io/commits/source?after=ef116c03b1a74113d2185ac22a4bdb293e5ac2b8+69)</li>
        <li>200kb bundle!</li>
        <li>less than 1s load time!</li>
        <li>Controlled dependencies</li>
        <li>Optimized build with webpack loaders and plugins</li>
        <li>
          CI/CD Pipelines
          <span role="img" aria-label="coolshit">👌</span>
        </li>
        <li>Integrated with Google Analytics and Google Search Console</li>
        <li>Localization support for tagalog and english(Custom writtej locales)</li>
        <li>Dark mode!!!!!!</li>
        <li>Frontend testing powered by Jest and Enzyme(Includes snapshot testing)</li>
        <li>Database powered by Firebase</li>
        <li>Project included with its own Content Management System</li>
        <li>Linted code(Airbnb code guidelines). Thanks to ESLint!</li>
        <li>Bundle splitting by chunks</li>
        <li>Code splitting with React lazy</li>
        <li>CSS Optimization with PostCSS(removes unwanted css in production build)</li>
        <li>Gzip bundler for production</li>
        <li>Asset optimizer</li>
        <li>
          Offline mode powered by Google&apos;s workbox webpack plugin
          and CRA&apos;s service worker!
        </li>
        <li>SEO optimized</li>
        <li>Added dynamic sitemap builder on production build</li>
        <li>Everything is in React hooks!</li>
        <li>
          Configured TailwindCSS to only import pseudo class names that&apos;ll
          be used which in turns bring down the bundle size!
        </li>
        <li>Optimized Fontawesome which will only included imported icons to the build!</li>
        <li>Beautifully structured codebase with convention in mind</li>
        <li>Lazy loading with React Suspense</li>
        <li>Cross-platform responsiveness!</li>
        <li>Meta-toggling thanks to react-helmet</li>
        <li>Error handling with React&apos;s Error Boundary</li>
        <li>Animation provided by react-spring</li>
      </ul>
    </div>
  </div>
);

export default GithubPage;
