import { useNavigate } from "react-router-dom";
export default function FurF() {
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
                            <img src={url+"/Furniture/sofa-3a.jpeg"} class="d-block w-100" alt="sofa-3a" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/sofa-3b.jpeg"} class="d-block w-100" alt="sofa-3b" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/sofa-3c.jpeg"} class="d-block w-100" alt="sofa-3c" />
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
                <p>Designed with mid-century flair found nowhere else, the Zoey collection makes a big impression as the main focal point of your living room. The loveseat’s minimalist silhouette features purposeful curves, flared arms, and gorgeous tufting. Soft polyester upholstery and foam-fiber cushioning offer just the right amount of comfort. Splayed, metal spider legs add a degree of style while offering support.</p>
                <p>Detail
                    Model: 6980020
                    Dimensions: 66.50w x 32.50h x 36.00l
                    Material: fabric
                    Weight capacity (in lbs): 440
                    Back height - seat to top of back (in inches): 15
                    Seat cushion type: attached
                    Seat cushion fill material: foam and fiber
                    Pattern: solid color
                    Leg color: gray
                    Leg material: metal
                    Number of seat cushions: 1
                    Seat cushion thickness (in inches): 11.8
                    Fabric type: polyester
                    Back cushion fill material: foam and fiber
                    Fabric color: dark gray
                    Frame material: engineered wood
                    Assembly hardware included: yes
                    Arm height - top of arm to floor (in inches): 20
                </p>



            </div>

        </div>
    );
}