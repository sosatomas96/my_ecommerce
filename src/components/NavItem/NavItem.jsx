function NavItem ({text, url}) {

    return(
        <li>
            <a href={url}>{text}</a>
        </li>
    );
}

export default NavItem;