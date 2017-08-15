let store = {
    user: {
        name: 'John Doe'
    }
};

new Vue({
    el: '#app1',

    data: {
        shared: store,
        foo: 'bar'
    }
});

new Vue({
    el: '#app2',

    data: {
        shared: store,
        bar: 'foo'
    }
});
