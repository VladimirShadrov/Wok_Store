const ProductListItem = () => {
  return (
    <div className="wok-item">
      <div className="link-container">
        <div className="image">
          <img src="https://static.pizzasushiwok.ru/images/menu_new/517-300.jpg" alt="image" />
          <div className="ingridients">
            масло растительное, грудка куриная, морковь, лук репчатый, перец болгарский, кабачки, соус "Чесночный", лапша пшеничная
          </div>
        </div>
        <h4 className="title">Удон с курицей</h4>
      </div>
      <div className="price-wrapper">
        <div className="counter">
          <div className="dec-btn">-</div>
          <div className="count">1</div>
          <div className="inc-btn">+</div>
        </div>
        <div className="price">
          <div className="weight">320 г</div>
          <div className="price-value">419 ₽</div>
        </div>
      </div>
      <button className="to-cart-btn">в корзину</button>
    </div>
  );
};

export default ProductListItem;
