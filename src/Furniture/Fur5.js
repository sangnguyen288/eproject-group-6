import { useNavigate } from "react-router-dom";
export default function FurE() {
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
                            <img src={"/Furniture/sofa-2a.jpeg"} class="d-block w-100" alt="sofa-2a" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/sofa-2b.jpeg"} class="d-block w-100" alt="sofa-2b" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/sofa-2c.jpeg"} class="d-block w-100" alt="sofa-2c" />
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
                <p>Includes: Small sofa with wood legs The Morgan sofa is designed for comfort and style and is perfect for hanging out with family and friends. Its soft polyester upholstery and foam core seating invite you to kick back and relax while its wide track arm design and sleek feet allow for versatile design options while giving your home an easy upgrade.</p>
                <p>Detail
                    Model: 9719506
                    Dimensions: 61.00w x 33.50h x 40.50l
                    Material: fabric
                    Frame material: engineered wood
                    Seat cushion fill material: foam
                    Leg color: dark brown
                    Pattern: solid color
                    Leg material: engineered wood
                    Fabric type: polyester
                    Back cushion fill material: fiber
                </p>
            </div>

        </div>
    );
}