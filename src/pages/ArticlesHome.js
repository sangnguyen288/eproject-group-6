import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ArticlesHome() {
    const navigate = useNavigate();
    const url = process.env.PUBLIC_URL;
    return (
        <div>
             
              <p className="title">ARTICLES</p>
             
            <div className="articles-home">

                <div className="row ">
                    <div className="col-12 col-md-7" onClick={(ev) => navigate(`/articleart`)} style={{ cursor: "pointer" }}>
                        <img src={url+"/images/articles.jpeg"} style={{width:"20rem",height:"25rem"}} />
                        <div className="d-flex flex-column">
                            <span className="blog-title">RUSSIAN 84 SILVER GILT GEMSTONES KOVSH W PAINTING Dimensions H 7 1/2 in V&amp;A</span>
                            <div className="blog-read-more my-2">
                                <button className="btn btn-light" type="submit">Read more&nbsp;&nbsp; <FaLongArrowAltRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12 col-md-7" onClick={(ev) => navigate(`/articlerich`)} style={{ cursor: "pointer" }}>
                        <img src={url+"/images/Новый проект .jpg"} style={{width:"17rem",height:"25rem"}} />
                        <div className="d-flex flex-column">
                            <span className="blog-title">RUSSIAN 84 SILVER GILT GEMSTONES KOVSH W PAINTING Dimensions H 7 1/2 in V&amp;A</span>
                            <div className="blog-read-more my-2">
                                <button className="btn btn-light" type="submit">Read more&nbsp;&nbsp; <FaLongArrowAltRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12 col-md-7" onClick={(ev) => navigate(`/articlecartier`)} style={{ cursor: "pointer" }}>
                        <img src={url+"/images/Новый .jpg"} style={{width:"17rem",height:"25rem"}} />
                        <div className="d-flex flex-column">
                            <span className="blog-title">RUSSIAN 84 SILVER GILT GEMSTONES KOVSH W PAINTING Dimensions H 7 1/2 in V&amp;A</span>
                            <div className="blog-read-more my-2">
                                <button className="btn btn-light" type="submit">Read more&nbsp;&nbsp; <FaLongArrowAltRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
}