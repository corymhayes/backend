const { Model } = require('objection')

class QuantumSettings extends Model{
  static get tableName(){
    return 'QuantumSettings'
  }  
}

module.exports = QuantumSettings