import React from 'react'
import styled from 'styled-components'
import about from '../images/about.jpeg'
const About = () => {
    return (
        <Wrapper className='section-center' id='about'>
            <div className="grid">
            <article className='about-section'>
                <img src={about} alt="about" />
            </article>
            <article className='info'>
                <div className="about-title">
                    <h1 className='title'>about <span>us</span></h1>
                    <div className='underline'></div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sint doloremque amet, obcaecati eius officiis odio vel ad veniam dicta voluptate minima sunt cum nostrum quae adipisci, fuga possimus repellat optio eveniet iste? Molestiae nostrum, porro a ut quam amet?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident expedita facere delectus, ullam quibusdam harum id, maiores dolor doloremque soluta culpa porro, minima fugiat cum quam. Quis expedita sapiente explicabo.</p>
            </article>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
    @media (max-width: 420px){
        margin-bottom: 3rem;
    }
    @media (max-width: 360px){
        margin-bottom: 2rem;
    }
    .title{
        margin-bottom: 1rem;
    }
    span{
        color: var(--second-500);
    }
    .grid{
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        justify-items: center;
    }
    .about-section{
        width: 20rem;
    }
    .about-section img{
    border-radius: 1rem;
    border: 2px solid #222;
    -webkit-box-shadow: 1px 1px 4px #99fff3, 1px 1px 4px #99fff3, 1px 1px 4px #99fff3, 1px 1px 4px 0px rgba(0,0,0,0); 
    box-shadow: 1px 1px 4px  #99fff3, 1px 1px 4px #99fff3, 1px 1px 4px  #99fff3, 1px 1px 4px rgba(0,0,0,0);
}
    .info{
        text-align: left;
        justify-self: center;
        align-self: center;
    }
    .about-title h2{
        text-transform: capitalize;
        color: var(--second-300);
        font-weight: 500;
    }
    .about-title .underline{
        margin-left: 0;
    }
    .about-section img{
        width: 100%;
        height: 100%;
    }
    .info p{
        color : var(--text-color);
    }
    @media screen and (max-width: 768px){
        .grid{
            grid-template-columns: 1fr 1fr;
        }
        .about-section {
            width: 18rem;
        }
        .title{
            font-size: 2rem;
        }
        .info p{
            font-size: 0.8rem;
            margin-bottom: 1rem;
        }
    }
    @media screen and (max-width: 576px){
        .about-section{
            width: 14rem;
            height: 65vh;
        }
        .info p{
            margin-bottom: 0.5rem;
            font-size: 0.76rem;
        }
    }
    @media screen and (max-width: 420px){
        .grid{
            grid-template-columns: 1fr;
            place-items: center;
            row-gap: 1.1rem;
        }
        .about-section{
            height: 60vh ;
        }
        .info{
            text-align: center;
        }
        .about-title .underline{
            margin: 0 auto;
            margin-bottom: 1rem;
        }
        
    }
    @media screen and (max-width: 360px){
        .grid{
            row-gap: 1rem;
        }
        .about-section{
            height: 55vh ;
        }
    }

`

export default About
