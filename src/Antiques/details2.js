import { useNavigate } from "react-router-dom";
export default function DetailsB() {
    const url = process.env.PUBLIC_URL;
    const history = useNavigate();
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session ");
        history("/antiques");
    }
    const navigate = useNavigate("");
    return (
        <div>
            <div className="details">
            <button className="btn btn-close" type="submit" onClick={(ev)=> navigate(`/antiques`)} ></button>
                <img src={url+"/Antiques/4antiques.jpg"} />
                <img src={url+"/Antiques/5antiques.jpg"} />
                <img src={url+"/Antiques/6antiques.jpg"} />
            </div>
           
            <hr />
            <div className="information">
                <p> <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>TALL RUSSIAN SILVER GILT CLOISONNE ENAMEL GOBLET</h3>
                <p>A highly collectible tall Russian gilt silver goblet cup or flute
                    . Of a slender tapering form.
                    the exterior is richly decorated with vibrant stylized neo Russian
                    floral patterns made using the shaded cloisonne enamel technique.
                    Raised on a knobbed round pedestal foot decorated in the same style. 
                    Features a gold washed interior.
                    Struck to the lower rim with an 88 Russian Imperial silver standard and with the makers mark.
                    Collectible Russian Silverware And Tableware, Drinkware And Barware Antiques And Collectibles
                </p>
                <p> Total weight: 262 g.</p>
                <p>Dimensions
                    H 7 3/8 in. All measurements are approximate.</p>
                <p>Condition
                    Overall good vintage condition. Signs of age and wear. Refer to photos. Sold As Is.</p>
            </div>
        </div>
    );
}