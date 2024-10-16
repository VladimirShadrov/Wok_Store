import './app.scss';
import MainPage from './pages/mainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/productPage';
import BasketPage from './pages/basketPage';

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
    path: '*',
    element: <h1>Ничего не найдено</h1>,
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
