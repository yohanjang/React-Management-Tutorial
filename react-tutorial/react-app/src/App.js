// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './components/header'
import Nav from './components/nav'
import Article from './components/article'
import Create from './components/create'
import Update from './components/update'

function App() {
  const KEY_WELCOME='WELCOME';
  const KEY_READ='READ';
  const KEY_CREATE='CREATE';
  const KEY_UPDATE='UPDATE';
  // const _mode = useState('WELCOME');
  // console.log('_mode', _mode);
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState(KEY_WELCOME);
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, url:"/read/1", name:"react", body:"react is ..."},
    {id:2, url:"/read/2", name:"css", body:"css is ..."},
    {id:3, url:"/read/3", name:"js", body:"js is ..."}
  ]);
  let contextControl = null;
  let content = null;
  if (mode === KEY_WELCOME) {
    content = <Article title="Welcom!" body="Hello, WEB"></Article>
  } else if (mode === KEY_READ) {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      // console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].name;
        body = topics[i].body;
      }
    }
    // content = <Article title="Read!" body="Hello, READ"></Article>
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <li><a href={'/update/'+id} onClick={event => {
        event.preventDefault();
        setMode(KEY_UPDATE);
      }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={() => {
        const newTopics = [];
        for (let i=0; i<topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode(KEY_WELCOME);
      }}/></li>
    </>
  } else if (mode === KEY_CREATE) {
    content = <Create onCreate={(_title, _body) => {
      // alert('Create');
      // let addTopics = <Article title={title} body={body}></Article>
      const addTopic = {name:_title, url:'/read/'+nextId, body:_body, id:nextId}
      const newTopics = [...topics]
      newTopics.push(addTopic);
      setTopics(newTopics);
      setMode(KEY_READ);
      setId(nextId);
      setNextId(addTopic.id+1);
    }}></Create>
  } else if (mode === KEY_UPDATE) {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      // console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].name;
        body = topics[i].body;
      }
    }
    content = <Update id={id} title={title} body={body} onUpdate={(_title, _body) => {
      const updateTopic = {name:_title, body:_body, id:id}
      const newTopics = [...topics]
      for (let i=0; i<newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updateTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode(KEY_READ);
      // setId(id);
    }}></Update>
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
      {/* <Article title="Hi!" body="React, WEB"></Article> */}
      <ul>
        <li><a href="/create" onClick={(event)=> {
          event.preventDefault();
          setMode(KEY_CREATE);
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;