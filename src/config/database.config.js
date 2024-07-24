import mysql from 'mysql2/promise';
import 'dotenv/config'


const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});
async function checkConnection() {
    try {
        const connection = await pool.getConnection();
        await connection.ping(); // Kiểm tra kết nối
        console.log('Kết nối thành công!');
        connection.release(); // Giải phóng kết nối
    } catch (error) {
        console.error('Kết nối thất bại:', error);
    }
}

checkConnection();

export default pool;