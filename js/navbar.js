(function () {
    "use strict";

    const TEMPLATE = `
<nav class="navbar">
    <div class="nav-container">
        <a href="index.html" class="nav-logo">DevIA Notes</a>
        <div class="nav-right">
            <ul class="nav-links">
                <li><a href="index.html">Accueil</a></li>
                <li class="has-dropdown">
                    <button class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">
                        Sujets
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="nav-dropdown" role="menu">
                        <div class="dropdown-section">
                            <div class="dropdown-title">Environnement</div>
                            <a href="uv.html">UV</a>
                            <a href="docker.html">Docker</a>
                            <a href="kubernetes.html">Kubernetes</a>
                            <a href="jupyter.html">Jupyter</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Web &amp; API</div>
                            <a href="fastapi.html">FastAPI</a>
                            <a href="streamlit.html">Streamlit</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Outils &amp; Tests</div>
                            <a href="github.html">GitHub</a>
                            <a href="git-setup.html">Mettre un projet sur GitHub</a>
                            <a href="cicd.html">CI/CD</a>
                            <a href="pytest.html">pytest</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">MLOps</div>
                            <a href="mlflow.html">MLflow</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Monitoring</div>
                            <a href="prometheus.html">Prometheus</a>
                            <a href="grafana.html">Grafana</a>
                            <a href="uptime-kuma.html">Uptime Kuma</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Données</div>
                            <a href="sqlalchemy.html">SQLAlchemy</a>
                            <a href="pandas.html">pandas</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Documentation</div>
                            <a href="docstring.html">Docstring</a>
                            <a href="sphinx.html">Sphinx</a>
                        </div>
                    </div>
                </li>
                <li><a href="about.html">À propos</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Basculer entre les thèmes clair et sombre" type="button">
                <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>
                <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>
            <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false" type="button">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </div>
    </div>
</nav>
`;

    class SiteNavbar extends HTMLElement {
        connectedCallback() {
            this.innerHTML = TEMPLATE;
        }
    }

    if (!customElements.get("site-navbar")) {
        customElements.define("site-navbar", SiteNavbar);
    }
})();
