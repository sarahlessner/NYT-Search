import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Saved from "../Saved";

class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startyear: "",
    endyear: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticle = article => {
      API.saveArticle(
        {
        title: article.article.headline.main,
        date: article.article.pub_date,
        url: article.article.web_url
      }
      )
        .then(res => <Saved />)
        .catch(err => console.log(article));
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get articles and update the articles state
    event.preventDefault();
    API.searchArticle(this.state.topic, this.state.startyear, this.state.endyear)
      // .then(res => console.log("HANDLEFORMSUBMIT RESULTS IN SEARCH.JS", res.data.response.docs))
      .then(res => this.setState({ articles: res.data.response.docs, topic: "", startyear: "", endyear: "" }))

      .catch(err => console.log(err));
      // console.log("ARTICLES STATE FROM SEARCH.JS", this.state.articles);
    };


  render() {
    return (
      <Container>
        <Container fluid>
          <Row>
            <Col size="md-12">

                <h1>Search</h1>

              <form>
                <Input
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                  name="topic"
                  placeholder="Topic (required)"
                />
                <Input
                  value={this.state.startyear}
                  onChange={this.handleInputChange}
                  name="startyear"
                  placeholder="20161109"
                />
                <Input
                  value={this.state.endyear}
                  onChange={this.handleInputChange}
                  name="endyear"
                  placeholder="20170915"
                />

                <FormBtn
                  disabled={!(this.state.topic && this.state.startyear && this.state.endyear)}
                  onClick={this.handleFormSubmit}
                >
                  Find Articles
                </FormBtn>
              </form>
              </Col>
              </Row>

          </Container>
          <Container fluid>
            <Row>
              <Col size="md-12">
               {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (

                    <ListItem key={article._id}>

                      {article.headline.main}
                      {article.web_url}
                      {article.pub_date}
                      <FormBtn onClick={() => this.saveArticle({article})} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Search Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>

      </Container>
    );
  }
}

export default Search;
