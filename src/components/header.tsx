import BasketBtn from './basketBtn';
import SearchField from './searchField';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    /**
     * Добавить классы для разных страниц:
     * - Карточка товара: product-page
     * - Корзина: basket-page
     */
    <header className="header">
      <Link to={'/'}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="title-wrapper">
        <h1 className="title">Лапша Wok</h1>
        <p className="text">Вкуснейшая лапша, прямо из Китая</p>
      </div>
      <SearchField />
      <Link to={'/basket'}>
        <BasketBtn />
      </Link>
    </header>
  );
};

export default Header;
