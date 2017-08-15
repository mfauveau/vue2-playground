Vue.use(VueRouter);

Vue.component('home', {
    template: `
    <div>
        <h1 class="title">Home</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    `
});

Vue.component('currencies', {
    template: `
    <div>
        <h1 class="title">Currencies</h1>

        <h2 class="subtitle">Rates updated on {{ latest.date }}</h2>

        <div class="message" v-for="(rate, currency) in latest.rates">
            <div class="message-header">
                {{ currency }}
            </div>

            <div class="message-body">
                {{ rate }} {{ latest.base }}
            </div>
        </div>
    </div>
    `,

    data() {
        return {
            latest: {}
        }
    },

    created() {
        axios.get('http://api.fixer.io/latest')
            .then(response => this.latest = response.data);
    }
});

let routes = [
    {
        path: '/',
        component: 'home'
    },
    {
        path: '/currencies',
        component: 'currencies'
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
