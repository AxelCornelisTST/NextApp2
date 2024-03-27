import mysql, {RowDataPacket} from 'mysql2/promise'

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3000
});

interface ILaptopRow extends RowDataPacket {
    serialnumber: string,
    brand: string,
    model: string,
    userid: number,
    processor: string
}

async function selectQuery<T>(quer: string): Promise<any> {
    return await pool.execute(quer);
}

export default function getAllLaptops() {
    return selectQuery('select * from laptops');
}

