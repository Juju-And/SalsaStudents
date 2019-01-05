import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav className="nav-bar">
                        <div className="wrapper-logo-bar">
                            <img className="logo-image" src={require("./images/SALSA_logo.png")} height="80px"/>
                        </div>

                        <div className="wrapper-menu-button">
                            <button className="main-menu-button">xxx</button>
                        </div>
                        <div className="wrapper-menu">
                            <ul>
                                <li>aktualności</li>
                                <li>grafik</li>
                                <li>nasze zajęcia</li>
                                <li>wyjazdy integracyjne</li>
                                <li>o nas</li>
                                <li>cennik</li>
                                <li>kontakt</li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <section className="hero-image">
                    <img className="hero-image" src={require("./images/hero-image.jpg")}/>
                </section>
                <section className="news">
                    <h2>aktualności</h2>
                    <div className="wrapper-list-news">
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <div className="wrapper-images">
                        <img className="photo" src={require("./images/img1.jpg")}/>
                        </div>
                    </div>
                    <h3 className="news-title">Tytuł newsa</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet expedita incidunt sapiente
                        similique.
                        Adipisci aliquam aliquid blanditiis dolorem ea earum error fugit magnam perferendis quam sed sit
                        soluta, vel voluptatem.
                    </p>

                </section>
                <section>
                    <h2>grafik</h2>
                    <div className="schedule"> xxx</div>
                </section>
                <section><h2>nasze zajęcia</h2></section>
                <section><h2>wyjazdy integracyjne</h2></section>
                <section><h2>o nas</h2></section>
                <section><h2>cennik</h2></section>
                <section className="form"><h2>kontakt</h2></section>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
