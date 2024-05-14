import "./ItemListContainer.scss"

import { useState, useEffect } from "react";
import getProducts from "../../data/data.js";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (prop) => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        getProducts()
        .then( (res) => {
            if(idCategory) {
              const productFilter =  res.filter( (ele) => (
                ele.category === idCategory
              ));
              setProducts(productFilter)
            } else {
                setProducts(res);
            }
        })
        .catch( (err) => {
            console.log(err);
        })
        .finally( () => {
            console.log('promesa ItemListContainer');
        })
    }, [idCategory])
    
    

    return(
        <div className="bodyContainer">
            <h3 className="mb-5">{ prop.saludo }</h3>
            
            {
            <ItemList products= {products}/>
            }

        </div>
    )
}

export default ItemListContainer