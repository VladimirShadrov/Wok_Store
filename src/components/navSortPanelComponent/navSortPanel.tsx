import Navigation from '../navigationComponent/navigation';
import SortDDL from '../sortDDLComponent/sortDdl';
import styles from './navSortPanel.module.scss';

type FilterType = {
  name: string;
  filterKey: string;
};

type SortType = {
  type: string;
  order: string;
  directionIcon: string;
  sortKey: string;
};

type PropsType = {
  selectCategory: (category: FilterType) => void;
  sortProducts: (sortType: SortType) => void;
};

const NavSortPanel = ({ selectCategory, sortProducts }: PropsType) => {
  return (
    <div className={styles.navPanel}>
      <Navigation selectCategory={(category: FilterType) => selectCategory(category)} />
      <SortDDL sortProducts={(sortType: SortType) => sortProducts(sortType)} />
    </div>
  );
};

export default NavSortPanel;
