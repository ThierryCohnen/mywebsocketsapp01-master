import Thierry from './images/Thierry.jpg';
import aos from './css/aos.css';
import bootstrap from './css/bootstrap.min.css';
// import styles from './styles/main.css';



function App02() {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Thierry Cohnen CV</title>
            <meta name="description" content="Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio, skils and experience." />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" />
            <link href={aos} rel="stylesheet" />
            <link href={bootstrap} rel="stylesheet" />
            {/* <link href={styles} rel="stylesheet" /> */}
            <header>
                <div className="profile-page sidebar-collapse">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll={400}>
                        <div className="container">
                            <div className="navbar-translate">
                                <a className="navbar-brand" href="#" rel="tooltip" />
                                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-bar bar1" /><span className="navbar-toggler-bar bar2" /><span className="navbar-toggler-bar bar3" /></button>
                            </div>
                            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#skill">Skills</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#experience">Experience</a></li>
                                    <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <div className="page-content"> */}
                <div>
                    {/* <div className="profile-page"> */}
                        {/* <div className="wrapper"> */}
                            {/* <div className="page-header page-header-small" filter-color="green"> */}
                                {/* <div className="page-header-image" data-parallax="true" style={{ backgroundImage: 'url("images/cc-bg-1.jpg")' }} /> */}
                                <div className="container">
                                    <div className="content-center">
                                        <div className="cc-profile-image">
                                            <a href="#"><img src={Thierry} alt="Image" /></a>
                                        </div>
                                        <div className="h2 title">Thierry Cohnen</div>
                                        <p className="category ">Junior Web Developer</p>
                                        <p className="category ">I develop Web Solutions</p>
                                        <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a className="btn btn-primary" href="https://thierrycohnen.github.io/portfolio/pdf/Thierry%20Cohnen%20developer%20cv%202020-09-01.pdf" target="_blank" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">CV</a>
                                        <a className="btn btn-primary" href="#portfolio" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Portfolio</a>
                                    </div>
                                {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                    <div className="section" id="about">
                        <div className="container">
                            <div className="card" data-aos="fade-up" data-aos-offset={10}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="card-body">
                                            <div className="h4 mt-0 title">About</div>
                                            <p>Bonjour! Je m'appelle Thierry Cohnen. Web App Developer.</p>
                                            <p>Mon expérience en industrie m'a formé à trouver les solutions de façon analytique, précise et efficace. Je combine celà avec un intérêt marqué pour les technologies innovantes.
                    {/* <br /><br />Ma philosophie: while(!(succeed=try()) */}
                  </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="card-body">
                                            <div className="h4 mt-0 title">Basic Information</div>
                                            <div className="row">
                                                <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                                                <div className="col-sm-8">46</div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                                <div className="col-sm-8"><a href="mailto:thierry.cohnen.developer@gmail.com">thierry.cohnen.developer@gmail.com</a></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-sm-4"><strong className="text-uppercase">Téléphone:</strong></div>
                                                <div className="col-sm-8">+32 486 83 18 90</div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-sm-4"><strong className="text-uppercase">Addresse:</strong></div>
                                                <div className="col-sm-8">12, rue de Géloury, 4050 Chaudfontaine, Belgium</div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-sm-4"><strong className="text-uppercase">Langues:</strong></div>
                                                <div className="col-sm-8">français, anglais</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section" id="skill">
                        <div className="container">
                            <div className="h4 text-center mb-4 title">Professional Skills</div>
                            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="progress-container progress-primary"><span className="progress-badge">HTML</span>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }} /><span className="progress-value">85%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="progress-container progress-primary"><span className="progress-badge">CSS</span>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }} /><span className="progress-value">70%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="progress-container progress-primary"><span className="progress-badge">JavaScript</span>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%' }} /><span className="progress-value">75%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="progress-container progress-primary"><span className="progress-badge">Bootstrap 5</span>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }} /><span className="progress-value">60%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                        </div>
                                        <div className="col-md-6">
                                            <div className="progress-container progress-primary"><span className="progress-badge">SASS</span>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '55%' }} /><span className="progress-value">55%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="progress-container progress-primary"><span className="progress-badge">NodeJS</span>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} /><span className="progress-value">50%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="progress-container progress-primary"><span className="progress-badge">MySQl</span>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} /><span className="progress-value">50%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ml-auto mr-auto">
                                <div className="h4 text-center mb-4 title">Portfolio</div>
                                <div className="nav-align-center">
                                    <ul className="nav nav-pills nav-pills-primary" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development" role="tablist"><i className="fa fa-laptop" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content gallery mt-5">
                            <div className="tab-pane active" id="web-development">
                                <div className="ml-auto mr-auto">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                                <a href="https://thierrycohnen.github.io/MapRoutes/" target="_blank">
                                                    <figure className="cc-effect"><img src="images/project-1.jpg" alt="Image" />
                                                        <figcaption>
                                                            <div className="h4">Mapping Routes</div>
                                                            <p>Web Development</p>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                                <a href="https://thierrycohnen.github.io/stocksPicker/" target="_blank">
                                                    <figure className="cc-effect"><img src="images/project-2.jpg" alt="Image" />
                                                        <figcaption>
                                                            <div className="h4">Stock Trackers</div>
                                                            <p>Web Development</p>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                                <a href="https://thierrycohnen.github.io/YTvideosPlayer/" target="_blank">
                                                    <figure className="cc-effect"><img src="images/project-3.jpg" alt="Image" />
                                                        <figcaption>
                                                            <div className="h4">YouTube Video Bits Player</div>
                                                            <p>Web Development</p>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                      <a href="#web-development">
                                          <figure class="cc-effect"><img src="images/project-4.jpg" alt="Image" />
                                              <figcaption>
                                                  <div class="h4">Web Advertising Project</div>
                                                  <p>Web Development</p>
                                              </figcaption>
                                          </figure>
                                      </a>
                                  </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="experience">
                    <div className="container cc-education">
                        <div className="h4 text-center mb-4 title">Education</div>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body cc-education-header">
                                        <p>2012 - 2013</p>
                                        <div className="h5">Formation Technifutur</div>
                                    </div>
                                </div>
                                <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body">
                                        <div className="h5">Développeur .Net C# orienté Sharepoint </div>
                                        <p className="category">Formation Cefora - Technifutur® Liège </p>
                                        <p>
                                        </p><ul>
                                            <li>cours de jour : 8 mois, 40h/sem. Donnés par des professionnels actifs dans le métier.</li>
                                            <ul>
                                                <li>C# (cours principal).</li>
                                                <li>Sharepoint 2013 (installation et développement).</li>
                                                <li>Javascript, HTML, CSS.</li>
                                                <li>ASP.net.</li>
                                            </ul>
                                        </ul>
                                        <p />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body cc-education-header">
                                        <p>2001 - 2003</p>
                                        <div className="h5">Higher National Degree</div>
                                    </div>
                                </div>
                                <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body">
                                        <div className="h5">Electronics Engineering</div>
                                        <p className="category">John Moores University, Liverpool, England</p>
                                        <p />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body cc-education-header">
                                        <p>1993 - 1994</p>
                                        <div className="h5">Université de Liège</div>
                                    </div>
                                </div>
                                <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body">
                                        <div className="h5">1ère candidature ingénieur civil</div>
                                        <p className="category">Université de Liège</p>
                                        <p />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container cc-experience">
                        <div className="h4 text-center mb-4 title">Work Experience</div>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body cc-experience-header">
                                        <p>2012 - 2020</p>
                                        <div className="h5">Décormétal s.a.</div>
                                    </div>
                                </div>
                                <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body">
                                        <div className="h5">Responsable production dans la PME Décormétal s.a.</div>
                                        <p>Résolution des problèmes liés à la production et suivi de celle-ci.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body cc-experience-header">
                                        <p>2004 - 2011</p>
                                        <div className="h5">Montréal, Canada</div>
                                    </div>
                                </div>
                                <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body">
                                        <div className="h5">Technicien dans diverses entreprises</div>
                                        <p>Technicien de maintenance et de production dans de grandes entreprises telles que: Ventrol, Reebok, Aldo, ... à Montréal, Canada.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body cc-experience-header">
                                        <p>1994 - 2001</p>
                                        <div className="h5">Décormétal s.a.</div>
                                    </div>
                                </div>
                                <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                                    <div className="card-body">
                                        <div className="h5">Création et gestion de la s.a. Décormétal à Trooz.</div>
                                        <p>Création et développement de l'entreprise familiale avec mon père. Usine de peinture par poudrage sur métaux. Personnel atteignant la vingtaine en plusieurs équipes de production.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="contact">
                    <div className="cc-contact-information" style={{ backgroundImage: 'url("images/staticmap.png")' }}>
                        <div className="container">
                            <div className="cc-contact">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="card mb-0" data-aos="zoom-in">
                                            <div className="h4 text-center title">Contact Me</div>
                                            <p className="mb-0"><strong>&nbsp; Addresse </strong></p>
                                            <p className="pb-2">&nbsp; 12, rue de Géloury, 4050 Chaudfontaine, Belgium</p>
                                            <p className="mb-0"><strong>&nbsp; Téléphone</strong></p>
                                            <p className="pb-2">&nbsp; +32 486 83 18 90</p>
                                            <p className="mb-0"><strong>&nbsp; Email</strong></p>
                                            <p> <a href="mailto:thierry.cohnen.developer@gmail.com">&nbsp; thierry.cohnen.developer@gmail.com</a></p>
                                            <p className="mb-0 text-center"><strong>&nbsp; Disponibilité immédiate - Belgique et Luxembourg</strong></p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="h4 title text-center">Thierry Cohnen</div>
                <div className="text-center text-muted">
                    <p>© Creative CV. All rights reserved.<br />Design - <a className="credit" href="https://templateflip.com" target="_blank">TemplateFlip</a></p>
                </div>
            </footer>
        </div>
    )
}
export default App02;