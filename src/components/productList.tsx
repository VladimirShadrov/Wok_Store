import products from '../assets/products';
import ProductListItem from './productListItem';

const ProductList = () => {
  return (
    <div className="wok-list">
      {products.map((product) => (
        <ProductListItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
