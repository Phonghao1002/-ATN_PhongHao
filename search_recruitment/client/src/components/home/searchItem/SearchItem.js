import "./searchItem.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { GlobalState } from "../../../GlobalState"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SearchItem = ({ recruitNew }) => {

    function MouseOver() {
        alert('Lưu tin')
      }
    // const state = useContext(GlobalState)
    // const [recruitNews] = state.recruitmentNewsAPI.recruitNews

    // console.log(recruitNews)
    // console.log(state)
    return (
        <div>
            <div className="searchItem">
                <img
                    src={recruitNew.images.url} alt=""
                    className="siImg"
                />
                <div className="siDesc">
                    <h1 className="siTitle" title={recruitNew.title}>{recruitNew.title}</h1>
                    <span className="siDistance">500m from center</span>
                    <span className="siTaxiOp">{recruitNew.content}</span>
                    <span className="siSubtitle">
                        {recruitNew.description}
                    </span>
                    {/* <span className="siFeatures">
                                Entire studio • 1 bathroom • 21m² 1 full bed
                            </span> */}
                    <span className="siCancelOp">Free cancellation </span>
                    <span className="siCancelOpSubtitle">
                        You can cancel later, so lock in this great price today!
                    </span>
                </div>
                <div className="siDetails">
                    <div className="siRating">
                        <span>Excellent</span>

                        <button ><FavoriteBorderIcon onMouseOver={MouseOver} /></button>
                    </div>
                    <div className="siDetailTexts">
                        <span className="siPrice">${recruitNew.price}</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <Link id="siCheckButton" to={`/detailsRecruitNews/${recruitNew._id}`} style={{ textDecoration: "none" }}>
                            Xem chi tiết
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchItem