import './Menu.css';


function Menu() {
    return(
        
        <div id="header">
            <input type="checkbox" id="ham-menu"></input>
            <label for="ham-menu">
            <div class="hide-des">
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
            </div>

            </label>
            <div class="full-page-green"></div>
            <div class="ham-menu">
                <ul class="centre-text bold-text">
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Services</li>
                    <li>Works</li>
                    <li>Support</li>
                    <li>Contact us</li>

                </ul>
            </div>
        </div>
    );
}

export default Menu;
