import { BiCart } from "react-icons/bi";
import './CartWidget.scss';

const CartWidget = () => {
    return(
        <div className="cartContainer">
            <BiCart color="#AB0047" size={24} />
            <p>1</p>
        </div>
    )
}

export default CartWidget