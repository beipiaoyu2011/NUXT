import Vue from 'vue';
import VueNotifications from 'vue-notifications';
import miniToastr from 'mini-toastr';
import warnIcon from '~/assets/apple_hover.png';

const toastTypes = {
    success: 'success',
    error: 'error',
    info: 'info',
    warn: 'warn'
};

// This step requires only for mini-toastr, just an initialization
miniToastr.init({
    types: toastTypes,
    // style: {
        // 'mini-toastr':{
        //     left:'50%'
        // },
        // 'mini-toastr__notification': {
        //   'mini-toastr-notification__message': {
        //       'border-radius': '5px',
        //       'color': 'red'
        //   }
        // }
    // }
});
miniToastr.setIcon('error', 'i', {'class': 'fa fa-warning'})
miniToastr.setIcon('info', 'i', {'class': 'fa fa-info-circle'})
miniToastr.setIcon('success', 'i', {'class': 'fa fa-check-circle-o'})
miniToastr.setIcon('warn', 'img', {src: warnIcon, style: 'vertical-align: bottom;'})

function toast({ title, message, type, timeout, cb }) {
    return miniToastr[type](message, title, timeout, cb);
}

const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
};

Vue.use(VueNotifications, options);


