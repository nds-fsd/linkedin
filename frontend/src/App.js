//import logo from './favicon.ico';
import './App.css';
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/error";
import AdminPage from "./pages/admin";
import HomePage from "./pages/home";
import Register from "./pages/register/register"
import { PrivateRoutes } from "./routes/privateRoutes/privateRoute"


import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="main-router">

        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>} />
          <Route path="/register" element={<Register></Register>} />
          <Route element={<PrivateRoutes/>}>
              <Route path="home" element={<HomePage></HomePage>} />
              <Route path="admin" element={<AdminPage></AdminPage>} /> 
          </Route>
          


          <Route path="*" element={<ErrorPage></ErrorPage>} />

        </Routes>

      </div>
    </div>
  );
}

export default App;
