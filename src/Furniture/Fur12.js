import { useNavigate } from "react-router-dom";
export default function FurM() {
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
                            <img src={url+"/Furniture/dining chair 7.jpg"} class="d-block w-100" alt="diningchair7" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/dining chair 8.jpg"} class="d-block w-100" alt="diningchair8" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/dining chair 9.jpg"} class="d-block w-100" alt="diningchair9" />
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
                <p>Fabric: Polyester & Foam<br/>
                    Legs: Metal<br/>
                    Size: 54.5cm (W) x 54cm (D) x 77.5cm (H)<br/>
                    Seat Height: 49cm<br/>
                    Weight: 11.2kg<br/>
                    Featuring stunning gold legs and a curved back rest, the Shelby Dining Collection will add a sense of opulence and luxury to your home.<br/>
                    Key Features<br/>
                    - Perfect statement dining chair<br/>
                    - Modern & sleek design<br/>
                    - Gold detailed legs<br/>
                    - Padded seat & curved backrest providing ideal comfort<br/>
                    - Available in Rosewood & Beige

                </p>

            </div>

        </div>
    );
}