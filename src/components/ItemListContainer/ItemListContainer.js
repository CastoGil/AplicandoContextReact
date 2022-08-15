import React from "react";
import { dataFetch , getData } from "../../Data/Data";
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'

function ItemListContainer(){
    const [products, setProducts]=useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId){
            getData().then(products => {
            setProducts(products)
              })
        }
        else{
            dataFetch(categoryId).then(products => {
            setProducts(products)
          })
        }
      }, [categoryId])
   
    return(
        <div>
            <h1 className="lista">Lista de Productos</h1>
            <div className="lista-productos">
            <ItemList products={products}>
            </ItemList>
            </div>
        </div>
       
    )
    
}
export default ItemListContainer;
//