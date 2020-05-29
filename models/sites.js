const { Model } = require('objection')

class Sites extends Model{
  static get tableName(){
    return 'sites'
  }
  
  static get relationMappings(){
    const Company = require('./company')
    
  return {
      comsites: {
        relation: Model.BelongsToOneRelation,
        modelClass: Company,
        join: {
          from: 'sites.companyId',
          to: 'company.id',
        }
      }
    }
  }
}


module.exports = Sites