import React from 'react'
import { useGlobalContext } from '../context'
import {links} from '../utils'
import styled from 'styled-components'

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
    return (
        <SidebarContainer>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <ul className="links">
                    {links.map((link)=>{
                        const {id, text, url} = link
                        return <li key={id}>
                            <a href={url} onClick={closeSidebar}>
                                {text}
                            </a>
                        </li>
                    })}
                </ul>
            </aside>
        </SidebarContainer>
    )
}
const SidebarContainer = styled.div`
    text-align: center;
    .sidebar-header{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 1rem 1.5rem;
    }
    .links{
        margin: 1.5rem 0;
    }
    .links a{
        display: block;
        text-align: center;
        font-size: 1rem;
        text-transform: capitalize;
        padding: 1rem;
        color: var(--primary-500);
        letter-spacing: var(--letter-spacing);
    }
    .links a:hover{
        color: var(--second-500);
    }
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 90%;
        margin: 0 auto;
        background: var(--backgroundColor);
        transition: var(--transition);
        transform: translateY(-100%);
        z-index: -1;
        border: solid 2px var(--primary-800);
        border-radius: 1rem;
    }
    .show-sidebar{
        transform: translateY(6rem);
        z-index: 10;
    }
    @media screen and (min-width: 768px){
        .sidebar{
            display: none;
        }
    }
    @media screen and (max-width: 360px){
        .sidebar{

        }
        .links{
            margin: 0;
        }
    }
`
export default Sidebar
