import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from '@v2/constants/routes';
import '@v2/app.css';
import '@v2/i18n';
import Main from '@v2/components/main';
import Footer from '@v2/components/footer';
import useDarkMode from "@v2/hooks/useDarkMode";
import Navbar from '@v2/components/navbar';
// TODO: Asset import
import ImageSrc from '../essentials/assets/kitanglad.JPG';
import PortfolioPage from './components/portfolio';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  const { theme, isFirstTime, toggleTheme } = useDarkMode();


  return (
    <div className={`theme theme--${theme} bg-cover bg-no-repeat bg-center	`} style={{ backgroundImage: `url(${ImageSrc})` }}>
      {/* <img src={ImageSrc} /> */}
      <Router>
        <Navbar isFirstTime={isFirstTime} theme={theme} toggleTheme={toggleTheme} visited={true} />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* TODO: Not working */}
          <Route path={ROUTES.PORTFOLIO} element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

root.render(<App />);
