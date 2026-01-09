import React from 'react';
import { createRoot } from 'react-dom/client';
import LegendServer from "./LegendServer";

const rootElement = document.getElementById('app');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<LegendServer />);
}
