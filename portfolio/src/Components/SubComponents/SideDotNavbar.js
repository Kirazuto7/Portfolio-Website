import Styles from '../../Styles/SideDotNavbar.module.css';
import { useState, useEffect } from 'react';

export default function SideDotNavbar({links = [], pageHeight = 0}) {

    const [selected, setSelected] = useState(links[0]);

    useEffect(() => {

        let element = document.getElementById('NavDot')
        let children = element.children
        let index;

        if(pageHeight < 44) {
            index = 0;

            for(let i = 0; i < children.length; ++i) {
                if(i === index) {
                    setSelected(() => (children[i].getAttribute("value")));
                    children[i].style.backgroundColor = '#3366bb';
                    children[i].onmouseover = function() {this.style.backgroundColor = "#3366bb"};
                    children[i].onmouseout = function() {this.style.backgroundColor = "#3366bb"}; 
                }
                else {
                    children[i].style.backgroundColor = 'white';
                    children[i].onmouseover = function() {this.style.backgroundColor = "#3366bb"};
                    children[i].onmouseout = function() {this.style.backgroundColor = "white"}; 
                }
            }
        }
        else if(pageHeight >= 44 && pageHeight < 166) {
            index = 1;

            for(let i = 0; i < children.length; ++i) {
                if(i === index) {
                    setSelected(() => (children[i].getAttribute("value")));
                    children[i].style.backgroundColor = '#3366bb';
                    children[i].onmouseover = function() {this.style.backgroundColor = "#3366bb"};
                    children[i].onmouseout = function() {this.style.backgroundColor = "#3366bb"}; 
                }
                else {
                    children[i].style.backgroundColor = 'black';
                    children[i].onmouseover = function() {this.style.backgroundColor = "#3366bb"};
                    children[i].onmouseout = function() {this.style.backgroundColor = "black"}; 
                }
            }
        }
        else if(pageHeight >= 166 && pageHeight < 316) {
            index = 2;

            for(let i = 0; i < children.length; ++i) {
                if(i === index) {
                    setSelected(() => (children[i].getAttribute("value")));
                    children[i].style.backgroundColor = '#3366bb';
                    children[i].onmouseover = function() {this.style.backgroundColor = "#3366bb"};
                    children[i].onmouseout = function() {this.style.backgroundColor = "#3366bb"}; 
                }
                else {
                    children[i].style.backgroundColor = 'white';
                    children[i].onmouseover = function() {this.style.backgroundColor = "#3366bb"};
                    children[i].onmouseout = function() {this.style.backgroundColor = "white"}; 
                }
            }
        }
        else if(pageHeight >= 316) {
            index = 3;

            for(let i = 0; i < children.length; ++i) {
                if(i === index) {
                    setSelected(() => (children[i].getAttribute("value")));
                    children[i].style.backgroundColor = '#3366bb';
                    children[i].onmouseover = function() {this.style.backgroundColor = "#3366bb"};
                    children[i].onmouseout = function() {this.style.backgroundColor = "#3366bb"}; 
                }
                else {
                    children[i].style.backgroundColor = 'black';
                    children[i].onmouseover = function() {this.style.backgroundColor = "#3366bb"};
                    children[i].onmouseout = function() {this.style.backgroundColor = "black"}; 
                }
            }
        }
        
    }, [selected, pageHeight])

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