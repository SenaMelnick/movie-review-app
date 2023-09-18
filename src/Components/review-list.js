import React from "react";
import Review from "./review";
import ReviewForm from "./review-form";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: props.reviews
        };
    };

    render() {
        return (
            <div className="box" id="review-holder">
                <Review {...this.state.reviews[0]}></Review>
                <hr className="white"></hr>
                <Review {...this.state.reviews[1]}></Review>
                <hr className="white"></hr>
                <ReviewForm/>
            </div>
        )
    }
}