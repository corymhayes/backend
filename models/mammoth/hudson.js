const { Model } = require('objection')

class Hudson extends Model{
  static get tableName(){
    return 'Hudson'
  }  
}

module.exports = Hudson