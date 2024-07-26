import { useNavigate } from "react-router-dom";
export default function FineG() {
    const history = useNavigate();
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session ");
        history("/fineart");
    }
    const navigate = useNavigate("");
    const url = process.env.PUBLIC_URL;
    return (
        <div>
            <div className="fineart">
            <button className="btn btn-close" type="submit" onClick={(ev)=> navigate(`/fineart`)} ></button>
                <img src={url+"/Fineart/7fine.jpg"} />
                <img src={url+"/Fineart/7afine.jpg"} />
                <img src={url+"/Fineart/7bfine.jpg"} />
            </div>
         
            <hr />
            <div className="information">
                <p><button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>H. VANDERBURCH ANTIQUE 19TH C DUTCH OIL PAINTING</h3>
                <p>An antique 19th century oil on board painting depicting a landscape with a wind mill, signed lower right, H. Vanderburch, possibly for Henry Van Der Burch, 1796 to 1854. Henry Van Der Burch was a 19th century artist who was born in 1796. Krannert Art Museum and Kinkead Pavilion featured Henry Van Der Burch's work in the past. One of a kind artwork. Classic Landscape Paintings, Antique European Fine Art Pieces And Wall Decor Collectibles.</p>
                <p>Dimensions
                    Frame: 14 3/4 x 18 in. Image: 10 x 13 1/2 in. All measurements are approximate.
                </p>
                <p>Condition
                    Overall good vintage condition. Signs of age and wear. Refer to photos. Sold As Is.</p>
            </div>
        </div >
    );
}