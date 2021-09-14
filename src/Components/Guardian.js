import { Link } from "react-router-dom";
import Header from "./Header";
function Guardian(props) {
  return (
    // <div className="page">
    <>
      <Header />
      <div className="div-search">
        <input
          className="search-input"
          value={props.query}
          onChange={props.changeQuery}
        />
        <button className="search-button" onClick={props.onClick}>
          Search
        </button>
      </div>

      <div className="results">
        {props.articles.map((article) => {
          return (
            <div className="article" key={article.id}>
              <Link className="link" to={article.webUrl}>
                {article.webTitle}
              </Link>
              <p className="section">Section: {article.pillarName}</p>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
}

export default Guardian;
