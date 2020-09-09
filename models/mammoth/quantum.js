const { Model } = require('objection')

class Quantum extends Model{
  static get tableName(){
    return 'Quantum'
  }  
}

module.exports = Quantum