import CardList from "../components/CardList";
import { useSelector } from "react-redux";
import "./styles.scss";

export function Fav ({ulClass}){
    const products = useSelector((state) => state.products.products);
    const fav = useSelector((state) => state.fav.fav);

    if (fav.length > 0){
        let arr = [];
        products.forEach(element => {
            if(fav.includes(element.barcode)){
                arr.push(element);
            }
        });
        return (
            <>
                <CardList
                    arr={arr}
                    buyBtn = {true}
                    ulClass={ulClass}
                />
            </>
        )
    };
        return <h1 className="no_data">You dont have a favourites products!</h1>
}