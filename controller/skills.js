const Skill = require('../models/skill')

module.exports ={
    index,
    show

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