import BasketBtn from './basketBtn';
import SearchField from './searchField';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/src/assets/images/logo.svg" alt="logo" />
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
