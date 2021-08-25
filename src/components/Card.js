import React from 'react'
import styled from 'styled-components'
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlineEuroCircle} from 'react-icons/ai'
import {GiWeightLiftingUp} from 'react-icons/gi'
const Card = ({id, name, img, duration, price, desc, kcal}) => {
        return (
                
            <Wrapper>
                <div className='card'>
                <div className='card-header'>
                <img src={img} alt={name} key={id} />
                </div>
                
                <div className="card-info">
                    <h5>{name}</h5>
                    <p>{desc}</p>
                    
                    <div className="card-footer">
                        <span className='grid-icon1'>
                        <BiTimeFive className='icon'/> 
                        </span>
                        <p className='grid-p1'>{duration} min</p>
                        <span className='grid-icon2'>
                            <GiWeightLiftingUp className='icon' />
                        </span>
                        <p className='grid-p2'>
                        {kcal}
                        </p>
                        <span className='grid-icon3'>
                            <AiOutlineEuroCircle className='icon'/>
                        </span>
                            <p className='grid-p3'>
                            {price} €
                            </p>
                    </div>
                </div>
                </div>
    
            </Wrapper>
        )
    }

const Wrapper = styled.article`
    .card{
        width: 19.5rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        box-shadow: -1rem .5rem 1rem  #000;
        margin-bottom: 2rem;
        transition: var(--transition);
        background: var(--backgroundColor);
    }
    .card:hover{
        transform: scale(1.03);
    }
    .card-header{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
    }
    .card-header img{
        height: 16rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
    .card-info{
        padding: 1rem 1rem 0rem 1rem;
    }
    .card-info h5{
        text-align: left;
        color: var(--second-400);
    }
    .card-info p{
        text-align: left;
        font-size: .8rem;
        margin-bottom: 1rem;
    }
    .card-footer{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        align-items: center;
        grid-template-areas: 
        'grid-icon1 grid-icon2 grid-icon3'
        'grid-p1 grid-p2 grid-p3';
    }
    .card-footer p{
        font-size: .7rem;
    }
    .icon{
        color: var(--second-500);
        font-size: 1.2rem;
    }
    .grid-icon1{
        grid-area: grid-icon1;
        justify-self: start;
    }
    .grid-icon2{
        grid-area: grid-icon2;
        justify-self: center;
    }
    .grid-icon3{
        grid-area: grid-icon3;
        justify-self: end;
    }
    .grid-p1{
        grid-area: grid-p1;
        justify-self: start;
    }
    .grid-p2{
        grid-area: grid-p2;
        justify-self: center;
    }
    .grid-p3{
        grid-area: grid-p3;
        justify-self: end;
    }
    @media screen and (max-width: 768px){
        /* .card{
            width: 18rem;
        } */
    }
    @media screen and (max-width: 576px){
        .card{
            width: 16rem;
            margin-bottom: 1.5rem;
        }
        .card-info p{
            font-size: 0.75rem;
        }
        .card-header img{
            height: 14rem;
        }
        .icon{
            font-size: 1.1rem;
        }
        .card-footer p{
            font-size: 0.6rem;
        }
    }
    @media screen and (max-width: 420px){
        .card{
        }
    }
    @media screen and (max-width: 360px){
        .card{
            width: 16rem;
        }
        .card-info p{
            font-size: .7rem;
            margin-bottom: 0.5rem;
        }
        .icon{
            font-size: 1rem;
        }
    }
`

export default Card
