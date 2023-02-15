// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './components/header'
import Nav from './components/nav'
import Article from './components/article'
import Create from './components/create'

function App() {
  const KEY_WELCOME='WELCOME';
  const KEY_READ='READ';
  const KEY_CREATE='CREATE';
  // const _mode = useState('WELCOME');
  // console.log('_mode', _mode);
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState(KEY_WELCOME);
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, url:"/read/1", name:"react"},
    {id:2, url:"/read/2", name:"css"},
    {id:3, url:"/read/3", name:"js"}
  ]);
  let content = null;
  if (mode === KEY_WELCOME) {
    content = <Article title="Welcom!" body="Hello, WEB"></Article>
  } else if (mode === KEY_READ) {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      // console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].name;
        body = topics[i].name+ ' is ...';
      }
    }
    // content = <Article title="Read!" body="Hello, READ"></Article>
    content = <Article title={title} body={body}></Article>
  } else if (mode === KEY_CREATE) {
    content = <Create onCreate={(_title, _body) => {
      // alert('Create');
      // let addTopics = <Article title={title} body={body}></Article>
      const addTopic = {name:_title, url:_body, id:nextId}
      const newTopics = [...topics]
      newTopics.push(addTopic);
      setTopics(newTopics);
      setMode(KEY_READ);
      setId(nextId);
      setNextId(addTopic.id+1);
    }}></Create>
  }
  return (
    <div>
      <Header title="REACT" onChangeMod={function() {
        // alert('Header');
        // mode = 'WELCOME';
        setMode(KEY_WELCOME);
      }}></Header>
      {/* <Header title="WEB"></Header> */}
      <Nav topics={topics} onChangeMod={(_id) => {
        // alert(id);
        setMode(KEY_READ);
        setId(_id);
      }}></Nav>
      {content}
      <a href="/create" onClick={(event)=> {
        event.preventDefault();
        setMode(KEY_CREATE);
      }}>Create</a>
      {/* <Article title="Hi!" body="React, WEB"></Article> */}
    </div>
  );
}

export default App;
