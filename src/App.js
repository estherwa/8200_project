import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Table from "./components/Table";

import Menu from "./components/Menu";
import Form from "./components/form";

import NotFound from "./components/NotFound";
function App() {
  return (

      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Menu/>}>
                  <Route index element={<Table/>}/>
                  <Route path="form" element={<Form/>}/>

                  <Route path={"*"} element={<NotFound/>}/>

              <Route path={"*"} element={<NotFound/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
