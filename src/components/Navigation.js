import React from "react";
import { Row, Col, Container } from "reactstrap";

function Navigation() {
  return (
    <div>
      <header id="masthead" className="site-header">
        <div className="top-header">
          <Container fluid>
            <Row>
              <Col lg={3} className="text-center">
                <a
                  class="navbar-brand header-image"
                  href="https://www.nexadental.ca/"
                  title="Nexa Dental"
                  rel="home"
                >
                  <img
                    alt="Nexa Dental"
                    border="0"
                    nitro-lazy-src="https://cdn-elgih.nitrocdn.com/oHenIZaNYCwaxQqGpqbjnGGAVjhJrneK/assets/static/optimized/rev-78c6e9e/wp-content/uploads/2021/05/nexa-dental-logo.png"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NDk3OjIyNg==-1"
                    src="https://cdn-elgih.nitrocdn.com/oHenIZaNYCwaxQqGpqbjnGGAVjhJrneK/assets/static/optimized/rev-78c6e9e/wp-content/uploads/2021/05/nexa-dental-logo.png"
                  />
                </a>
              </Col>
              {/* <div class="col-lg-3 text-center"></div> */}
              <Col lg={9} md={12} className="top-right-bar">

                <aside
                  id="custom_html-2"
                  className="widget_text widget widget_custom_html"
                />
                <div className="textwidget custom-html-widget">
                  <ul className="top-contact-info">
                    <li className="social-links">
                      <a
                        href="https://www.facebook.com/nexadentalcalgary"
                        target="_blank"
                        rel="noopener"
                      >
                        <i className="ne-icon-fb-circle-icon"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/nexadentalcalgary/"
                        target="_blank"
                        rel="noopener"
                      >
                        <i className="ne-icon-instagram-circle-icon"></i>
                      </a>
                      <a
                        href="https://www.google.com/maps/place/NEXA+DENTAL+(Previously+Crown+Dental)/@50.9586677,-114.073143,17z/data=!3m2!4b1!5s0x53717723c8a55e73:0x4989cf1c95b3b710!4m5!3m4!1s0x537171beb1e67857:0x8e4733574be6fd1c!8m2!3d50.9586677!4d-114.073143"
                        target="_blank"
                        rel="noopener"
                      >
                        <i className="ne-icon-google-circle-icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <style>
        {`
          .site-header {
            position: relative;
            padding-bottom: 40px;
          }
          .site-header .top-header{
            padding-top: 10px;
            padding-bottom: 10px;
            background: #fff
          }
          
        `}
      </style>
    </div>
  );
}

export default Navigation;
