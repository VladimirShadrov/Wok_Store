import Navigation from '../navigationComponent/navigation';
import SortDDL from '../sortDDLComponent/sortDdl';
import styles from './navSortPanel.module.scss';

type PropsType = {
  selectCategory: (category: string) => void;
};

const NavSortPanel = ({ selectCategory }: PropsType) => {
  return (
    <div className={styles.navPanel}>
      <Navigation selectCategory={(category: string) => selectCategory(category)} />
      <SortDDL />
    </div>
  );
};

export default NavSortPanel;
