import { useNavigate } from "react-router-dom";
export default function FineL() {
    const history = useNavigate();
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session ");
        history("/fineart");
    }
    const navigate = useNavigate("");
    const url = process.env.PUBLIC_URL;
    return (
        <div>
            <div className="fineart">
                <button className="btn btn-close" type="submit" onClick={(ev) => navigate(`/fineart`)} ></button>
                <img src={url+"/Fineart/fineart11.jpg"} />
            </div>

            <hr />
            <div className="information">
                <p> <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>The Last:
                    Dante Gabriel Rossetti (1828–1882)</h3>
                <p>The Last:
                    Dante Gabriel Rossetti (1828–1882), Arthur’s Tomb, or The Last Meeting of Launcelot and Guenevere (1855), watercolour, bodycolour and graphite on paper, 24 x 38.2 cm, The British Museum, London. Wikimedia Commons.

                    Dante Gabriel Rossetti was particularly fascinated by Arthurian legend. He painted two versions of Arthur’s Tomb, the first (above) from 1855. In these, after Arthur’s death, Lancelot leans over his tomb and starts to make love to the mourning Queen. The decoration on the side of the tomb shows King Arthur presiding over the Round Table.

                    In 1859, the Poet Laureate to Queen Victoria, Alfred, Lord Tennyson published his first set of four verse accounts of Arthurian legends, under the title Idylls of the King. He added further parts until there were twelve in total in 1885. Later Pre-Raphaelite paintings thus had the choice of following Malory or Tennyson.</p>
            </div>
        </div >
    );
}