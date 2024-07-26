import { useNavigate } from "react-router-dom";
export default function DetailsF() {
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
                <img src={url+"/Antiques/16antiques.jpg"} />
                <img src={url+"/Antiques/17antiques.jpg"} />
                <img src={url+"/Antiques/18antiques.jpg"} />
            </div>
          
            <hr />
            <div className="information">
                <p>  <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>ANTIQUE JAPANESE WROUGHT IRON PAGODA LANTERN</h3>
                <p>An antique Japanese wrought iron pagoda lantern. This lantern, often used to adorn gardens, temples, and traditional Japanese landscapes, is a symbol of spiritual enlightenment and tranquility. The lantern structure features a house making the distinct architecture seen in Japan. The pagoda lantern design includes openings allowing light to shine through, creating a soft and soothing ambiance when illuminated from within. Circa the early 20th century. Antique Japanese Lanterns And Lighting Collectibles.
                </p>
                <p>Dimensions
                    H 12 in. D 11 3/4 in. All measurements are approximate.</p>
                <p>
                    Condition
                    Overall good vintage condition. Signs of age and wear. Untested. Cut chord. Slightly rusty. Small spots of discoloration. Refer to photos. Sold as is..</p>
            </div>
        </div>
    );
}