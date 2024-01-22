export default()=> ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DB_PORT, 10) || 3306,
        database: process.env.DB_DATABASE || 'library',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'Pesmylove.22'
    }
});