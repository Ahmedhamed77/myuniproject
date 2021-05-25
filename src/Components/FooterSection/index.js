import React from 'react';
import FooterStyle from './index.css';

const FooterSection = () => {
    return (
        <footer>
            <div className="container">
                <p className="description">
                    The first university beyond the Ural Mountains. 
                    Today, Tomsk State University is the leading classical 
                    research university, a recognized center of science, 
                    education, and innovation. TSU is one of the five best 
                    classical universities in Russia and the fifth best university 
                    in the Russian Federation according to the QS rankings of the BRICS countries.
                </p>

                <div className="row-1">
                    <p>Esse minim cupidatat mollit elit consectetur enim est aliqua ea deserunt.</p>
                    <p>Esse minim cupidatat mollit elit consectetur enim est aliqua ea deserunt.</p>
                    <p>Esse minim cupidatat mollit elit consectetur enim est aliqua ea deserunt.</p>
                    <p>Esse minim cupidatat mollit elit consectetur enim est aliqua ea deserunt.</p>
                </div>

                <div className="images">
                    <img src="https://picsum.photos/id/513/600/600" alt="" />
                    <img src="https://picsum.photos/id/550/400/400" alt="" />
                    <img src="https://picsum.photos/id/605/400/400" alt="" />
                </div>

                <div className="real-footer">
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">React</a></li>
                            <li><a href="#">Front-End</a></li>
                            <li><a href="#">Back-End</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection