const { Model } = require('objection')

class Company extends Model{
  static get tableName(){
    return 'BATTERY'
  }  
  
}


module.exports = Company