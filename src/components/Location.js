import React from 'react'
import styled from 'styled-components'
import {FaLocationArrow} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import GoogleApiWrapper from './Map'
const Location = () => {
    return (
        <Wrapper className='section-center' id='location'>
            <h1 className='title'>Location</h1> 
            <div className="underline"></div>
            <div className="container">
                <article className='location-flex'>
                    <FaLocationArrow className='icon'/> 
                    <span>Address</span> 
                    <p>
                    525 Fair AVE <br />New york city, 2222 
                    </p>
                    <AiOutlineMail className='icon'/> 
                    <span>Email</span> 
                    <p>email@email.com</p>
                    <BiPhoneCall className='icon'/>
                    <span>Our number</span>
                    <p>+ 123 456 789</p>
                </article>
                <article className='location-flex'>
                    <div className="corners">
                    <div className="top left"></div>
                    <div className="bottom right"></div>   
                    <h6>
                        Monday - Friday
                    </h6>
                    <p>
                        8:00 AM - 10:00 PM
                    </p>
                    <h6>
                        Saturday
                    </h6>
                    <p>
                        11:00 AM - 11:00 PM
                    </p>
                    <h6>
                        Sunday
                    </h6>
                    <p id='mb'>
                        12:00 AM - 9:00 PM
                    </p>
                    </div>
                </article>
                <article className='none'></article>
                <article className='none'></article>
                <article className='hidden'></article>
                <article>
                <article className='hidden-768'></article>
                </article>
                <div className='map' >
                     <GoogleApiWrapper/>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    margin-bottom: 4rem;
    .title{
        text-align: center;
    }
    .map{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 16rem;
    }
    .none{
        display: inline-block;
    }
    .hidden{
        display: none;
    }
    .hidden-768{
        display: none;
    }
    .container{
        position: relative;
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .icon{
        font-size: 1.5rem;
        color: var(--second-400);
    }
    span{
        letter-spacing: 2px;
        font-size: 1.3rem;
        padding-left: 1rem;
        color: var(--second-400);
    }
    p{
        letter-spacing: 2px;
        font-size: 0.8rem;
    }
    h6{
        letter-spacing: 2px;
        color: var(--second-400);
    }
    .corners{
        position: relative;
        width: 100%;
        padding: 2rem;
    }
    .corners #mb{
        margin-bottom: 0rem;
    }
    .top, .bottom{
        position: absolute;
        width: 3rem;
        height: 3rem;
        color: var(--second-400);
    }
    .top{
        top: 0;
        border-top: 2px solid;
    }
    .bottom{
        bottom: 0;
        border-bottom: 2px solid;
    }
    .left{
        left: 0;
        border-left: 2px solid;
    }
    .right{
        right: 0;
        border-right: 2px solid;
    }
    @media screen and (max-width: 768px){
        span{
            font-size: 1rem;
        }
        .icon{
            font-size: 1.25rem;
        }
        .map{
            width: 13rem;
        }
        .hidden{
            display: inline;
        }
        .hidden-768{
            display: block;
        }
    }
    @media screen and (max-width: 700px){
       .container{
            justify-content: flex-start;
       }
    }
    @media screen and (max-width: 576px){
        span{
            font-size: 1rem;
        }
        .none{
            display: none;   
        }
        .container{
            justify-content: center;
            margin-bottom: 21rem;
        }

        .map{
            top: 110%;
            left: 10%;
            width: 80%;
        }
        .hidden, .hidden-768, .none{
            display: none;
        }
        .location-flex{
            margin: 1rem 2rem;
        }
    }
    @media screen and (max-width: 560px){
        .container{
            margin-bottom: 25rem;
        }
    }
    @media screen and (max-width: 540px){
        .container{
            margin-bottom: 26.5rem;
        }
    }
    @media screen and (max-width: 470px){
        .container{
            margin-bottom: 29rem;
        }
    }
    @media screen and (max-width: 420px){
        .icon{
            font-size: 1rem;
        }
        h6{
            font-size: .8rem;
        }
        span{
            font-size: 0.8rem;
            font-weight: 600;
        }
        p{
            font-size: 0.7rem;
        }
        .corners{
            padding: 1.2rem;
        }
        .map{
            top: 103%;
            height: 15rem;
        }
        .container{
            margin-bottom: 17rem;
        }
        .location-flex{
            margin: 0.5rem .5rem;
        }
    }
`
export default Location


