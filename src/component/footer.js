import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
const clickMe = () => {
    alert("Thank you for subscribing to our newsletter!");
}

    return (
        <div>

            <div className="footer">

                <div className="footer-top">
                    <div className="footer-title-icon"><FaEnvelope style={{fontSize:"30px"}} /> <h4>SIGN UP FOR NEWSLETTER</h4>

                        <form action='...' className="form-item">
                            <input type="email" placeholder="Email" size="50" required pattern="^[a-zA-Z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$" />
                            <button type="submit" className="btn btn-outline-success" onClick={(clickMe)} > subscribe! </button>
                        </form>

                    </div>
                </div>

            </div>

            <footer className="row App-footer">
                <div className="col-md-5 About-footer">
                    <h5>About us:</h5>
                    <p> BidSpirit Online MarketPlace<br />
                        is a comprehensive <br />
                        digital platform designed to facilitate<br />
                        the buying and selling of a wide array of products.<br />
                        Leveraging modern technology, offering a user-friendly <br />
                        interface and secure transaction processes.
                    </p>
                </div>

                <div className="col-md-5 Contact-footer">
                    <h5> Contact Us:</h5>
                    📌  : 590 Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh city<br />
                    ☎️  : 028 7300 8866<br />
                    📞  : 0931 313 329<br />
                    💌  : info@gmail.com
                </div>

                <div className="col-md-2 Connect-footer">
                    <h5> Follow us : </h5> <br />
                    <div className="icon-link">
                        <div className="icon">
                            <a href="https://www.facebook.com/" ><FaFacebook /> </a>
                        </div>

                        <div className="icon">
                            <a href="https://www.youtube.com/"><FaYoutube /></a>
                        </div>

                        <div className="icon">
                            <a href="https://www.instagram.com/"><FaInstagram /></a>
                        </div>

                    </div>

                </div>

                <hr />
                <h6 style={{ textAlign: "center" }}>Copyright © 2024 Team 6 FPT-APTECH</h6>
            </footer>
        </div>

    );
}