import React from 'react';



const Articles = ({ articles }) => {
  return (
    <div class="articles">
      {articles.map(article => (
        <a href={article.route} class="article-card">
          <img src={article.image} class="article-image"></img>
          <div class="article-content">
            <h2>{article.title}</h2>
            <p>{article.content}</p>

          </div>
        </a>
      ))}

    </div>
  );
};

export default Articles;