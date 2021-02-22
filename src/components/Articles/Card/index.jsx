import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./Card.css";

const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const Card = ({ article, w }) => {
  const imageUrl =
    article?.thumbnail ||
    "https://res.cloudinary.com/selimyal/image/upload/c_thumb,h_200,w_750/v1596379063/large_blog_header_balloon_5597c1c205.jpg";
  return (
    <Col xs={12} md={w} className="articleCard">
      {article && (
        <div className="articleCardContainer">
          <img src={imageUrl} alt={article?.title}></img>
          <div className="articleCardOthers">
            <span className="articleCardTitle">{article?.title}</span>
            <p className="articleCardText">{article?.summary}</p>
            <div className="w-100 d-flex justify-content-end">
              <Link
                to={`/article/${article?.id}/${convertToSlug(article?.title)}`}
                className="readMore"
              >
                Devamını oku...
              </Link>
            </div>
          </div>
        </div>
      )}
    </Col>
  );
};

export default Card;