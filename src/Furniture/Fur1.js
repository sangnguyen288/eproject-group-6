import { useNavigate } from "react-router-dom";
export default function FurA() {
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
            <button id="fur" className="btn btn-close" type="submit" onClick={(ev)=> navigate(`/furnitures`)} ></button>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={url+"/Furniture/ottoman-1a.jpeg"} class="d-block w-100" alt="ottoman-1a" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/ottoman-1b.jpeg"} class="d-block w-100" alt="ottoman-1b" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/ottoman-1c.jpeg"} class="d-block w-100" alt="ottoman-1c" />
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
                <p>The Yvonne storage ottoman offers greater form and function to your space of choice. This square design features stylish upholstery and a foam cushion that offers comfy seating. The four seat cushions can be removed to store entertainment essentials, seasonal décor, and so much more. Yvonne also displays mid-century modern flair with its clean silhouette.</p>
                <p>Detail
                    Model: 2453706
                    Dimensions: diameter: 35.00 height: 17.25
                    Material: leather
                    Pattern: solid color
                </p>
            </div>

        </div>
    );
}