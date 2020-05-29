const { Model } = require('objection')

class MPC extends Model{
  static get tableName(){
    return 'MPC'
  }  
}



module.exports = MPC