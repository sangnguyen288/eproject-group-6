import { useNavigate } from "react-router-dom";
export default function DetailsM() {
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
            <img src={url+"/Antiques/37antiques.jpg"} />
            <img src={url+"/Antiques/38antiques.jpg"} />
            <img src={url+"/Antiques/39antiques.jpg"} />
        </div>
     
        <hr />
        <div className="information">
            <p><button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
            <h3>ANTIQUE FRENCH CHINOISERIE GILT PORCELAIN ICE BUCKET</h3>
            <p>A fine Chinoiserie style champagne cooler ice bucket made in France circa 1880. The exterior is richly gilt and painted on the recto and verso sides with Oriental figures in landscapes. Flanked with two rocaille handles and raised on a spreading foot. Marked underneath, Made in France, bears an artists signature and number 3109. European Decorative Antiques And Collectibles, Porcelain Ware Pieces For Home Decor.</p>
            <p>Dimensions
            H 7 in. D 7 in. All measurements are approximate.
            </p>
            <p>Condition
            Overall good vintage condition. Signs of wear and age. Cracks on the bottom. Refer to photos. Sold as is.</p>
        </div>
    </div>
    );
}