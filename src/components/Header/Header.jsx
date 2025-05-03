import './Header.css'

export const Header = ({ showMenu }) => (
    <header>
        {(showMenu)? (
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
        </div>)
        : (
        <div className="container header__content">
            <div className="site-logo"></div>

            <nav className="inline-nav">
                <a href="/">Hlavní stránka</a>
            </nav>
        </div>
        )}
    </header>)

