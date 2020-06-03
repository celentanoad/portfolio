import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import bestBarcade from '../assets/images/best-barcade.png';
import steamCollector from '../assets/images/steam-collector.png';
import threes from '../assets/images/threes.png';
import bgMaster from '../assets/images/bg-masthead.jpg';
import hyruleStays2 from '../assets/images/hyrule-stays2.png';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="social">
            <a href="#social" className="btn btn-primary">
              Get In Touch
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">My Story</h2>
            <p className="text-white-50">
            I am a software developer who enjoys finding solutions 
            to problems and seeking out answers from different perspectives. 
            Coming from a background in social work, I am passionate about improving efficiency and 
            motivated by making things work for people. I strive to always 
            learn more through communicating with others and working with a team. 
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Skills</h2>
            <div className="row">
              <div className="col">
                <h4 className="text-white-50"> Javascript</h4>
              </div>
              <div className="col">
                <h4 className="text-white-50"> Node.js</h4>
              </div>
              <div className="col">
                <h4 className="text-white-50"> HTML/CSS</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4 className="text-white-50"> React.js</h4>
              </div>
              <div className="col">
                <h4 className="text-white-50"> MongoDB</h4>
              </div>
              <div className="col">
                <h4 className="text-white-50"> Express</h4>
              </div>
            </div>  
            <div className="row">
              <div className="col">
                <h4 className="text-white-50"> Python</h4>
              </div>
              <div className="col">
                <h4 className="text-white-50"> Django</h4>
              </div>
              <div className="col">
                <h4 className="text-white-50"> SQL</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <h4 className="text-white-50"> OAuth</h4>
              </div>
              <div className="col">
              <h4 className="text-white-50"> JWT</h4>
              </div>
              <div className="col">
              <h4 className="text-white-50"> GitHub</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-center">Projects</h2>
            <hr />
          </div>
        </div>


        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={steamCollector} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white"><a href="https://steam-collector.herokuapp.com/" className="text-white-50" target="_blank">Steam Collector</a></h4>
                  <p className="mb-0 text-white-50">
                  MongoDB | Express | React | Node.js
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={hyruleStays2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white"><a href="https://hyrule-stays.herokuapp.com/" className="text-white-50" target="_blank">Hyrule Stays</a></h4>
                  <p className="mb-0 text-white-50">
                    Javascript | Node.js | MongoDB | OAuth
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br>
      <div className="container">  
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bestBarcade} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4><a href="https://thebestbarcade.herokuapp.com/" target="_blank">The Best Barcade</a></h4>
              <p className="text-black-50 mb-0">
                Python | Django
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={threes} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4><a href="https://celentanoad.github.io/Threes/" target="_blank">Threes</a></h4>
              <p className="text-black-50 mb-0">
              Javascript | HTML | CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    < section id="social">
      <SocialLinks />
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
