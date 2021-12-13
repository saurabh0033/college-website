import React from 'react';
import Logo1 from '../images/govt-college-logo.png';
const Footer = () => {
    return (
        <>

            <section className="background">
                <div className="container-fluid">
                    <div className="row wrap">
                        <div className="col-md-3">
                            <div className='bd'>
                                <img className="footer-logo" src={Logo1} alt="img loading..." />
                                <h4 className="text-center-1"> Government College Of Engineering {"&"} Research, Avasari khurd </h4>
                                <p className="text-center-2"> Taluka-Ambegaon,District-pune,412405</p>
                                <p>Tel : 02133- 230582</p>
                                <p>Fax : 02133-230583</p>
                                <p>Email: <a href="mailto:office.gcoeavasari@dtemaharashtra.gov.in">gcoeavasari@dtemaharashtra.gov.in</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <div className="Map">
                                <div className='map_cont'>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h3>GCOEARA</h3>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.112120058132!2d73.96130341489979!3d18.988114887138472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd311765784c79%3A0xc4f5ab54cf1febbb!2sGovernment%20College%20Of%20Engineering%20And%20Research%2C%20Avasari%20Khurd!5e1!3m2!1sen!2sin!4v1624598004992!5m2!1sen!2sin"
                                    width="100%" height="300px" frameborder="0" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="quick-link" style={{ padding:'0px 10px 10px 15px'}}>

                                <h3 className="quick-links"> <i className="fas fa-paperclip"></i> <strong> Quick Links </strong> </h3>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/about-us.php"> About Institute </a></p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/vision.php"> Vision {"&"} Mission of the Institute</a></p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/contact.php">Contact Us </a></p>
                                <p className="bottom-border"> <a href="http://ropune.org.in/ropune/indexnew.html">JDTE </a></p>
                                <p className="bottom-border"> <a href="http://www.dtemaharashtra.gov.in/index.html">DTE,Maharashtra </a></p>
                                <p className="bottom-border"> <a href="https://www.maharashtra.gov.in/1125/Home"> Govt.of Maharashtra </a></p>
                                <p className="bottom-border"> <a href="http://www.unipune.ac.in/"> S.P.Pune University </a></p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/prevention-of-ragging.php"> Prevention of Ragging </a></p>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div style={{ marginTop: '1px' }}>
                                <h3 className="quick-links " > <i className="fas fa-code-branch"></i> <strong> Explorer </strong> </h3>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/grievances-readdressal.php"> Grievances Redressal</a></p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/officeorder.php"> Interal Circulars, Minutes of Meeting {"&"} Orders </a> </p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/CollegeApproval.php"> college approval details </a> </p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/StudentNotices.php"> student notices </a> </p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/NIRF%20Information.php"> NIRF Information </a> </p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/collegemagzine1.php">College Magzines </a> </p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/Educational%20Verification.php"> Educational Verification </a> </p>
                                <p className="bottom-border"> <a href="https://gcoeara.ac.in/pdf/ScreenReaderAccess.pdf"> Screen Reader Access </a> </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;