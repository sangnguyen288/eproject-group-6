import { useNavigate } from "react-router-dom";
export default function FurI() {
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
                            <img src={url+"/Furniture/table -3a.jpeg"} class="d-block w-100" alt="table -3a" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/table -3b.jpeg"} class="d-block w-100" alt="table -3b" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/Furniture/table -3c.jpeg"} class="d-block w-100" alt="table -3c" />
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
                <p>Introducing the coffee table - a modern and stylish addition to your living room. With its clean lines and light gray color, this eco-friendly table is made from solid wood, specifically oak. Its open base design provides extra storage for all your favorite things. Get ready to impress with this trendy coastal style coffee table.
                    Detail
                    Model: 3864410
                    Dimensions: 60.00w x 16.00h x 40.00l
                    Style: american contemporary
                    Base material: solid wood
                    Additional material details: mdf
                    Base color: light gray
                    Frame color: black
                </p>

            </div>

        </div>
    );
}