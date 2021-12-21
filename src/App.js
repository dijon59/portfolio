import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import './App.css';
import TechTools from "./components/techtools/techtools";

class App extends Component {
  render() {
    return (
        <div className='App'>
            <Layout>
                <TechTools/>
            </Layout>
        </div>
    )
  }
}

export default App;
