import { useNavigate } from "react-router-dom";
export default function FurD() {
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
                            <img src={url+"/Furniture/sofa-1a.jpeg"} class="d-block w-100" alt="sofa-1a" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/sofa-1b.jpeg"} class="d-block w-100" alt="sofa-1b" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/sofa-1c.jpeg"} class="d-block w-100" alt="sofa-1c" />
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
                <p>Elevating your living room has never been more effortless with the Wesley collection, especially for those who love to entertain and host. Contemporary and cool, the loveseat impresses with its less-is-just-right approach, menswear-inspired heathered upholstery, and all-around low profile. The solid wood legs provide enough lift while simultaneously complementing the fabric. Attached armrest pillows and seat cushions coupled with removable back cushions offer foam-fiber comfort.</p>
                <p>Detail

                    Model: 6940054
                    Dimensions: 68.50w x 34.00h x 36.00l
                    Material: fabric
                    Weight capacity (in lbs): 660
                    Back height - seat to top of back (in inches): 33.46
                    Seat cushion type: attached
                    Back cushion thickness (in inches): 7.87
                    Seat cushion fill material: foam and fiber
                    Leg color: dark tone
                    Pattern: solid color
                    Leg material: solid wood
                    Back cushion type: removable
                    Number of seat cushions: 2
                    Seat cushion thickness (in inches): 7.48
                    Fabric type: polyester
                    Back cushion fill material: fiber
                    Fabric color: light beige
                    Number of back cushions: 2
                    Frame material: engineered wood
                    Arm height - top of arm to floor (in inches): 25.98

                </p>
            </div>

        </div>
    );
}