import { useNavigate } from 'react-router-dom';
import './Register.css'
export default function Register() {
    const navigate = useNavigate("");
    const clickMe = () => {
        alert("Registered Successfully !!!")
    }
    return (

            <div className="register">
                <h2> REGISTER</h2>
                <form className="mt-3">

                    <div className="mt-3">
                        <label for="name" className="form-label">UseName:</label>
                        <input type="text" className="form-control" id="username" name="username" placeholder="username" required />
                    </div>

                    <div className="mt-3">
                        <label for="password" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="password" name="password" required />
                    </div>

                    <div className="mt-3">
                        <label for="password" className="form-label">Passwordconfirm:</label>
                        <input type="password" className="form-control" id="passwordconfirm" placeholder="confirmPassword" name="confirmPassword" required />
                    </div>

                    <div className="mt-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="email" name="email" required />
                    </div>

                    <div className="mt-3">
                        <button type="submit" className="btn btn-outline-success" onClick={(clickMe)}>Register</button>
                    </div>

                </form>
            </div>

    );
}