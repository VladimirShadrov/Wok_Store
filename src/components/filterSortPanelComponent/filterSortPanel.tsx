import Filter from '../filterComponent/filter';
import SortDDL from '../sortDDLComponent/sortDdl';
import styles from './filterSortPanel.module.scss';

type SortType = {
  type: string;
  order: string;
  directionIcon: string;
  sortKey: string;
};

type PropsType = {
  sortProducts: (sortType: SortType) => void;
};

const FilterSortPanel = ({ sortProducts }: PropsType) => {
  return (
    <div className={styles.navPanel}>
      <Filter />
      <SortDDL sortProducts={(sortType: SortType) => sortProducts(sortType)} />
    </div>
  );
};

export default FilterSortPanel;
