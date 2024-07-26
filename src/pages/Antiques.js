import { useNavigate } from "react-router-dom";

export default function Antiques() {

    const history = useNavigate();
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session ");
        history("");
    }
    const navigate = useNavigate();
    const url = process.env.PUBLIC_URL;
    return (

        <div className="picture">


            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details1`)} >
                <div className="card-body">
                    <img src={url+"/Antiques/antiques1.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">RUSSIAN 84 SILVER GILT GEMSTONES KOVSH W PAINTING Dimensions H 7 1/2 in</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details2`)}>
                <div className="card-body">
                    <img src={url+"/Antiques/antiques2.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">TALL RUSSIAN SILVER GILT CLOISONNE ENAMEL GOBLET Dimensions H 7 3/8 in.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details3`)} >
                <div className="card-body">
                    <img src={url+"/Antiques/antiques3.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">RUSSIAN SILVER ENAMEL NEPHRITE JADE PERFUME BOTTLE Dimensions H 3 1/2 in.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details4`)}>
                <div className="card-body">
                    <img src={url+"/Antiques/antiques4.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">ANTIQUE 19TH C AUSTRIAN VIENNESE ENAMEL GILT CLOCK Dimensions H 4 7/8 in.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>


            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details5`)}>
                <div className="card-body">
                    <img src={url+"/Antiques/antiques5.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">ANTIQUE CHINESE SANG DE BOEUF GLAZED CERAMIC BOX Dimensions 4 1/4 x 3 1/4 in. </p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>


            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details6`)}>

                <div className="card-body">
                    <img src={url+"/Antiques/antiques6.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">ANTIQUE JAPANESE WROUGHT IRON PAGODA LANTERN Dimensions H 12 in.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>


            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details7`)}>

                <div className="card-body">
                    <img src={url+"/Antiques/antiques7.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">VTG RUSSIAN SOVIET MUSIC DORFMAN PELIKAN SHEET BROCHURE Dimensions 13 3/4 x 10 in.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>


            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details8`)}>
                <div className="card-body">
                    <img src={url+"/Antiques/antiques8.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">ANTIQUE JAPANESE MEIJI FIGURAL BRONZE CANDLE HOLDERS Dimensions Average H 16 in.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>


            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details9`)}>
                <div className="card-body">
                    <img src={url+"/Antiques/antiques9.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">VINTAGE CHINESE CARVED GREEN QUARTZ BIRD FIGURE Dimensions H 6 7/8 in.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details10`)}>
                <div className="card-body">
                    <img src={url+"/Antiques/antiques10.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">FINE CHINESE QING DYNASTY CARVED AMETHYST FIGURE Dimensions H 4 1/4 in.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details11`)}>
                <div className="card-body">
                    <img src={url+"/Antiques/antiques11.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">ANTIQUE WOODEN THAI ANGEL FIGURINE SOUTHEAST ASIA Dimensions H 22 in.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details12`)}>
                <div className="card-body">
                    <img src={url+"/Antiques/antiques12.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">ANTIQUE INDIAN SCHOOL HINDU PAINTED WOOD FIGURE Dimensions 21 3/4 x 8 in. </p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>


            <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/details13`)}>
                <div className="card-body">
                    <img src={url+"/Antiques/antiques13.jpg"} className="card-img-top" />
                    <hr />
                    <p className="card-text">ANTIQUE FRENCH ENAMEL ART GLASS VASES ATTR TO JOYE Dimensions H 4 in. each.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
            </div>

        </div>
    );
}