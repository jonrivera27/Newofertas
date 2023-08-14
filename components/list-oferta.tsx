import { Button } from '@nextui-org/react'
import React, { FC, ReactNode } from 'react'

interface Props {
    children?: ReactNode,
    oferta: any,
    price: number,
    priceDiscount: number,
    
}
export const ListOferta: FC<Props> = ({ oferta }) => {
  return (
    <div className={`col-md-${oferta.md}`} style={{ backgroundColor: 'white', border: '0px solid #111'}} >
      <img src={oferta.urlImgArticle} alt="btn btn-red" />
        <p style={{
          fontFamily: 'Arial sansSerif',
          fontWeight: 'bold',
          fontSize: '20px',
          textTransform: 'uppercase',
          lineHeight: '20px',
          textAlign: 'left',
          color: '#232323',
          padding: '10px',
          border: '2px solid #111-colorRed'
          }}>
          <b >{oferta.title}</b>
        </p>

        <p style={{
          padding: '0px 10px',
          overflow: 'hidden',
          fontFamily: 'Arial, sans-serif',
          fontSize: '20px',
          lineHeight: '18px',
          color: '#232323',
          border: '2px solid #111-colorRed'
        }}>
          {oferta.description}
        </p>

        <p style={{

        }}>
          
        </p>
        <div>

          <span style={{color: 'black', float: 'right' }} >
            {oferta.price}
          </span>
        </div>

        <div>
          <span style={{color: 'red', fontSize: '20px', float: 'right',}}>
            {oferta.priceDiscount}
          </span>
        
        </div>
        <a className='row col-md-12 btn' style={{display: 'block', borderRadius: '10px', margin: '10px 10px', backgroundImage: '-moz-linear-gradient( 90deg, rgb(179,39,33) 0%, rgb(231,36,28) 60%)', boxShadow: 'inset 0px 2px 0px 0px rgba(255, 255, 255, 0.65)', height: '40px', lineHeight: '40px', fontSize: '14px', fontWeight: 'bold',
      textAlign: 'center', color: '#fff', clear: 'both'}} >IR A LA OFERTA</a>
    </div>
  )
}
