const skills = [
    {skill: 'CSS'},
    {skill: 'JS'},
    {skill: 'HTML'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill
};

function deleteSkill(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
};

function getOne(id) {
    return skills[id];
};

function getAll() {
    return skills;
};

