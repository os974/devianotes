// =============================================================================
// Web Component <site-navbar> — barre de navigation partagée par toutes les pages
// =============================================================================
//
// La navbar est incluse depuis :
//   - index.html, about.html       (à la RACINE du site)
//   - sujets/<fiche>.html          (1 niveau plus bas)
//   - retex/<fiche>.html           (1 niveau plus bas)
//
// Les liens dans la navbar doivent donc s'adapter au niveau où on se trouve :
//   - depuis la racine : href="sujets/uv.html"
//   - depuis sujets/   : href="../sujets/uv.html"
//   - depuis retex/    : href="../sujets/uv.html"
//
// La fonction `computeBasePath()` calcule ce préfixe à l'exécution en lisant
// `window.location.pathname`. Si on est dans un sous-dossier sujets/ ou retex/,
// elle renvoie "../" ; sinon "".
//
// Cette approche évite de devoir maintenir deux templates (un pour la racine,
// un pour les sous-dossiers) et fonctionne aussi bien en local qu'une fois
// déployé sur GitHub Pages (qui sert depuis /<repo>/...).
// =============================================================================
(function () {
    "use strict";

    // Renvoie "../" si la page courante est dans sujets/ ou retex/, sinon "".
    function computeBasePath() {
        const path = window.location.pathname;
        // Match les chemins du type ".../sujets/xxx.html" ou ".../retex/xxx.html"
        if (/\/(sujets|retex)\/[^/]+\.html?$/.test(path)) {
            return "../";
        }
        return "";
    }

    function renderTemplate(basePath) {
        const S = `${basePath}sujets/`;   // préfixe pour les fiches théoriques
        const R = `${basePath}retex/`;    // préfixe pour les retours d'expérience
        const ROOT = basePath;            // pour index.html / about.html

        return `
<nav class="navbar">
    <div class="nav-container">
        <a href="${ROOT}index.html" class="nav-logo">DevIA Notes</a>
        <div class="nav-right">
            <ul class="nav-links">
                <li><a href="${ROOT}index.html">Accueil</a></li>
                <li class="has-dropdown">
                    <button class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">
                        Sujets
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="nav-dropdown" role="menu">
                        <div class="dropdown-section">
                            <div class="dropdown-title">IDE</div>
                            <a href="${S}vscode.html">VS Code</a>
                            <a href="${S}intellij.html">IntelliJ IDEA</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Environnement</div>
                            <a href="${S}uv.html">UV</a>
                            <a href="${S}pip.html">pip</a>
                            <a href="${S}docker.html">Docker</a>
                            <a href="${S}kubernetes.html">Kubernetes</a>
                            <a href="${S}traefik.html">Traefik</a>
                            <a href="${S}jupyter.html">Jupyter</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Web &amp; API</div>
                            <a href="${S}fastapi.html">FastAPI</a>
                            <a href="${S}streamlit.html">Streamlit</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Outils &amp; Tests</div>
                            <a href="${S}github.html">GitHub</a>
                            <a href="${S}gitlab.html">GitLab</a>
                            <a href="${S}forgejo.html">Forgejo</a>
                            <a href="${S}cicd.html">CI/CD</a>
                            <a href="${S}pytest.html">pytest</a>
                            <a href="${S}ruff.html">Ruff</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">MLOps</div>
                            <a href="${S}mlflow.html">MLflow</a>
                            <a href="${S}prefect.html">Prefect</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Messagerie &amp; tâches</div>
                            <a href="${S}kafka.html">Kafka</a>
                            <a href="${S}rabbitmq.html">RabbitMQ</a>
                            <a href="${S}redis.html">Redis</a>
                            <a href="${S}celery.html">Celery</a>
                            <a href="${S}flower.html">Flower</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Logs</div>
                            <a href="${S}logging.html">logging (stdlib)</a>
                            <a href="${S}loguru.html">Loguru</a>
                            <a href="${S}loki.html">Loki</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Monitoring</div>
                            <a href="${S}prometheus.html">Prometheus</a>
                            <a href="${S}grafana.html">Grafana</a>
                            <a href="${S}uptime-kuma.html">Uptime Kuma</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Scraping</div>
                            <a href="${S}beautifulsoup.html">BeautifulSoup</a>
                            <a href="${S}selenium.html">Selenium</a>
                            <a href="${S}playwright.html">Playwright</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Données</div>
                            <a href="${S}sqlite.html">SQLite</a>
                            <a href="${S}sqlalchemy.html">SQLAlchemy</a>
                            <a href="${S}supabase.html">Supabase</a>
                            <a href="${S}pandas.html">pandas</a>
                            <a href="${S}pyspark.html">PySpark</a>
                            <a href="${S}polars.html">Polars</a>
                            <a href="${S}matplotlib.html">matplotlib</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Stockage</div>
                            <a href="${S}minio.html">MinIO</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Modèles IA</div>
                            <a href="${S}yolo.html">YOLO</a>
                            <a href="${S}scikit-learn.html">scikit-learn</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Documentation</div>
                            <a href="${S}docstring.html">Docstring</a>
                            <a href="${S}sphinx.html">Sphinx</a>
                        </div>
                    </div>
                </li>
                <li class="has-dropdown">
                    <button class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">
                        Retours d'expérience
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="nav-dropdown" role="menu">
                        <div class="dropdown-section">
                            <a href="${R}experience-cicd.html">CI/CD du site</a>
                            <a href="${R}build-injection.html">Injection au build</a>
                            <a href="${R}git-setup.html">Mettre un projet sur GitHub</a>
                        </div>
                    </div>
                </li>
                <li><a href="${ROOT}about.html">À propos</a></li>
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
    }

    class SiteNavbar extends HTMLElement {
        connectedCallback() {
            this.innerHTML = renderTemplate(computeBasePath());
        }
    }

    if (!customElements.get("site-navbar")) {
        customElements.define("site-navbar", SiteNavbar);
    }
})();
