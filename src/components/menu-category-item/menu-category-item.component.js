import './menu-category-item.styles.scss'

const MenuCategoryItem = ({category}) => {
    const {title, imageUrl} = category
    return (
        <div  className="menu-category-container">
          <div className="background-image" style={{
            backgroundImage : `url(${imageUrl})`
          }} />
          <div className="menu-category-body-container">
            <h2>{title}</h2>
            <p>SHOP NOW</p>
          </div>
        </div>
    );
}

export default MenuCategoryItem;
