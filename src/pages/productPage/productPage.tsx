import Counter from '../../components/counterComponent/counter';
import Header from '../../components/headerComponent/header';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

const ProductPage = () => {
  const productData = useSelector((state: RootState) => state.productData.productData);

  return (
    <>
      <Header />
      <div className="product-card">
        <div className="breadcrumbs">
          <div className="crumb">Главная</div>
          <div className="crumb">{productData.category}</div>
          <div className="crumb">{productData.title}</div>
        </div>
        <div className="content">
          <div className="image">
            <img src={productData.imgBig} alt="image" />
          </div>
          <div className="description">
            <h1 className="title">{productData.title}</h1>
            <div className="description-block">
              <h4 className="block-title">Состав:</h4>
              {productData.ingridients.map((ingridient) => (
                <div className="ingridient" key={ingridient}>
                  - {ingridient}
                </div>
              ))}
            </div>
            <div className="description-block">
              <h4 className="block-title">Пищевая ценность на 100 г:</h4>
              {productData.nutritionalValue.map((item, index) => (
                <div className="nutritional-item" key={item.text}>
                  <div className="item-title">{item.text}</div>
                  <div className="separator"></div>
                  <div className="item-value">
                    {item.value} {index === 0 ? 'ккал' : 'г'}
                  </div>
                </div>
              ))}
            </div>

            <div className="description-block">
              <h4 className="block-title">Срок годности и условия хранения:</h4>
              <div className="period-meals">24 часа при t° от +2°C до +6°C</div>
            </div>

            <div className="order-block">
              <div className="wrapper">
                <div className="price">
                  <div className="weight">{productData.weight} г</div>
                  <h3 className="price-value">{productData.price} ₽</h3>
                </div>
                <Counter />
              </div>
              <button className="basket-btn">В корзину</button>
            </div>

            <div className="product-presentation">
              <h3 className="presentation-title">{productData.title}</h3>
              <div className="presentation-text">{productData.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
