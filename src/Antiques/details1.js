import { useNavigate } from "react-router-dom";
export default function DetailsA() {
    const url = process.env.PUBLIC_URL;
    const history = useNavigate();
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session ");
        history("/details1");
    }
    const navigate = useNavigate("");
    return (
        <div>
            
            <div className="details">
            <button className="btn btn-close" type="submit" onClick={(ev)=> navigate(`/antiques`)} ></button>
                <img src={url+"/Antiques/1antiques.jpg"} />
                <img src={url+"/Antiques/2antiques.jpg"} />
                <img src={url+"/Antiques/3antiques.jpg"} />
            </div>
           
            <hr />
            <div className="information">
                <p><button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>RUSSIAN 84 SILVER GILT GEMSTONES KOVSH W PAINTING</h3>
                <p>A fine Russian silver gilt kovsh
                    decorated with engraved Russian manner floral patterns.
                    At the front of the kovsh is a carefully drawn image
                    from the Russian tradition of welcoming guests.
                    This item is inlaid with fine red and green gemstones.
                    Hallmarked with an 84 Russian Imperial silver standard and bears the Cyrillic makers initials.
                    Antique Russian Decorative Art, Silverware Collectibles.</p>
                <p> Total weight: 795 g.</p>
                <p>Dimensions
                    H 7 1/2 in. All measurements are approximate.</p>
                <p>Condition
                    Overall good vintage condition. Signs of age and wear. Refer to photos. Sold As Is.</p>
            </div>
        </div>
    );
}