const skills = [
    {id: 252, skill:'javascript', done: true},
    {id:343, skill:'HTML', done: true},
    {id:23, skill:'CSS', done: true}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll(){
    return skills;
}


function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
  }

  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }
  