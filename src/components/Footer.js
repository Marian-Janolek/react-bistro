import React from 'react'
import styled from 'styled-components'
import logo from '../images/bistro.png'
import {links, social } from '../utils'
import {FiSend} from 'react-icons/fi'

const Footer = () => {
    const {url : home} = links[0]
    return (
        <Wrapper className='section-center'>
            <div className="footer-container grid">
                <div className='footer-logo'>
                <a href={home}>
                    <img src={logo} alt="logo" className='logo'/>
                </a>
                <h5 className='hidden'>Don't worry, Eat happy</h5>
                </div>
                <div>
                <ul className='nav-links footer-links'>
                {links.map((link)=> {
                    const {id, text, url} = link;
                    return <li key={id}>
                        <a href={url} className='btn footer-btn'>{text}</a>
                    </li>
                })}
            </ul>
                </div>
                <div className='form'>
                    <form className='footer-form'>
                        <input type="email" placeholder='Enter Email' className='footer-input' />
                        <button type='submit'className='btn btn-flex' onClick={(e)=> e.preventDefault()} >
                            <FiSend className='btn-icon'/> <span>Subscribe
                                </span>
                        </button>
                    </form>
                    <div className='footer-social'>
                        {social.map(({id, icon, url})=>{
                            return ( 
                                <a href={url} key={id} target='_blank' rel="noopener noreferrer" className='footer-social-icon'>{icon}</a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <p className='footer-copy'>
                <span>&copy; <span>{new Date().getFullYear().toString()}</span> All right reserved by Majko Janolek</span>
            </p>
        </Wrapper>
    )
}

const Wrapper = styled.footer` 
    .footer-container{
        grid-template-columns: .2fr .7fr .9fr;
        gap: 0.5rem;
        /* place-items: center; */
    }
    .footer-logo{
        /* align-items: center; */
        display: flex;
        width: 100%;
    }
    .footer-links{
        display: inline-grid;
        grid-template-columns: repeat(2, 1fr);  
        text-align: start;
        padding-left: 3rem;
        column-gap: 1rem;
        transition: .4s ease-in-out;
    }
    .footer-btn{
        text-transform: uppercase;
    }
    .footer-btn:hover{
        background-color: transparent;
        color: var(--second-500);
    }
    .footer-form{
        display: flex;
        column-gap: 0.5rem;
        background-color:#191919;
        padding: 0.5rem 0.75rem;
        border-radius: .5rem;
        margin-bottom: 1rem;
    }
    .footer-input{
        background-color:#191919;
        width: 90%;
        color: var(--primary-200);
        border:none;
        font-size: 1rem;
    }
    .footer-input::placeholder{
        color: var(--primary-200);
        font-family: var(--body-font);
        font-size: 1rem;
        letter-spacing: 2px;
        padding-left: 1rem;
    }
    .btn-flex{
        display: inline-flex;
        align-items: center;
        column-gap: 0.5rem;
        transition: var(--transition);
    }
    .btn-icon{
        font-size: 1.2rem;
    }
    span{
        font-size: 1rem;
    } 
    form .btn{
        padding: .8rem 1.5rem;
        border-radius: .5rem;
        border: none;
        background-color: #0a0a0b;
    }
    form .btn:hover{
        color: var(--second-500);
    }
    .footer-social{
        display: flex;
        column-gap: 1.5rem;
        justify-content: flex-end;
    }
    .footer-social-icon{
        display: inline-flex;
        color: var(--primary-500);
        padding: 0.5rem;
        border-radius: .5rem;
        font-size: 1.5rem;
        border: solid 2px var(--primary--500);
    }
    .footer-social-icon:hover{
        color: var(--second-500);
    }
    .footer-copy{
        margin-top: 3rem;
        color: var(--primary-500);
        text-align: center;
        transition: var(--transition);
    }
    .footer-copy:hover{
        color: var(--second-500);
    }
    .logo{
        width: var(--header-height);
        border-radius: 30%;
        border: 2px solid var(--primary-300);
    }
    .hidden{
        display: none;
    }
    @media screen and (max-width: 768px){
        .footer-container{
            grid-template-columns: .1fr .4fr .6fr;

        }
        .logo{
            width: calc(var(--header-height) * .8);
        }
        .footer-links{
            padding-left: 0rem;
            column-gap: 0rem;
        }
    }
    @media screen and (max-width: 576px){
        .footer-container{
            grid-template-columns: 1fr 1fr;
            grid-auto-flow: row;
        }
        .form{
            grid-column: span 1;
            grid-column: span 2;
        }
        .footer-logo{
            flex-direction: column;
            justify-content: space-between;
        }
        .hidden{
            display: block;
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--primary-700);
        }
        .footer-copy span{
            font-size: 0.8rem;
            font-size: .8rem;
        }
        .footer-social{
            margin-right: 4.4rem;
        }
        form .btn{
            padding: 0.8rem 2.8rem;
        }
        .footer-social-icon{
            padding:0.2rem;
        }
    }
    @media screen and (max-width: 360px){
        .footer-container{
            grid-template-columns: 0.6fr 1fr;
            gap: 1rem;
        }
        .logo{
            width: calc(var(--header-height) * .5) ;
        }
        .form .btn{
            padding: .8rem 1rem;
        }
        .footer-social{
            justify-content: center;
            margin-right: 0rem;
        }
        .footer-btn{
            font-size: .8rem;
        }
        .hidden{
            font-size: .9rem;
        }
        .footer-logo{
            justify-content: space-evenly;
        }
        .footer-copy{
            margin-top: 1rem;
        }
        .footer-form{
            padding: 0.4rem .6rem;
        }
        .footer-input::placeholder{
        font-size: .8rem;
        text-transform: uppercase;
        }
        .footer-social-icon{
            font-size: 1.2rem;
        }
    }

`

export default Footer
