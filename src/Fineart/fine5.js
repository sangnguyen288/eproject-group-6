import { useNavigate } from "react-router-dom";
export default function FineE() {
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
            <img src={url+"/Fineart/5bfine.jpg"} />
                <img src={url+"/Fineart/5fine.jpg"} />
                <img src={url+"/Fineart/5afine.jpg"} />
            </div>
          
            <hr />
            <div className="information">
                <p> <button className="btn btn-light"  type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>Abstract Lithograph After Piccaso</h3>
                <p>   Vintage Lithograph after Pablo Picasso.
                    Measurements:
                    32 inches high x 37.25 inches wide x 1.25 inches deep/projection from wall.</p>

                <p>    All items are sold as is. The auction house does not warrant authenticity on any specific piece. THERE ARE NO RETURNS. We can only offer our opinion and the material facts about the item and its condition.</p>

                <p>    ANY CONDITION STATEMENT IS GIVEN AS A COURTESY TO A CLIENT, IS ONLY AN OPINION AND SHOULD NOT BE TREATED AS A STATEMENT OF FACT. CAIN MODERN AUCTIONS SHALL HAVE NO RESPONSIBILITY FOR ANY ERROR OR OMISSION.</p>

                <p>    ALL BIDDERS ARE ENCOURAGED TO OBTAIN AS MUCH INFORMATION AS POSSIBLE ABOUT ANY ITEM AND A SHIPPING QUOTE FOR THE ITEM ON WHICH THEY WISH TO BID, BY REQUESTING CONDITION REPORTS AND SHIPPING QUOTES BY EMAIL, OR PREFERABLY, BY PERSONAL INSPECTION.</p>

                <p>    ALL ITEMS ARE SOLD AS IS WITH NO GUARANTEES OR WARRANTIES STATED OR IMPLIED. IT IS THE RESPONSIBILITY OF THE BIDDER TO EXAMINE ALL MATERIAL PRIOR TO BIDDING.</p>

                <p>  NO LOTS CAN BE RETURNED FOR A FULL OR PARTIAL REFUND EITHER BECAUSE BIDDER CHANGED HIS/HER MIND OR BECAUSE SHIPPING IS FOUND TO BE TOO HIGH/EXPENSIVE.</p>

                <p>   ITEMS NOT PICKED UP AFTER 30 DAYS WILL BE CONSIDERED FORFEITED WITHOUT REFUNDS.</p>
                <p>    Condition: Used condition, normal wear. nicks and scratches to frame, not inspected outside the frame.</p>
                <p>  The Condition Report states Cain Modern Auctions reasonable opinion as to the lots general condition in the terms stated in the particular report, and Cain Modern Auctions does not represent or guarantee that a Condition Report includes all aspects of the internal or external condition of the Lot. Cain Modern Auctions does not owe the buyer any obligation to report on the condition of the lot and makes no guarantee the condition will be given for the lot. Cain Modern Auctionss attempts to provide accurate descriptions and images of products online. It is the buyers responsibility to review all of the information provided about a lot before placing a bid. The buyer acknowledges that the products are sold on an the as-is as found condition.
                </p>


            </div>
        </div>
    );
}