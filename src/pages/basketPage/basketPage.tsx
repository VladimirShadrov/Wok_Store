import { Link } from 'react-router-dom';
import Header from '../../components/headerComponent/header';
import OrderListItem from '../../components/orderListItemComponent/orderListItem';

const BasketPage = () => {
  return (
    <>
      <Header showBasketBtn={false} showSearch={false} />
      <div className="basket-content">
        {/* Полная корзина */}
        <div className="full">
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
            {[1, 2, 3].map((item) => (
              <OrderListItem key={item} />
            ))}
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
            <Link to={'/'}>
              <button className="to-main-btn">На главную</button>
            </Link>
            <button className="pay-btn">Оплатить</button>
          </div>
        </div>

        {/* Пустая корзина */}
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
