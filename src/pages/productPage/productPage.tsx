import Counter from '../../components/counterComponent/counter';
import Header from '../../components/headerComponent/header';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import styles from './productPage.module.scss';
import { Link, ScrollRestoration } from 'react-router-dom';
import React from 'react';
import { setFilterCategory } from '../../store/slices/filterSlice';
import { setProductCount, setProductList, setProductPageData, setProductsListWithChangedCounters } from '../../store/slices/productSlice';
import { addToCart, updateProductCountAndPrice } from '../../store/slices/cartSlice';

const ProductPage = () => {
  const productData = useSelector((state: RootState) => state.products.productPageData);
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const [totalWeight, setTotalWeight] = React.useState(productData.weight * productData.count);
  const [totalPrice, setTotalPrice] = React.useState(productData.price * productData.count);
  const dispatch = useDispatch();

  const onCounterClick = (count: number) => {
    setTotalWeight(productData.weight * count);
    setTotalPrice(productData.price * count);
    dispatch(setProductCount({ id: productData.id, count: count }));
    dispatch(setProductsListWithChangedCounters());
    dispatch(updateProductCountAndPrice({ id: productData.id, count: count }));
  };

  const onBreadCrumbClick = (category: string) => {
    dispatch(setFilterCategory({ name: category, filterKey: 'category' }));
  };

  const onToCartBtnClick = () => {
    const productIndex = cartProducts.findIndex((product) => product.id === productData.id);

    if (productIndex === -1) {
      dispatch(addToCart(productData));
    } else {
      dispatch(setProductCount({ id: productData.id, count: productData.count + 1 }));
      dispatch(setProductsListWithChangedCounters());
      dispatch(addToCart(productData));
    }
  };

  React.useEffect(() => {
    const productPageId = sessionStorage.getItem('productPageId');
    const productList = sessionStorage.getItem('productList');

    if (productPageId && productList) {
      dispatch(setProductList(JSON.parse(productList)));
      dispatch(setProductPageData(+productPageId));
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (productData) {
      setTotalWeight(productData.weight * productData.count);
      setTotalPrice(productData.price * productData.count);
    }
  }, [productData]);

  return (
    <>
      <ScrollRestoration />
      <Header showSearch={false} />
      <div className={styles.productCard}>
        <div className={styles.breadcrumbs}>
          <div className={styles.crumb} onClick={() => onBreadCrumbClick('Все')}>
            <Link to={'/'}>Главная</Link>
          </div>
          <div className={styles.crumb} onClick={() => onBreadCrumbClick(productData.category)}>
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
                  <div className={styles.weight}>{totalWeight.toLocaleString()} г</div>
                  <h3 className={styles.priceValue}>{totalPrice.toLocaleString()} ₽</h3>
                </div>
                <Counter callback={onCounterClick} initialCount={productData.count} />
              </div>
              <button onClick={onToCartBtnClick} className={styles.basketBtn}>
                В корзину
              </button>
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
