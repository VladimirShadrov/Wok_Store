import Counter from './counter';

type ProductType = {
  title: string;
  imgSmall: string;
  ingridients: string[];
  weight: number;
  price: number;
};

const ProductListItem = ({ title, imgSmall, ingridients, weight, price }: ProductType) => {
  return (
    <div className="wok-item">
      <div className="link-container">
        <div className="image">
          <img src={imgSmall} alt="image" />
          <div className="ingridients">
            {/* масло растительное, грудка куриная, морковь, лук репчатый, перец болгарский, кабачки, соус "Чесночный", лапша пшеничная */}
            {ingridients.map((ingridient: string) => ingridient)}
          </div>
        </div>
        <h4 className="title">{title}</h4>
      </div>
      <div className="price-wrapper">
        <Counter />
        <div className="price">
          <div className="weight">{weight} г</div>
          <div className="price-value">{price} ₽</div>
        </div>
      </div>
      <button className="to-cart-btn">в корзину</button>
    </div>
  );
};

export default ProductListItem;
