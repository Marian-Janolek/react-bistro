import React, { useState} from 'react'
import {links} from '../utils'
import styled from 'styled-components'
import logo from '../images/bistro.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import {useGlobalContext} from '../context'
const Navbar = () => {
    const {openSidebar, isSidebarOpen, closeSidebar} = useGlobalContext()
    const [navbar, setNavbar] = useState(false)
    const {url : home} = links[0];
    const showNavbar = ()=>{
        if(window.scrollY >= 70){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', showNavbar);
    return (
        <NavContainer id='/'>
            <nav className={navbar ? 'nav active' : 'nav'} >

            <div className='nav-header section-center'>
            <a href={home}>
                <img src={logo} className='img logo' alt="logo" />
            </a>
            {isSidebarOpen ? 
            (<button type="button" className='close-btn' onClick={closeSidebar}> <FaTimes /></button>)
            :
            <button type='button' className='nav-toggle' onClick={openSidebar}>
                <FaBars />
            </button>
            }
            <ul className='nav-links'>
                {links.map((link)=> {
                    const {id, text, url} = link;
                    return <li key={id}>
                        <a href={url} className='btn nav-btn' offset={80}>{text}</a>
                    </li>
                })}
            </ul>
            </div>
                </nav>
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    .nav{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background: transparent;
        transition: var(--transition);
    }

    .nav-header{
        height: var(--header-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .active{
        background-color: var(--backgroundColor);
         -webkit-box-shadow: 0px 10px 13px -7px #000000,
        5px 5px 6px 5px rgba(142, 142, 142, 0);
         box-shadow: 0px 10px 13px -7px #000000, 5px 5px 6px 5px rgba(142, 142, 142, 0);
        }
    img{
        display: flex;
        width: var(--header-height);
        margin-left: -15px;
    }
    .nav-btn:hover{
        background-color: transparent;
        color: var(--second-500);
        transform: scale(1.1);
    }
    .logo{
        border-radius: 30%;
        border: 2px solid var(--primary-300);
    }
    .close-btn{
        font-size: 2.5rem;
        background: transparent;
        border-color: transparent;
        color: var(--primary-500);
        transition: var(--transition);
        cursor: pointer;
        animation: bounce 2s ease infinite;
    }
    .close-btn:hover{
        color: var(--second-500);
    }
    .nav-toggle{
        background-color:transparent;
        border: transparent;
        color: var(--primary-500);
        cursor: pointer;
        transition: var(--transition);
        animation: bounce 2s ease infinite;
        svg{
            font-size: 2rem;
        }
    }
    .nav-btn{
        color: var(--primary-300);
    }
    .nav-toggle:hover{
        color: var(--second-500);
    }
    .nav-btn{
        text-transform: uppercase;
    }
    @keyframes bounce{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.4);
        }
        100%{
            transform: scale(1);
        }
    }

    @media screen and (min-width: 768px){
        .nav-toggle{
            display: none;
        }
        .close-btn{
            display: none;
        }
        .nav-links{
            display: flex;
            justify-content: space-between;

            li{
                margin: 0.5rem;
            }
        }
    }
    @media screen and (max-width: 360px){
        .nav-header{
            height: calc(var(--header-height) * .8);
        }
        img{
            margin-left: -5px;
            width: calc(var(--header-height) * .8);
        }
        .nav-toggle{
            svg{
                font-size: 1.5rem;
            }
        }
        .close-btn{
            font-size: 1.7rem;
        }
    }
`

export default Navbar
