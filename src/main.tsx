import { createRoot } from 'react-dom/client';
import { MainPage } from './ui/MainPage.tsx';
import { Counter, CounterPage } from './ui/CounterPage.tsx';

createRoot(document.getElementById('root')!).render(<CounterPage />);
