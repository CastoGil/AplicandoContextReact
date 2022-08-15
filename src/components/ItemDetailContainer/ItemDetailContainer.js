import ItemDetail from '../ItemDetail/ItemDetail';
import React ,{useEffect, useState} from 'react';
import {getdataDetail} from '../../Data/Data';
import { useParams } from 'react-router-dom';

const ItemDetailContainer=()=>{
    const [detail, setData]=useState({})
    const {detailid}=useParams()

    useEffect(()=>{
        getdataDetail(detailid).then(detail=>{
            setData(detail)
        }).catch(error => {console.log(error)})
    }, [detailid])
   
    
    return(
        <div>
            <ItemDetail product={detail}/>
        </div>
        )  
}
export default ItemDetailContainer