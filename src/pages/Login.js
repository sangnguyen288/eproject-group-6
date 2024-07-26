import { useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {
    const navigate = useNavigate("");
    const clickMe = () => {
         alert("Loged In Successfully !!!")
     }
    return (
        <div className="login">
            <h2> LOGIN </h2>
            <form className="mt-3" method='post'>

                <div className="mt-3">
                    <label for="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="email" name="email" required />
                </div>

                <div className="mt-3">
                    <label for="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="password" name="password" required />
                </div>

                <div className="mt-3">
                    <button type="submit" className="btn btn-outline-success" onClick={(clickMe)}> Login </button>
                </div>

            </form>

        </div>
    );
} 