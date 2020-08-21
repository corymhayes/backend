const { Model } = require('objection')

class ChristopherTrend extends Model{
  static get tableName(){
    return 'ChristopherTrend'
  }  
}

module.exports = ChristopherTrend