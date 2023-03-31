import "./styles.scss"

import backIcon from '../../assets/icons/back.png';
import { Link } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

const Navbar: React.FC<Props> = ({ title }) => {
    return (
        <div className="c-wrapper">
            <Link to={'/list'}>
                <button
                    className="c-wrapper__button"
                >
                    <img src={backIcon} alt="" />
                </button>
            </Link>

            <span className="c-wrapper__span">
                {title}
            </span>
        </div>
    )
}

export default Navbar