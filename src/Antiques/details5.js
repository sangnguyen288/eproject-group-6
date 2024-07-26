import { useNavigate } from "react-router-dom";
export default function DetailsE() {
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
                <img src={url+"/Antiques/13antiques.jpg"} />
                <img src={url+"/Antiques/14antiques.jpg"} />
                <img src={url+"/Antiques/15antiques.jpg"} />
            </div>
         
            <hr />
            <div className="information">
                <p>   <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>ANTIQUE CHINESE SANG DE BOEUF GLAZED CERAMIC BOX</h3>
                <p>A rare antique Chinese ceramic trinket box featuring a finely detailed relief decoration in the form of a Chinese dragon on the lid. Covered all over the surface with rich semi-transparent Sang De Boeuf glaze. Dates circa 1900, late Qing dynasty. According to the attached paper label, the piece is presumably acquired from Maison Satuma in Buenos Aires. Bears an incised square shaped stamp with Chinese characters on the bottom. Antique Chinese Boxes And Plaques And Home Decor Collectibles.
                </p>
                <p>Dimensions
                4 1/4 x 3 1/4 in. All measurements are approximate.</p>
                <p>Condition
                    Overall good vintage condition. Signs of age and wear. Refer to photos. Sold As Is.</p>
            </div>
        </div>
    );
}