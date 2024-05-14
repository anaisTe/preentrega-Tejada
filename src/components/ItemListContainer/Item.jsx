
import { Link } from "react-router-dom";


const Item = ({item}) => {
  return (
    <div className="col-md-3" >
        <Link to={`/detail/${item.id}?sort=${item.name}`} style={{ textDecoration: 'none' }}>
            <div className="item-container" key={item.id}>
                <div className="item-container-img">
                    <img src={item.img} alt="" />
                </div>
                <div className="item-container-textos">
                    <p>{item.name}</p>
                    <span>s/.{item.price}</span>
                </div>
                <div className="item-container-actions">
                    <div className="item-container-addbtn">
                        <button>Ver detalle</button>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Item