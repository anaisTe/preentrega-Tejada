import './ItemDetailContainer.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../../data/data';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const { nameProduct } = useParams();

  useEffect(() => {
    getProducts()
    .then( (res) => {
      const findProduct = res.find( (ele) => (ele.id === nameProduct));
      setProduct(findProduct);  
    })
    .catch( (err) => {
      console.log(err);
    })
    .finally( () => {
      console.log('promesa ItemDetailContainer');
    })
  }, [nameProduct])
  

  return (
    <div className='my-5'>
    
      <ItemDetail product={product} />

    </div>
  )
}

export default ItemDetailContainer