import { useNavigate } from "react-router-dom";
export default function DetailsL() {
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
                <img src={url+"/Antiques/34antiques.jpg"} />
                <img src={url+"/Antiques/35antiques.jpg"} />
                <img src={url+"/Antiques/36antiques.jpg"} />
            </div>
        
            <hr />
            <div className="information">
                <p> <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>ANTIQUE INDIAN SCHOOL HINDU PAINTED WOOD FIGURE</h3>
                <p>
                    An antique Hindu figurine idol, made of polychrome painted wood with hinges. It depicts a man with a straight back, clenching his fists. The figurine has holes in the ears and fists. The arms with the hinges can bend at the shoulders and elbows. The legs are painted red to represent trousers, and the body has patterns depicting jewelry. The hair is partly painted brown and the face is neatly carved out of wood. Antique and Vintage Indian Folk Art, hand Carved Figurines, Home Decor, and Collectibles.
                </p>
                <p>Dimensions
                    21 3/4 x 8 in. All measurements are approximate.
                </p>
                <p>
                    Condition
                    Overall good antique condition. Signs of wear and Age. Refer to photos. Sold as is.
                </p>
            </div>
        </div>
    );
}