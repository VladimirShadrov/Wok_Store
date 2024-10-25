import { Link } from 'react-router-dom';
import Counter from '../counter/counter';
import styles from './productListItem.module.scss';

type ProductType = {
  id: number;
  title: string;
  imgSmall: string;
  ingridients: string[];
  weight: number;
  price: number;
};

const ProductListItem = ({ title, imgSmall, ingridients, weight, price }: ProductType) => {
  return (
    <div className={styles.wokItem}>
      <Link to={`/product`}>
        <div className={styles.linkContainer}>
          <div className={styles.image}>
            <img src={imgSmall} alt="image" />
            <div className={styles.ingridients}>{ingridients.map((ingridient: string) => ingridient).join(', ')}</div>
          </div>
          <h4 className={styles.title}>{title}</h4>
        </div>
      </Link>
      <div className={styles.priceWrapper}>
        <Counter />
        <div className={styles.price}>
          <div className={styles.weight}>{weight} г</div>
          <div className={styles.priceValue}>{price} ₽</div>
        </div>
      </div>
      <button className={styles.toCartBtn}>в корзину</button>
    </div>
  );
};

export default ProductListItem;
