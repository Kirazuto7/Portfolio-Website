import Styles from '../../Styles/SideDotNavbar.module.css';
import { useState, useEffect } from 'react';

export default function SideDotNavbar({links = [], breakpoints = [], scroll = 0}) {

    const [selected, setSelected] = useState(links[0]);

    useEffect(() => {

        let element = document.getElementById('NavDot')
        let children = element.children
        let index;
        let linkColor = '#0080FE';

        if(scroll < breakpoints[0]) {
            index = 0;

            for(let i = 0; i < children.length; ++i) {
                if(i === index) {
                    setSelected(() => (children[i].getAttribute("value")));
                    children[i].style.backgroundColor = linkColor;
                    children[i].onmouseover = function() {this.style.backgroundColor = linkColor};
                    children[i].onmouseout = function() {this.style.backgroundColor = linkColor}; 
                }
                else {
                    children[i].style.backgroundColor = 'white';
                    children[i].onmouseover = function() {this.style.backgroundColor = linkColor};
                    children[i].onmouseout = function() {this.style.backgroundColor = "white"}; 
                }
            }
        }
        else if(scroll >= breakpoints[0] && scroll < breakpoints[1]) {
            index = 1;

            for(let i = 0; i < children.length; ++i) {
                if(i === index) {
                    setSelected(() => (children[i].getAttribute("value")));
                    children[i].style.backgroundColor = linkColor;
                    children[i].onmouseover = function() {this.style.backgroundColor = linkColor};
                    children[i].onmouseout = function() {this.style.backgroundColor = linkColor}; 
                }
                else {
                    children[i].style.backgroundColor = 'black';
                    children[i].onmouseover = function() {this.style.backgroundColor = linkColor};
                    children[i].onmouseout = function() {this.style.backgroundColor = "black"}; 
                }
            }
        }
        else if(scroll >= breakpoints[1] && scroll < breakpoints[2]) {
            index = 2;

            for(let i = 0; i < children.length; ++i) {
                if(i === index) {
                    setSelected(() => (children[i].getAttribute("value")));
                    children[i].style.backgroundColor = linkColor;
                    children[i].onmouseover = function() {this.style.backgroundColor = linkColor};
                    children[i].onmouseout = function() {this.style.backgroundColor = linkColor}; 
                }
                else {
                    children[i].style.backgroundColor = 'white';
                    children[i].onmouseover = function() {this.style.backgroundColor = linkColor};
                    children[i].onmouseout = function() {this.style.backgroundColor = "white"}; 
                }
            }
        }
        else if(scroll >= breakpoints[2] && breakpoints[2] > 0) {
            index = 3;
            
            for(let i = 0; i < children.length; ++i) {
                if(i === index) {
                    setSelected(() => (children[i].getAttribute("value")));
                    children[i].style.backgroundColor = linkColor;
                    children[i].onmouseover = function() {this.style.backgroundColor = linkColor};
                    children[i].onmouseout = function() {this.style.backgroundColor = linkColor}; 
                }
                else {
                    children[i].style.backgroundColor = 'black';
                    children[i].onmouseover = function() {this.style.backgroundColor = linkColor};
                    children[i].onmouseout = function() {this.style.backgroundColor = "black"}; 
                }
            }
        }
        
    }, [selected, breakpoints, scroll])

    const handleClick = (e) => {
        let value = e.target.getAttribute("value");
        let element = document.getElementById(value)
        element.scrollIntoView({
            behavior: 'smooth'
        })
        setSelected(() => (value));
    }
    return(
        <div id={'NavDot'} className={Styles.Container}>
        {
            links.map((link, index) => {
                return(
                    <div key={index} className={ (selected === link) ? `${Styles.NavDot} ${Styles.Selected}` : `${Styles.NavDot}`}
                        onClick={(e) => handleClick(e)} value={link}/>
                )
            })
        }
        </div>
    )
};