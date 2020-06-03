const { Model } = require('objection')

class UserModel extends Model{
  static get tableName(){
    return 'USERS'
  }  
}

module.exports = UserModel