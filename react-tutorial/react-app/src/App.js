// import logo from './logo.svg';
import './App.css';

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
        props.onChangeMod(event.target.id);
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
  const topics = [
    {id:1, url:"/read/1", name:"react"},
    {id:2, url:"/read/2", name:"css"},
    {id:3, url:"/read/3", name:"js"}
  ];
  return (
    <div>
      <Header title="REACT" onChangeMod={function() {
        alert('Header');
      }}></Header>
      {/* <Header title="WEB"></Header> */}
      <Nav topics={topics} onChangeMod={(id) => {
        alert(id);
      }}></Nav>
      <Article title="Welcom!" body="Hello, WEB"></Article>
      {/* <Article title="Hi!" body="React, WEB"></Article> */}
    </div>
  );
}

export default App;
