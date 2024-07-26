import { useNavigate } from "react-router-dom";
export default function FineH() {
    const history = useNavigate();
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session ");
        history("/fineart");
    }
    const navigate = useNavigate("");
    const url = process.env.PUBLIC_URL;
    return (
        <div>
            <div className="fineart">
            <button className="btn btn-close" type="submit" onClick={(ev)=> navigate(`/fineart`)} ></button>
            <img src={url+"/Fineart/8afine.jpg"} />
                <img src={url+"/Fineart/8fine.jpg"} />
                <img src={url+"/Fineart/8bfine.jpg"} />
            </div>
           
            <hr />
            <div className="information">
                <p> <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>ANTIQUE ISLAMIC PERSIAN MINIATURE PAINTING C 1900</h3>
                <p>An antique Persian miniature painting on papier mache created in the traditional Persian style and depicting a battle scene. The borders are painted with Kufic calligraphy. Circa 1900. Framed. Islamic Art, Miniature Paintings And Wall Decor Collectibles.</p>
                <p>
                    Dimensions
                    Frame 26 1/4 x 22 1/4 in. Image 23 1/4 x 19 1/2 in. All measurements are approximate.</p>
                <p>Condition
                    Overall good antique condition. Signs of wear and Age. Refer to photos. Sold as is.</p>
            </div>
        </div >
    );
}