import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from "react-bootstrap";
import NavbarStyle from './index.css';

function NavbarComponent() {

    const [scroll,setScroll] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 90){
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <>
           <Navbar collapseOnSelect  expand='lg'  className={scroll ? 'navbar-default sticky ' : 'navbar-default'} variant='dark' sticky='top'>
               <Navbar.Brand href='#'>International Relations</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />

               <Navbar.Collapse id="responsive-navbar-nav">
                   <div className='mx-auto'/>
                   <Nav>
                       <Nav.Link href="#" className={'links-text'}>More deets</Nav.Link>
                       <Nav.Link href="#" className={'links-text'}>Dank memes</Nav.Link>
                       <Nav.Link href="#" className={'links-text'}>More deets</Nav.Link>
                       <Nav.Link href="#" className={'links-text'}>Dank memes</Nav.Link>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
        </>
    );
};

export default NavbarComponent;
