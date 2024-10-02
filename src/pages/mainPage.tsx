import Header from '../components/header';
import NavSortPanel from '../components/navSortPanel';
import ProductList from '../components/productList';

const MainPage = () => {
  return (
    <div className="container">
      <Header />
      <NavSortPanel />
      <ProductList />
    </div>
  );
};

export default MainPage;
