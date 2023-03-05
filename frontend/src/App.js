//import logo from './favicon.ico';
import "./App.css";
import ProfileUserPage from "./pages/profileUser";
import LoginPage from "./pages/LoginPage";
import UnderConstructionPage from "./pages/underConstruction/underConstruction";
import ErrorPage from "./pages/error";
import AdminPage from "./pages/admin";
import HomePage from "./pages/home";
import Register from "./pages/register/register";
import FollowersPage from "./pages/Followers/followersPage";
import JobsPage from "./pages/Jobs/JobsPage";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutesAdmin } from "./routes/privateRoutes/privateRoute";

function App() {
  return (
    <div>
      <div className="main-router">
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>} />
          <Route path="/register" element={<Register></Register>} />
          {/* <Route path="/home" element={<HomePage></HomePage>} /> */}

          <Route
            path="home"
            element={
              <PrivateRoutesAdmin>
                <HomePage />
              </PrivateRoutesAdmin>
            }
          />
          <Route
            path="/profile/:idUser"
            element={
              <PrivateRoutesAdmin>
                <ProfileUserPage />
              </PrivateRoutesAdmin>
            }
          />
          <Route
            path="/follows/:idUser"
            element={
              <PrivateRoutesAdmin>
                <FollowersPage />
              </PrivateRoutesAdmin>
            }
          />
          <Route
            path="/jobs/:idUser"
            element={
              <PrivateRoutesAdmin>
                <JobsPage />
              </PrivateRoutesAdmin>
            }
          />

          <Route
            path="admin"
            element={
              <PrivateRoutesAdmin>
                <AdminPage />
              </PrivateRoutesAdmin>
            }
          />
          <Route path="/underConstruction" element={<UnderConstructionPage></UnderConstructionPage>} />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
