const defaultHelpText = "Use the keyboard Up/Down arrows or hover with your mouse to select a link. Press Enter to open it.";
let titleScrollText = "helloimkaiser // theres13letters //";
let titleScrollIndex = 0;
let currentIndex = 0;
let siteData = null;

function getSavedSiteData() {
    const saved = localStorage.getItem('siteData');
    if (!saved) return window.defaultSiteData;
    try {
        const parsed = JSON.parse(saved);
        if (!parsed || typeof parsed !== 'object' || !parsed.pages || typeof parsed.pages !== 'object') {
            console.warn('Saved site data is missing pages, falling back to default.');
            return window.defaultSiteData;
        }
        return parsed;
    } catch (error) {
        console.warn('Invalid saved site data, falling back to default.', error);
        return window.defaultSiteData;
    }
}

function loadSiteData() {
    siteData = getSavedSiteData();
    if (!siteData.pages) {
        siteData = window.defaultSiteData;
    }
    if (siteData && siteData.titleScrollText) {
        titleScrollText = siteData.titleScrollText;
    }
}

function updateTitleScroll() {
    document.title = titleScrollText.slice(titleScrollIndex) + titleScrollText.slice(0, titleScrollIndex);
    titleScrollIndex = (titleScrollIndex + 1) % titleScrollText.length;
}

function getPageKey() {
    const rawName = window.location.pathname.split('/').pop();
    const name = rawName ? rawName.replace('.html', '') : 'index';
    const map = {
        '': 'index',
        'index': 'index',
        'links': 'links',
        'recent-works': 'recentWorks',
        'about': 'about',
        'hobbies': 'hobbies',
        'hobbies-keyboards-reviews': 'hobbiesKeyboardsReviews',
        'hobbies-switches': 'hobbiesSwitches',
        'hobbies-personal': 'hobbiesPersonal',
        'hobbies-misc': 'hobbiesMisc',
        'recent-works-realtime': 'recentWorksRealtime',
        'recent-works-vfx': 'recentWorksVfx',
        'recent-works-ui': 'recentWorksUi'
    };
    return map[name] || map['index'];
}

function buildContentList(items) {
    const contentList = document.querySelector('.content-list');
    if (!contentList || !Array.isArray(items)) return;
    contentList.innerHTML = '';

    items.forEach(item => {
        if (item.url || item.externalUrl) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'bios-button';
            button.dataset.url = item.url || item.externalUrl;
            button.dataset.external = item.external || !!item.externalUrl ? 'true' : 'false';
            if (item.help) button.dataset.help = item.help;
            if (item.body) button.dataset.body = item.body;

            const title = document.createElement('div');
            title.className = 'content-item-title';
            title.textContent = item.title || item.label || '';

            const body = document.createElement('div');
            body.className = 'content-item-body';
            body.textContent = item.body || '';

            button.appendChild(title);
            button.appendChild(body);
            contentList.appendChild(button);
        } else {
            const block = document.createElement('div');
            block.className = 'content-item';

            const title = document.createElement('div');
            title.className = 'content-item-title';
            title.textContent = item.title || item.label || '';

            const body = document.createElement('div');
            body.className = 'content-item-body';
            body.textContent = item.body || '';

            block.appendChild(title);
            block.appendChild(body);
            contentList.appendChild(block);
        }
    });
}

function buildNav(menuItems) {
    const nav = document.querySelector('.bios-nav');
    if (!nav || !Array.isArray(menuItems)) return;
    nav.innerHTML = '';

    menuItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url || item.externalUrl || '#';
        link.className = 'bios-link';
        link.dataset.help = item.help || defaultHelpText;
        link.dataset.body = item.body || item.label || '';
        if (item.external || item.externalUrl) {
            link.target = '_blank';
            link.rel = 'noreferrer noopener';
        }
        link.innerHTML = `<span class="arrow">↩️</span> ${item.label || item.title || ''}`;
        nav.appendChild(link);
    });
}

function buildPageNav(pageData) {
    const nav = document.querySelector('.bios-nav');
    if (!nav) return;

    const contentList = document.querySelector('.content-list');
    nav.innerHTML = '';

    // If the page provides multiple nav items (usually two "Back" links), render them inline
    if (Array.isArray(pageData.navItems) && pageData.navItems.length > 1) {
        nav.classList.add('inline-nav');
    } else {
        nav.classList.remove('inline-nav');
    }

    if (!contentList && Array.isArray(pageData.items)) {
        buildNav(pageData.items);
    }

    if (Array.isArray(pageData.navItems)) {
        buildNav(pageData.navItems);
    }
}

function renderPage() {
    const pageKey = getPageKey();
    const pageData = pageKey && siteData && siteData.pages ? siteData.pages[pageKey] : null;
    if (!pageData) {
        console.warn('renderPage: missing page data for', pageKey);
        return;
    }

    const headerBrand = document.querySelector('.bios-header span');
    if (headerBrand && siteData && siteData.brandName) {
        headerBrand.textContent = siteData.brandName;
    }

    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && pageData.sectionTitle) {
        sectionTitle.textContent = pageData.sectionTitle;
    }

    const helpText = document.getElementById('help-text');
    if (helpText && pageData.helpText) {
        helpText.textContent = pageData.helpText;
    }

    const contentList = document.querySelector('.content-list');
    if (contentList) {
        buildContentList(pageData.items);
    }

    buildPageNav(pageData);
}

function getFocusableItems() {
    return Array.from(document.querySelectorAll('.bios-link, .bios-button'));
}

function updateSelection(index) {
    const items = getFocusableItems();
    if (!items.length) return;

    items.forEach(item => item.classList.remove('active'));
    const safeIndex = ((index % items.length) + items.length) % items.length;
    items[safeIndex].classList.add('active');
    let helpText = items[safeIndex].dataset.help || items[safeIndex].dataset.body || '';
    if (!helpText) {
        const bodyEl = items[safeIndex].querySelector && items[safeIndex].querySelector('.content-item-body');
        if (bodyEl && bodyEl.textContent) helpText = bodyEl.textContent.trim();
    }
    if (!helpText) helpText = defaultHelpText;
    const helpElement = document.getElementById('help-text');
    if (helpElement) {
        helpElement.textContent = helpText;
    }
    currentIndex = safeIndex;
}

function findBackLink() {
    const items = Array.from(document.querySelectorAll('.bios-link, .bios-button'));
    const backItem = items.find(item => /Back to/i.test(item.textContent));
    return backItem || document.querySelector('a.bios-link[href="index.html"]');
}

function attachHoverEvents() {
    const items = getFocusableItems();
    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            currentIndex = index;
            updateSelection(currentIndex);
        });
    });
}

function attachButtonEvents() {
    const buttons = document.querySelectorAll('.bios-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.dataset.url;
            const isExternal = button.dataset.external === 'true';
            if (!url) return;

            if (isExternal) {
                window.open(url, '_blank', 'noopener,noreferrer');
            } else {
                window.location.href = url;
            }
        });
    });
}

window.addEventListener('keydown', (e) => {
    const items = getFocusableItems();
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % items.length;
        updateSelection(currentIndex);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateSelection(currentIndex);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (items[currentIndex]) {
            items[currentIndex].click();
        }
    } else if (e.key === 'Escape') {
        e.preventDefault();
        const backLink = findBackLink();
        if (backLink) {
            backLink.click();
        } else {
            window.history.back();
        }
    }
});

window.addEventListener('storage', (event) => {
    if (event.key === 'siteData') {
        loadSiteData();
        renderPage();
        attachHoverEvents();
        attachButtonEvents();
        updateSelection(currentIndex);
    }
});

window.addEventListener('focus', () => {
    loadSiteData();
    renderPage();
    attachHoverEvents();
    attachButtonEvents();
    updateSelection(currentIndex);
});

function init() {
    loadSiteData();
    renderPage();
    attachHoverEvents();
    attachButtonEvents();
    updateSelection(currentIndex);
    updateTitleScroll();
    setInterval(updateTitleScroll, 300);
}

init();
