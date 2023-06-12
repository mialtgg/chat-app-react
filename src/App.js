//import Login from "./pages/Login";
//import Register from "./pages/Register";
import "./style.scss"
import Home from "./pages/Home";
import Chat from "./components/Chat";
import Register from "./pages/Register";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Routes>
      <Route index  element={<Home/>}  />
      <Route path="login"  element={<Login/>}  />
      <Route  path="register"  element={<Register/>}  />
   
 
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
