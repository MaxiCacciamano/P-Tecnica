import React from 'react'
import { useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import style from './home.module.css';


import {getAllProducts} from '../Redux/Action/Index';

import {Card} from '../Component/Card';
import { SearchName } from '../Component/SearchName';


export const Home = (props)=> {
  const dispatch = useDispatch();
  const {products} = useSelector(state=>state);

  useEffect(()=>{
    dispatch(getAllProducts());
  },[])
  


console.log(products,"soy el home")
  return (
    <div >
      <div>
        <SearchName/>
      </div>
      <div className={style.container}>
      {
        products?.map((p)=>{
          return <Card image={p.image} name={p.name}  code={p.code} price={p.price} id={p.id} key={p.id}/>
        })
      }
      </div>
    </div>
  )
}