import Sequelize from 'sequelize'
import Url from './url.model'
import config from '../config'

const createDb = () => {
  const { database, user, password, host, port } = config.database
  console.log(process.env)
  console.log(config.database)
  return new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: 'mysql'
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
