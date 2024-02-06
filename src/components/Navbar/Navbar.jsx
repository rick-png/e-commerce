import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="default">
      <div className="container">
        <ul className="left">
          <li className='item-select'>
            <img src="/public/img/flag-BR.svg" alt="Bandeira do Brasil" />
            <KeyboardArrowDownIcon />
          </li>
          <li className='item-select'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </li>
          <li>
            <Link className='link' to="/Categorias/1">Feminino</Link>
          </li>
          <li>
            <Link className='link' to="/Categorias/2">Masculino</Link>
          </li>
          <li>
            <Link className='link' to="/Categorias/3">Kids</Link>
          </li>
        </ul>
        <div className="center">
          <Link className='link' to="/">MedTed</Link>
        </div>
        <ul className="right">
          <li>
            <Link className='link' to="/">Home</Link>
          </li>
          <li>
            <Link className='link' to="/">Sobre nós</Link>
          </li>
          <li>
            <Link className='link' to="/">Contato</Link>
          </li>
          <li>
            <Link className='link' to="/">Lojas</Link>
          </li>

          <li className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
