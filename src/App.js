import React from 'react';
import List from './components/List';
import Form from './components/Form';
import Post from './components/Posts';

function App() {
  return (
    <div className="App">
          <h2>Articles</h2>
        <Form />
        <List />
        <div className="col-md-4 offset-md-1">
      <h2>API posts</h2>
        <Post />
      </div>
    </div>
  );
}

export default App;
