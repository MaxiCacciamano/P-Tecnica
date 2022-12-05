import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {searchProductsByName} from '../Redux/Action/Index'
import style from './home.module.css';

export const SearchName = () => {
    const [input, setInput] = useState("")
    const [isSubmit, setisSubmit] = useState(false)
    const dispatch = useDispatch();

    function handleSubmit(e){
      e.preventDefault();
      dispatch(searchProductsByName(input));
      setisSubmit(true)
    }

    function handleChange(e){
      setInput(e.target.value)
      setisSubmit(false)
    }

    function handleClose(e){
      e.preventDefault();
      setInput("")
      setisSubmit(false)
    }
  return (
    <div className={style.search}>
      <form onSubmit={handleSubmit}>
      <input 
      placeholder="Search prdoucts..."
      onChange={handleChange}
      value={input}
      />
      <button className={style.search} type="submit">🔍 Buscar</button>
      {
        isSubmit?
      <div className={style.sub}>
        <span>
          {input+" " }
        </span>
        <a onClick={handleClose}>
           x
        </a>
      </div>
      :<></>
      }
      </form>
    </div>
  )
}
