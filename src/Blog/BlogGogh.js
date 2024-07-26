import { FaLongArrowAltLeft } from 'react-icons/fa';
import './Blog.css'
import { Link } from 'react-router-dom';
const url = process.env.PUBLIC_URL; 
export default function BlogGogh() {
    return (
        <div className="blog-item">
            <div className="row my-5 justify-content-center">
                <img src={url+"/images/blogGogh.jpg"} />
            </div>

            <div className="row blog-content-center">
                <h2>New Acquisition in The Van Gogh Museum: ‘Clovis Sleeping’ by Paul Gauguin</h2>
            </div>

            <div className="row my-5 blog-content">
                <p>The Van Gogh Museum has acquired Clovis Sleeping by Paul Gauguin. Clovis Sleeping is a key work in Gauguin’s oeuvre, and the first Impressionist painting by the artist to be added to the museum’s collection.</p>
                <p>                    Gauguin combined his Impressionist technique and use of colour with a deeper layer of meaning in this work. Clovis Sleeping was a breakthrough, and precipitated the Symbolic style for which he became renowned.</p>

                <p>"Clovis endormis" by Gauguin, Rouen, 1884, was offered in the Sam Josefowitz sale at Christie's on 13 October 2023, with a GBP 3,000,000 – GBP 5,000,000 estimate. It didn't sell. The Josefowitz heirs sold it to the Van Gogh Museum for an undisclosed amount.</p>

                <p>Source:&nbsp;<a href="https://www.vangoghmuseum.nl/en/about/news-and-press/press-releases/20240611-new-acquisition-clovis-sleeping-by-paul-gauguin">vangoghmuseum</a></p>

                <p>Cover image:&nbsp;<a href="https://www.verenigingrembrandt.nl/nl/nieuws/schilderij-van-paul-gauguin-voor-van-gogh-museum">verenigingrembrandt</a></p>
            </div>
            <div className="my-4 row">
                <div className="col-12 d-flex justify-content-center">
                    <Link to="/bloghome" className="btn btn-antique-default"><FaLongArrowAltLeft/>&nbsp;&nbsp;Return</Link>
                </div>
            </div>

        </div>
    );
}