import { useNavigate } from "react-router-dom";
export default function FurL() {
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
                            <img src={url+"/Furniture/dining chair 4.jpg"} class="d-block w-100" alt="diningchair4" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/dining chair 5.jpg"} class="d-block w-100" alt="diningchair5" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/dining chair 6.jpg"} class="d-block w-100" alt="diningchair6" />
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
                <p> Seat: PU<br/>
                    Legs: Powder-coated metal<br/>
                    Size: 54cm (W) x 55cm (D) x 82cm (H)<br/>
                    Seat Height: 45cm<br/>
                    Weight: 5.6kg<br/>
                    Package Dimensions: 25cm (W) x 56cm (D) x 75cm (H)<br/>
                    Package Weight: 14.2kg<br/>
                    Upholstered dining range each fitted with sleek black metal legs. The back of each chair features a wide curve creating a comfortable support.

                </p>

            </div>

        </div>
    );
}