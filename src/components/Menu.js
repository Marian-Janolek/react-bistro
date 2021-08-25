import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { burgers } from '../utils'
const Menu = () => {

    return (
        <Wrapped className='section-center' id='menu'>
            <h1 className='title' >menu</h1>
            <div className="underline"></div>
            <div className="card-grid">
            {burgers.map((burger)=>{
                const {id, name, img, duration, price, desc, kcal} = burger;
                return <Card key={id} name={name} img={img} duration={duration} price={price} desc={desc} kcal={kcal}/>
            })}
            </div>
        </Wrapped>
    )
}

const Wrapped = styled.main`
    text-align: center;
    margin-bottom: 4rem;
    
    .card-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) ;
    }
    .underline{
        margin-top: 0rem;
        margin-bottom: 3rem;
        width: 9rem;
    }
    @media screen and (max-width: 768px){
        .card-grid{
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
    }
    @media screen and (max-width: 576px){
        .card-grid{
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-column-gap: 1.5rem;
        }
    }
    @media screen and (max-width: 420px){
        .card-grid{
            grid-template-columns: 1fr;
            place-items: center;
        }
    }   
`

export default Menu
