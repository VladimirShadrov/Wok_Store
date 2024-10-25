import { Link } from 'react-router-dom';
import Counter from './counter';

type ProductType = {
  id: number;
  title: string;
  imgSmall: string;
  ingridients: string[];
  weight: number;
  price: number;
};

const ProductListItem = ({ id, title, imgSmall, ingridients, weight, price }: ProductType) => {
  return (
    <div className="wok-item">
      <Link to={`/product`}>
        <div className="link-container">
          <div className="image">
            <img src={imgSmall} alt="image" />
            <div className="ingridients">{ingridients.map((ingridient: string) => ingridient).join(', ')}</div>
          </div>
          <h4 className="title">{title}</h4>
        </div>
      </Link>
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
