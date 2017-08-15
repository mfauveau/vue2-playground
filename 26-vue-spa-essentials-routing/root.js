Vue.use(VueRouter);

Vue.component('home', {
    template: `
    <div>
        <h1 class="title">Home</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    `
});

Vue.component('about', {
    template: `
    <div>
        <h1 class="title">About</h1>

        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    `
});

Vue.component('contact', {
    template: `
    <div>
        <h1 class="title">Contact</h1>

        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    `
});

let routes = [
    {
        path: '/',
        component: 'home'
    },
    {
        path: '/about',
        component: 'about'
    },
    {
        path: '/contact',
        component: 'contact'
    }
];

let router = new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});

new Vue({
    el: '#app',

    router: router
});
