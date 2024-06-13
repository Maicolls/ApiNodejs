import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListaComponentes from "../Paginas/ListaComponentes";
import Nueva from "../Paginas/Nueva";
import NotFound from '../Paginas/NotFound'

const App=()=>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/Lista" Component={ListaComponentes} />
            <Route exact path="/Lista/Nueva" Component={Nueva} />
            <Route  path="*" Component={NotFound} />
        </Routes>
    </BrowserRouter>
)

export default App