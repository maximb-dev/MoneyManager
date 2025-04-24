const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  let url = options.url;
  let body = null;

  if (options.method === 'GET') {
    const params = new URLSearchParams(options.data);
    url += '?' + params.toString();
  } else {
    const formData = new FormData();
    for (let key in options.data) {
      if (options.data.hasOwnProperty(key)) {
        formData.append(key, options.data[key]);
      }
    }
    body = formData;
  }

  try {
    xhr.open(options.method, url);
    xhr.send(body);
  } catch (e) {
    console.error("Ошибка при отправке запроса:", e);
  }

  xhr.onload = () => {
    options.callback(null, xhr.response);
  }

  xhr.onerror = () => {
    options.callback(xhr.response.error);
  }
};
