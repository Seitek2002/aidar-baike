import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { OptionsContext } from "../../App";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header/Header";
import "../../scss/base.scss";
import "../../scss/form.scss";
import "../../scss/table.scss";
import "../../scss/home.scss";
import "../../scss/app.scss";
import "../../scss/header.scss";
import "../../scss/typography.scss";
import "../../scss/partner.scss";
import "../../scss/portfolio.scss";
import "../../scss/subscribe.scss";
import "../../scss/trade.scss";
import "../../scss/market.scss";
import "../../css/normalize.css";
import "../../css/style.css";
import axios from "axios";
import api from "api";
import { TokenProvider } from "../../layouts/AuthLayout/utils/token";

export const ThemeContext = createContext("dark");

const MainLayout = () => {
  const params = useParams("/:lang");
  const [paramsState, setParamsState] = useState(params.lang ? params.lang : "/en");
  const [check, setCheck] = useState(true);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (check) {
      api.get("/api/v1/authorized").then((res) => {
        if (res.data.authorized == false) {
          api
            .post("/api/v1/refresh/token", {
              refresh_token: TokenProvider.getRefreshToken(),
            })
            .then((res) => {
              TokenProvider.setAccessToken(res.data.access_token);
              TokenProvider.setRefreshToken(res.data.refresh_token);
            });
        }
      });
    }
  }, [check, navigate, params.lang]);

  useEffect(() => {
    if (!params.lang) {
      navigate(paramsState);
    }
    i18n.changeLanguage(params.lang);
  }, [i18n, params.lang]);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`main-layout-${theme}`}>
        <Header theme={theme} onThemeToggle={handleThemeToggle} />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default MainLayout;
