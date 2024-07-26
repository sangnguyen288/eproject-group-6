import { useState } from "react";
import { FaEnvelope, FaFax, FaPaperPlane, FaPhone } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

export default function ContactUs() {
    const clickMe = () => {
        alert("Registered Successfully !!!")
    }
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password1: '',

    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('username:', formData.username);
        console.log('email:', formData.email);
        console.log('Password:', formData.password);
        console.log('Password1:', formData.password1);

        setFormData({
            username: '',
            email: '',
            password: '',
            password1: ''
        });
    };

    return (
        <div>
            <div className="map">
                <div className="container mt-4">
                    <div className="row">
                        <div style={{ paddingRight: "5rem" }}>
                            <div className="card" >
                                <h4 className="card-header">Register</h4>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} >

                                        <div className="mb-3">
                                            <label for="username" className="form-label">User Name</label>
                                            <input
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                className="form-control"
                                                id="username"
                                                aria-describedby="usernameHelp" />

                                        </div>

                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control"
                                                id="email"
                                                aria-describedby="emailHelp" />
                                                </div>


<div className="mb-3">
    <label for="pwd" className="form-label">Password</label>
    <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="form-control"
        id="pwd" />
</div>

<div className="mb-3">
    <label for="pwd1" className="form-label">Password Confirm</label>
    <input
        type="password"
        name="password1"
        value={formData.password1}
        onChange={handleChange}
        className="form-control"
        id="pwd1" />
</div>


<button type="submit" onClick={(clickMe)} className="btn btn-outline-success">Register</button>
</form>

</div>


</div>

</div>
</div>
</div>


<div className="row-contact" style={{ width: "35rem" }}>
<div className="col-md-6">

<div className="d-flex flex-column mt-5"  >

<h2>Contact Us</h2>
                            <p><FaPhone /> (+84)0123456789</p>
                            <p><FaFax /> : 590 Cach Mang Thang Tam Street, Ward 11, District 3, Ho Chi Minh City. VietNam</p>
                            <p><FaEnvelope /> Send
                                <a href="mailto:team6@gmail.com"> : team6@gmail.com</a> <FaPaperPlane />
                            </p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3193461268875!2d106.66262931385425!3d10.786835092314488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed2392c44df%3A0xd2ecb62e0d050fe9!2sFPT-Aptech+Computer+Education+HCM!5e0!3m2!1svi!2s!4v1511752247742" style={{ width: "40vw", height: "30vh", marginTop: "2vw", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>

</div>
</div>
</div>
</div>
</div >
    );
}