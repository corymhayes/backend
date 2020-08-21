const { Model } = require('objection')

class testbty extends Model{
  static get tableName(){
    return 'JCT_TEST_BTY'
  }  
}

module.exports = testbty