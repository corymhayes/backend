const { Model } = require('objection')

class MaryPriceSettings extends Model{
  static get tableName(){
    return 'MaryPriceSettings'
  }  
}

module.exports = MaryPriceSettings