import Head from 'next/head';
import { FC, ReactNode } from 'react';


interface Props{
    children?:ReactNode,
    title?: String,

} 
import React from 'react'

export const Menu = () => {
  return (
    <nav className="head_co" style={{ background: '#495a74', height:'100px', marginTop: '2px', textAlign: 'center', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.25);' }}>
      <div className="head_co"><a href="index.html?userID=Ofertairmovil2019" />
          <a className="clearfix margin_co" href="#">
          <img src="./logo.png" alt='promo' className="container" style={{  width: '15%' , padding: '10px'}}/>
            </a>
            <a className="container center
            " href="/"> 
          </a>
      </div>
    
    </nav>
  )
}

