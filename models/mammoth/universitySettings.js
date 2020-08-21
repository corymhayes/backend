const { Model } = require('objection')

class UniversitySettings extends Model{
  static get tableName(){
    return 'UniversitySettings'
  }  
}



module.exports = UniversitySettings