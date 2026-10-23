
import "./LinkButton.css";
import { Link } from "react-router-dom";

type ButtonProps = {
    link: string;
    text: string;
};

function LinkButton ({link, text}: ButtonProps){

    return(
        <Link to={link} className="link-button">
            {text}
        </Link>
    )
}

export default LinkButton;