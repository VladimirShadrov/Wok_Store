import './app.scss';
import MainPage from './pages/mainPage/mainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/productPage/productPage';
import BasketPage from './pages/basketPage/basketPage';
import { WokContextProvider } from './context/wokContext';
import { store } from './store/store';
import { Provider } from 'react-redux';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import OrderPage from './pages/orderPage/orderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/product',
    element: <ProductPage />,
  },
  {
    path: '/basket',
    element: <BasketPage />,
  },
  {
    path: '/order',
    element: <OrderPage />,
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <WokContextProvider>
      <Provider store={store}>
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </Provider>
    </WokContextProvider>
  );
}

export default App;
