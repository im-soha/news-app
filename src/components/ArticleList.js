import React from "react";
import './Article.css';
import dummy_image from './dummy_image.jpg';

let toggleState = [false, false, false, false, false, false, false, false, false, false];

const ArticleItem = (props) => {
  const {article} = props;
  return (
    <div className="result">
      {article.media.main_image 
        ? <img src={article.media.main_image} className="img-card" />
        : <img src={dummy_image} className="img-card" />}  
      <h4 className="title">{article.title}</h4>
      <p className="desc">{article.text}</p>
      <p className="published">{article.published.substring(0,10)}</p>
      {/* <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}
    </div>
  );
};

const ArticleList = (props) => {

    let listing = [];
    if(props.articles) {
      props.articles.map((news,i) => (
        listing.push(<li key={i} className="list-group-item" id={"item#"+i} onClick={()=> {
          toggleState[i] = !toggleState[i];
          if(toggleState[i]) {
            document.getElementsByClassName("desc")[i].setAttribute('style', 'display:block');
          }
          else {
            document.getElementsByClassName("desc")[i].setAttribute('style', 'display:none');
          }
        }}>
          <ArticleItem key={news.article.uuid} article={news.article}/>
        </li>)
      ));
    }

  return (
      listing.length>0
      ? <ul className="list-group list-group-flush">{listing}</ul>
      : "Loading..."
  );
};

export default ArticleList;