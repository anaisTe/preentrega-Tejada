import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

const ItemDetail = ({product}) => {
  return (
        
    <div className="row">
        <div className="col-md-3">
            <img src={product.img} alt="" />
        </div>
        <div className="col-md-9">
            <div className="detail-producto">
                <p className="detail-producto-title">{product.name}</p>
                <span className="detail-producto-description">{product.description}</span>
                <span className="detail-producto-price">S/.{product.price}</span>
                <div className="detail-producto-actions">
                    <div className="detail-producto-reducer">
                        <button><BiMinus /></button>
                        <span>1</span>
                        <button><BiPlus /></button>
                    </div>
                    <div className="detail-producto-addbtn">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ItemDetail