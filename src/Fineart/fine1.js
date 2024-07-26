import { useNavigate } from "react-router-dom";
export default function FineA() {
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
            <button className="btn btn-close" type="submit" onClick={(ev)=> navigate(`/fineart`)} ></button>
            <img src={url+"/Fineart/1afine.jpg"} />
                <img src={url+"/Fineart/1fine.jpg"} />
                <img src={url+"/Fineart/1bfine.jpg"} />
            </div>
          
            <hr />
            <div className="information">
                <p> <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>Munster, pub. 1614 - Sea Monster and Animal Tableau (Famous Chart, Munster's Monsters); Monstra Marina et Terrestria
                    About the engraving:</h3>
                <p>Munster, pub. 1614 - Sea Monster and Animal Tableau (Famous Chart, Munster's Monsters); Monstra Marina et Terrestria
                    About the engraving:</p>

                <p>    This is one of the most famous charts of mythical sea monsters. The monsters were derivative of Olaus Magnus's Carta Marina from 1539. It reflects the Renaissance attitude towards the unknown lands beyond civilization. The image is one of the most sought after curiosities of the 16th century.</p>

                <p>    One vignette shows a galleon trying to outrun one monster by throwing their cargo overboard, while one sailor takes sight with a musket. It features beasts of land and sea. While many are the stuff of fantasy, many are based upon depictions from Scandinavian sailors and whalemen encounters. The monsters included are whales, giant lobsters, sea serpents (perhaps oarfish), and possibly an Orca and walrus.</p>


                <p>    Description of the work:

                    This very old woodcut is from Sebastian Munster's Cosmographey oder beschreibung aller Länder, Herrschafften, fürnemmsten Stetten, geschichten, gebreüchen, handtierungen &c. It was published in Basel by Henrichum Petri in 1614.</p>

                <p>    The work was a massive chronicle of all the geographical knowledge of the world to that point. The work included world maps as well as views of smaller cities and woodcut illustrations of historical subjects, mythology, natural history and ethnography. It was the first work to show America in its "correct" continental form and "sealed the fate of 'America' as the name of the New World." (Burden 12) It was also the first to name the Pacific Ocean</p>
                <p>    Sebastian Munster (1489-1552) was a German cartographer, cosmographer, and a Hebrew scholar. He also became a Franciscan monk at an early age. Munster's Cosmographia was the first work of scientific based knowledge in the German language.</p>


                <p> Paper Size ~ 17" by 13 1/2" (Fold Out)</p>

                <p> The work is in good condition overall. There is some paper repair in the lower margin outside of the border. There may be a few minor imperfections or faint marks to be expected with age. There may be some faint bleed through or offset to the fold out plates. Please review the image carefully for condition and contact us with any questions.
                    ~ 17" by 13 1/2" (Fold Out)
                </p>

            </div>
        </div>
    );
}