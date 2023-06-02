import CardList from "../components/CardList";
import { useSelector } from "react-redux";
import './styles.scss';

export function Home ({ulClass}) {
    const products = useSelector((state) => state.products.products);

    if (!products.length) {
        return <h1>Loading...</h1>
      }
    return (
                <CardList
                arr={products}
                buyBtn={true}
                ulClass={ulClass}
                />
    )
}