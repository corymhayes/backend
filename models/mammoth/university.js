const { Model } = require('objection')

class University extends Model{
  static get tableName(){
    return 'University'
  }  
}



module.exports = University