const ADMIN_USERS = {
    admin: 'biosadmin',
    kaiser: '12345'
};
const adminRoot = document.getElementById('admin-root');
const loginButton = document.getElementById('admin-login-button');
const usernameInput = document.getElementById('admin-username');
const passwordInput = document.getElementById('admin-password');
const adminMessage = document.getElementById('admin-message');

function showMessage(message, type = 'info') {
    adminMessage.textContent = message;
    adminMessage.className = `admin-message admin-${type}`;
}

function getSavedAdminData() {
    const saved = localStorage.getItem('siteData');
    if (!saved) return JSON.parse(JSON.stringify(window.defaultSiteData));
    try {
        return JSON.parse(saved);
    } catch (error) {
        console.warn('Invalid saved site data, falling back to default.', error);
        return JSON.parse(JSON.stringify(window.defaultSiteData));
    }
}

function createEditor() {
    const editorData = getSavedAdminData();
    const editorContainer = document.createElement('div');
    editorContainer.className = 'admin-editor';

    const pageSelect = document.createElement('select');
    pageSelect.className = 'admin-select';
    Object.keys(editorData.pages).forEach(pageKey => {
        const option = document.createElement('option');
        option.value = pageKey;
        option.textContent = pageKey;
        pageSelect.appendChild(option);
    });

    const editorFields = document.createElement('div');
    editorFields.className = 'admin-fields';

    const controlsRow = document.createElement('div');
    controlsRow.className = 'admin-controls';

    const saveButton = document.createElement('button');
    saveButton.className = 'admin-button';
    saveButton.textContent = 'Save & Download JSON';

    const applyButton = document.createElement('button');
    applyButton.className = 'admin-button';
    applyButton.textContent = 'Apply Sitewide';

    const addItemButton = document.createElement('button');
    addItemButton.className = 'admin-button';
    addItemButton.textContent = 'Add Item';

    editorContainer.appendChild(pageSelect);
    editorContainer.appendChild(editorFields);
    controlsRow.appendChild(addItemButton);
    controlsRow.appendChild(applyButton);
    controlsRow.appendChild(saveButton);
    editorContainer.appendChild(controlsRow);

    adminRoot.innerHTML = '';
    adminRoot.appendChild(editorContainer);

    function renderPage(pageKey) {
        const pageData = editorData.pages[pageKey];
        editorFields.innerHTML = '';

        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'content-item-title';
        sectionTitle.textContent = 'Section Title';
        const sectionLabel = document.createElement('label');
        sectionLabel.textContent = 'Section Title';
        const sectionInput = document.createElement('input');
        sectionInput.placeholder = 'Insert section title here...';
        sectionInput.value = pageData.sectionTitle || '';
        sectionInput.addEventListener('input', () => pageData.sectionTitle = sectionInput.value);

        const helpTitle = document.createElement('div');
        helpTitle.className = 'content-item-title';
        helpTitle.textContent = 'Help Text';
        const helpLabel = document.createElement('label');
        helpLabel.textContent = 'Help Text';
        const helpInput = document.createElement('textarea');
        helpInput.placeholder = 'Insert short help text for this section...';
        helpInput.value = pageData.helpText || '';
        helpInput.addEventListener('input', () => pageData.helpText = helpInput.value);

        editorFields.appendChild(sectionTitle);
        const sectionFieldWrapper = document.createElement('div');
        sectionFieldWrapper.className = 'admin-field';
        sectionFieldWrapper.appendChild(sectionLabel);
        sectionFieldWrapper.appendChild(sectionInput);
        editorFields.appendChild(sectionFieldWrapper);

        const helpFieldWrapper = document.createElement('div');
        helpFieldWrapper.className = 'admin-field';
        helpFieldWrapper.appendChild(helpLabel);
        helpFieldWrapper.appendChild(helpInput);
        editorFields.appendChild(helpFieldWrapper);

        if (Array.isArray(pageData.items)) {
            pageData.items.forEach((item, index) => {
                const itemWrapper = document.createElement('div');
                itemWrapper.className = 'admin-item';
                itemWrapper.style.border = '1px solid #e2e8f0';
                itemWrapper.style.padding = '10px';
                itemWrapper.style.borderRadius = '8px';
                itemWrapper.style.marginBottom = '12px';

                const itemTitle = document.createElement('div');
                itemTitle.className = 'content-item-title';
                itemTitle.textContent = `Item ${index + 1}`;

                const titleLabel = document.createElement('label');
                titleLabel.textContent = 'Title';
                const titleField = document.createElement('input');
                titleField.placeholder = 'Insert item title...';
                titleField.value = item.title || item.label || '';
                titleField.addEventListener('input', () => {
                    if (item.title !== undefined) item.title = titleField.value;
                    else item.label = titleField.value;
                });

                const bodyLabel = document.createElement('label');
                bodyLabel.textContent = 'Body';
                const bodyField = document.createElement('textarea');
                bodyField.placeholder = 'Insert item body / subtext...';
                bodyField.value = item.body || '';
                bodyField.addEventListener('input', () => item.body = bodyField.value);

                const urlLabel = document.createElement('label');
                urlLabel.textContent = 'URL / externalUrl';
                const urlField = document.createElement('input');
                urlField.placeholder = 'https:// or mailto: or relative path';
                urlField.value = item.url || item.externalUrl || '';
                urlField.addEventListener('input', () => {
                    if (item.url !== undefined) item.url = urlField.value;
                    else item.externalUrl = urlField.value;
                });

                const helpLabelField = document.createElement('label');
                helpLabelField.textContent = 'Help Text';
                const helpField = document.createElement('input');
                helpField.placeholder = 'Short help text (shown in right panel)';
                helpField.value = item.help || '';
                helpField.addEventListener('input', () => item.help = helpField.value);

                const removeBtn = document.createElement('button');
                removeBtn.className = 'admin-button';
                removeBtn.textContent = 'Remove Item';
                removeBtn.style.background = '#fee2e2';
                removeBtn.addEventListener('click', () => {
                    pageData.items.splice(index, 1);
                    renderPage(pageKey);
                });


                itemWrapper.appendChild(itemTitle);

                const titleFieldWrapper = document.createElement('div');
                titleFieldWrapper.className = 'admin-field';
                titleFieldWrapper.appendChild(titleLabel);
                titleFieldWrapper.appendChild(titleField);
                itemWrapper.appendChild(titleFieldWrapper);

                const bodyFieldWrapper = document.createElement('div');
                bodyFieldWrapper.className = 'admin-field';
                bodyFieldWrapper.appendChild(bodyLabel);
                bodyFieldWrapper.appendChild(bodyField);
                itemWrapper.appendChild(bodyFieldWrapper);

                const urlFieldWrapper = document.createElement('div');
                urlFieldWrapper.className = 'admin-field';
                urlFieldWrapper.appendChild(urlLabel);
                urlFieldWrapper.appendChild(urlField);
                itemWrapper.appendChild(urlFieldWrapper);

                const helpFieldWrapper2 = document.createElement('div');
                helpFieldWrapper2.className = 'admin-field';
                helpFieldWrapper2.appendChild(helpLabelField);
                helpFieldWrapper2.appendChild(helpField);
                itemWrapper.appendChild(helpFieldWrapper2);

                const itemControls = document.createElement('div');
                itemControls.className = 'admin-controls';
                itemControls.appendChild(removeBtn);
                itemWrapper.appendChild(itemControls);

                editorFields.appendChild(itemWrapper);
            });
        }
    }

    pageSelect.addEventListener('change', () => renderPage(pageSelect.value));
    saveButton.addEventListener('click', () => {
        const json = JSON.stringify(editorData, null, 2);
        localStorage.setItem('siteData', json);
        const blob = new Blob([json], {type: 'application/json'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'site-data.json';
        link.click();
        showMessage('Site JSON exported and live data saved locally.', 'success');
    });

    applyButton.addEventListener('click', () => {
        const json = JSON.stringify(editorData, null, 2);
        localStorage.setItem('siteData', json);
        showMessage('Site settings applied sitewide (localStorage updated).', 'success');
    });

    addItemButton.addEventListener('click', () => {
        const currentPageKey = pageSelect.value;
        const currentPageData = editorData.pages[currentPageKey];
        if (!currentPageData) return;

        currentPageData.items = currentPageData.items || [];
        currentPageData.items.push({ title: 'New Item', body: '', url: '', help: '' });
        renderPage(currentPageKey);
    });

    renderPage(pageSelect.value);
    showMessage('Logged in. Edit the current page data and export JSON when finished.', 'success');
}

loginButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (ADMIN_USERS[username] && ADMIN_USERS[username] === password) {
        createEditor();
    } else {
        showMessage('Invalid username or password.', 'error');
    }
});
