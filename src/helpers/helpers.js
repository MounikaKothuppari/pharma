import {
  startCase,
  pickBy,
  identity,
  assign,
  map,
} from 'lodash';
import swal from 'sweetalert';
import toastr from 'toastr';
import router from '../router/router';

let currentRoute = null;
let pathParams = null;
let queryParams = null;
toastr.options = assign(toastr.options, {
  closeButton: true,
  timeOut: 10000,
  showMethod: 'slideDown',
  hideMethod: 'slideUp',
  closeMethod: 'slideUp',
  positionClass: 'toast-top-center',
  preventDuplicates: true,
});

export const $responsive = ['sm', 'md', 'lg'];

export const $toastr = (type, msg) => {
  toastr.remove();
  toastr[type](msg);
};

export const $removeNullValues = obj => pickBy(obj, identity);

export const $capitalize = text => {
  const data = text.toLowerCase();
  return data.charAt(0).toUpperCase() + data.slice(1);
};

export const $changeRouteToTab = route => {
  pathParams = route.params;
  queryParams = route.query;
  const { params } = route;
  const payload = assign(route, {
    params,
  });
  const routeData = router.resolve(payload);
  window.open(routeData.href, '_blank');
};

export const $changeRoute = route => {
  if (currentRoute && route.name === currentRoute.name) {
    pathParams = assign(currentRoute.params, route.params);
    queryParams = assign(currentRoute.query, route.query);
  } else {
    currentRoute = route;
    pathParams = route.params;
    queryParams = route.query;
  }
  const { params } = route;
  const payload = assign(route, {
    params,
  });
  router.push(payload);
};

export const $deleteConfirmation = (title, cb, text, buttons, settings) => {
  swal({
    title,
    text,
    icon: 'warning',
    buttons: buttons || true,
    dangerMode: true,
    confirmButtonColor: '#295EB1',
    ...settings,
  }).then(result => {
    if (result) {
      cb(result);
    }
  });
};

export const $modalAlert = (type, text, cb, settings) => {
  const alert = {
    title: $capitalize(type),
    text,
    icon: type,
    button: {
      text: 'Ok',
      className: 'btn btn-outline-primary px-50',
    },
    ...settings,
  };
  swal(alert).then(() => {
    if (!cb) return;
    cb();
  });
};

export const $getTitleCase = val => startCase(val);

const showModalAlert = (type, _message) => {
  const message = _message;
  $modalAlert(type, message);
};

export const $handleError = error => {
  const hasError = typeof error === 'object' && error.response && error.response
    ? error.response
    : null;
  let message = null;
  let status = 0;
  if (hasError && hasError.data) {
    message = hasError.data.message || hasError.data.statusMessage;
    status = Number(hasError.data.status || hasError.data.statusMessage);
  } else if (hasError && hasError.status && hasError.message) {
    message = hasError.message; // eslint-disable-line
    status = Number(hasError.status);
  }
  if ([401, 403].includes(status)) {
    // $logout();
    showModalAlert('info', message || 'Unauthorized access');
  } else if ([400].includes(status)) {
    showModalAlert('error', message || 'Unable to process');
  } else {
    const errorMessage = error && error.message;
    showModalAlert(
      'error',
      message || errorMessage || 'Server issue',
    );
  }
};

export const $handleResponse = response => {
  const hasResponse = response && response.data;
  const statusCheck = hasResponse && response.data.status;
  const responseData = statusCheck ? response.data : null;
  if (responseData) return responseData;
  // const output = typeof response === 'object' ? JSON.stringify(response) : response;
  $modalAlert(
    'error',
    hasResponse && response.data.statusMessage
      ? response.data.statusMessage
      : 'Server issue',
  );
  return null;
};

export const $getRouteData = () => ({
  params: pathParams,
  query: queryParams,
});

export const $getCommaSeperated = arr => map(arr, 'name').join(', ');
