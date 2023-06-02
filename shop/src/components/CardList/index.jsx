import PropTypes from 'prop-types';
import './cardList.scss';
import CardItem from "../CardItem";
import { useSelector } from 'react-redux';


export default function CardList (props){
    const {arr, buyBtn, delBtn, ulClass} = props;
    const products = useSelector((state) => state.products.products);
    if (products === null) {
        return <h1>Loading...</h1>;
      }
    return (
        <>
        <ul className={`card-list-${ulClass}`}>
            {arr.map(({ name, price, picture, barcode, color }) => (
                <li key={barcode} className="card-list__item">
                    <CardItem
                    picture={picture}
                    prodName={name}
                    prodPrice={price}
                    code={barcode}
                    prodColor={color}
                    buyBtn={buyBtn}
                    delBtn={delBtn}
                    />
                </li>
            ))}
        </ul>
        </>
    )

}

CardList.propTypes = {
    products: PropTypes.array,
    fav: PropTypes.array,
    addToFav: PropTypes.func,
    addToBasket: PropTypes.func,
    delBtn: PropTypes.bool,
    buyBtn: PropTypes.bool,
    ulClass: PropTypes.string
}
CardList.defaultTypes = {
    products: [],
    fav: [],
    addToFav: () => {console.log("add to Fav");},
    addToBasket: () => {console.log("add to Basket");},
    delBtn: false,
    buyBtn: false,
    ulClass: "card",
}
