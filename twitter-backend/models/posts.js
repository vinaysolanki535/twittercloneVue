const { Model } = require('objection')

class Posts extends Model {
  static get tableName() {
    return 'posts'
  }

  $beforeInsert() {
    this.createdAt = new Date()
  }

  $beforeUpdate() {
    this.updatedAt = new Date()
  }

  static get totalColumn() {
    return 'post'
  }

  static get customerIdColumn() {
    return 'post_id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['post'],
      properties: {
        post: { type: 'string', minLength: 1, maxLength: 255 },
        post_id: { type: 'integer' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
      },
    }
  }
}

module.exports = Posts
