const { Model } = require('objection')

class HudsonSettings extends Model{
  static get tableName(){
    return 'HudsonSettings'
  }  
}

module.exports = HudsonSettings