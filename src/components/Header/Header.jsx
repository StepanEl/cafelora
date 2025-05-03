import './Header.css'

export const Header = () => (
    <header>
        <div className="header__content container">
            <div className="site-logo"></div>

            <div className="navigation">
                <button className="nav-btn"></button>
                <nav className="rollout-nav nav-closed">
                    <a href={`/index.html?id=#home`}>domů</a>
                    <a href={`/index.html?id=#menu`}>menu</a>
                    <a href={`/index.html?id=#gallery`}>galerie</a>
                    <a href={`/index.html?id=#contact`}>kontakt</a>
                </nav>
            </div>

        </div>
    </header>)

    //{`/detail.html?id=${id}`}