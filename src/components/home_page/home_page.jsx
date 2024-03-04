import { useEffect, useState } from "react";
import React from "react";
import "./home_page.css";
import home_page_list from "./home_page_list";
export default function HomePage() {
    const initialState=home_page_list[0];
    const [currHome,setCurrHome]=useState(initialState);
    // auto switch image after 3sec
    useEffect(()=> {
        const interval=setInterval(()=> {
            setCurrHome((prev)=> {
                const ind=(prev.id+1)%5;
                return home_page_list[ind];
            })
        },3000);
        return (()=> clearInterval(interval));
    },[]);
    // add line break in heading
    const addLineBreak= (s)=> {
        return s.split('\n').map((str,ind)=> {
            return <React.Fragment key={ind}>
                {str}
                <br />
            </React.Fragment>
        })
    }
    // navigate using left and right arrow
    function handleKeyDown(event) {
        if(event.key==="ArrowLeft") {
            setCurrHome((prev)=> {
                var ind=(prev.id-1)%5;
                if(ind<0) {
                    ind+=5;
                }
                return home_page_list[ind];
            })
        } else if(event.key==="ArrowRight") {
            setCurrHome((prev)=> {
                const ind=(prev.id+1)%5;
                return home_page_list[ind];
            })
        }

    }
    useEffect((()=> {
        document.addEventListener("keydown",handleKeyDown);
        return (()=> document.removeEventListener("keydown",handleKeyDown));
    }),[])
    // go to image on bullet click
    function clickHandler(event) {
        const index=event.target.id;
        // console.log(index);
        setCurrHome(home_page_list[index]);
    }
    return <div className="container">
        <div className="ver-overlay"></div>
        <div className="hor-overlay"></div>
        <img id="home_screen_image" src={currHome.image} alt="not found" />
        <div className="details">
            {/* <h1>The Legend of Zelda: Tears of the Kingdom</h1> */}
            <h1>{addLineBreak(currHome.name)}</h1>
            <p> <span className="rating">U/A 7+</span> <span>&#8226;</span> Action <span>&#8226;</span> Single Player</p>
            <button className="home-btn">Play Now</button>
        </div>
        <div className="home-btn-conatiner">
            {home_page_list.map((val,ind)=> {
                return <button key={ind} id={ind} onClick={clickHandler} className={currHome.id===ind ? "bullet-btn active-btn" : "bullet-btn"} >{`\u2B24`}</button>
            })}
            {/* <button onClick={clickHandler}>{`\u2B24`}</button>
            <button onClick={clickHandler}>{`\u2B24`}</button>
            <button onClick={clickHandler}>{`\u2B24`}</button>
            <button onClick={clickHandler}>{`\u2B24`}</button>
            <button onClick={clickHandler}>{`\u2B24`}</button> */}
        </div>
    </div>
}
