import { useNavigate } from "react-router-dom";
export default function FurK() {
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
                            <img src={url+"/Furniture/dining chair 1.jpg"} class="d-block w-100" alt="diningchair1" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/dining chair 2.jpg"} class="d-block w-100" alt="diningchair2" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/dining chair 3.jpg"} class="d-block w-100" alt="diningchair3" />
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
                <p>Seat: Polyester<br/>
                    Legs: Powder-coated metal<br/>
                    Size: 54cm (W) x 55cm (D) x 82cm (H)<br/>
                    Seat Height: 45cm (H)<br/>
                    Armrest to Floor: 69cm (H)<br/>
                    Upholstered dining range each fitted with sleek black metal legs. The back of each chair features a wide curve creating comfortable support. Dining chairs sold as a set of 2.
                </p>

            </div>

        </div>
    );
}