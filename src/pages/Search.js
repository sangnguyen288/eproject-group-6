import { useNavigate } from "react-router-dom";

export default function Search() {
    const clickMe = () =>{
        alert("Sorry ! The Information You Are Looking For Has Not Been Updated !!!");
    }
    return (
        <div>
            <form className="d-flex" style={{ width: "40%", marginLeft: "30%" }}>
                <input className="form-control me-2" type="search" id="search" name="search" placeholder="Search" required/>
                <button className="btn btn-outline-success" required type="submit" onClick={(clickMe)} >Search</button>
            </form>
        </div>
    );
}