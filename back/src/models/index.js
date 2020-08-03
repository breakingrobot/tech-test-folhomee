import Sequelize from 'sequelize'
import Url from './url.model'
import config from '../config'

const createDb = () => {
  const { database, user, password, host, port } = config.database
  return new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: 'mysql',
    charset: 'utf8mb4'
  })
}

const sequelize = createDb()

const models = {
  Url: Url.init(sequelize, Sequelize)
}

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models))

const db = {
  ...models,
  sequelize
}

export default db
