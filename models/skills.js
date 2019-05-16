const skills = [
    {skill: 'CSS'},
    {skill: 'JS'},
    {skill: 'HTML'},
];

module.exports = {
    getAll,
    getOne,
    create,
};

function create(skill) {
    skills.push(todo);
};

function getOne(id) {
    return skills[id];
};

function getAll() {
    return skills;
};

