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
          <div className="crumb">Фунчозы</div>
          <div className="crumb">Удон с говядиной</div>
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
                  {ingridient}
                </div>
              ))}
            </div>
            <div className="description-block">
              <h4 className="block-title">Пищевая ценность на 100 г:</h4>
              <div className="nutritional-item">
                <div className="item-title">Энерг. ценность</div>
                <div className="separator"></div>
                <div className="item-value">160 ккал</div>
              </div>
              <div className="nutritional-item">
                <div className="item-title">Белки</div>
                <div className="separator"></div>
                <div className="item-value">7 г</div>
              </div>
              <div className="nutritional-item">
                <div className="item-title">Жиры</div>
                <div className="separator"></div>
                <div className="item-value">6 г</div>
              </div>
              <div className="nutritional-item">
                <div className="item-title">Углеводы</div>
                <div className="separator"></div>
                <div className="item-value">18 г</div>
              </div>
            </div>

            <div className="description-block">
              <h4 className="block-title">Срок годности и условия хранения:</h4>
              <div className="period-meals">24 часа при t° от +2°C до +6°C</div>
            </div>

            <div className="order-block">
              <div className="wrapper">
                <div className="price">
                  <div className="weight">320 г</div>
                  <h3 className="price-value">439 ₽</h3>
                </div>
                <Counter />
              </div>
              <button className="basket-btn">В корзину</button>
            </div>

            <div className="product-presentation">
              <h3 className="presentation-title">Удон с говядиной</h3>
              <div className="presentation-text">
                Удон с говядиной представляет собой подлинное произведение искусства, в котором смешано множество оттенков и вкусов. В качестве
                лидирующего тона выступает нежно-желтый, который присущ яичной лапше. Помидоры вносят в палитру блюда красноватые тона, болгарский
                перец – оранжевые оттенки, а соевый соус делает оттенок лапши немного приглушенным по интенсивности.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
