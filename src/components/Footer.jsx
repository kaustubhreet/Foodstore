import React from 'react'
import "./footer.css";

function Footer() {
    return (
    <>
       <footer>
        <div className="footer-content">
            <h3>FoodStore</h3>
            <p>Foolish Developer is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p>
            <ul className="socials">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-google"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy;2022 <a href="#">FoodStore</a>  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Service</a></li>
                      </ul>
                    </div>
        </div>

    </footer>
    </>
  )
}

export default Footer;