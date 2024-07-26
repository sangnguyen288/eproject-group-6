import { useNavigate } from "react-router-dom";
export default function FurB() {
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
                            <img src={url+"/Furniture/ottoman-2a.jpeg"} class="d-block w-100" alt="ottoman-2a" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/ottoman-2b.jpeg"} class="d-block w-100" alt="ottoman-2b" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/ottoman-2c.jpeg"} class="d-block w-100" alt="ottoman-2c" />
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
                <p>The Willow ottoman does a beautiful job of putting the finishing touch on your room or choice while being the perfect footrest after a long day. Regardless of whether you place it in the middle of your bedroom as a decorative piece or use it in your living room as extra seating when hosting guests, it’s easy to fall in love with this ottoman.</p>
                <p>Detail
                    Model: 2453228
                    Dimensions: 47.50w x 19.00h x 33.50l
                    Material: fabric
                    Weight capacity (in lbs): 350
                    Seat cushion type: removable
                    Leg height (in inches): 1.6
                    Back cushion thickness (in inches): 9.5
                    Seat cushion fill material: fiber
                    Leg color: black
                    Pattern: solid color
                    Leg material: solid wood
                    Back cushion type: removable
                    Fabric color: light beige
                    Frame material: engineered wood
                    Removable cover: yes

                </p>
            </div>

        </div>
    );
}