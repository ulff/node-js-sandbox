var getUser = (id, callback) => {
  var userData = {
    id: id, 
    name: 'Ulff'
  };
  callback(userData);
};

getUser(32, (user) => {
  console.log(user);
});