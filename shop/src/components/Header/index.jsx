import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import "./header.scss";
import { NavLink, Outlet } from "react-router-dom";
import { Modal } from "../Modal";
import { modalTypes } from '../../redux/types';
import { useSelector } from 'react-redux';

export default function Header () {
    const typeModal = useSelector((state) => state.modal.typeOfModal);
    const fav = useSelector((state) => state.fav.fav);
    const basket = useSelector((state) => state.cart.basket);
    return (
        <>
        <header className='header'>
            <NavLink to="/">
                <FontAwesomeIcon icon={faHouse} />
            </NavLink>
            <div className='header__fav-wrapper'>
                <p className='fav__length'>{fav.length > 0 ? fav.length : null}</p>
                <NavLink to="/fav">
                    <FontAwesomeIcon icon={faStar} />
                </NavLink>
            </div>
            <div className='header__basket-wrapper'>
                <p className='basket__length'>{basket.length > 0 ? basket.length : null}</p>
                <NavLink to="/basket">
                    <FontAwesomeIcon icon={faBasketShopping} />
                </NavLink>
            </div>
        </header>
        <Outlet/>
        <Modal
        tittle={
            typeModal === modalTypes.ADD_MODAL ? "Do you want add this product to your cart?" : "Do you want delete this product from your cart?"
        }
        />
        </>
    )
}