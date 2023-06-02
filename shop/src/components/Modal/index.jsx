import PropTypes from "prop-types";
import "./modal.scss";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/actions/modal";
import { modalTypes } from "../../redux/types";
import { addToBasketAsync, delFromBasketAsync } from "../../redux/actions/cart";

export function Modal ({tittle}){
    const isActive = useSelector((state) => state.modal.isActive);
    const productId = useSelector((state) => state.modal.productId);
    const typeOfModal = useSelector((state) => state.modal.typeOfModal);
    const products = useSelector((state) => state.products.products);
    const cart = useSelector((state) => state.cart.basket);
    const dispatch = useDispatch();
    let prod = {};
    products.forEach(el => {
        if (el.barcode === productId){
                prod = el;
            }
        })
    

    if (!isActive){
        return null;
    }
    return (
      <>
            <div className="modal-overlay"
                onClick={(e)=> {
                    if (e.target.classList.contains("modal-overlay")){
                        dispatch(toggleModal({type: modalTypes.CLOSE_MODAL}))
                    }}}
            >
                <div className="modal-window">
                    <div className="modal-header">
                        <h3>
                            {tittle}
                        </h3>
                    </div>
                    
                    {prod ? 
                        <div className="modal-text">
                        <img className="product-img" src={prod.picture} alt="product img"/>
                        <div className="modal-text__product">
                            <p className="product-name">modal: {prod.name}</p>
                            <p className="product-price">price: {prod.price}</p>
                            <p className="product-color">color: {prod.color}</p>
                            <p className="product-code">code: {prod.barcode}</p>
                        </div>
                    </div>
                    : null}

                    <div className="modal-btn">
                        <Button
                        text= "Ok"
                        onClick={()=>{
                            typeOfModal === modalTypes.ADD_MODAL ? dispatch(addToBasketAsync({cart, productId})) :
                            dispatch (delFromBasketAsync({productId, cart}));
                            dispatch(toggleModal({type: modalTypes.CLOSE_MODAL}))
                        }}
                        code={productId}
                        />
                        <Button
                        text= "Cancel"
                        onClick={()=> {dispatch(toggleModal({type: modalTypes.CLOSE_MODAL}))}}
                        />
                    </div>
                </div>
            </div>
            </>
    )
}

Modal.propTypes = {
    isActive: PropTypes.bool,
    tittle: PropTypes.string,
    onClick: PropTypes.func,
    toggleModal: PropTypes.func,
}

Modal.defaultProps = {
    isActive: false,
    tittle: "Modal ask",
    onClick: ()=> {
        console.log("click overlay");
    },
    toggleModal: ()=> {
        console.log("modal toggle");
    },
}