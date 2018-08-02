export default function ({ store, redirect }) {
    // if (typeof localStorage === "undefined" || localStorage === null) {
    //     var LocalStorage = require('node-localstorage').LocalStorage;
        // localStorage = new LocalStorage('./scratch');
    // }
    // if (!store.state.authUser && localStorage.getItem('loginState') == 'false') {
    if (!store.state.authUser) {
        // return redirect('/login');
    }
}