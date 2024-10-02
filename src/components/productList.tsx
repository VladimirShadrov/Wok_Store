import Counter from './counter';

const ProductList = () => {
  return (
    <div className="wok-list">
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
          <Counter />
          <div className="price">
            <div className="weight">320 г</div>
            <div className="price-value">419 ₽</div>
          </div>
        </div>
        <button className="to-cart-btn">в корзину</button>
      </div>
      <div className="wok-item">
        <div className="link-container">
          <div className="image">
            <img src="https://static.pizzasushiwok.ru/images/menu_new/550-300.jpg" alt="image" />
            <div className="ingridients">
              масло растительное, грудка куриная, морковь, лук репчатый, перец болгарский, рис, соус "Чесночный", кунжут
            </div>
          </div>
          <h4 className="title">Тяхан с курицей</h4>
        </div>
        <div className="price-wrapper">
          <Counter />
          <div className="price">
            <div className="weight">300 г</div>
            <div className="price-value">339 ₽</div>
          </div>
        </div>
        <button className="to-cart-btn">в корзину</button>
      </div>
      <div className="wok-item">
        <div className="link-container">
          <div className="image">
            <img src="https://static.pizzasushiwok.ru/images/menu_new/518-300.jpg" alt="image" />
            <div className="ingridients">
              масло растительное, говядина, морковь, лук репчатый, перец болгарский, кабачки, соус "Чесночный", лапша пшеничная
            </div>
          </div>
          <h4 className="title">Удон с говядиной</h4>
        </div>
        <div className="price-wrapper">
          <Counter />
          <div className="price">
            <div className="weight">320 г</div>
            <div className="price-value">439 ₽</div>
          </div>
        </div>
        <button className="to-cart-btn">в корзину</button>
      </div>
      <div className="wok-item">
        <div className="link-container">
          <div className="image">
            <img src="https://static.pizzasushiwok.ru/images/menu_new/522-300.jpg" alt="image" />
            <div className="ingridients">
              масло растительное, грудка куриная, морковь, лук репчатый, перец болгарский, кабачки, соус "Чесночный", лапша яичная
            </div>
          </div>
          <h4 className="title">Сомен с курицей</h4>
        </div>
        <div className="price-wrapper">
          <Counter />
          <div className="price">
            <div className="weight">320 г</div>
            <div className="price-value">419 ₽</div>
          </div>
        </div>
        <button className="to-cart-btn">в корзину</button>
      </div>
      <div className="wok-item">
        <div className="link-container">
          <div className="image">
            <img src="https://static.pizzasushiwok.ru/images/menu_new/602-300.jpg" alt="image" />
            <div className="ingridients">
              масло растительное, грудка куриная, морковь, лук репчатый, перец болгарский, кабачки, соус "Чесночный", лапша стеклянная
            </div>
          </div>
          <h4 className="title">Фунчоза с курицей</h4>
        </div>
        <div className="price-wrapper">
          <Counter />
          <div className="price">
            <div className="weight">320 г</div>
            <div className="price-value">419 ₽</div>
          </div>
        </div>

        <button className="to-cart-btn">в корзину</button>
      </div>
    </div>
  );
};

export default ProductList;
