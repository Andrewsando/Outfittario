
import "./Button.css";

type ButtonProps = {
    text: string;
    onClick?: ()=> void;
    type?: "button" | "submit" | "reset";
};

function Button ({text, onClick, type}: ButtonProps){

    return(
        <button className="app-button" type={type} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;