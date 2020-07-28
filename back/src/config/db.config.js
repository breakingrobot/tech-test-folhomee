const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT } = process.env

export default {
  dialect: 'mysql',
  host: DB_HOST || 'database',
  database: DB_DATABASE || 'api',
  user: DB_USER || 'root',
  password: DB_PASSWORD || '',
  port: DB_PORT || '3306'
}
