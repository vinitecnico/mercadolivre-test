import React from "react";
import { Content } from "../../components";
import './styles.scss'

const Home = () => {
  return (
    <>
      <Content noBgColor>
        <section className="home-body col-12">
          <h3 className="home-body-title">Utilize a barra de pesquisa para encontrar o melhor produto para o seu bolso.</h3>
        </section>
      </Content>
    </>
  );
};

export default Home;
