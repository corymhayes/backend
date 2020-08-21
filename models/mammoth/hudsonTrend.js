const { Model } = require('objection')

class HudsonTrend extends Model{
  static get tableName(){
    return 'HudsonTrend'
  }  
}

module.exports = HudsonTrend