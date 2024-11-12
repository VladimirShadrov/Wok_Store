import Counter from '../../components/counterComponent/counter';
import Header from '../../components/headerComponent/header';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import styles from './productPage.module.scss';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const productData = useSelector((state: RootState) => state.productData.productData);

  return (
    <>
      <Header />
      <div className={styles.productCard}>
        <div className={styles.breadcrumbs}>
          <div className={styles.crumb}>
            <Link to={'/'}>Главная</Link>
          </div>
          <div className={styles.crumb}>
            <Link to={'/'}>{productData.category}</Link>
          </div>
          <div className={styles.crumb}>{productData.title}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={productData.imgBig} alt="image" />
          </div>
          <div className={styles.description}>
            <h1 className={styles.title}>{productData.title}</h1>
            <div className={styles.descriptionBlock}>
              <h4 className={styles.blockTitle}>Состав:</h4>
              {productData.ingridients.map((ingridient) => (
                <div className={styles.ingridient} key={ingridient}>
                  - {ingridient}
                </div>
              ))}
            </div>
            <div className={styles.descriptionBlock}>
              <h4 className={styles.blockTitle}>Пищевая ценность на 100 г:</h4>
              {productData.nutritionalValue.map((item, index) => (
                <div className={styles.nutritionalItem} key={item.text}>
                  <div className={styles.itemTitle}>{item.text}</div>
                  <div className={styles.separator}></div>
                  <div className={styles.itemValue}>
                    {item.value} {index === 0 ? 'ккал' : 'г'}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.descriptionBlock}>
              <h4 className={styles.blockTitle}>Срок годности и условия хранения:</h4>
              <div className={styles.periodMeals}>24 часа при t° от +2°C до +6°C</div>
            </div>

            <div className={styles.orderBlock}>
              <div className={styles.wrapper}>
                <div className={styles.price}>
                  <div className={styles.weight}>{productData.weight} г</div>
                  <h3 className={styles.priceValue}>{productData.price} ₽</h3>
                </div>
                <Counter />
              </div>
              <button className={styles.basketBtn}>В корзину</button>
            </div>

            <div className={styles.productPresentation}>
              <h3 className={styles.presentationTitle}>{productData.title}</h3>
              <div className={styles.presentationText}>{productData.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
