import '../css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home(){
    return (
        <div className="home">
          <header>
            <div className="container">
              <div className="intro-text">
                <div className="intro-lead-in">App Radiant</div>
                <div className="intro-heading">Radiant Rank App</div>
                {/*<a href="#services" className="page-scroll btn">Explore</a>*/}
              </div>
            </div>
          </header>
          <section id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Services</h2>
                  <h3 className="section-subheading text-muted">Features Our Website Provides</h3>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <img  className="img-responsive" src="https://github.com/anshvert/Mender/assets/53685410/4f00613b-000e-4609-adb5-41208c62e7ed" alt="XD"></img>
                  <h4 className="service-heading">Utility Apps</h4>
                  <p className="text-muted">Apps needed for daily usage</p>
                </div>
              {/*  <div className="col-md-4">*/}
              {/*      <span className="fa-stack fa-4x">*/}
              {/*          <i className="fa fa-circle fa-stack-2x text-primary"></i>*/}
              {/*          <i className="glyphicon glyphicon-heart"></i>*/}
              {/*      </span>*/}
              {/*    <h4 className="service-heading">Here's a heart</h4>*/}
              {/*    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam*/}
              {/*      architecto quo inventore harum ex magni, dicta impedit.</p>*/}
              {/*  </div>*/}
              {/*  <div className="col-md-4">*/}
              {/*      <span className="fa-stack fa-4x">*/}
              {/*          <i className="fa fa-circle fa-stack-2x text-primary"></i>*/}
              {/*          <i className="glyphicon glyphicon-tint"></i>*/}
              {/*      </span>*/}
              {/*    <h4 className="service-heading">Waterfall maybe?</h4>*/}
              {/*    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam*/}
              {/*      architecto quo inventore harum ex magni, dicta impedit.</p>*/}
              {/*  </div>*/}
              </div>
            </div>
          </section>
          <section id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Portfolio</h2>
                  <h3 className="section-subheading text-muted">Some Things I have Worked on ..</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 portfolio-item">
                  <a href="#portfolio-mender" className="portfolio-link" data-toggle="modal">
                    <img
                      src="https://github.com/anshvert/Mender/assets/53685410/81769553-2a03-4238-802b-94ac9f2a960d"
                      className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                    <h4>Mender</h4>
                    <p className="text-muted">A Movie Recommender System</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                  <a href="#portfolio-discode" className="portfolio-link" data-toggle="modal">
                    <img
                      src="https://github.com/anshvert/Mender/assets/53685410/ee1a6c0e-6493-4088-a180-674698016fe8"
                      className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                    <h4>Discode</h4>
                    <p className="text-muted">Ed-Tech Website</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                  <a href="#portfolio-appRadiant" className="portfolio-link" data-toggle="modal">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      src="https://github.com/anshvert/Mender/assets/53685410/08074efd-99d9-4607-a042-9934f1126d9a"
                      className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                    <h4>App Radiant</h4>
                    <p className="text-muted">X-App</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">About</h2>
                  <h3 className="section-subheading text-muted">My Entire Journey</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="timeline">
                    <li>
                      <div className="timeline-image">
                        <img className="img-circle" src="https://github.com/anshvert/Mender/assets/53685410/d1ac5274-50bb-4e0a-9357-aad2e947c0b0" alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>2019-2023</h4>
                          <h4 className="subheading">UnderGraduate Student</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Thapar Institute of Engineering and Technology</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="img-circle" src="https://github.com/ansh-sde0/App-Radiant/assets/122429570/65bf16b6-d654-4f20-afbf-1caefeb7311a" alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>Jan 2023 - Present</h4>
                          <h4 className="subheading">Mylo</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">SDE Backend Intern</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="team">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Our Amazing Team</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="team-member">
                    <img src="https://github.com/ansh-sde0/App-Radiant/assets/122429570/d5f27b20-3aeb-4caf-aa02-58d47af5a842"
                         className="img-circle" alt=""/>
                      <h4>Ansh Tyagi</h4>
                      <p className="text-muted">Lead Designer</p>
                      <ul className="social-buttons">
                        <li><a href="/#"><i><FontAwesomeIcon icon={faTwitter} style={{color: "#93a1b8",}} /></i></a>
                        </li>
                        <li><a href="/#"><i><FontAwesomeIcon icon={faFacebookSquare} /></i></a>
                        </li>
                        <li><a href="/#"><i><FontAwesomeIcon icon={faEnvelope} style={{color: "#da6c6c",}} /></i></a>
                        </li>
                      </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="team-member">
                    <img src="https://github.com/ansh-sde0/App-Radiant/assets/122429570/d5f27b20-3aeb-4caf-aa02-58d47af5a842"
                         className="img-circle" alt=""/>
                      <h4>Ansh Tyagi</h4>
                      <p className="text-muted">Lead Developer</p>
                      <ul className="social-buttons">
                        <li><a href="/#"><i><FontAwesomeIcon icon={faTwitter} style={{color: "#93a1b8",}} /></i></a>
                        </li>
                        <li><a href="/#"><i><FontAwesomeIcon icon={faFacebookSquare} /></i></a>
                        </li>
                        <li><a href="/#"><i><FontAwesomeIcon icon={faEnvelope} style={{color: "#da6c6c",}} /></i></a>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                  <p className="large text-muted"></p>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Contact Us</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <form name="sentMessage" id="contactForm" noValidate="">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Your Name *" id="name" required=""
                                 data-validation-required-message="Please enter your name."/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Your Email *" id="email" required=""
                                 data-validation-required-message="Please enter your email address."/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                          <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required=""
                                 data-validation-required-message="Please enter your phone number."/>
                            <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Your Message *" id="message" required=""
                                    data-validation-required-message="Please enter a message."></textarea>
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button type="submit" className="btn btn-xl">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <span className="copyright">Copyright © Your Website 2014</span>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline social-buttons">
                    <li><a href="/#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li><a href="/#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li><a href="/#"><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline quicklinks">
                    <li><a href="/#">Privacy Policy</a>
                    </li>
                    <li><a href="/#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog"
               aria-hidden="true">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl">
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="modal-body">
                      <h2>Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-responsive"
                           src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                           alt=""/>
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi
                          sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere
                          nemo!</p>
                        <p>
                          <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them
                          for free, courtesy of <a
                          href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or
                          you can purchase the 1500 icon set <a
                          href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>
                        <ul className="list-inline">
                          <li>Date: July 2014</li>
                          <li>Client: Round Icons</li>
                          <li>Category: Graphic Design</li>
                        </ul>
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i
                          className="fa fa-times"></i> Close Project
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog"
               aria-hidden="true">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl">
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="modal-body">
                      <h2>Project Heading</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-responsive img-centered"
                           src="https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0"
                           alt=""/>
                        <p><a href="https://designmodo.com/startup/?u=787">Startup Framework</a> is a website builder
                          for professionals. Startup Framework contains components and complex blocks (PSD+HTML
                          Bootstrap themes and templates) which can easily be integrated into almost any design. All of
                          these components are made in the same style, and can easily be integrated into projects,
                          allowing you to create hundreds of solutions for your future projects.</p>
                        <p>You can preview Startup Framework <a href="https://designmodo.com/startup/?u=787">here</a>.
                        </p>
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i
                          className="fa fa-times"></i> Close Project
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog"
               aria-hidden="true">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl">
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="modal-body">
                      <h2>Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-responsive img-centered"
                           src="https://unsplash.imgix.net/46/Ov6ZY1zLTWmhPC0wFysP_IMG_2896_edt.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6518e4df89659818f6c0392175a9c5e6"
                           alt=""/>
                        <p>Treehouse is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan
                          Jaya</a>. This is bright and spacious design perfect for people or startup companies looking
                          to showcase their apps or other projects.</p>
                        <p>You can download the PSD template in this portfolio sample item at <a
                          href="https://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">FreebiesXpress.com</a>.
                        </p>
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i
                          className="fa fa-times"></i> Close Project
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog"
               aria-hidden="true">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl">
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="modal-body">
                      <h2>Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-responsive img-centered"
                           src="https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0"
                           alt=""/>
                        <p>Start Bootstrap's Agency theme is based on Golden, a free PSD website template built by <a
                          href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Golden is a modern and clean
                          one page web template that was made exclusively for Best PSD Freebies. This template has a
                          great portfolio, timeline, and meet your team sections that can be easily modified to fit your
                          needs.</p>
                        <p>You can download the PSD template in this portfolio sample item at <a
                          href="https://freebiesxpress.com/gallery/golden-free-one-page-web-template/">FreebiesXpress.com</a>.
                        </p>
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i
                          className="fa fa-times"></i> Close Project
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog"
               aria-hidden="true">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl">
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="modal-body">
                      <h2>Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-responsive img-centered"
                           src="https://unsplash.imgix.net/46/Ov6ZY1zLTWmhPC0wFysP_IMG_2896_edt.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6518e4df89659818f6c0392175a9c5e6"
                           alt=""/>
                        <p>Escape is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan
                          Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This
                          template is ideal for those looking for a simple one page solution to describe your business
                          and offer your services.</p>
                        <p>You can download the PSD template in this portfolio sample item at <a
                          href="https://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">FreebiesXpress.com</a>.
                        </p>
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i
                          className="fa fa-times"></i> Close Project
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog"
               aria-hidden="true">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl">
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="modal-body">
                      <h2>Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-responsive img-centered"
                           src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                           alt=""/>
                        <p>Dreams is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan
                          Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a
                          beautiful template that’s designed with the Bootstrap framework in mind.</p>
                        <p>You can download the PSD template in this portfolio sample item at <a
                          href="https://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.
                        </p>
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i
                          className="fa fa-times"></i> Close Project
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            style={{
              height: "20px",
              width: "40px",
              minHeight: "20px",
              minWidth: "40px",
              position: "absolute",
              opacity: "0.85",
              zIndex: "8675309",
              display: "none",
              cursor: "pointer",
              backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAADU0lEQVR42s2WXUhTYRjHz0VEVPRFUGmtVEaFUZFhHxBhsotCU5JwBWEf1EWEEVHQx4UfFWYkFa2biPJiXbUta33OXFtuUXMzJ4bK3Nqay7m5NeZq6h/tPQ+xU20zugjOxR/+7/O8539+5znnwMtNTExwJtMb3L/fiLv3botCSmUjeCaejTOb39AiFothfHxcFIrHY8RksZjBsckJcOIRMfFsHD/SsbExUYpnI8DR0dGUGjSb0byhEJp5Uqg5CTSzc2CQleJbMEj9/ywBcGRkJEk9DQqouEVQT1sK444yWI9UonmTjGqauVLEIlHa9x8lAMbj8SSpp0rwKGMVvg8P46vbg0C7na8z8JsMcgHe7jlEa+edRhiLy8n/TUMfu6EvLElk+U0WtGwrTrdfAGQf5J8iiK4LVzDU28t8JtMSocf8E+l68myaNFXm/6rXslLK7ay5TOunuRvZWpJuvwAYjUaTpOIWoquuAZ219RTaxKYp9BbjycoN5FvL9qH9TBX5rvoGdJythvXYSTxdtRnWylO/ZdqrLsGwszzhWQ593z2KlAwCYCQSSZJ6ehZ0W7bD9VBLgN0NCqr3qR7R2rBrL3pu3Sb/7nDlz2uy6cG0OXk0GTbZXzNp8trsPAQdTj6frlWzN2DcXZGKQQAMh8NJ6rpyHe+PnkCr/CAFdZyvpfpjuvkifLF9wIt1Wwlo0OHie1RvWrKa93RjzfzliTzPKz3ltB0/Tevmwp14wGUgHAzSOoUEwFAolFaaBSuhnslPRkJexUJtZ6v5HtUeLswl33n1BgEY5fvhs9sJ3FAiT+QYyyvoAQJuD0KBAFRTJNAuz5/s3gJgMBhMJwrVFRThM5tY5zUF/A4X1f2fvQTRLCuBreoim0YmAbqNJryvPEXeeq46kaNdkQ/1HCncbJKPs9ZSv2VHGfWsZ2hfkhKAfr8/pdxWKx4wwD69PmVfNSOL+lr2w+gYqHpWDtXt1xQ8AMlWU0e1lqLd/APRHoP8AJqWrQG9gYxcPMsvSJUvAA4MDKTUJ7MZLaVy8v+qT21tcDx/OemePr0RTkNrur4A6PP5xCgBsL+/X4wiQDpuuVxOeL1eMYmYeDY6sOp0z+B0OuHxeEQhxkJMFosJiSO/UinOI/8Pc+l7KKArAT8AAAAASUVORK5CYII=)"}}>
          </span>
        </div>
    )
}
export default Home