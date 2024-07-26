import { FaLongArrowAltLeft } from 'react-icons/fa';
import './Blog.css'
import { Link } from 'react-router-dom';
export default function Blog() {
    const url = process.env.PUBLIC_URL;
    return (
        <div className="blog-item">
            <div className="row my-5 justify-content-center">
                <img src={url+"/images/blog.jpeg"} />
            </div>
            <div className="row blog-content-center">
                <h2>Rare early medieval ivory carving acquired for £2m by V&amp;A</h2>
            </div>
            <div className="row my-5 blog-content">
                <p>V&amp;A Museum Acquires Rare Medieval Carving of Jesus, Beating Out the Met</p>

                <p>The Deposition from the Cross (ca. 1190–1200) is a medieval statuette of Jesus being brought down from the cross.
                    The museums’ battle over the carving began when the Met privately purchased the sculpture for more than $2.5 million from
                    Sotheby’s last year on the condition that it could be exported to New York.&nbsp;</p>
                &nbsp;Instead, the DCMS placed a temporary export ban on the object last November. Any British buyer was given months to come up with the funds to purchase the artwork to keep it within the country.
                The V&amp;A announced in February that it would seek to raise the funds. On Friday it said it had been successful.&nbsp;

                <p>The sculpture will enter the V&amp;A’s permanent collection and return to public display in V&amp;A South Kensingto</p>

                <p>Cover image:&nbsp;Photograph: Stevenson, James/Victoria &amp; Albert Museum</p>
            </div>

            <div className="my-4 row">
                <div className="col-12 d-flex justify-content-center">
                    <Link to="/bloghome" className="btn btn-antique-default"><FaLongArrowAltLeft/>&nbsp;&nbsp;Return</Link>
                </div>
            </div>
        </div>
    );
}