import {ILaptop} from "@/common/models/ILaptop";
import {connection} from "@/common/database";
import {IRepository} from "@/common/repository/IRepository";
import {IUser} from "@/common/models/IUser";

//https://github.com/bezkoder/node-js-typescript-mysql-rest-api

class LaptopRepository implements IRepository<ILaptop> {
    delete(sn: string): Promise<number> {
        return Promise.resolve(0);
    }

    deleteAll(): Promise<number> {
        return Promise.resolve(0);
    }

    retrieveAll(): Promise<ILaptop[]> {
        let query: string = 'SELECT * FROM laptops';

        return new Promise((resolve, reject) => {
            connection.query<ILaptop[]>(query, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }

    retrieveBy(sn: string): Promise<ILaptop | undefined> {
        let query: string = 'SELECT * FROM laptops where SerialNumber = ?';
        return new Promise((resolve, reject) => {
                connection.query<ILaptop[]>(query, [sn], (err, res) => {
                    if (err) {
                        reject(err);
                    } else
                        resolve(res?.[0]);
                })
            }
        );
    }

    save(laptop: ILaptop): Promise<ILaptop> {
        return Promise.resolve(laptop);
    }

    update(laptop: ILaptop): Promise<number> {
        return Promise.resolve(0);
    }

}

export default new LaptopRepository();
