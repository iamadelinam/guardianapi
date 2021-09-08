function Guardian(props) {
  return (
    <div>
      <input value={props.query} onChange={props.changeQuery} />
      <button onClick={props.onClick}>Search</button>
      {props.articles.map((article) => {
        return (
          <div key={article.id}>
            <a href={article.webUrl}>{article.webTitle}</a>
            <p>Section: {article.pillarName}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Guardian;