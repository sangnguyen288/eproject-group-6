import { useNavigate } from "react-router-dom";
export default function DetailsK() {
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
                <img src={url+"/Antiques/31antiques.jpg"} />
                <img src={url+"/Antiques/32antiques.jpg"} />
                <img src={url+"/Antiques/33antiques.jpg"} />
            </div>
         
            <hr />
            <div className="information">
                <p> <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>ANTIQUE WOODEN THAI ANGEL FIGURINE SOUTHEAST ASIA</h3>
                <p>
                    An antique wooden figurine representing a seated angel Thep phanom from Southeast Asia, presumably from Thailand, 19th century. The angel is sitting in a praying position on his knees, his hands folded. The clothes are richly decorated with ornaments typical of Southeast Asia and shimmering white, green and red glass mosaics. The Thep phanom statue is often found at the entrance of Thai houses. These deities protect the family and ward off evil spirits. Thep phanoms hands are joined in a wai gesture to show politeness and hospitality towards guests. Antique and Vintage Asian and Oriental Buddhist Figurines, Figures, Sculptures, Statues, Religious Wares, Home Decor, and Collectibles.
                </p>
                <p>Dimensions
                    H 22 in. All measurements are approximate.
                </p>
                <p>

                    Condition
                    Overall good vintage condition. Signs of wear and age. Refer to photos. Cracks and chips. Peak is loose. Sold as is.
                </p>
            </div>
        </div>
    );
}