import React, { useState, useEffect } from 'react';
import Search from './containers/Search';
import TodoApp from './containers/todo/TodoApp';
const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `coun ${count}`;

  }, [count]);
  return <div className='App'>
    {/* <TodoApp /> */}
    <Search />
  </div>
}

export default App;
