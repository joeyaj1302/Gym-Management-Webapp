import React from "react";

import "../CSS/style.css";
import "../CSS/demo.css";

const Feedback = () => {
  return (
    <div className="feedback">
      <p>
        Dear Customer,
        <br />
        Thank you for working out in our gym. We would like to know how we
        performed. Please spare some moments to give us your valuable feedback
        as it will help us in improving our service.
      </p>
      <h4>Please rate your service experience for the following parameters</h4>

      <form method="post" action="#action-url">
        <label>1. Your overall experience with us ?</label>
        <br />
        <div Style="color:grey">
          <span Style="float:left">POOR</span>
          <span Style="float:right">BEST</span>
        </div>
        <span class="scale-rating">
          <label value="1">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="2">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="3">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="4">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="5">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="6">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="7">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="8">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="9">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="10">
            <input type="radio" name="rating" value="10" />
            <label Style="width:100%;"></label>
          </label>
        </span>
        <div className="clear"></div>
        <hr className="survey-hr" />

        <label>
          2. Friendliness and courtesy shown to you while recieving your vehicle
        </label>
        <br />
        <div Style="color:grey">
          <span Style="float:left">POOR</span>
          <span Style="float:right">BEST</span>
        </div>
        <span class="scale-rating">
          <label value="1">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="2">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="3">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="4">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="5">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="6">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="7">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="8">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="9">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="10">
            <input type="radio" name="rating" value="10" />
            <label Style="width:100%;"></label>
          </label>
        </span>

        <div className="clear">
          <hr className="survey-hr" />
          <label>
            3. Friendliness and courtesy shown to you while delivery of your
            vehicle
          </label>
          <br />
          <div Style="color:grey">
            <span Style="float:left">POOR</span>
            <span Style="float:right">BEST</span>
          </div>{" "}
        </div>

        <span class="scale-rating">
          <label value="1">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="2">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="3">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="4">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="5">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="6">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="7">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="8">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="9">
            <input type="radio" name="rating" />
            <label Style="width:100%;"></label>
          </label>
          <label value="10">
            <input type="radio" name="rating" value="10" />
            <label Style="width:100%;"></label>
          </label>
        </span>

        <div className="clear"></div>
        <hr className="survey-hr" />
        <label for="m_3189847521540640526commentText">
          4. Any Other suggestions:
        </label>
        <br />
        <br />
        <textarea cols="75" name="commentText" rows="5" Style="100%"></textarea>
        <br />
        <br />
        <div className="clear"></div>
        <input
          Style="background:#43a7d5;color:#fff;padding:12px;border:0"
          type="submit"
          value="Submit your review"
        />
      </form>
    </div>
  );
};

export default Feedback;
