import {  FaEnvelope, FaFax, FaPaperPlane, FaPhone} from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

export default function ContactUs() {

    return (
        <div className="map">

            <form>
                <div className="row ">
                    <div className="col-18 col-sm-9" >

                        <div className="d-flex flex-column" style={{marginLeft:"5rem"}}>

                            <div className="col mt-3">
                                <label for="name" className="form-label">Your Name </label>
                                <input type="text" className="form-control" id="name" name="name"/>
                            </div>
                            <div className="col mt-3">
                                <label for="email" className="form-label">Email </label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="col mb-3">
                                <label for="phone" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="phone" />
                            </div>
                            <div className="col mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="Password" />
                            </div>

                            <button type="submit" class="btn btn-outline-success" >Register</button>

                        </div>
                    </div>
                </div>
            </form>

            <div className="row ">
                <div className="col-18 col-sm-9">

                    <div className="d-flex flex-column mt-5"  >

                        <h2>Contact Us</h2>
                        <p><FaPhone /> (+84)0123456789</p>
                        <p><FaFax /> : 590 Cach Mang Thang Tam Street, Ward 11, District 3, Ho Chi Minh City. VietNam</p>
                        <p><FaEnvelope /> Send
                            <a href="mailto:team6@gmail.com"> : team6@gmail.com</a> <FaPaperPlane />
                        </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31354.60260031016!2d106.64569734380972!3d10.786376319214767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1719410728502!5m2!1sen!2s"
                            style={{ width: "40vw", height: "30vh", marginTop: "2vw", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }} ></iframe>

                    </div>
                </div>
            </div>
        </div>
    );
}
