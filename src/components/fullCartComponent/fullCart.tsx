import { Link } from 'react-router-dom';
import OrderListItem from '../orderListItemComponent/orderListItem';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategory } from '../../store/slices/filterSlice';
import { RootState } from '../../store/store';

const FullCart = () => {
  const dispatch = useDispatch();
  const { totalCount, totalPrice } = useSelector((store: RootState) => store.cart);

  const onMainPageLinkClick = () => {
    dispatch(setFilterCategory({ name: 'Все', filterKey: 'category' }));
  };

  return (
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
          <span>{totalCount} шт.</span>
        </div>
        <div className="total-price">
          Сумма заказа:
          <span>{totalPrice.toLocaleString()} ₽</span>
        </div>
      </div>

      <div className="actions">
        <Link to={'/'} onClick={onMainPageLinkClick}>
          <button className="to-main-btn">На главную</button>
        </Link>
        <button className="pay-btn">Оплатить</button>
      </div>
    </div>
  );
};

export default FullCart;
