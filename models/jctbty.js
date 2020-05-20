const { Model } = require('objection')

class JCTBTY extends Model{
  static get tableName(){
    return 'JCTBTY'
  }
}


module.exports = JCTBTY