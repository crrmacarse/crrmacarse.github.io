import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as PAGE_ROUTES from '@v2/constants/routes';
import '@v2/app.css';
import '@v2/firebase';
// TODO: Not working
// import '@v2/scss/index.scss'
import '@v2/i18n';
import useDarkMode from "@v2/hooks/useDarkMode";
import Navbar from '@v2/components/navbar';
import Footer from '@v2/components/footer';
import HomePage from '@v2/components/home';
import PortfolioPage from '@v2/components/portfolio';
import ResumePage from '@v2/components/resume';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  const { theme, isFirstTime, toggleTheme } = useDarkMode();

  return (
    <div className={`theme theme--${theme}`}>
      <BrowserRouter>
      <Navbar isFirstTime={isFirstTime} theme={theme} toggleTheme={toggleTheme} visited={true} />
        <Routes>
          <Route path={PAGE_ROUTES.HOME} element={<HomePage />} />
          <Route path={PAGE_ROUTES.PORTFOLIO} element={<PortfolioPage />} />
          <Route path={PAGE_ROUTES.RESUME} element={<ResumePage />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

root.render(<App />);
