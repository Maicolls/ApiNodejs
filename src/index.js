import React from "react";

import 'bootstrap/dist/css/bootstrap.css'
import App from './Componentes/App'
import { createRoot } from "react-dom/client";

const contenedor=document.getElementById('root');
const root=createRoot(contenedor)
root.render(<App/>)
