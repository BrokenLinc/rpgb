module.exports = {
  home: {
    title: 'Home',
    path: () => '/',
  },
  characters: {
    title: 'Characters',
    path: () => '/characters',
  },
  characterAdd: {
    title: 'Add Character',
    path: () => `/characters/add`,
  },
  characterEdit: {
    title: 'Edit Character',
    path: (key) => `/characters/${key}/edit`,
  },
};
