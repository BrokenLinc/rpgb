module.exports = {
  home: {
    title: () => 'Home',
    path: () => '/',
  },
  characters: {
    title: () => 'Characters',
    path: () => '/characters',
  },
  character: {
    title: (characterName) => characterName,
    path: key => `/characters/${key}`,
  },
};
