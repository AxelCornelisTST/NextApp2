import {dataBasePoolConnection} from "@/common/database";
import {IRepository} from "@/common/repository/IRepository";
import {ILaptopUser} from "@/common/models/ILaptopUser";

//https://github.com/bezkoder/node-js-typescript-mysql-rest-api

class LaptopUserRepository implements IRepository<ILaptopUser> {

    table = "laptopusers";

    delete(id: number): Promise<number> {
        return Promise.resolve(0);
    }

    deleteAll(): Promise<number> {
        return Promise.resolve(0);
    }

    retrieveAll(): Promise<ILaptopUser[]> {
        let query: string = 'SELECT * FROM ?';
        return new Promise((resolve, reject) => {
            dataBasePoolConnection.query<ILaptopUser[]>(query, [this.table], (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }

    retrieveBy(id: number): Promise<ILaptopUser | undefined> {
        let query: string = 'SELECT * FROM ? where UserID = ?';
        return new Promise((resolve, reject) => {
                dataBasePoolConnection.query<ILaptopUser[]>(query, [this.table, id], (err, res) => {
                    if (err) {
                        reject(err);
                    } else
                        resolve(res?.[0]);
                })
            }
        );
    }

    save(user: ILaptopUser): Promise<ILaptopUser> {
        return Promise.resolve(user);
    }

    update(user: ILaptopUser): Promise<number> {
        return Promise.resolve(0);
    }

}

export default new LaptopUserRepository();
