import { useNavigate } from "react-router-dom";

export default function Furnitures() {
    const history = useNavigate("");
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session");
        history("/furnitures");
    }
    const navigate = useNavigate();
    const url = process.env.PUBLIC_URL;
    return (
        <div>
            <div className="picture">

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur1`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/ottoman-1a.jpeg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">Detail
                            Model: 2453706
                            Dimensions: diameter: 35.00 height: 17.25
                            Material: leather
                            Pattern: solid color
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>


                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur2`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/ottoman-2a.jpeg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">Detail
                            Model: 2453228
                            Dimensions: 47.50w x 19.00h x 33.50l
                            Material: fabric
                            Pattern: solid color
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>


                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur3`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/ottoman-3a.jpeg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">Detail
                            Model: 3310022
                            Dimensions: 48.50w x 19.00h x 31.00l
                            Material: fabric
                            Pattern: solid color
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>


                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur4`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/sofa-1a.jpeg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">
                            Detail :
                            Model: 6940054
                            Dimensions: 68.50w x 34.00h x 36.00l
                            Material: fabric
                            Pattern: solid color
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur5`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/sofa-2a.jpeg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">
                            Detail :
                            Model: 9719506
                            Dimensions: 61.00w x 33.50h x 40.50l
                            Material: fabric
                            Pattern: solid color
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur6`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/sofa-3a.jpeg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">
                            Detail
                            Model: 6980020
                            Dimensions: 66.50w x 32.50h x 36.00l
                            Material: fabric
                            Pattern: solid color
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur7`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/table -1a.jpg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">
                            Space-saving: Wide tabletop (47.24" x 23.62")
                            Dimension : 23.62"D x 47.24"W x 18.5"H (60 x 120 x 47 cm)
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur8`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/table -2a.jpg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">
                            SPECIFICATIONS:
                            Material: MDF, Metal and Wood Grain
                            Color: Oak
                            Product Size: 42''W x 23.6''D x 18''H
                            Product Weight: 36 LBS
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur9`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/table -3a.jpeg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">
                            <p> Detail:</p>
                            Model: 3864410
                            <p> Dimensions: 60.00w x 16.00h x 40.00l
                                Base color: light gray
                                Frame color: black</p>

                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur10`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/dining chair 1.jpg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">
                            Seat: Polyester
                            Legs: Powder-coated metal
                            Size: 54cm (W) x 55cm (D) x 82cm (H)
                            Seat Height: 45cm (H)
                            Armrest to Floor: 69cm (H)
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur11`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/dining chair 4.jpg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">
                            Size: 54cm (W) x 55cm (D) x 82cm (H)
                            Seat Height: 45cm
                            Weight: 5.6kg
                            Package Dimensions: 25cm (W) x 56cm (D) x 75cm (H)
                            Package Weight: 14.2kg
                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fur11`)} >
                    <div className="card-body">
                        <img src={url+"/Furniture/dining chair 7.jpg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">
                            Fabric: Polyester & Foam
                            Legs: Metal
                            Size: 54.5cm (W) x 54cm (D) x 77.5cm (H)
                            Seat Height: 49cm
                            Weight: 11.2kg

                        </p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>



            </div>

        </div>
    );
}


