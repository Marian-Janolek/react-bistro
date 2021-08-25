import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <div className='hero' id='/'>
            <Wrapper>
            <h1>
                Don't worry, <br /> eat happy
            </h1>
            <a href="/" className='btn hero-btn'>
                Order now
            </a>
            </Wrapper>
        </div>
    )
}
const Wrapper = styled.div`

    text-align: center;
    color: var(--primary-800);
     h1{
        text-transform: uppercase;
        font-weight: 600;
        background: var(--primary-700);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .hero-btn{
        margin-top: 1rem;
        font-size: 1.8rem;
        border: 2px solid var(--primary-500);
        padding: 0.5rem 1.25rem;
    }
    .hero-btn:hover{
        color: var(--second-500);
        border-color: var(--second-500);
        background-color: transparent;
        transform: scale(1.03);
    }
    @media screen and (max-width: 576px){
        .hero-btn{
            font-size: 1.5rem;
        }
    }
    
`
export default Hero
