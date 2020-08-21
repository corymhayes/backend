const { Model } = require('objection')

class Christopher extends Model{
  static get tableName(){
    return 'Christopher'
  }  
}

module.exports = Christopher