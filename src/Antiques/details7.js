import { useNavigate } from "react-router-dom";
export default function DetailsG() {
    const history = useNavigate();
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session ");
        history("/antiques");
    }
    const navigate = useNavigate("");
    const url = process.env.PUBLIC_URL;
    return (
        <div>
            <div className="details">
            <button className="btn btn-close" type="submit" onClick={(ev)=> navigate(`/antiques`)} ></button>
                <img src={url+"/Antiques/19antiques.jpg"} />
                <img src={url+"/Antiques/20antiques.jpg"} />
                <img src={url+"/Antiques/21antiques.jpg"} />
            </div>
          
            <hr />
            <div className="information">
                <p>     <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>VTG RUSSIAN SOVIET MUSIC DORFMAN PELIKAN SHEET BROCHURE</h3>
                <p>A vintage Russian Soviet music sheet brochure for piano by Efim Dorfman, titled Pelikan, Fox-Trot. The 5th edition was published in Simferopol by the author in 1930. This piece reflects the vibrant cultural scene of the early Soviet era. Soviet Historical Piano Music Sheet Collectibles.</p>
                <p>Dimensions
                    13 3/4 x 10 in. All measurements are approximate.
                </p>
                <p>
                Condition
                Overall good vintage condition. Signs of age and wear. Refer to photos. Sold As Is.
                </p>
            </div>
        </div>
    );
}