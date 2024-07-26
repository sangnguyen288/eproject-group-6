import { useState } from 'react';
 export default function Login() {
  const clickMe = () => {
    alert ("Logged In Successfully !!!");
  }

    const [formData, setFormData] = useState({
        username: '',
        password: ''
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
    
        // Perform login logic here
        console.log('username:', formData.username);
        console.log('Password:', formData.password);

        setFormData({
            username: '',
            password: ''
          });
      };
    
    return (
    
    <div className= "container mt-4">
        <div className="row">
            <div className="col-md-8 col-12 offset-2">
                <div className="card">
                  <h4 className="card-header">Login</h4>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      
                      <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
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
                        <label for="pwd" className="form-label">Password</label>
                        <input 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control" 
                        id="pwd"/>
                      </div>
                     
                      <button type="submit" onClick={(clickMe)} className="btn btn-outline-success">Login</button>
                    </form>

                  </div>


                </div>

            </div>
        </div>
    </div>
  );
}