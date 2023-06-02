import PropTypes from "prop-types";
import "./button.scss"

export default function Button({onClick, code, text, btnType, btnClass}){
    return <button type={btnType} className={`btn ${btnClass}`} onClick={onClick} data-id={code}>{text}</button>
}
Button.propTypes = {
    onClick: PropTypes.func,
    code: PropTypes.string,
    btnType: PropTypes.string,
}
Button.defaultProps = {
    text: "Click me!",
    onClick: ()=>{
        console.log("Clicked");
    },
    code: "product code",
    btnType: "button",
}