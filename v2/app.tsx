import { createRoot } from 'react-dom/client';
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import '@v2/app.css';
import '@v2/i18n';
import Main from '@v2/components/main';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </Router>
);

root.render(<App />);
