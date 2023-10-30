import React, { useCallback, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import useAction from "./hooks/useAction";
import { OauthAPI } from "../api/AuthAPI";
import { REDIRECT_URI } from "../constatns";

const oauthApi = new OauthAPI();

const App: React.FC = () => {
  const { OauthLogin } = useAction();

  const [serviceId, setServiceId] = useState<string>();

  useEffect(() => {
    const foo = async () => {
      const { service_id } = await oauthApi.getServiceId();

      setServiceId(service_id);
    };

    foo();
  }, []);

  const getYandexOauthButton = useCallback(() => {
    // const href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${REDIRECT_URI}`;
    const href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=d914a43386f04ae0b20ac72dd44f89de&redirect_uri=${REDIRECT_URI}`;

    return <Link to={href}>YANDEX OAUTH</Link>;
  }, [serviceId]);
  return (
    <>
      {serviceId && getYandexOauthButton()}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default App;
