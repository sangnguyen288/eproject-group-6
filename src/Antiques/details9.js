import { useNavigate } from "react-router-dom";
export default function DetailsI() {
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
                <img src={url+"/Antiques/25antiques.jpg"} />
                <img src={url+"/Antiques/26antiques.jpg"} />
                <img src={url+"/Antiques/27antiques.jpg"} />
            </div>
    
            <hr />
            <div className="information">
                <p>  <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button>  </p>
                <h3>VINTAGE CHINESE CARVED GREEN QUARTZ BIRD FIGURE</h3>
                <p>A vintage Chinese figurine finely hand carved of natural green quartz and representing a bird. The figure is mounted on a carved rose wood stand. Circa the mid 20th century. Collectible Oriental Decor And Gifts, Asian Gem Stone Carvings, Jewelry.</p>
                <p>Dimensions
                H 6 7/8 in. All measurements are approximate.
                </p>
                <p>
                Condition
                Overall Good Vintage Condition. Signs Of Age And Wear. Refer To Photos. Sold As Is.
                </p>
            </div>
        </div>
    );
}