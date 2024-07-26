import { useNavigate } from "react-router-dom";
export default function FineK() {
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
                <img src={url+"/Fineart/fineart10.jpg"} />
            </div>

            <hr />
            <div className="information">
                <p> <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>The Knights: William Dyce (1806–1864)</h3>
                <p>The Knights:
                    William Dyce (1806–1864), Piety: The Knights of the Round Table about to Depart in Quest of the Holy Grail (1849), watercolour and bodycolour over pencil on buff paper, laid down, 23.3 x 44 cm, Scottish National Gallery, Edinburgh, Scotland. Wikimedia Commons.

                    Dyce’s watercolour of Piety: The Knights of the Round Table about to Depart in Quest of the Holy Grail (1849) uses hatching more commonly found in illustration and prints, and was the study for this fresco for the Queen’s Robing Room in the Palace of Westminster.
                    It shows a melée of knights of the Round Table paying tribute to King Arthur and Queen Guinevere (at the right), as those knights prepare to depart on their quest for the Holy Grail, the legendary chalice used by Christ at the Last Supper before his crucifixion (or possibly a cup used by Joseph of Arimathea to collect Christ’s blood). It’s perhaps the Arthurian equivalent of Frith’s Derby Day.
                    Dyce tried to couple this series of Arthurian frescos with the seven Christian virtues. He completed those for Mercy, Hospitality, Generosity, Piety, and Courtesy, but not for Courage or Fidelity. Links between the narratives chosen and the corresponding virtue aren’t particularly strong.</p>
            </div>
        </div >
    );
}