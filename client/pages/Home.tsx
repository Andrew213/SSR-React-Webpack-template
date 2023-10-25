import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const HomePage: React.FC = () => {
  const state = useTypedSelector((state) => state.Login);

  useEffect(() => {
    console.log(`state `, state);
    // GetLogin({ login: "admin12345", password: "Andrew123" });
  }, []);

  return (
    <>
      <Link to="/profile">Profile</Link>
      <h1>Home page</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        modi expedita commodi quasi natus officia accusamus? Quaerat ullam
        delectus dolorem quod, molestias consequuntur quia, aperiam expedita,
        facilis officiis ex eos. Rerum eos amet, deleniti nisi eligendi vel
        consectetur numquam debitis saepe illo hic repellat ipsum, maxime
        voluptates laboriosam. Nobis amet modi, consequatur iusto rerum veniam
        eaque deleniti sit doloribus error. Tempora, itaque esse odit, molestiae
        fugit tenetur commodi quam provident quod animi quisquam accusamus harum
        at ex, blanditiis ullam. Ducimus dolorum quis quo quos soluta,
        asperiores eveniet mollitia expedita. Possimus? Laborum explicabo fugit
        eaque earum voluptatem laudantium repudiandae ea consequuntur libero
        nobis expedita ab sequi sint quam fugiat ducimus cumque impedit culpa
        soluta, molestias debitis possimus odio. Aut, dolorum fugit! Explicabo,
        ipsa aspernatur atque dolor est sit. Atque, quas nihil natus laboriosam
        earum hic velit cum maiores odio, autem animi omnis incidunt,
        consectetur totam non consequatur necessitatibus commodi laudantium
        temporibus.
      </span>
    </>
  );
};

export default HomePage;
