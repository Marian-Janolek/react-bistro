import React, {useState} from 'react'
import {IoIosArrowUp} from 'react-icons/io'
import styled from 'styled-components'
import { links } from '../utils'

const Scrollup = () => {
    const [scrollUp, setScrollUp] = useState(false)
    const {url : home} = links[0]
    const showScrollUp = ()=>{
        if(window.scrollY >= 200){
            setScrollUp(true);
        } else{
            setScrollUp(false);
        }
    }
    window.addEventListener('scroll', showScrollUp);
    return (
        <Wrapper>
            <a href={home} className={scrollUp ? 'scrollup active' : 'scrollup'} id='scroll-up'>
                <IoIosArrowUp className='icon' />
            </a>
        </Wrapper>

    )
}
const Wrapper = styled.div`
        .scrollup{
        position: fixed;
        right: 2rem;
        /* bottom: 6rem; */
        bottom: -20%;
        display: flex;
        background-color: var(--backgroundColor);
        border-radius: 0.3rem;
        padding: 0.5rem 0.7rem;
        z-index: 10;
        transition: 0.5s;
        border: 2px solid var(--second-500);
        animation: rotate 2s infinite;
    }
    .icon{
        color: white;
        font-size: 1.3rem;
        transition:.4s;
        animation: icon-move 2s infinite;
    }
    .scrollup:hover{
        background: hsl(206, 4%, 4%);
    }
    .icon:hover{
        color: #fff;
    }
    .active{
        bottom: 3rem;
    }
    @keyframes rotate{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.07);
        }
        100%{
            transform: scale(1);
        }
    }
    @keyframes icon-move{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1);
        }
    }
    @media screen and (max-width: 360px){
        .icon{
            font-size: .9rem;
        }
        .active{
            bottom: 3.4rem;
        }
        .scrollup{
            border-radius: 0.5rem;
            right: 1rem;
        }

    }
`

export default Scrollup
