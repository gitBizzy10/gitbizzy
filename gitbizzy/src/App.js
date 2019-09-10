import React from 'react';
import './App.css';
//import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Blog from './components/blog'
import Header from './components/header'
import Timeline from './components/timeline'

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
          <Header></Header>
			<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Blog></Blog>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
}

export default App;
