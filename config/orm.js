const connection = require('./connection.js');
console.log(`did we make it?`);

const printQuestionMarks = num => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};


const objToSql = obj => {
  let arr = [];

  // loop through the keys and push 'key: value' as a string int arr
  for (let key in obj) {
      let value = obj[key];

      if (Object.hasOwnProperty.call(obj, key)) {
          // if string with spaces, add quotations (Agent Dale Cooper => 'Agent Dale Cooper')
          if (typeof value === 'string' && value.indexOf(" ") >= 0) {
              value = `'${value}'`;
          }
          // e.g. {name: 'Agent Dale Cooper'} => {"name='Agent Dale Cooper'"}
          // e.g. {devourer: true} => {"devourer=true"}
          arr.push(`${key}=${value}`);
      };
      console.log(arr, 'array')
  }
  // translate array of strings to a single comma-separeted string
  return arr.toString();
}



const orm = {
    
  selectAll: (app) => {
    let queryString = "SELECT * FROM burgers";
    //console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;

      app(res);
      //console.log(`This is the results: ${app(res)}`);

    })
  },

  insertOne: (burger_name, _cb ) => {
    let queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, burger_name, (err, res) => {
      if (err) throw err;
      _cb(res);
    
    })
  },

  updateOne: function(table, objColVals, condition, _cb) {
     let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE id = ${condition};`;
    console.log(queryString);

    connection.query(queryString, function(err, res) {
      if (err) throw err;
      _cb(res);
    })
  }
};
  
  module.exports = orm;
  // orm.selectAll(function(res) {
  //   console.log(res);
  // });