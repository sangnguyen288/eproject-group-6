import { useNavigate } from "react-router-dom";
export default function FineF() {
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
                <img src={url+"/Fineart/6fine.jpg"} />
                <img src={url+"/Fineart/6afine.jpg"} />
                <img src={url+"/Fineart/6bfine.jpg"} />
            </div>
          
            <hr />
            <div className="information">
                <p> <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>Figural Woodblock By Kiyoshi Saito (Japan 1907-1997) Titled "Maiko III" Signed.</h3>
                <p>Condition: Vintage condition, normal wear from regular use.</p>

                <p>    The Condition Report states Cain Modern Auctions reasonable opinion as to the lots general condition in the terms stated in the particular report, and Cain Modern Auctions does not represent or guarantee that a Condition Report includes all aspects of the internal or external condition of the Lot. Cain Modern Auctions does not owe the buyer any obligation to report on the condition of the lot and makes no guarantee the condition will be given for the lot.</p>

                <p>   Cain Modern Auctionss attempts to provide accurate descriptions and images of products online. It is the buyers responsibility to review all of the information provided about a lot before placing a bid. The buyer acknowledges that the products are sold on an the as-is as found basis/condition and all sales are final.</p>


            </div>
        </div >
    );
}