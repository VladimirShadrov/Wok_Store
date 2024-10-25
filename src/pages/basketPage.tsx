import { Link } from 'react-router-dom';
import Counter from '../components/counter/counter';
import Header from '../components/headerComponent/header';

const BasketPage = () => {
  return (
    <>
      <Header />
      <div className="basket-content">
        <div className="full" style={{ display: 'none' }}>
          <div className="head">
            <div className="title">
              <div className="basket-icon">
                <img src="src/assets/images/basket-black.svg" alt="image" />
                <h2 className="title">Корзина</h2>
              </div>
            </div>
            <button className="clean-basket-btn">
              <img className="trash-icon" src="src\assets\images\trash.svg" alt="image" />
              <span className="clean-btn-text">Очистить корзину</span>
            </button>
          </div>

          <div className="order-list">
            <div className="order-item">
              <div className="item-image">
                <img src="src/assets/images/300/3-300.jpg" alt="image" />
              </div>
              <Counter />
              <div className="item-price">369 ₽</div>
              <button className="delete-btn" title="Удалить">
                +
              </button>
            </div>
            <div className="order-item">
              <div className="item-image">
                <img src="src/assets/images/300/3-300.jpg" alt="image" />
              </div>
              <Counter />
              <div className="item-price">369 ₽</div>
              <button className="delete-btn" title="Удалить">
                +
              </button>
            </div>
            <div className="order-item">
              <div className="item-image">
                <img src="src/assets/images/300/3-300.jpg" alt="image" />
              </div>
              <Counter />
              <div className="item-price">369 ₽</div>
              <button className="delete-btn" title="Удалить">
                +
              </button>
            </div>
          </div>

          <div className="total">
            <div className="total-value">
              Всего товаров:
              <span>3 шт.</span>
            </div>
            <div className="total-price">
              Сумма заказа:
              <span>690 000 ₽</span>
            </div>
          </div>

          <div className="actions">
            <button className="to-main-btn">На главную</button>
            <button className="pay-btn">Оплатить</button>
          </div>
        </div>

        <div className="empty">
          <h2 className="empty-title">Ваша корзина пуста</h2>
          <p className="empy-text">Вероятнее всего вы ничего не успели заказать. Для того, чтобы заказать вернитесь на главную страницу</p>
          <div className="empty-img">
            <img src="src/assets/images/empty-bascket.svg" alt="image" />
          </div>

          <Link to={'/'}>
            <button className="empty-btn">Вернуться на главную</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BasketPage;
