import Cookie from 'js-cookie';

const Storage = {};

try {
  if (!window.localStorage) {
    throw Error('Sem Dados Locais!');
  }

  Storage.set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  Storage.get = (key) => {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  };
  Storage.remove = key => localStorage.removeItem(key);
} catch (e) {
    Storage.set = Cookie.set;
    Storage.get = Cookie.getJSON;
    Storage.remove = Cookie.remove;
}

export default Storage;