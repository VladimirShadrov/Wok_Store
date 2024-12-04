import Header from '../../components/headerComponent/header';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import FullCart from '../../components/fullCartComponent/fullCart';
import EmptyCart from '../../components/emptyCartComponent/emptyCart';

const BasketPage = () => {
  const cartData = useSelector((store: RootState) => store.cart.products);
  return (
    <>
      <Header showBasketBtn={false} showSearch={false} />
      <div className="basket-content">{cartData.length ? <FullCart /> : <EmptyCart />}</div>
    </>
  );
};

export default BasketPage;
