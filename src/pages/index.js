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
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
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
                  <h4 className="text-white"><a href="">Steam Collector</a></h4>
                  <p className="mb-0 text-white-50">
                  Steam Collector is a simple MERN stack website to keep track of your Steam games. It can be overwhelming to look at your Steam library and have so many choices of games to play. Steam Collector makes it easy to see the games you have not played yet when you want to try something new, or which games you currently playing or already completed.

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
                  <h4 className="text-white"><a href="">Hyrule Stays</a></h4>
                  <p className="mb-0 text-white-50">
                  Hyrule Stays is a campsite/stable review site based on the world of Hyrule from the Legend of Zelda video game series. 
              Hyrule Stays is designed for travelers to add, rate, and review various places they have stayed around Hyrule.
              This site was built using Javascript, HTML, CSS, Node,js, Express, and MongoDB.
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
              <h4><a href="https://thebestbarcade.herokuapp.com/">The Best Barcade</a></h4>
              <p className="text-black-50 mb-0">
                The Best Barcade is a way to keep track of the games we love and the local haunts that have them. 
                This site was built with Python and Django.
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
              <h4><a href="https://celentanoad.github.io/Threes/">Threes</a></h4>
              <p className="text-black-50 mb-0">
              This web-based version of the gambling dice game Threes was built using HTML, CSS, and Javascript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
