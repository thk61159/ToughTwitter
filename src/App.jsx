import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page
import UserLoginPage from "./Pages/UserLoginPage";
import RegisterPage from "./Pages/RegisterPage";
import AdminLoginPage from "./Pages/AdminLoginPage";
import UserPopularBar from "./Components/UserPopularBar";



const basename = process.env.PUBLIC_URL;
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/">
            {/* 暫時先設定為login，還沒使用useNavigate跳轉 */}
            <Route index element={<UserLoginPage />}></Route>
            <Route path="login" element={<UserLoginPage />}></Route>
            <Route path="admin" element={<AdminLoginPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="test" element={<UserPopularBar />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
