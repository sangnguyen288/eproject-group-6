import { useNavigate } from "react-router-dom";
export default function FineD() {
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
                <img src={url+"/Fineart/4fine.jpg"} />
                <img src={url+"/Fineart/4afine.jpg"} />
                <img src={url+"/Fineart/4bfine.jpg"} />
            </div>
           
            <hr />
            <div className="information">
                <p> <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>Kohler & Weigel - War Ship with Cross Sections</h3>
             <p>   This originally hand-colored engraving is from Johnn David Kohler's Schul- und Reisen-Atlas aller zu Erlernung der alten, mittlern und neuen Geographie dienlichen Universal- und Particular-Charten... Nebst einer im Druck beygefügten kurtzen geographischen Anleitung und etlichen heraldischen Charten, welche die Wappen aller Königreiche und Länder... or School and Travel Atlas... The work was published in Nuremberg by J. E. Adelbulner for C. Weigel in 1719 [but after 1734]. This is considered the enlarged edition of Christoph Weigel's atlas that was first printed in 1718, this published likely for Weigel's widow and heirs.</p>

             <p>   "In 1718, the first atlas was published, with a dated title page, which was then published by Johann David Köhler after Faber's death. The title page of the 'Comfortable School and Travel Atlas, as the new title of the work from now on is, particularly emphasizes 'the new special way' in which the maps are now illuminated, a fact that Hauber had also pointed out regarding this coloring, Köhler had preceded the atlas with a typographically printed plate on which he, after a short introduction to geography, the illumination of the first five universal maps, which he systematically developed - these are the world map and the maps of Europe, Asia, Africa and America - was explained here in addition to the marking of the political boundaries Territories and the coloring of their surfaces with the same but more diluted color, information about the religion of the population of the respective area was provided through colored dots." (Bauer Sp. 954)</p>


             <p>   Paper Size ~ 17 1/2" by 14 5/8" (Fold Out)</p>
             <p>   The work is in very good to excellent condition overall. There is some separation to the lower fold with tape to verso. There may be some faint offset due to the fold out nature of the engraving. There may be a few minor marks or imperfections to be expected with age. Please review the image carefully for condition and contact us with any questions.
                ~ 17 1/2" by 14 5/8" (Fold Out)</p>

            </div>
        </div>
    );
}