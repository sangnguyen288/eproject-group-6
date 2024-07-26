import { useNavigate } from "react-router-dom";
export default function DetailsH() {
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
                <img src={url+"/Antiques/22antiques.jpg"} />
                <img src={url+"/Antiques/23antiques.jpg"} />
                <img src={url+"/Antiques/24antiques.jpg"} />
            </div>
           
            <hr />
            <div className="information">
                <p> <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>ANTIQUE JAPANESE MEIJI FIGURAL BRONZE CANDLE HOLDERS</h3>
                <p>A pair of fine quality antique Japanese bronze figural candle holders, each is modeled as a girl wearing traditional attire with engraved patterns depicting floral motifs and dragons, with one hand raised and holding a handled candle bowl adorned with hand hammered and hand carved patterns. Raised on a footed base. Cast with beautiful details. Each bears a struck three-character Japanese mark on the base. Meiji era, before 1912. Japanese Metal Ware Pieces, Asian Antiques And Home Decor Collectibles.</p>
                <p>Dimensions
                Average H 16 in. All measurements are approximate.
                </p>
                <p>
                Condition
                Overall good antique condition. Signs of wear and Age. Refer to photos. Sold as is.
                </p>
            </div>
        </div>
    );
}