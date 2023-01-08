import React from 'react'
import "./footer.css";
import BotFunction from "./BotFunction";

function Footer() {
    return (
    <>
       <footer>
       <BotFunction/>
        <div className="footer-content">

            <h3>FoodStore</h3>
            <p>Foolish Developer is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p>
            <ul className="socials">
                <li><a href="https://www.facebook.com/kaustubh.reet"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/delhi_foodies_dhaba/"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-google"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com/in/kaustubh-reet-8679b1191/"><i className="fa fa-linkedin"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy;2022 <a href="/">FoodStore</a>  </p>
                    
        </div>

    </footer>
    </>
  )
}

export default Footer;