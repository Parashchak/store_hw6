import CardList from "../components/CardList";
import { useSelector } from "react-redux";
import OrderForm from "../components/OrderForm";
import "./styles.scss";


export function Basket ({ulClass}){
    const products = useSelector((state) => state.products.products);
    const basket = useSelector((state) => state.cart.basket);

    if (basket.length > 0) {
        let arr = [];
        products.forEach(element => {
            if(basket.includes(element.barcode)){
                arr.push(element);
            }
        });
        return (
            <>
            <div className="basket_wrapper">
                <CardList
                    arr={arr}
                    delBtn={true}
                    ulClass={ulClass}
                />
                <OrderForm
                    arr={basket}
                />
            </div>
            </>
        )
    }
    return <h1 className="no_data">No products in your basket</h1>
}