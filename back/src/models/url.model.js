import Sequelize from 'sequelize'
import HashID from '../utils/hashid'

class Url extends Sequelize.Model {
  /**
   * Model initializer with complete schema.
   * @param sequelize
   * @param DataTypes
   * @returns Sequelize.Model
   */
  static init (sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        url: {
          type: DataTypes.STRING,
          validate: {
            isUrl: true
          }
        },
        redirectCount: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        hashCode: {
          type: DataTypes.STRING
        }
      },
      {
        tableName: 'urls',
        hooks: {
          afterCreate: Url.afterCreate
        },
        sequelize
      }
    )
  }

  static afterCreate (url) {
    return url.update({
      hashCode: HashID.encode(url.id)
    })
  }
}

export default Url
