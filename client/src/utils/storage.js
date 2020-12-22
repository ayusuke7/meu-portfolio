const PREFIX = "mpt";
const KEY_USER = `${PREFIX}@user`;

const storage = {
  getUser: () => {
    let user = window.sessionStorage.getItem(KEY_USER);
    return JSON.parse(user);
  },

  setUser: (data) => {
    let user = JSON.stringify(data);
    window.sessionStorage.setItem(KEY_USER, user);
  },

  removeUser: () => {
    window.sessionStorage.removeItem(KEY_USER);
  },
};

export default storage;
