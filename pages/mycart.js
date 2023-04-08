import Header from '../components/Header.js';
import style from '../styles/mycart.module.css';
import React,{useEffect, useState} from 'react';
const Mycart = ()=>{
    
    return(
        <>
        <Header/>
        <div className={style.mainDiv}>
            <div className={style.mycartHeader}></div>
            <div className={style.mainSection}>
                <div className={style.mycartList}></div>
                <div className={style.sidebar}></div>
            </div>
        </div>
       <h1 className={style.h1}>cart are not available</h1>
        </>
    )
}
export default Mycart;