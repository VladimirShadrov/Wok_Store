const SortDDL = () => {
  return (
    <div className="sort-ddl active" data-active-class="active">
      <span>Сортировать по:</span>
      <div className="ddl-container">
        <span className="selected-value">Популярности (DESC)</span>
        <div className="ddl-list">
          <div className="ddl-list__item">Популярности (ASC)</div>
          <div className="ddl-list__item active">Популярности (DESC)</div>
          <div className="ddl-list__item">Цене (ASC)</div>
          <div className="ddl-list__item">Цене (DESC)</div>
          <div className="ddl-list__item">Алфавиту (ASC)</div>
          <div className="ddl-list__item">Алфавиту (DESC)</div>
        </div>
      </div>
    </div>
  );
};

export default SortDDL;
