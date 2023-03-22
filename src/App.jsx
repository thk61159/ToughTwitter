import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page
import UserLoginPage from "./Pages/UserLoginPage";
import RegisterPage from "./Pages/RegisterPage";
import AdminLoginPage from "./Pages/AdminLoginPage";
import SettingPage from "./Pages/SettingPage";
import LayoutUser from "./Components/LayoutUser";
import TweetInput from "./Components/TweetInput";
import HomePage from "./Pages/HomePage";

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
            <Route path="setting" element={<SettingPage />}></Route>
            <Route path="tweet/:id" element={<LayoutUser />}>
              <Route index element={<HomePage />}></Route>
            </Route>
            <Route path="test" element={<HomePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
