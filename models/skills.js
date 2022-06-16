const skills = [
    {id: 125223, skill: 'Seperating concerns', done: true},
    {id: 127904, skill: 'RESTful routes', done: false},
    {id: 139608, skill: 'Learning quickly', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne (id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }

  function create(skill) {
    skill.id = Date.now() %1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }