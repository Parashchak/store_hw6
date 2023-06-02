
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as favIcon } from "@fortawesome/free-solid-svg-icons";
import { faStar as noFav } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from '../Button';
import "./cardItem.scss";
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/actions/modal';
import { modalTypes } from '../../redux/types';
import { toggleFavAsync } from '../../redux/actions/fav';


export default function CardItem ( props ){
    const {picture, prodName, prodPrice, code, prodColor, buyBtn, delBtn} = props;
    const fav = useSelector((state) => state.fav.fav);
    const dispatch = useDispatch();
    return (
        <>
            <div className="card__wrapper">
            {delBtn ? 
                    <div className="del__icon">
                        <FontAwesomeIcon icon={faCircleXmark} onClick={()=> {
                            dispatch(toggleModal({type: modalTypes.DEL_MODAL, code: code}))
                        }}/>
                    </div> : null}
            <p className="card-description__prod-name">{prodName}</p>
                <div className="info-wrapper">
                    <div className="card__img-wrapper">
                        <img src={picture} alt={`${prodName} product`}/>
                    </div>
                    <div className="card__description">
                        <p className="card-description__prod-price">price: <span>{prodPrice}$</span></p>
                        <p className="card-description__prod-barcode">code: {code}</p>
                        <p className="card-description__prod-color">color: <span>{prodColor}</span></p>
                    </div>
                </div>
                <div className="card__btn-wrapper">
                        {!fav.includes(code) ? 
                            <FontAwesomeIcon icon={noFav} className="fav-icon" onClick={()=>{dispatch(toggleFavAsync({fav, code}))}} data-id={code}/> :
                            <FontAwesomeIcon icon={favIcon} className="fav-icon" onClick={()=>{dispatch(toggleFavAsync({fav, code}))}} data-id={code}/>
                        }
                        {buyBtn ?
                        <Button
                        text={"Buy"}
                        onClick={()=> {
                            dispatch(toggleModal({type: modalTypes.ADD_MODAL, code: code}))
                        }}
                        /> : null}
                </div>
            </div>
        </>
    )
}

CardItem.propTypes = {
    picture: PropTypes.string,
    prodName: PropTypes.string,
    prodPrice: PropTypes.string,
    code: PropTypes.string,
    prodColor: PropTypes.string,
}
CardItem.defaultProps = {
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",
    prodName: "Product name",
    prodPrice: "product price",
    code: "product barcode",
    prodColor: "product color",
}