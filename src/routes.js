module.exports = {
    home: {
        title: () => 'Home',
        path: () => '/',
    },
    groups: {
        title: () => 'Groups',
        path: () => '/groups',
    },
    group: {
        title: (groupName) => groupName,
        path: key => `/groups/${key}`,
    },
};
