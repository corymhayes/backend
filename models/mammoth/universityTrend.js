const { Model } = require('objection')

class UniversityTrend extends Model{
  static get tableName(){
    return 'UniversityTrend'
  }  
}

module.exports = UniversityTrend