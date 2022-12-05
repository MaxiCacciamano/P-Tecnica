import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch } from 'react-redux';
import style from './card.module.css';

export const Card = ({name, image, code, price }) => {
  const dispatch = useDispatch();


  return (
    <div className={style.card}>
      <img src={image}/>
      <div className={style.cardText}>
      <h2>{name}</h2>
      <p className={style.code}>Code: {code}</p>
      <p>Precio: <strong>{price}</strong></p>
      </div>
    </div>
  )
}



