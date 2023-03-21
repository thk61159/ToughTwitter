import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page
import UserLoginPage from "./Pages/UserLoginPage";
import RegisterPage from "./Pages/RegisterPage";
import AdminLoginPage from "./Pages/AdminLoginPage";
const basename = process.env.PUBLIC_URL;
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/">
            <Route path="login" element={<UserLoginPage />}></Route>
            <Route path="admin" element={<AdminLoginPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
