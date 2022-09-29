const skills = [
    {id: 252, skill:'javascript', done: true},
    {id:343, skill:'HTML', done: true},
    {id:23, skill:'CSS', done: true}
]

module.exports = {
    getAll,
    getOne
};

function getAll(){
    return skills;
}


function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}