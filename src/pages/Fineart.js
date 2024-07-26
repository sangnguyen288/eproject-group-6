import { useNavigate } from "react-router-dom";

export default function FineArt() {
    const history = useNavigate("");
    const clickMe = () => {
        alert("Successfully Registered For The Aution Session ");
        history("/fineart");
    }
    const navigate = useNavigate();
    const url = process.env.PUBLIC_URL;
    return (
        <div>
            <div className="picture" >

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine1`)} >
                    <div className="card-body">
                        <img src={url+"/Fineart/fineart1.jpg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">Munster, pub. 1614 Sea Monster and Animal Tableau Paper Size ~ 17" by 13 1/2" (Fold Out)</p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine2`)}>
                    <div className="card-body">
                        <img src={url+"/Fineart/fineart2.jpg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">Gould, Australia Owen's Apteryx or Kiwi<br /> Paper Size ~ 14 5/8" by 21 7/8"</p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine3`)}>
                    <div className="card-body">
                        <img src={url+"/Fineart/fineart3.jpg"} className="card-img-top" />
                        <hr />
                        <p className="card-text">Kollner, Rare - Niagara Falls, The Rapids at Niagara. 18 Paper Size ~ 17" by 13"</p>
                        <hr />
                        <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                    </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine4`)}>
                <div className="card-body">
                    <img src={url+"/Fineart/fineart4.jpg"} className="card-img-top"/>
                    <hr/>
                    <p className="card-text">Kohler & Weigel - War Ship with Cross Sections Paper Size ~ 17 1/2" by 14 5/8" (Fold Out)</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine5`)}>
                <div className="card-body">
                    <img src={url+"/Fineart/fineart5.jpg"} className="card-img-top" />
                    <hr/>
                    <p className="card-text">Abstract Lithograph After Piccaso Vintage Lithograph after Pablo Picasso.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine6`)}>
                <div className="card-body">
                    <img src={url+"/Fineart/fineart6.jpg"} className="card-img-top"  />
                    <hr/>
                    <p className="card-text">Figural Woodblock By Kiyoshi Saito (Japan 1907-1997) Titled "Maiko III" Signed.</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine7`)}>
                <div className="card-body">
                    <img src={url+"/Fineart/fineart7.jpg"} className="card-img-top" />
                    <hr/>
                    <p className="card-text">H. VANDERBURCH ANTIQUE 19TH C DUTCH OIL PAINTING .</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine8`)}>
                <div className="card-body">
                    <img src={url+"/Fineart/fineart8.jpg"} className="card-img-top"  />
                    <hr/>
                    <p className="card-text">ANTIQUE ISLAMIC PERSIAN MINIATURE PAINTING C 1900 .</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine9`)}>
                <div className="card-body">
                    <img src={url+"/Fineart/fineart9.jpg"} className="card-img-top" />
                    <hr/>
                    <p className="card-text">ATTR TO ANATOLY ZVEREV RUSSIAN MIXED MEDIA PAINTING .</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine10`)}>
                <div className="card-body">
                    <img src={url+"/Fineart/fineart10.jpg"} className="card-img-top" />
                    <hr/>
                    <p className="card-text">The Knights: 
                    William Dyce (1806–1864), Piety: The Knights of the Round Table about to Depart in Quest of the Holy Grail (1849)</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
                </div>

                <div className="card" style={{ width: "18rem" }} onClick={(ev) => navigate(`/fine11`)}>
                <div className="card-body">
                    <img src={url+"/Fineart/fineart11.jpg"} className="card-img-top" />
                    <hr/>
                    <p className="card-text">The Last:
                    Dante Gabriel Rossetti (1828–1882), Arthur’s Tomb, or The Last Meeting of Launcelot and Guenevere (1855)</p>
                    <hr />
                    <button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button>
                </div>
                </div>

            </div>
        </div>
    );

}
