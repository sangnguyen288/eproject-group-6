import { useNavigate } from "react-router-dom";
export default function DetailsD() {
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
                <img src={url+"/Antiques/10antiques.jpg"} />
                <img src={url+"/Antiques/11antiques.jpg"} />
                <img src={url+"/Antiques/12antiques.jpg"} />
            </div>
           
            <hr />
            <div className="information">
                <p> <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>ANTIQUE 19TH C AUSTRIAN VIENNESE ENAMEL GILT CLOCK</h3>
                <p>An antique Austrian Viennese enamel gilt clock.
                Louis XIV manner, early to mid 19th century.
                 The case is cast with a shell motif, scrolling decoration, 
                 and inset with enameled panels, sides, and facade intricately hand painted with romantic Rococo scenes.
                  The clock is raised on high decorative legs.
                   European Decorative Antiques And Collectibles, 
                   Antique Mantel And Table Clocks, Home Decor.
                </p>
                <p>Dimensions
                    H 4 7/8 in. All measurements are approximate.</p>
                <p>Condition
                    Overall good vintage condition. Signs of age and wear. Refer to photos. Sold As Is.</p>
            </div>
        </div>
    );
}