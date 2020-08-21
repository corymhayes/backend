const { Model } = require('objection')

class CEH extends Model{
  static get tableName(){
    return 'CEH'
  }  
}

module.exports = CEH