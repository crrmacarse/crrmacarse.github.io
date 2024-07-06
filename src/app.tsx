import { createRoot } from 'react-dom/client';
import "./app.css"

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => <h1>New Portfolio Website Coming soon!</h1>;

root.render(<App />);
