import Item from "./Item.jsx";

const ItemList = ({products}) => {
  return (
    <div className="row">
        {
            products.map( (item) => (
                <Item key={item.id} item={item}/>
            ))
        }

    </div>
  )
}

export default ItemList