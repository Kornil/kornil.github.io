// <reference path='./index.d.ts'/>

import React, { Component } from "react";

import Routes from "app/Routes";

import { Footer, Header } from "app/containers/shared";
import { PageLayout } from "app/styled-components";

import OwnerContext, { ownerContextValue } from "app/context/OwnerContext";
import StoriesContext, { storiesContext } from "app/context/StoriesContext";

const mediumKey = "medium_data";

class App extends Component {
  state = {
    articlesData: { stories: [] }
  };

  async componentDidMount() {
    const mediumData = localStorage.getItem(mediumKey);
    if (mediumData) {
      this.setState({
        articlesData: JSON.parse(mediumData)
      });
    }
    const articlesData = await storiesContext();
    this.setState({
      articlesData
    });
  }

  componentWillUnmount() {
    this.setState = () => undefined;
  }

  render() {
    const { articlesData } = this.state;
    return (
      <OwnerContext.Provider value={ownerContextValue}>
        <PageLayout>
          <Header />
          <StoriesContext.Provider value={articlesData}>
            <Routes />
          </StoriesContext.Provider>
          <Footer />
        </PageLayout>
      </OwnerContext.Provider>
    );
  }
}

export default App;
