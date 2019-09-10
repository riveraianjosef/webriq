import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import MySwiper from "../components/Swiper";
import SampleForm from "../components/Form";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// images
import automation from "../img/automation.svg";
import branding from "../img/branding.svg";
import design from "../img/design.svg";
import dividerBlue from "../img/divider-blue.svg";
import dividerOrange from "../img/divider-orange.svg";
import dividerWhiteTop from "../img/divider-white-top.svg";
import laneMitchell from "../img/lane-mitchelle.png";
import pair from "../img/pair.svg";
import questions from "../img/questions.svg";
import technology from "../img/technology.svg";
import logo from "../img/webriq-logo.png";
import zenith from "../img/zenith-chiro.png";
import atfBg from "../img/atf-bg.svg";
import blueCheck from "../img/checked-blue.png";

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />

        <div class="container-fluid section-one">
          <div class="container atf">
            <a class="navbar-brand" href="#">
              <img
                class="img-fluid float-left"
                src={logo}
                width="70px"
                alt="Webriq Logo"
              />
            </a>
            <div class="row sec-one-inner-div">
              <div class="col-md-12">
                <div class="brandstamp text-center">
                  <h1 class="section-one-h1-1">
                    Don’t Get Mad, Go Mad With WebriQ Goes Mad
                  </h1>

                  <h1 class="section-one-h1-2"></h1>
                  <a
                    class="btn btn-primary cta"
                    role="button"
                    href="https://calendly.com/alex-belding/go-mad"
                    target="_blank"
                  >
                    Schedule A Consult
                  </a>
                </div>
              </div>

              {/* <div class="col-md-6">
                <img src={pair} class="img-fluid atf-img" alt="Pair" />
              </div> */}
              <div class="col"></div>
            </div>
          </div>

          {/* <img src={dividerBlue} class="divi-blue" alt="Blue Divider" /> */}
        </div>

        <div class="container section-two">
          <div class="row text-center">
            <div class="col-md-3">
              <img src={design} alt="Design" />
              <h5>Design</h5>
              <p>
                We design and develop websites that engage, build trust and
                work.
              </p>
            </div>
            <div class="col-md-3">
              <img src={automation} alt="Automation" />
              <h5>Automation</h5>
              <p>Marketing automation for local audiences.</p>
            </div>
            <div class="col-md-3">
              <img src={branding} alt="Branding" />
              <h5>Branding</h5>
              <p>
                Building online brands with engaging content and digital
                experiences for local audiences.
              </p>
            </div>
            <div class="col-md-3">
              <img src={technology} alt="Technology" />
              <h5>Technology</h5>
              <p>
                Our WebriQ APP makes managing and growing your website simple
                and centralized.
              </p>
            </div>
          </div>
        </div>

        <div class="container-fluid section-three">
          <div class="row why-go-mad-row mx-auto">
            <div class="col-md-6 mx-auto">
              <img
                src={questions}
                class="img-fluid sec-3-img"
                alt="Questions"
              />
            </div>
            <div class="col-md-6 mx-auto why-go-mad-col-2">
              {/* <h2 class="why-go-mad-h2-1">GO MAD</h2> */}
              <h2 class="why-go-mad-h2-2">Why Go Mad?</h2>
              <ul class="why-go-mad-list">
                <li>
                  <img src={blueCheck} alt="Blue Check" />
                  &nbsp;Flat Monthly Fee, No Hidden Fees
                </li>
                <li>
                  <img src={blueCheck} alt="Blue Check" />
                  &nbsp;100% Custom Website
                </li>
                <li>
                  <img src={blueCheck} alt="Blue Check" />
                  &nbsp;Unlimited support: Changes Design, Updates included
                </li>
                <li>
                  <img src={blueCheck} alt="Blue Check" />
                  &nbsp;Full Control of the Website, We put you in the driver’s
                  seat
                </li>
              </ul>
            </div>
          </div>
          <img
            src={dividerWhiteTop}
            class="divi-white-top"
            alt="White Top Divider "
          />
          <img src={dividerOrange} class="divi-orange" alt="Bottom Divider " />
        </div>

        <div class="our-mad-wdaas-sec">
          <h2 class="text-center our-mad-wdaas">Our Mad WSaaS</h2>
          <div class="row wdaas-row">
            <div class="col">
              <div class="text-center wdaas-col">
                <h4 class="text-center">Mad</h4>
                <p>
                  one-time setup fee of $299
                  <br />
                  $125 a month paid annually
                </p>
              </div>
              <div class="wdaas-col-2">
                <ul>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Customizable Design
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Unlimited Updates &amp; Changes
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;A limited number of pages and contact forms
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Hosting, Security &amp; Analytics Included
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="text-center wdaas-col">
                <h4 class="text-center">Madder</h4>
                <p>
                  one-time setup fee of $999
                  <br />
                  $333.25 a month paid annually
                  <br />
                  $399 a month paid monthly
                </p>
              </div>
              <div class="wdaas-col-2 column-2">
                <ul>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Everything in Mad+
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;100% Custom Design
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Unlimited pages and custom web forms
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Enterprise-grade customer support tools
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Enhanced Analytics
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="text-center wdaas-col">
                <h4 class="text-center">Maddest</h4>
                <p>
                  one-time setup fee of $1,999
                  <br />
                  $583.25 a month paid annually
                  <br />
                  $699 a month paid monthly
                </p>
              </div>
              <div class="wdaas-col-2 column-3">
                <ul>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Everything in Madder+ Custom ChatBot
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;integrated on website &amp; Facebook
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;SEO focused content marketing
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Monthly Newsletter
                  </li>
                  <li>
                    <img src={blueCheck} alt="Blue Check " />
                    &nbsp;Custom landing pages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid section-four">
          <div class="text-center div-section-4">
            <div class="update-text">
              <h3 class="text-center">Unlimited Updates</h3>
              <h3>Starting At $125 A Month!</h3>
              <a
                class="btn btn-primary sec-4-cta"
                role="button"
                href="https://calendly.com/alex-belding/go-mad"
                target="_blank"
              >
                Schedule A Consult
              </a>
            </div>
          </div>
        </div>

        <div class="container-fluid section-five">
          <img
            class="testi-div"
            src={dividerWhiteTop}
            alt="White Top Divider"
          />
          <h2 class="text-center">Testimonials</h2>
          <div class="container">
            <div class="row">
              <div class="col-lg-6 zenith-img"></div>
              <div class="col-lg-6 content text-right">
                <h5 class="text-right">Zenith Chiropractic</h5>

                <p class="text-justify mb-0 ">
                  “The team at Webriq Goes Mad exceeded my expectations. The
                  turnaround on getting my new website up and running was fast,
                  easy, and I am looking forward to improved performance for my
                  business online. One of the things that I really appreciated
                  was their quick response time and easy communication.”
                </p>

                <footer class="blockquote-footer ">Dr John Stenberg</footer>
                <a
                  class="btn btn-primary cta"
                  role="button"
                  href="https://zenithchiroco.com"
                  target="_blank"
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div class="row flex-column-reverse flex-lg-row">
              <div class="col-lg-6 content text-left">
                <h5> Lane Mitchell Jewelers</h5>
                <p class="text-justify mb-0 ">
                  “WebriQ Goes Mad is a really fantastic company that does all
                  the technical stuff of building and maintaining a web site yet
                  empowers the customer to be in full control. Their web design
                  as a service model was a huge part in us deciding to go with
                  this web company and we are so glad we did! Highly recommend!”
                </p>
                <footer class="blockquote-footer text-left">
                  L’Aura Williams
                </footer>
                <a
                  class="btn btn-primary cta"
                  role="button"
                  href="https://lanemitchelljewelers.com"
                  target="_blank"
                >
                  Visit Website
                </a>
              </div>
              <div class="col-lg-6 lane-img"></div>
            </div>
          </div>
        </div>

        <div class="container footer">
          <div class="copyrights">
            <div class="container">
              <p class="my-4">
                All rights reserved! WebriQ Pte Ltd{" "}
                <a href="https://webriq.com/terms" target="_blank">
                  Terms of Use
                </a>{" "}
                |{" "}
                <a href="https://webriq.com/privacy" target="_blank">
                  Provicy Policy
                </a>{" "}
                |{" "}
                <a href="https://webriq.com/gdpr" target="_blank">
                  About GDPR
                </a>{" "}
                |{" "}
                <a href="https://webriq.com/cookies" target="_blank">
                  Cookies
                </a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
