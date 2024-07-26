import { useNavigate } from "react-router-dom";
export default function FineB() {
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
                <img src={url+"/Fineart/2afine.png"} />
                <img src={url+"/Fineart/2bfine.jpg"} />
                <img src={url+"/Fineart/2fine.jpg"} />
            </div>

            <hr />
            <div className="information">
                <p><button className="btn btn-light" type="submit" onClick={(clickMe)}>Click To Participate</button></p>
                <h3>Gould, Australia - Owen's Apteryx or Kiwi</h3>
                <p>
                    This hand-colored folio lithograph is from the esteemed John Gould’s Birds of Australia. The work was published in London by Richard and John E. Taylor for the author between 1840 and 1869. Over 300 new species of Australian birds were identified through the production of this work, and it remains one of the most comprehensive works on Australian ornithology. It is believed only 250 sets were printed of this work.</p>

                <p>    John Gould's first work in connection with Australian birds was A Synopsis of the Birds of Australia and the Adjacent Islands. This work likely served as a teaser to drive up subscriptions for the work presented here, Birds of Australia. Both works were considered the height of Elizabeth Gould's artistry as she had begun working with Edward Lear who truly helped enhance her remarkable skill. The production of this work lead to Gould being considered the 'father of Australian ornithology.'</p>

                <p>   Originally the Goulds relied on Elizabeth's brothers to send back specimens, but John Gould realized to properly complete the work he would need to observe the birds in person. The couple moved to Australia in May of 1838. John explored Tasmania, New South Wales, and Australia's interior. Elizabeth stayed on the coast and produced over 600 drawings. John wrote to Prince Charles Lucien Bonaparte, “The interval spent from my native shores were some of the happiest days of my life ... The results of my journey cannot, I think, but be attended with great advantage to science.” Sauer noted that “Great as is the excellence of Mr. Gould's former publications, there can be no doubt that the present work exceeds them all.” (Sauer)</p>
                <p>John Gould created nearly 3000 hand-colored plates of animals in his extensive career. Gould gained much of his knowledge by observation and experience and contributed greatly to scientific knowledge at the time. Gould is believed to have done the original sketches for all of the plates. He utilized many talented artists to help create the finished lithograph including his wife Elizabeth Coxen Gould, Edward Lear, Joseph Wolf, William Hart, and H. C. Richter. Even at the time of publication, Gould’s plates were very expensive and only sold to a small set of subscribers. Due to the limited subscriber list, the plates remain rare and of high value for collectors today.
                </p>
                <p>
                    Paper Size ~ 14 5/8" by 21 7/8"
                </p>
                <p>
                    The work is in very good to excellent condition overall.
                    There sometimes is occasional faint text offset or minor imperfections or fox marks to be expected with age with this work.
                    Please review the image carefully for condition and contact us with any questions. ~ 14 5/8" by 21 7/8"
                </p>
            </div>
        </div>
    );
}