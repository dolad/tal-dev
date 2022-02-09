export default () => ({
    db: {
        username:process.env.TALDEV_PG_USER,
        password: process.env.TALDEV_PG_PASSWORD,
        port: process.env.TALDEV_PG_PORT ?  parseFloat(process.env.TALDEV_PG_PORT) : 5432,
        database: process.env.TALDEV_DATABASE,
        dialect: 'postgres'
    }
})