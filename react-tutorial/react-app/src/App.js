// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Header(props) {
  console.log('props', props)
  return (
    <header>
      <h1><a href="/" onClick={(event) => {
        event.preventDefault();
        props.onChangeMod();
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const lis = [];
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMod(Number(event.target.id));
      }}>{t.name}</a>
    </li>);
  }
  return (
    <nav>
      <ol>
        {/* <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li> */}
        {lis}
      </ol>
    </nav>
  )
}

function App() {
  // const _mode = useState('WELCOME');
  // console.log('_mode', _mode);
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, url:"/read/1", name:"react"},
    {id:2, url:"/read/2", name:"css"},
    {id:3, url:"/read/3", name:"js"}
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcom!" body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
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
  }
  return (
    <div>
      <Header title="REACT" onChangeMod={function() {
        // alert('Header');
        // mode = 'WELCOME';
        setMode('WELCOME');
      }}></Header>
      {/* <Header title="WEB"></Header> */}
      <Nav topics={topics} onChangeMod={(_id) => {
        // alert(id);
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      {/* <Article title="Hi!" body="React, WEB"></Article> */}
    </div>
  );
}

export default App;
