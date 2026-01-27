import { createRoot } from 'react-dom/client';
import { MainPage } from './ui/MainPage.tsx';
import { TogglePage } from './ui/TooglePage.tsx';

createRoot(document.getElementById('root')!).render(<TogglePage />);
