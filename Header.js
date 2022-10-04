import React from "react";

function Header(){
    return(
        <header className="header">
            <nav>
            
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <a class="navbar-brand" href="#"><img src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo-1024x704.png" width="70px" alt=""></img></a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item right">
                            <a class="nav-link" href="#">Pricing <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item right">
                            <a class="nav-link" href="#">Help</a>
                        </li>
                        <li class="nav-item right">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                       
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            </nav>
            
        </header>
    )
}
export default Header;