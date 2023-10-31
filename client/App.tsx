import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import { REDIRECT_URI } from "../constatns";
import flow from "lodash.flow";

const App: React.FC = () => {
  useEffect(() => {
    function cube(number: number) {
      return number * number * number;
    }

    function add(number1: number, number2: number) {
      return number1 + number2;
    }

    const multiplycube = flow([add, cube]);

    console.log(multiplycube(2, 3));
  }, []);
  const href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=d914a43386f04ae0b20ac72dd44f89de&redirect_uri=${REDIRECT_URI}`;

  return (
    <>
      <Link to={href}>YANDEX OAUTH</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default App;
