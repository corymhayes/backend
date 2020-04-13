const { Model } = require('objection')

class Company extends Model{
  static get tableName(){
    return 'company'
  }  
  
  static get relationMappings(){
    const Sites = require('./sites')

    return {
      parents: {
        relation: Model.HasManyRelation,
        modelClass: Sites,
        join: {
          from: 'company.id',
          to: 'sites.companyId'
        }
      }
    }
  }
}


module.exports = Company