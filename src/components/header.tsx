import BasketBtn from './basketBtn';
import SearchField from './searchField';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    /**
     * Добавить классы для разных страниц:
     * - Карточка товара: product-page
     * - Корзина: basket-page
     */
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="title-wrapper">
        <h1 className="title">Лапша Wok</h1>
        <p className="text">Вкуснейшая лапша, прямо из Китая</p>
      </div>
      <SearchField />
      <BasketBtn />
    </header>
  );
};

export default Header;
