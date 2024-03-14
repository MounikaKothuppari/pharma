// Plugins
import BootstrapVue from 'bootstrap-vue';
import PortalVue from 'portal-vue';
import veeValidate from 'vee-validate';
import { assign } from 'lodash';
// import VueMoment from 'vue-moment';
import moment from 'moment';
import jQuery from 'jquery';
import * as helpers from './helpers/helpers';

const validatorConfig = {
  fieldsBagName: '$fields',
  validity: true,
};

window.$ = jQuery;
export default {
  install(Vue) {
    Vue.use(BootstrapVue);
    Vue.use(veeValidate, validatorConfig);
    Vue.use(PortalVue);
    Vue.prototype = assign( // eslint-disable-line
      Vue.prototype,
      helpers,
      { $moment: moment },
    );
  },
};
