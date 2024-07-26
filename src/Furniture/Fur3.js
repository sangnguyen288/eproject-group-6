import { useNavigate } from "react-router-dom";
export default function FurC() {
    const history = useNavigate();
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session ");
        history("/furnitures");
    }
    const navigate = useNavigate("");
    const url = process.env.PUBLIC_URL;
    return (
        <div>

            <div className="fur">
                <button id="fur" className="btn btn-close" type="submit" onClick={(ev) => navigate(`/furnitures`)} ></button>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={url+"/Furniture/ottoman-3a.jpeg"} class="d-block w-100" alt="ottoman-3a" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/ottoman-3b.jpeg"} class="d-block w-100" alt="ottoman-3b" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/ottoman-3c.jpeg"} class="d-block w-100" alt="ottoman-3c" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <hr />
            <div className="information">
                <p><button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>Description</h3>
                <p>The Kaya cocktail ottoman offers lush curves with personality. This functional design can be used as an extra seat with its foam cushion—plus, a footrest or as a makeshift table for home accents. Kaya is built with castors for easy maneuverability.</p>
                <p>Detail
                    Model: 3310022
                    Dimensions: 48.50w x 19.00h x 31.00l
                    Material: fabric
                    Weight capacity (in lbs): 250
                    Seat cushion type: attached
                    Leg height (in inches): 1.6
                    Seat cushion fill material: foam
                    Pattern: solid color
                    Leg color: light brown
                    Leg material: solid wood
                    Fabric type: polyester
                    Fabric color: white
                    Pillow fill material: fiber
                    Frame material: engineered wood
                </p>
            </div>

        </div>
    );
}