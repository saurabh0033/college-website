import React from "react";
import Logo1 from '../images/usefull-logo-1.jpg';
import Logo2 from '../images/usefull-logo-2.jpg';
import Logo3 from '../images/usefull-logo-3.jpg';
import Logo4 from '../images/usefull-logo-4.jpg';
import Logo5 from '../images/usefull-logo-5.jpg';
const Copyright = () => {
    return (
        <>
            <div className="container-fluide">
                <div className="cp-foot py-2">
                    <div className="wrap-2" style={{ marginTop: '20px' }}>
                        <div>
                            <p> <a href="https://www.maharashtra.gov.in/1125/Home"> <img src={Logo1} alt="img" /></a></p>
                        </div>
                        <div>
                            <p> <a href="http://www.dtemaharashtra.gov.in/index.html"> <img src={Logo2} alt="img" /></a></p>
                        </div>
                        <div>
                            <p> <a href="https://www.aicte-india.org/"> <img src={Logo3} alt="img" /></a></p>
                        </div>
                        <div className="thrd-img">
                            <p> <a href="https://msbte.org.in/"> <img src={Logo4} alt="img" /></a></p>
                        </div>
                        <div className="four-img">
                            <p> <a href="http://www.unipune.ac.in/"><img src={Logo5} alt="img" /></a></p>
                        </div>
                    </div>

                    <div className="cp-txt">
                        <h1>Copyright © GCOEAR, Avasari Khurd </h1>
                        <div className="footer-links">
                            <ul>
                                <li><a href="pdf/Mandatory Disclosure 30-1-2020.pdf" target="_blank">Mandatory Disclosure</a></li> |
                                <li><a href="admission/RTI OFFICER INFORMATION.pdf" target="_blank">RTI Officers</a></li> |
                                <li><a href="pdf/RTI2020.pdf" target="_blank">RTI Information Part II</a></li> |
                                <li className="txt3"><a href="pdf/CitizenCharter2020.pdf" target="_blank">Citizen Charter</a></li> |
                                <li className="txt4"><a href="pdf/CDC.pdf" target="_blank">College Development Committee</a></li> |
                                <li className="txt5"><a href="quotation20.php">Quotations</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Copyright;