// import { useState } from "react";
import { useFormik } from "formik";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { clearBasketAsync } from "../../redux/actions/cart";
import { confirmFormSchema } from "../../schemas";
import { PatternFormat } from "react-number-format";
import "./orderForm.scss";

export default function OrderForm (){
    const products = useSelector((state) => state.products.products);
    const basket = useSelector((state) => state.cart.basket);
    let arr = [];
    let prices =[];
    if (basket.length > 0) {
        products.forEach(element => {
            if(basket.includes(element.barcode)){
                arr.push(element);
                prices.push(element.price);
            }
        });
    }
    const total = prices.reduce((a,b) => (+a) + (+b));
    const dispatch = useDispatch();
    const formik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        age: "",
        city: "",
        street: "",
        houseNumber: "",
        apartment: "",
        mobileNumber: "",
    },
    validationSchema: confirmFormSchema,
        onSubmit: (values) => {
            let info = {...values};
            arr.forEach(el => {
                info[`product${el.id}`] = el;
        })
        console.log(info);
        dispatch(clearBasketAsync());
    }
    });
    return (
        <>
            <form className="order-form" onSubmit={formik.handleSubmit}>
                <div className="formgroup">
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className={formik.errors.firstName && formik.touched.firstName ? "input_field error_input" : "input_field"} 
                        placeholder="First Name" 
                        value={formik.values.firstName} 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <div className="formgroup__label">
                        <label htmlFor="firstName">
                            {formik.errors.firstName && formik.touched.firstName ? <span className="error_text">{formik.errors.firstName}</span> : "First Name"}
                        </label>
                    </div>
                </div>
                <div className="formgroup">
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        className={formik.errors.lastName && formik.touched.lastName ? "input_field error_input" : "input_field"} 
                        placeholder="Last Name" 
                        value={formik.values.lastName} 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <div className="formgroup__label">
                        <label htmlFor="lastName">
                            {formik.errors.lastName && formik.touched.lastName ? <span className="error_text">{formik.errors.lastName}</span> : "Last Name"}
                        </label>
                    </div>
                </div>
                <div className="formgroup">
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        className={formik.errors.age && formik.touched.age ? "input_field error_input" : "input_field"} 
                        placeholder="age" 
                        value={formik.values.age} 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <div className="formgroup__label">
                        <label htmlFor="age">
                            {formik.errors.age && formik.touched.age ? <span className="error_text">{formik.errors.age}</span> : "age"}
                        </label>
                    </div>
                </div>
                <div className="formgroup">
                    <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        className={formik.errors.city && formik.touched.city ? "input_field error_input" : "input_field"} 
                        placeholder="City" 
                        value={formik.values.city} 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <div className="formgroup__label">
                        <label htmlFor="city">
                            {formik.errors.city && formik.touched.city ? <span className="error_text">{formik.errors.city}</span> : "City"}
                        </label>
                    </div>
                </div>
                <div className="formgroup">
                    <input 
                        type="text" 
                        id="street" 
                        name="street" 
                        className={formik.errors.street && formik.touched.street ? "input_field error_input" : "input_field"} 
                        placeholder="street" 
                        value={formik.values.street} 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <div className="formgroup__label">
                        <label htmlFor="street">
                            {formik.errors.street && formik.touched.street ? <span className="error_text">{formik.errors.street}</span> : "street"}
                        </label>
                    </div>
                </div>
                <div className="formgroup">
                    <input 
                        type="text" 
                        id="houseNumber" 
                        name="houseNumber" 
                        className={formik.errors.houseNumber && formik.touched.houseNumber ? "input_field error_input" : "input_field"} 
                        placeholder="house number" 
                        value={formik.values.houseNumber} 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <div className="formgroup__label">
                        <label htmlFor="houseNumber">
                            {formik.errors.houseNumber && formik.touched.houseNumber ? <span className="error_text">{formik.errors.houseNumber}</span> : "house number"}
                        </label>
                    </div>
                </div>
                <div className="formgroup">
                    <input 
                        type="number" 
                        id="apartment" 
                        name="apartment" 
                        className={formik.errors.apartment && formik.touched.apartment ? "input_field error_input" : "input_field"} 
                        placeholder="apartment" 
                        value={formik.values.apartment} 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <div className="formgroup__label">
                        <label htmlFor="apartment">
                            {formik.errors.apartment && formik.touched.apartment ? <span className="error_text">{formik.errors.apartment}</span> : "apartment"}
                        </label>
                    </div>
                </div>
                <div className="formgroup">
                    <PatternFormat 
                        format="+38(0##)-###-##-##" 
                        allowEmptyFormatting mask="_"
                        id="mobileNumber" 
                        name="mobileNumber"
                        className={formik.errors.mobileNumber && formik.touched.mobileNumber ? "input_field error_input" : "input_field"} 
                        value={formik.values.mobileNumber}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} 
                    />
                    <div className="formgroup__label">
                        <label htmlFor="mobileNumber">
                            {formik.errors.mobileNumber && formik.touched.mobileNumber ? <span className="error_text">{formik.errors.mobileNumber}</span> : "mobile number"}
                        </label>
                    </div>
                </div>
                <p className="total_price">Total price: <span>{total} $</span></p>
                <Button
                    onClick={null}
                    text="Checkout"
                    btnType="submit"
                />
            </form>
        </>
    )
}