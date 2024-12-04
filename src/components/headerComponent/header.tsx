import BasketBtn from '../headerBasketBtnComponent/basketBtn';
import SearchField from '../headerSearchFieldComponent/searchField';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

type HeaderPropsType = {
  showSearch?: boolean;
  showBasketBtn?: boolean;
};

const Header = ({ showSearch = true, showBasketBtn = true }: HeaderPropsType) => {
  return (
    /**
     * Добавить классы для разных страниц:
     * - Карточка товара: product-page
     * - Корзина: basket-page
     */
    <header className={styles.header}>
      <Link to={'/'}>
        <div className={styles.logo}>
          <img src={logo} alt={styles.logo} />
        </div>
      </Link>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Лапша Wok</h1>
        <p className={styles.text}>Вкуснейшая лапша, прямо из Китая</p>
      </div>
      {showSearch && <SearchField />}
      {showBasketBtn && (
        // <Link to={'/basket'}>
        <BasketBtn />
        // </Link>
      )}
    </header>
  );
};

export default Header;
