import { ReactComponent as GithubIcon } from 'assets/github.svg';
import 'styles/HeaderBar.css'

export default function HeaderBar() {
    return (
        <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/diiserra" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/diiserra</p>
                </div>
            </a>
        </div>
    </nav>
</header>
    );
}