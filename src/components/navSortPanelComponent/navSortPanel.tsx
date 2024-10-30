import Navigation from '../navigationComponent/navigation';
import SortDDL from '../sortDDLComponent/sortDdl';
import styles from './navSortPanel.module.scss';

type SortType = {
  type: string;
  direction: string;
  directionIcon: string;
};

type PropsType = {
  selectCategory: (category: string) => void;
  sortProducts: (sortType: SortType) => void;
};

const NavSortPanel = ({ selectCategory, sortProducts }: PropsType) => {
  return (
    <div className={styles.navPanel}>
      <Navigation selectCategory={(category: string) => selectCategory(category)} />
      <SortDDL sortProducts={(sortType: SortType) => sortProducts(sortType)} />
    </div>
  );
};

export default NavSortPanel;
