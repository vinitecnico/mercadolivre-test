import React from "react";
import SearchField from '../searchField1'
import logo from "../../assets/Logo_ML.png";
import history from '../../history'
import './styles.scss'

const Header = () => {
  return (
    <header>
      <nav className="col-md-10">
        <img
          className="logo"
          onClick={() => history.push("/")}
          src={logo}
          title="Mercado Livre"
          alt="Mercado Livre"
        />
        <SearchField />
      </nav>
    </header>
  );
};

export default Header;
