import { useNavigate } from "react-router-dom";
export default function FurG() {
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
                            <img src={url+"/Furniture/table -1a.jpg"} class="d-block w-100" alt="table -1a" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/table -1b.jpg"} class="d-block w-100" alt="table -1b" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/table -1c.jpg"} class="d-block w-100" alt="table -1c" />
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
                <p>Space-saving: Wide tabletop (47.24" x 23.62") to provide plenty space to put stuff like vase and tea set on it. Bottom shelf provide extra storage space for your daily items.
                Dimension : 23.62"D x 47.24"W x 18.5"H (60 x 120 x 47 cm)Its warm and simple style sketches the exceptional taste of the host and its neutral property can merge with a wide range of interior decor.
                    Completed in thickened MDF board and heavy-duty powder-coated metal frame, this coffee table with storage has superior stability and durability.
                </p>

            </div>

        </div>
    );
}