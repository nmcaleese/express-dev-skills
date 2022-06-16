const skills = [
    {id: 125223, skill: 'Seperating concerns', done: true},
    {id: 127904, skill: 'RESTful routes', done: false},
    {id: 139608, skill: 'Learning quickly', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne (id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }