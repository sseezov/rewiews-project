import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const prevIndex = () => {
    setIndex((index) => {
      index -= 1;
      return checkNumber(index);
    });
  };
  const nextIndex = () => {
    setIndex((index) => {
      index += 1;
      return checkNumber(index);
    });
  };
  const randomNumber = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    console.log(randomNum);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
  };
  const checkNumber = (num) => {
    if (num > people.length - 1) {
      return 0;
    } else if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomNumber}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
