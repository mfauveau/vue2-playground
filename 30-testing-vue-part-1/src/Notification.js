export default {
    template: `<div>{{ message | capitalize }}</div>`,

    props: ['message'],

    filters: {
        capitalize(value) {
            return value.toUpperCase();
        }
    }
};
