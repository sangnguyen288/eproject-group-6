import { useNavigate } from "react-router-dom";
export default function FineI() {
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
            <img src={url+"/Fineart/9bfine.jpg"} />
                <img src={url+"/Fineart/9fine.jpg"} />
                <img src={url+"/Fineart/9afine.jpg"} />
            </div>
           
            <hr />
            <div className="information">
                <p> <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>ATTR TO ANATOLY ZVEREV RUSSIAN MIXED MEDIA PAINTING</h3>
                <p>Attributed to Anatoly Timofeivich Zverev, Russian, Soviet era, 1931 to 1986, mixed media painting on paper depicting a portrait of a woman, probably from the series, Faces of Women, 1986. Signed and dated in the upper part. Anatoly Zverev, a Nonconformist artist, representative of the second wave of the Russian avant garde, and painter of the Soviet underground. He was and remains a legend in the artistic life of Moscow in the second half of the 20th century. One of a kind artwor</p>
                <p>Dimensions
                    Image: 19 1/2 x 14 in. All measurements are approximate.</p>
                <p>
                    Condition
                    Overall good vintage condition. Signs of wear and age. Tears around the edges. Refer to photos. Sold as is.</p>
            </div>
        </div >
    );
}