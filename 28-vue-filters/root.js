new Vue({
    el: '#app',

    filters: {
        ago(date) {
            return moment(date).fromNow();
        },

        capitalize(value) {
            return value.toUpperCase();
        }
    }
});
