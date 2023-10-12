import styles from './navbarstyle.module.css'
import {NavLink} from 'react-router-dom'
import openToggle from './nav-assets/menu.svg'
import closeToggle from './nav-assets/close.svg'
import { useState } from 'react'
const Links = ["Home","About Us","Contact Us"]
export default function Navbar(props){
    const [sidebarIsOpen,setSidebarIsOpen] = useState(false);
    return(
        <>
            <div className={`${sidebarIsOpen?styles.cover:""}`}></div>
            <nav className={styles.navbar}>
                <img src={props.imageURL}/>
                <ul>
                    {Links.map((value)=><li><NavLink to={"/"+value} className={({isActive,isPending})=>isActive?styles.linkActive:styles.linkInactive}>{value}</NavLink></li>)}    
                </ul>
                <button>{props.buttonText}</button>
                <img className={styles.close} src={openToggle} onClick={(e)=>{setSidebarIsOpen(!sidebarIsOpen)}}/>
            </nav>
            <div className={`${styles.sidebar} ${sidebarIsOpen?styles.open:""}`}>
                <div className={styles.sidebarDiv}><img src={closeToggle} className={styles.sidebarCloseToggle} onClick={(e)=>{setSidebarIsOpen(!sidebarIsOpen)}}/><img src={props.imageURL} className={styles.sidebarLogo}/></div>
                <ul>
                    {Links.map((value)=><li><NavLink to={"/"+value} className={({isActive,isPending})=>isActive?styles.sidebarLinkActive:styles.sidebarLinkInactive}>{value}</NavLink></li>)}    
                </ul>
                <button>{props.buttonText}</button>
            </div>
        </>
    )
}