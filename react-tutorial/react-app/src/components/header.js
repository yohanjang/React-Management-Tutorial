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

export default Header;
