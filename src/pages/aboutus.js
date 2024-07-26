
export default function AboutUs() {
    const url = process.env.PUBLIC_URL;
    return (
        <div>
            <div className="row ">
                <div className="col-24 col-sm-15">

                    <div className="d-flex flex-column mt-3">
                        <div className="profile">
                            <p>
                                <h2>BidSpirit Online MarketPlace</h2>
                                The BidSpirit Online MarketPlace is a comprehensive digital platform designed to facilitate the buying and selling of a wide array of products . Leveraging modern technology, offering a user-friendly interface and secure transaction processes. Here are some key features and highlights of the The BidSpirit Online Marketplace:
                                Key Features
                                Wide Product Range: BidSpirit hosts a vast selection of products, including antiques, fine art, and furnitures. This diversity allows customers to find  they need in one place.
                                User-Friendly Interface: The marketplace is designed with a focus on ease of use, featuring intuitive navigation, advanced search options, and personalized recommendations to enhance the shopping experience.
                                Secure Transactions: Security is a top priority for BidSpirit. The platform employs advanced encryption technologies to ensure that all transactions are safe and secure.
                                Customer Service: The marketplace offers excellent customer service, with support teams available to assist users with any issues or inquiries. This ensures a smooth and satisfying shopping experience.
                                Mobile Accessibility: BidSpirit is fully optimized for mobile devices, allowing users to shop conveniently from their smartphones or tablets.

                            </p>

                            <div className="row ">
                                <div className="col-24 col-md-15">

                                    <div className="d-flex flex-column mt-5">
                                        <img src={url+"/images/ANTIQUES1.jpg"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <hr />

            </div>



            <div className="aboutus">
                <div>
                    <img src={url+"/images/thanh1.jpg"} alt="img 1" />
                    <p>Truong Nhat Thanh</p>
                    <p>Student1559703</p>
                </div>
                <div>
                    <img src={url+"/images/leader.jpg"} alt="img2" />
                    <p>Nguyen Anh Sang</p>
                    <p>Student1559706</p>
                </div>
                <div>
                    <img src={url+"/images/thanh2.jpg"} alt="img3" />
                    <p>Nguyen Ngoc Yen Thanh</p>
                    <p>Student1559699</p>
                </div>
                <div>
                    <img src={url+"/images/tran.jpg"} alt="img4" />
                    <p>Nguyen Ngoc Tran</p>
                    <p>Student1559718</p>
                </div>

            </div>

        </div>
    );
}