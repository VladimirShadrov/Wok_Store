import Navigation from '../navigation/navigation';
import SortDDL from '../sortDDL/sortDdl';
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
