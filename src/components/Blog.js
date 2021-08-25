import React from 'react'
import styled from 'styled-components'
import { reviews } from '../utils'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'


const Blog = () => {
    const findStars = ({stars}) =>{

        const tempStars = Array.from({length: 5}, (_, index)=>{
            const number = index + 0.5;
            return (
                <span key ={index}>
                    {stars >= index +1 ? <BsStarFill /> : 
                    stars >= number ? 
                <BsStarHalf/> : <BsStar />}
                </span>
            )
        })
        return tempStars
    }

    return (

        <Wrapper className='section-center' id='blog'>
            <h1 className='title'>Blog</h1>
            <div className="underline"></div>
            <div className='grid'>
            {reviews.map(({id, name, img, review, stars})=>{
                return (
                    <div className='review' key={id}>
                        <div className='review-img'>
                            <img src={img} alt={name} className='person-img' />
                        </div>
                            <h5>{name}</h5>
                            <span className='stars'>{findStars({stars})}</span>
                            <p>{review}.</p>
                </div>
                )
            })}
            </div>
        </Wrapper>

    )
}
const Wrapper = styled.section`
    .grid{
        grid-template-columns: repeat(auto-fill, minmax(140px,1fr));
        grid-row-gap: 2rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
        margin-right: -2rem;
    }
    .title{
        text-align: center;
    }
    .review{
        width: 14rem;
        text-align: center;
        border-radius: calc(var(--border-radius) * 2);
        background-color:  #17141d;
        box-shadow: -1rem 0 1rem #000;
        transition: var(--transition);
        z-index: 0;
    }
    .review-img{
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 1.5rem;
    }
    .person-img{
        margin-top: 1rem;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
        position: relative;
        box-shadow: var(--light-shadow);
    }
    .review-img::before{
        content: '';
        width: 100%;
        height: 100%;
        background: var(--grey-200);
        position: absolute;
        top: -0.2rem;
        right: -0.4rem;
        border-radius: 50%;
    }
    .review:hover{
        transform: translateY(-25px);
        z-index: 3;
    }
    p{
        padding: .8rem .5rem 0rem 1rem;
        text-align: left;
        margin-bottom: 0rem;
        font-size: .8rem;
    }
    h5{
        color: var(--second-400);
    }
    .review span{
        color: var(--primary-300);
    }
    .stars{
        font-size: 0.8rem;
    }
    @media screen and (max-width: 768px){
        .review{
            width: 14rem;
        }
        .grid{
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media screen and (max-width: 576px){
        .grid{
            grid-template-columns: repeat(2,1fr);
            place-items: center;
            grid-row-gap: 1.5rem;
        }
        .review{
            width: 11rem;
        }
        .review-img{
            width: 100px;
            height: 100px;
            margin-bottom: 1rem;
        }
        .stars{
            font-size: 0.7rem;
        }
        p{
            padding-top: 0rem;
            padding-left: 0.5rem;
            font-size: 0.7rem;
            text-align: center;
            padding-bottom: 0.5rem;
        }
        h5{
            margin-bottom: 0rem;
        }
    }
    @media screen and (max-width: 420px){
        .grid{
            grid-template-columns: repeat(2, 1fr);
            place-items: center;
            margin-right: 0;
        }
    }
    @media screen and (max-width: 360px){
        .grid{
            grid-template-columns: 1fr;
            place-items: center;
            margin-right: 0rem;
        }
    }

`

export default Blog
