import { useNavigate } from "react-router-dom";
export default function DetailsC() {
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
                <img src={url+"/Antiques/7antiques.jpg"} />
                <img src={url+"/Antiques/8antiques.jpg"} />
                <img src={url+"/Antiques/9antiques.jpg"} />
            </div>
           
            <hr />
            <div className="information">
                <p> <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>RUSSIAN SILVER ENAMEL NEPHRITE JADE PERFUME BOTTLE</h3>
                <p>A Russian perfume bottle, featuring a smooth and polished nephrite jade body
                The silver mounts complement the jade, 
                with a cloisonne enameled leaf shaped lid. 
                The lid is thoughtfully designed with a stick for easy and precise application of perfume. 
                . The cloisonne enameled rims, adorned with geometric designs, 
                further enhance the overall aesthetic appeal.
                Hallmarked with 84 Russian silver proof and manufacturer marks
                Russian Silver Enamel Perfume Bottles For Collectors.
                </p>
                <p> Total weight: 45 g.</p>
                <p>Dimensions
                    H 3 1/2 in. All measurements are approximate.</p>
                <p>Condition
                    Overall good vintage condition. Signs of age and wear. Refer to photos. Sold As Is.</p>
            </div>
        </div>
    );
}