import Navigation from '../navigationComponent/navigation';
import SortDDL from '../sortDDLComponent/sortDdl';
import styles from './navSortPanel.module.scss';

const NavSortPanel = () => {
  return (
    <div className={styles.navPanel}>
      <Navigation />
      <SortDDL />
    </div>
  );
};

export default NavSortPanel;
