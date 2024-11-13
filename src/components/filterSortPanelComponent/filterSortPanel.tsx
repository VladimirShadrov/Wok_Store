import Filter from '../filterComponent/filter';
import SortDDL from '../sortDDLComponent/sortDdl';
import styles from './filterSortPanel.module.scss';

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

const FilterSortPanel = ({ selectCategory, sortProducts }: PropsType) => {
  return (
    <div className={styles.navPanel}>
      <Filter selectCategory={(category: FilterType) => selectCategory(category)} />
      <SortDDL sortProducts={(sortType: SortType) => sortProducts(sortType)} />
    </div>
  );
};

export default FilterSortPanel;
