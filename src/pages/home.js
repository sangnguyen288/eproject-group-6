import { FaLongArrowAltRight } from 'react-icons/fa';
import './home.css'
import { Link } from 'react-router-dom';
export default function Home() {
    const url = process.env.PUBLIC_URL;
    return (
        <div className="home-container">
            <div className="home-item">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={url+"/images/clock.jpg"} class="d-block w-100" alt="clock" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/images/br logo.jpg"} class="d-block w-100" alt="brlogo" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/images/magnifying-glass.jpg"} class="d-block w-100" alt="manifyingglass" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/images/camera.jpg"} class="d-block w-100" alt="camera" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/images/key.jpg"} class="d-block w-100" alt="key" />
                        </div>
                        <div class="carousel-item">
                            <img src={url+"/images/pipes.jpg"} class="d-block w-100" alt="pipes" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <section>
                <div className="container-sell">
                    <div className="row">
                        <div className="col-md-5 first-how-to-sell" >
                            <span className="text-uppercase">Consign with Team6</span>
                            <p>Would you like to sell your antiques or collectibles hassle-free and for the best price? Go with BidSpirit MarketPlace, the fastest-growing auction house in the FPT.</p>
                            <Link to="/antiques">How to sell</Link>
                            <img src={url+"/images/gavel.jpeg"} alt="gavel" className="gavel"/>
                        </div>
                    </div>
                </div>
            </section>


            <article>
                <div className="container-blog">
                    <h2><a href="/blog">Blog</a></h2>
                    <div className="row ">
                        <div className="col-12 col-md-7" style={{ cursor: "pointer"}}>
                            <img className="lazy" src={url+"/images/blog.jpeg"} data-src={url+"/image/blogs/rare-early-medieval-ivory-carving0-acquired-for-£2m-by-v&amp;a/96a404f3-45b2-4293-924a-2f4d4fbb1438.jpeg"} onerror="this.src='/img/no_image-100x100.png'" style={{width:"70%"}} />
                            <div className="d-flex flex-column">
                                <span className="blog-title">Rare early medieval ivory carving acquired for £2m by V&amp;A</span>
                                <span className="blog-summary">A beautiful 12th-century walrus ivory carving regarded as an “elemental object of English art” is to remain in the UK after the V&A successfully raised £2m to acquire it.</span>
                                <div className="blog-read-more my-2">
                                    <Link to="/blog">Read more&nbsp;&nbsp;<FaLongArrowAltRight/></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-5">
                            <div  style={{ cursor: "pointer" }}>
                                <img style={{ height: "250px" }} className="lazy" src={url+"/images/blogRome.jpeg"} data-src={url+"/image/blogs/a-magnificent-ancient-rome-sculpture-exhibition-at-the-musee-du-louvre-june-26-to-november-11-2024/11e0e6ac-0cc8-4686-bed3-c120e2be20d2-_1_к.jpeg"} onerror="this.src='/img/no_image-100x100.png'"/>
                                <div className="d-flex flex-column">
                                    <span className="blog-title">A magnificent ancient Rome sculpture exhibition at the Musée du Louvre, June 26 to November 11, 2024.</span>
                                    <span className="blog-summary">Come and admire the treasures of ancient Rome, with a visit to the "Masterpieces from the Torlonia Collection" exhibition, at the Musée du Louvre, from June 26 to November 11, 2024.</span>
                                    <div className="blog-read-more my-2">
                                        <Link to="/blogrome">Read more&nbsp;&nbsp;<FaLongArrowAltRight/></Link>
                                    </div>
                                </div>
                            </div>

                            <div style={{ cursor: "pointer" }}>
                                <img style={{ height: "250px" }} className="lazy" src={url+"/images/blogGogh.jpg"} data-src={url+"/image/blogs/new-acquisition-in-the-van-gogh-museum-clovis-sleeping-by-paul-gauguin/7e906b17-bf83-4ea7-8067-f46caa7ec38d.jpg" }onerror="this.src='/img/no_image-100x100.png'" />
                                <div className="d-flex flex-column">
                                    <span className="blog-title">New Acquisition in The Van Gogh Museum: ‘Clovis Sleeping’ by Paul Gauguin</span>
                                    <span className="blog-summary">The Van Gogh Museum has acquired Clovis Sleeping by Paul Gauguin.</span>
                                    <div className="blog-read-more my-2">
                                        <Link to="/bloggogh">Read more&nbsp;&nbsp;<FaLongArrowAltRight/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>


            <article>
                <div className="container-articles">
                    <h2><a href="/articles">Articles</a></h2>
                    <div className="row ">
                        <div className="col-12 col-md-4"  style={{ cursor: "pointer" }}>
                            <img className="lazy" src={url+"/images/articles.jpeg"} data-src={url+"/image/articles/the-exquisite-art-of-japanese-cloisonné-enamel/4d92a03f-fb58-4a9e-b983-98547365d5b8.jpeg"} onerror="this.src='/img/no_image-100x100.png'" style={{width:"280px"}}/>
                                <div className="d-flex flex-column">
                                    <span className="blog-summary">The Exquisite Art of Japanese Cloisonné Enamel</span>
                                    <span className="blog-summary">Japanese cloisonné enamel, known as "shippo" (七宝), is a remarkable art form that marries meticulous craftsmanship with a rich cultural heritage.</span>
                                    <div className="blog-read-more my-3">
                                        <Link to="/articleart">Read more&nbsp;&nbsp;<FaLongArrowAltRight/></Link>
                                    </div>
                                </div>
                        </div>
                        <div className="col-12 col-md-4" style={{ cursor: "pointer" }}>
                            <img className="lazy" src={url+"/images/Новый проект .jpg"} data-src={url+"/image/articles/exploring-the-rich-heritage-of-japanese-and-chinese-cloisonne-enamel/Новый проект - 2024-05-19T002530.282.jpg"} onerror="this.src='/img/no_image-100x100.png'" style={{width:"200px"}}/>
                                <div className="d-flex flex-column">
                                    <span className="blog-summary">Exploring the Rich Heritage of Japanese and Chinese Cloisonné Enamel</span>
                                    <span className="blog-summary">Cloisonné enamel, a magnificent art form that originated in ancient times, continues to captivate art enthusiasts worldwide with its intricate designs and vibrant colors.</span>
                                    <div className="blog-read-more my-3">
                                        <Link to="/articlerich">Read more&nbsp;&nbsp;<FaLongArrowAltRight/></Link>
                                    </div>
                                </div>
                        </div>
                        <div className="col-12 col-md-4"  style={{ cursor: "pointer" }}>
                            <img className="lazy" src={url+"/images/Новый .jpg"} data-src={url+"/image/articles/the-evolution-of-cartier-a-tale-of-elegance-innovation-and-prestige/Новый проект - 2024-05-13T160635.158.jpg"} onerror="this.src='/img/no_image-100x100.png'" style={{width:"215px"}}/>
                                <div className="d-flex flex-column">
                                    <span className="blog-summary">The Evolution of Cartier: A Tale of Elegance, Innovation, and Prestige</span>
                                    <span className="blog-summary">Since its inception, Cartier has symbolized luxury, refinement, and unparalleled craftsmanship in the world of jewelry and watchmaking.</span>
                                    <div className="blog-read-more my-3">
                                        <Link to="/articlecartier">Read more&nbsp;&nbsp;<FaLongArrowAltRight/></Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </article>

        </div>


    );

}