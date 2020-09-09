
  const { Model } = require('objection')
  
  class SEALY extends Model{
    static get tableName(){
      return 'SEALY'
    }  
  }

  module.exports = SEALY
