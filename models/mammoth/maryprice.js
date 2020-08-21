const { Model } = require('objection')

class MaryPrice extends Model{
  static get tableName(){
    return 'MaryPrice'
  }  
}

module.exports = MaryPrice