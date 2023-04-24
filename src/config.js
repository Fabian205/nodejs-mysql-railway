const PORT = process.env.PORT || 3000

/* const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'nobasys2411'
const DB_NAME = process.env.DB_NAME || 'productsdb'
const DB_PORT = process.env.DB_PORT || 3306 */

const DB_HOST = process.env.DB_HOST || 'containers-us-west-57.railway.app'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'IlQ4h2cJyiXS8lzaDWVS'
const DB_NAME = process.env.DB_NAME || 'railway'
const DB_PORT = process.env.DB_PORT || 7702

module.exports = {
	PORT: PORT,
	DB_HOST: DB_HOST,
	DB_USER: DB_USER,
	DB_PASSWORD: DB_PASSWORD,
	DB_NAME: DB_NAME,
	DB_PORT: DB_PORT
}