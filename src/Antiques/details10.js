import { useNavigate } from "react-router-dom";
export default function DetailsJ() {
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
                <img src={url+"/Antiques/28antiques.jpg"} />
                <img src={url+"/Antiques/29antiques.jpg"} />
                <img src={url+"/Antiques/30antiques.jpg"} />
            </div>
        
            <hr />
            <div className="information">
                <p><button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>FINE CHINESE QING DYNASTY CARVED AMETHYST FIGURE</h3>
                <p>
                An antique Chinese carved amethyst sculpture depicting He Xiangu, the only female immortal of the Baxian, Eight Immortals in the Taoist pantheon. She is portrayed holding a vase with her right hand and a lingzhi spray in her right hand, with a phoenix bird perched to her from her left side. Dates from the late 19th century, Qing dynasty. Finely detailed and carved of natural amethyst of purple color in the upper and clear color in the lower part. Asian Gem Stone Carvings, Chinese Taoist Figures, Decorative Antiques And Collectibles.
                </p>
                <p>Dimensions
                H 4 1/4 in. All measurements are approximate.
                </p>
                <p>
                Condition
                Overall Good Vintage Condition. Signs Of Age And Wear. Refer To Photos. Sold As Is.
                </p>
            </div>
        </div>
    );
}