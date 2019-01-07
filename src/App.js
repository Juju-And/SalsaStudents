import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="pv10">
                    <nav className="nav-bar">
                        {/*<div className="wrapper-logo-bar">*/}
                        <div className="wrapper-logo">
                            <img className="logo-image" src={require("./images/SALSA_logo.png")} height="80px" alt=" "/>
                        </div>

                        <div className="wrapper-menu-button">
                            <div className="wrapper-hamburger">
                            <div className="button-part"></div>
                            <div className="button-part"></div>
                            <div className="button-part"></div>
                            </div>
                            {/*<button className="main-menu-button">*/}
                                {/*<a className="btn-open" href="#"></a>*/}
                            {/*</button>*/}
                        </div>
                        {/*</div>*/}
                        <div className="wrapper-menu">
                            <ul>
                                <li><a href="#news" className="cool-link">aktualności</a></li>
                                <li><a href="#sectionSchedule" className="cool-link">grafik</a></li>
                                <li><a href="#ourClasses" className="cool-link">nasze zajęcia</a></li>
                                <li><a href="#trips" className="cool-link">wyjazdy integracyjne</a></li>
                                <li><a href="#about" className="cool-link">o nas</a></li>
                                <li><a href="#pricelist" className="cool-link">cennik</a></li>
                                <li><a href="#contact" className="cool-link">kontakt</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <section className="hero-image">
                    <img className="hero-image" src={require("./images/hero-image.jpg")} alt=" "/>
                </section>
                <section className="news">
                    <h2 className="pv10 section-title">aktualności</h2>
                    <div className="wrapper-list-news">
                        <ul>
                            <li><a className="cool-link">Lorem ipsum dolor sit amet.</a></li>
                            <li><a className="cool-link">Lorem ipsum dolor sit amet.</a></li>
                            <li><a className="cool-link">Lorem ipsum dolor sit amet.</a></li>
                            <li><a className="cool-link">Lorem ipsum dolor sit amet.</a></li>
                        </ul>
                        <div className="wrapper-images ">
                            <img className="photo" src={require("./images/img1.jpg")} alt=" "/>
                        </div>
                    </div>
                    <h3 className="news-title pv10">Tytuł newsa</h3>
                    <p className="news-content pv10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet expedita incidunt sapiente
                        similique.
                        Adipisci aliquam aliquid blanditiis dolorem ea earum error fugit magnam perferendis quam sed sit
                        soluta, vel voluptatem.
                    </p>

                </section>
                <section id="sectionSchedule">
                    <h2 className="pv10 section-title">grafik</h2>
                    <div className="schedule">
                        <div className="wrapper-buttons-schedule pv10">
                            <button className="btn btn-today">Dziś</button>
                            <button type="button" className="btn btn-left"><i className="arrow arrow-left"></i></button>
                            <button type="button" className="btn btn-right"><i className="arrow arrow-right"></i>
                            </button>
                        </div>
                        <h4 className="schedule-days">31 grudzień 2018 - 6 styczeń 2019</h4>
                        <div className="wrapper-days-container pv10">
                            <div className="wrapper-weekday">
                                <h5 className="weekday center-text">PN</h5>
                                <div className="days monday">
                                    <p className="hour">09:00 - 10:30</p>
                                    <p className="dance-name">Nazwa zajęć</p>
                                    <p className="teacher">Prowadzący Nazwisko</p>
                                </div>
                            </div>
                            <div className="wrapper-weekday">
                                <h5 className="weekday center-text">WT</h5>
                                <div className="days tuesday">
                                    <p className="hour">09:00 - 10:30</p>
                                    <p className="dance-name">Nazwa zajęć</p>
                                    <p className="teacher">Prowadzący Nazwisko</p>
                                </div>
                            </div>
                            <div className="wrapper-weekday">
                                <h5 className="weekday center-text">ŚR</h5>
                                <div className="days wednesday">
                                    <p className="hour">09:00 - 10:30</p>
                                    <p className="dance-name">Nazwa zajęć</p>
                                    <p className="teacher">Prowadzący Nazwisko</p>
                                </div>
                                <div className="days wednesday">
                                    <p className="hour">09:00 - 10:30</p>
                                    <p className="dance-name">Nazwa zajęć</p>
                                    <p className="teacher">Prowadzący Nazwisko</p>
                                </div>
                            </div>
                            <div className="wrapper-weekday">
                                <h5 className="weekday center-text">CZW</h5>
                                <div className="days wednesday">
                                    <p className="hour">09:00 - 10:30</p>
                                    <p className="dance-name">Nazwa zajęć</p>
                                    <p className="teacher">Prowadzący Nazwisko</p>
                                </div>
                            </div>
                            <div className="wrapper-weekday">
                                <h5 className="weekday center-text">PT</h5>
                                <div className="days wednesday">
                                    <p className="hour">09:00 - 10:30</p>
                                    <p className="dance-name">Nazwa zajęć</p>
                                    <p className="teacher">Prowadzący Nazwisko</p>
                                </div>

                            </div>
                            <div className="wrapper-weekday">
                                <h5 className="weekday center-text">SB</h5>
                                <div className="days wednesday">
                                    <p className="hour">09:00 - 10:30</p>
                                    <p className="dance-name">Nazwa zajęć</p>
                                    <p className="teacher">Prowadzący Nazwisko</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-classes">
                    <h2 className="pv10 section-title">nasze zajęcia</h2>
                    <div className="wrapper-list-news">
                        <ul>
                            <li>Rodzaj zajęć</li>
                            <li>Rodzaj zajęć</li>
                            <li>Rodzaj zajęć</li>
                            <li>Rodzaj zajęć</li>
                        </ul>
                        <div className="wrapper-images ">
                            <img className="photo" src={require("./images/ourClasses.JPG")} alt=" "/>
                        </div>
                    </div>
                    <h3 className="news-title pv10">Rodzaj zajęć 1</h3>
                    <p className="pv10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet expedita incidunt sapiente
                        similique.
                        Adipisci aliquam aliquid blanditiis dolorem ea earum error fugit magnam perferendis quam sed sit
                        soluta, vel voluptatem.
                    </p>
                </section>
                <section className="trips">
                    <h2 className="pv10 section-title">wyjazdy integracyjne</h2>
                    <div className="wrapper-list-news">
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <div className="wrapper-images ">
                            <img className="photo" src={require("./images/gory.jpg")} alt=" "/>
                        </div>
                    </div>
                    <h3 className="news-title pv10">Wycieczka 1</h3>
                    <p className="pv10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet expedita incidunt sapiente
                        similique.
                        Adipisci aliquam aliquid blanditiis dolorem ea earum error fugit magnam perferendis quam sed sit
                        soluta, vel voluptatem.
                    </p>
                </section>
                <section>
                    <h2 className="pv10 section-title">o nas</h2>
                    <div className="wrapper-list-news ">
                        <ul>
                            <li>Prowadzący</li>
                            <li>Prowadzący</li>
                            <li>Prowadzący</li>
                            <li>Prowadzący</li>
                        </ul>
                        <div className="wrapper-images ">
                            <img className="photo" src={require("./images/gory.jpg")} alt=" "/>
                        </div>
                    </div>
                    <h3 className="news-title pv10">Prowadzący 1</h3>
                    <p className="pv10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet expedita incidunt sapiente
                        similique.
                        Adipisci aliquam aliquid blanditiis dolorem ea earum error fugit magnam perferendis quam sed sit
                        soluta, vel voluptatem.
                    </p>
                </section>
                <section className="pricelist">
                    <h2 className="pv10 section-title">cennik</h2>
                    <h4 className="pv10 center-text pass-type">karnet rodzaj 1</h4>
                    <table className="pv10 pricelist-table">
                        <tbody>
                        <tr>
                            <td className="dance-type-price">Rodzaj zajęć</td>
                            <td className="dance-price">100zł/msc</td>
                        </tr>
                        <tr>
                            <td className="dance-type-price">Lorem ipsum dolor sit.</td>
                            <td className="dance-price">200zł/msc</td>
                        </tr>
                        <tr>
                            <td colspan="2" className="additional-info">*Lorem ipsum dolor sit amet, consectetur.</td>
                        </tr>
                        </tbody>
                    </table>
                    <h4 className="pv10 center-text pass-type">karnet rodzaj 2</h4>
                        <table className="pv10 pricelist-table">
                            <tbody>
                            <tr>
                                <td className="dance-type-price">Rodzaj zajęć</td>
                                <td className="dance-price">100zł/msc</td>
                            </tr>
                            <tr>
                                <td className="dance-type-price">Lorem ipsum dolor sit.</td>
                                <td className="dance-price">200zł/msc</td>
                            </tr>
                            <tr>
                                <td colspan="2" className="additional-info">*Lorem ipsum dolor sit amet, consectetur.</td>
                            </tr>
                            </tbody>
                    </table>
                </section>
                <section className="form-container">
                    <h2 className="pv10">kontakt</h2>
                    <div className="wrapper-logo-bottom pv10">
                        <img className="logo-image" src={require("./images/SALSA_logo.png")} height="80px" alt=" "/>
                    </div>
                    <p className="address address-bottom pv10 center-text">adres Lorem ipsum dolor sit amet,
                        consectetur.</p>
                    <p className="address address-bottom-email pv10 center-text">lorem@lorem.com</p>
                    <p className="address phone-bottom pv10 center-text">123-456-789</p>

                    <form className="form-filling pv10">
                        <label>
                            <input className="field input-name" type="text" placeholder="Twoje imię" name="imię"/>
                        </label>
                        <label>
                            <input className="field input-email" type="email" placeholder="Twój adres e-mail"
                                   name="email"/>
                        </label>
                        <textarea className="field input-textarea" placeholder="Wiadomość..." name="message" cols="25"
                                  rows="10"></textarea>
                        {/*<input type="checkbox" className="checkbox checkbox-sign"/>*/}
                        <input type="checkbox" id="check" className="checkbox checkbox-sign"/>
                        <label htmlFor="check">
                            <svg viewBox="0,0,50,50">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>
                        <label htmlFor="checkbox" className="checkbox checkbox-text">Zgadzam się na przetwarzanie danych
                            osobowych.
                        </label>
                        <button className="btn" type="submit">Wyślij</button>
                    </form>
                </section>
                <footer>
                </footer>
            </div>
        );
    }
}

export default App;
