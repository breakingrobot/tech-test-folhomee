import Sequelize from 'sequelize'
import HashID from '../utils/hashid'

class Url extends Sequelize.Model {
  static init (sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        url: DataTypes.STRING,
        redirectCount: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        hashCode: {
          type: DataTypes.STRING,
          set () {
            this.setDataValue('hashCode', HashID.encode(this.id))
          }
        }
      },
      {
        tableName: 'urls',
        sequelize
      }
    )
  }
}

export default Url
