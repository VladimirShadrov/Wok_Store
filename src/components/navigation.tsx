import React from 'react';

const Navigation = () => {
  const [activeMenuItemIndex, setActiveMenuItemIndex] = React.useState(0);
  const menuItemRefs = React.useRef<HTMLDivElement[]>([]);
  const floatingNavElement = React.useRef<HTMLDivElement>(null);
  const menuItems = ['Все', 'Гречневая', 'Пшеничная', 'Яичная', 'Тяханы', 'Фунчозы'];

  const onMenuItemClick = (index: number) => {
    setActiveMenuItemIndex(index);

    if (floatingNavElement.current) {
      floatingNavElement.current.style.top = `${menuItemRefs.current[index].offsetTop}px`;
      floatingNavElement.current.style.left = `${menuItemRefs.current[index].offsetLeft}px`;
      floatingNavElement.current.style.width = `${menuItemRefs.current[index].offsetWidth}px`;
    }
  };

  React.useEffect(() => {
    onMenuItemClick(0);
  }, []);

  return (
    <nav className="nav-wrapper">
      {menuItems.map((item, index) => (
        <div
          key={index}
          ref={(el: HTMLDivElement) => (menuItemRefs.current[index] = el)}
          onClick={() => onMenuItemClick(index)}
          className={activeMenuItemIndex === index ? 'nav-item active' : 'nav-item'}>
          {item}
        </div>
      ))}
      <div ref={floatingNavElement} className="nav-item-active"></div>
    </nav>
  );
};

export default Navigation;
