

import React from 'react';

const BlogArticle = ({ mainArticle, articleRefs }) => {
  return (
    <div>
      <section className="blog-page-article-section">
        {mainArticle && mainArticle.map((article, mainIndex) => (
          <div className="blog-page-article-main-contents" key={mainIndex} ref={el => articleRefs.current[mainIndex] = el} >
            <h1 id={mainIndex}>{article.heading}</h1>
            {article.description && article.description.map((desc, descIndex) => (
              <p key={descIndex}>{desc}</p>
            ))}
           {article.points && article.points.map((point,pointIndex) => ( 
              <li key={pointIndex}>{point}</li>
            ))}
            {article.subArticle && article.subArticle.map((subarticle, subIndex) => (
              <div className="blog-page-subarticle" key={subIndex}>
                <h2>{subarticle.heading}</h2>
                {subarticle.description.map((subDesc, descIndex) => (
                  <p key={descIndex}>{subDesc}</p>
                ))}
                 {subArticle.points && subArticle.points.map((point,pointIndex) => ( 
              <li key={pointIndex}>{point}</li>
            ))}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogArticle;
