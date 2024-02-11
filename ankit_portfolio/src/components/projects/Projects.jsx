import React, { useState } from 'react'
import "./projects.css";

const Projects = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }



    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Talk is cheap! Let's delve inside Code <i class='bx bx-coffee'></i>
            </span>


            <div className="projects__container container grid">
                <div className="projects__content">



                    {/* Area for REVERB PROJECT  */}

                    <div>
                        <i className="uil uil-shield projects__icon"></i>
                        <h3 className="projects__title">Reverb - Intuitive Progression Platform</h3>

                    </div>


                    <span className="projects__button" onClick={() => toggleTab(1)}>
                        View more
                        <i className="uil uil-arrow-right projects__button-icon"></i></span>


                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Reverb - for Geeks</h3>
                            <p className="projects__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores delectus soluta incidunt odio nihil eos quam ut dolore deserunt?</p>


                            <ul className="projects__modal-projects grid">


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>



                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                            </ul>




                        </div>
                    </div>

                </div>




                {/* AREA FOR WANDERVENTURE PROJECT */}

                <div className="projects__content">



                    <div>
                        <i className="uil uil-mountains projects__icon"></i>
                        <h3 className="projects__title">Wanderventure - Travel & Overview</h3>

                    </div>


                    <span onClick={() => toggleTab(2)} className="projects__button">View more <i className="uil uil-arrow-right projects__button-icon"></i></span>


                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Wanderventure</h3>
                            <p className="projects__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores delectus soluta incidunt odio nihil eos quam ut dolore deserunt?</p>


                            <ul className="projects__modal-projects grid">


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>



                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                            </ul>




                        </div>
                    </div>

                </div>





                {/* AREA FOR HEALTHSURE PROJECT  */}


                <div className="projects__content">



                    <div>
                        <i className="uil uil-heart-medical projects__icon"></i>
                        <h3 className="projects__title">HealthSure - Medical Guidance & Analytics</h3>

                    </div>


                    <span onClick={() => toggleTab(3)} className="projects__button">View more <i className="uil uil-arrow-right projects__button-icon"></i></span>


                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">HealthSure</h3>
                            <p className="projects__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores delectus soluta incidunt odio nihil eos quam ut dolore deserunt?</p>


                            <ul className="projects__modal-projects grid">


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>



                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolorum!</p>
                                </li>


                            </ul>




                        </div>
                    </div>

                </div>




            </div>

        </section>
    )
}

export default Projects