import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { image_url, title, thumbnail_url, details, _id} = news;
  return (
    <div className="card   shadow-md mb-10">
      <figure>
        <img src={thumbnail_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} news={news} className="text-red-500 font-bold">
              Read More..........
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
