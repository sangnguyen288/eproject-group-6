import { useState } from 'react';

export default function Register() {
  const clickMe = () => {
    alert("Registered In Successfully !!! ")
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

    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 col-12 offset-2">
          <div className="card">
            <h4 className="card-header">Register</h4>
            <div className="card-body">
              <form onSubmit={handleSubmit}>

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

            </div></div>

        </div>
      </div>
    </div>
  );
}