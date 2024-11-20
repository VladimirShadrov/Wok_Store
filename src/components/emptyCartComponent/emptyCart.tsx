import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilterCategory } from '../../store/slices/filterSlice';

const EmptyCart = () => {
  const dispatch = useDispatch();
  const onMainPageLinkClick = () => {
    dispatch(setFilterCategory({ name: 'Все', filterKey: 'category' }));
  };

  return (
    <div className="empty">
      <h2 className="empty-title">Ваша корзина пуста</h2>
      <p className="empy-text">Вероятнее всего вы ничего не успели заказать. Для того, чтобы заказать вернитесь на главную страницу</p>
      <div className="empty-img">
        <img src="src/assets/images/empty-bascket.svg" alt="image" />
      </div>

      <Link to={'/'} onClick={onMainPageLinkClick}>
        <button className="empty-btn">Вернуться на главную</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
