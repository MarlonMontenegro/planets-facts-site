import React from "react";
import './NavBar.sass';

function NavBar() {
    return (
        <header>
            <nav>
                <div className={"navBar"}>
                    <div className={"navbar-left-side"}>
                        <h2>THE PLANETS</h2>
                    </div>
                    <div className={"navbar-right-side"}>
                        <ul>
                            <li><a href={"#"} className={"mercury"}>MERCURY</a></li>
                            <li><a href={"#"} className={"venus"}>VENUS</a></li>
                            <li><a href={"#"} className={"earth"}>EARTH</a></li>
                            <li><a href={"#"} className={"mars"}>MARS</a></li>
                            <li><a href={"#"} className={"jupiter"}>JUPITER</a></li>
                            <li><a href={"#"} className={"saturn"}>SATURN</a></li>
                            <li><a href={"#"} className={"uranus"}>URANUS</a></li>
                            <li><a href={"#"} className={"neptune"}>NEPTUNE</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default NavBar;
