import React from "react";
import './Article.css';
import dummy_image from './dummy_image.jpg';

let toggleState = [false, false, false, false, false, false, false, false, false, false];

const ArticleItem = (props) => {
  const {article} = props;
  return (
    <div className="row g-0">
      <div class="col-md-4">
      {article.media.main_image 
        ? <img src={article.media.main_image} id="img-card" className="" alt="news"/>
        : <img src={dummy_image} id="img-card" className="" alt="news"/>}
      </div>  
      <div class="col-md-8">
        <div class="card-body">
          <h4 id="title" className="card-header bg-transparent">{article.title}</h4>
          <p className="summ">{article.summary}</p>
          {/* <p className="desc">{article.text.substring(0,250)}</p> */}
            <a href={article.url} target="_blank" className="btn btn-warning">View full article</a>
            <p className="published">Published on {article.published.substring(8,10)}-{article.published.substring(5,7)}-{article.published.substring(0,4)}</p>
        </div>
      </div> 
    </div>
  );
};

const ArticleList = (props) => {

    let listing = [];
    if(props.articles) {
      props.articles.map((news,i) => {
          listing.push(<li key={i} className="card mb-3"  id={"item#"+i} onClick={()=> {
          toggleState[i] = !toggleState[i];
          if(toggleState[i]) {
            document.getElementsByClassName("summ")[i].setAttribute('style', 'display:block');
          }
          else {
            document.getElementsByClassName("summ")[i].setAttribute('style', 'display:none');
          }
        }}>
          <ArticleItem key={news.article.uuid} article={news.article}/>
        </li>); 
    });

    }

  return (
      listing.length>0
      ? <ul id="final-list">{listing}</ul>
      : "Loading..."
  );
};

export default ArticleList;
