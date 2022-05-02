import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { logout } from './api/data.js'

import { homePage } from './views/homePage.js';
import { loginPage } from './views/loginPage.js';
import { registerPage } from './views/registerPage.js';
import { catalogPage } from './views/catalogPage.js';
import { createPage } from './views/createPage.js';
import { detailsPage } from './views/detailsPage.js';
import { editPage } from './views/editPage.js';


const root = document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);


page.start();

updateUserNav();

function decorateContext(ctx, next) {

    ctx.render = (template) => render(template, root);

    ctx.updateUserNav = updateUserNav;

    next();
}

function updateUserNav() {
    const userData = getUserData();

    if (userData) {
        Array.from(document.querySelectorAll('.user')).forEach(x => x.style.display = 'block');
        Array.from(document.querySelectorAll('.guest')).forEach(x => x.style.display = 'none');
    } else {
        Array.from(document.querySelectorAll('.user')).forEach(x => x.style.display = 'none');
        Array.from(document.querySelectorAll('.guest')).forEach(x => x.style.display = 'block');
    }
}

function onLogout() {
    logout();

    updateUserNav();
    page.redirect('/');
}