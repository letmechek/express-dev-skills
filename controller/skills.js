const Skill = require('../models/skill')

module.exports ={
    index,
    show,
    new: newSkill,
    create,
    delete: deleteTodo


}


 function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'Skills'
    });
  };
 
  function show(req,res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skills'
    })
  }

  function newSkill(req, res) {
    res.render('skills/new', {
      title: 'New Skill'
    })
  }

  function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
  }

  function deleteTodo(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
  }