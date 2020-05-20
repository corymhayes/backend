const { Model } = require('objection')

class University extends Model{
  static get tableName(){
    return 'UNIV'
  }
}


module.exports = University