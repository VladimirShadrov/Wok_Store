import { Link } from 'react-router-dom';
import styles from './notFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Ой, кажется страница потерялась</h1>
      <p className={styles.text}>Отряд поисковых роботов уже выехал, а пока предлагаем посмотреть наше меню =))</p>
      <button className={styles.toMenuBtn}>
        <Link to={'/'}>В меню</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
