const { Model } = require('objection')

class FieldTrend extends Model{
  static get tableName(){
    return 'FIELD_TREND'
  }
}


module.exports = FieldTrend