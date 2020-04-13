const { Model } = require('objection')

class ChildSite extends Model{
  static get tableName(){
    return 'child_site'
  }
  
  static get relationMappings(){
    const ParentSite = require('./sites')

    return {
      parChiRel: {
        relation: Model.HasOneRelation,
        modelClass: ParentSite,
        join: {
          from: 'child_site.parent_site_id',
          to: 'parent_site.parent_site_id'
        }
      }
    }
  }

  // static get tableName(){
  //   return 'parent_site'
  // }
}


module.exports = ChildSite