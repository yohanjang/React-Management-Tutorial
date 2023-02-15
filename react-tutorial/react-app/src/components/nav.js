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

export default Nav;