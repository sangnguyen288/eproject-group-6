import { useNavigate } from "react-router-dom";
export default function FurH() {
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
                            <img src={url + "/Furniture/table -2a.jpg"} class="d-block w-100" alt="table -2a" />
                        </div>
                        <div class="carousel-item">
                            <img src={url + "/Furniture/table -2b.jpg"} class="d-block w-100" alt="table -2b" />
                        </div>
                        <div class="carousel-item">
                            <img src={url + "/Furniture/table -2c.jpg"} class="d-block w-100" alt="table -2c" />
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
                <p>Charming Industrial Character
                    As an essential piece for every sensible home, this coffee table stands out with its charming industrial character and functional strength. Its clean silhouette sketches the exceptional taste of the host and its neutral property can merge with a wide range of interior arrangement.

                    Anti-Skip Pads
                    Heavy metal legs strengthen the stability and keep balance. Anti-Skip pads in the bottom protect your floor from the damage.

                    High-Grade and Sturdy Construction
                    The Metal frame and high quality MDF shelf, strengthen the stability and keep balance. Sturdy construction provides long term use in daily life.

                    SPECIFICATIONS:
                    Material: MDF, Metal and Wood Grain
                    Color: Oak
                    Product Size: 42''W x 23.6''D x 18''H
                    Product Weight: 36 LBS
                    Load Capacity: 300 LBS
                    Package Contents: 1 x Coffee Table, 1 x Assembly Instruction, 1 x Hardware
                </p>


            </div>

        </div>
    );
}