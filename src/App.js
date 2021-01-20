import React from 'react';
import './App.css';
import { getArticles } from "./api";
import ArticleList from './components/ArticleList';
import SearchBar from './components/searchBar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      apiError: "",
      searchTopic:"",
      totalResults:"",
      loading:false
    }
  }

  async componentDidMount() {
    try {
      const response = await getArticles("");
      this.setState({ articles: response.docs });
      console.log(this.state.articles);
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }

  searchForTopic = async (topic) => {
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.docs,
        searchTopic: topic,
        totalResults: response.totalResults,
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };


  render() {

    const {
      articles, 
      apiError,
      loading,
      searchTopic,
      totalResults
    } = this.state;

    return (
      <div className="container">
        <div className="header">
          <h1>News Application<small><a href="https://webhose.io/" target="_blank">(Webhose.io)</a></small></h1> 
        </div>
        <SearchBar searchForTopic={this.searchForTopic} />
        <div>
          {loading && (
            <p className="results">Searching for articles...</p>
          )}
          {/* {this.state.articles.length>0 && (
            <p className="results">
              Displaying top 10 out of {totalResults} articles on "{searchTopic}"
            </p>
          )} */}
          {this.state.articles.length>0 && <ArticleList articles={articles} />}
          {apiError && <p className="results">Could not fetch any articles. Please try again.</p>} 
        </div> 
      </div>
    );
  }
}

export default App;
