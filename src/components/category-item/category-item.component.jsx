import './category-item.styles.scss';
import {useNavigate} from "react-router-dom";

const CategoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigae = useNavigate();
    const onNavigateHandler = () => navigae(route);
    return (
        <div className='category-container'>
            <div
                onClick={onNavigateHandler}
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='category-body-container' onClick={onNavigateHandler}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;