import './product-card.styless.scss';
import Button from '../button/button.component';
import './product-card.styless.scss';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    return(<div className='prodcut-card-container'>
        <img src={imageUrl} alt={'${name}'}/>
        <div className='footer'>
            <span className='name'></span>
            <span className='price'></span>
        </div>

        <Button buttonType='inverted'>Add to card</Button>

    </div>
    );
}

export default ProductCard;