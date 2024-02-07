import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <ul className="items">
          <li>
            <h6>Categorias</h6>
          </li>
          <li>Feminino</li>
          <li>Masculino</li>
          <li>Sapatos</li>
          <li>Acessórios</li>
          <li>Novidades</li>
        </ul>
        <ul className="items">
          <li>
            <h6>Links</h6>
          </li>
          <li>FAQ</li>
          <li>Paginas</li>
          <li>Loja</li>
          <li>Comparar</li>
          <li>Cookies</li>
        </ul>
        <ul className="items items-text">
          <li>
            <h6>Sobre nós</h6>
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            nisi a vel est eius ratione incidunt distinctio doloribus,
            recusandae dolorem facilis sequi? Odio veniam iusto reiciendis
            doloremque, rem exercitationem suscipit. Iste ex quia facilis
            praesentium eius cumque. Delectus repellat blanditiis quae dolores
            magnam laborum, iure asperiores necessitatibus fugiat unde totam,
            natus sed quibusdam accusantium obcaecati ut nostrum? Omnis,
            voluptas quam.
          </li>
        </ul>
        <ul className="items items-text">
          <li>
            <h6>Contato</h6>
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            nisi a vel est eius ratione incidunt distinctio doloribus,
            recusandae dolorem facilis sequi? Odio veniam iusto reiciendis
            doloremque, rem exercitationem suscipit. Iste ex quia facilis
            praesentium eius cumque. Delectus repellat blanditiis quae dolores
            magnam laborum, iure asperiores necessitatibus fugiat unde totam,
            natus sed quibusdam accusantium obcaecati ut nostrum? Omnis,
            voluptas quam.
          </li>
        </ul>
      </div>

      <div className="sub-content">
        <div className="copywriter-container">
          <Link className='link logo' to="/">MedTed</Link>
          <span className="copywriter">© Copywright 2024. Todos os direitos resservados</span>
        </div>
        <div className="pay-methods">
          <img src="/public/img/flag-BR.svg" alt="Metodos de pagamentos" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
