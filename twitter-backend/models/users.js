const { Model } = require('objection')
const Posts = require('./posts')

class Users extends Model {
  static get tableName() {
    return 'users'
  }

  $beforeInsert() {
    this.createdAt = new Date()
  }

  $beforeUpdate() {
    this.updatedAt = new Date()
  }

  static get nameColumn() {
    return 'name'
  }

  static get emailColumn() {
    return 'email'
  }

  static get passwordColumn() {
    return 'password'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email', 'password'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string' },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
      },
    }
  }

  static relationMappings = {
    order: {
      relation: Model.HasOneRelation,
      modelClass: Posts,
      join: {
        from: 'users.id',
        to: 'posts.post_id',
      },
    },
  }
}

module.exports = Users
