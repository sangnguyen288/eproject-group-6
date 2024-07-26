import { useNavigate } from "react-router-dom";
export default function FineC() {
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
                <img src={url+"/Fineart/3fine.jpg"} />
                <img src={url+"/Fineart/3afine.jpg"} />
                <img src={url+"/Fineart/3bfine.jpg"} />
            </div>
      
            <hr />
            <div className="information">
                <p><button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>Kollner, Rare - Niagara Falls, The Rapids at Niagara. 18</h3>
                <p>This remarkable early American lithograph is from the scarce work by Augustus Kollner's Views of American Cities. The work was published in by Goupil, Vibert, & Co. of New York & Paris between 1848 and 1851. The lithograph was completed by Isidore-Laurent Deroy and printed in Paris by Cattier. This is a high quality lithograph with the blind stamp is present. </p>

                <p> Augustus Theodore Frederick Adam Kollner (1812-1906) was a German-born artist, engraver, and lithographer. He worked in Stuttgart, Germany and Paris, France before emigrating to the United States in 1839. He continued his work drawing American scenery, where Goupil, Vibert, & Co. decided to publish a series of his views.</p>

                <p>
                "Popularly known for his illustrations for many volumes published by the American Sunday School Union, Kollner also undertook a major print series, Views of American Cities, published un New York and Paris by Goupil, Vibert and Company between 1848 and 1851." (Deák 494) </p>

                <p>
                    Paper Size ~ 17" by 13"; Image Size (line to line) ~ 11 3/4" by 8"
                </p>
                <p>
                    The work is in very good to excellent condition overall. There may be a few minor imperfections to be expected with age. Please review the image carefully for condition and contact us with any questions.
                    ~ 17" by 13"; Image Size (line to line) ~ 11 3/4" by 8"</p>
            </div>
        </div>
    );
}