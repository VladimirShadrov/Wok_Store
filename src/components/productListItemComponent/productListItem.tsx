import { Link } from 'react-router-dom';
import Counter from '../counterComponent/counter';
import styles from './productListItem.module.scss';
import { useDispatch } from 'react-redux';
import { setProductData } from '../../store/slices/productSlice';

type FoodValueType = {
  text: string;
  value: number;
};

type ProductDataType = {
  id: number;
  title: string;
  weight: number;
  price: number;
  imgSmall: string;
  imgBig: string;
  ingridients: string[];
  nutritionalValue: FoodValueType[];
  description: string;
  category: string;
  ratio: number;
};

type ProductType = {
  productData: ProductDataType;
};

const ProductListItem = ({ productData }: ProductType) => {
  const { title, imgSmall, ingridients, weight, price } = productData;
  const dispatchProductData = useDispatch();

  const saveProduct = () => {
    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    dispatchProductData(setProductData());
  };

  return (
    <div className={styles.wokItem}>
      <Link to={`/product`} onClick={saveProduct}>
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
