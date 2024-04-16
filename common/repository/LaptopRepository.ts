import {ILaptop, LaptopEntity} from "@/common/models/ILaptop";
import {dataBasePoolConnection} from "@/common/database";
import {IRepository} from "@/common/repository/IRepository";

//https://github.com/bezkoder/node-js-typescript-mysql-rest-api

class LaptopRepository implements IRepository<LaptopEntity> {
    delete(sn: string): Promise<number> {
        return Promise.resolve(0);
    }

    deleteAll(): Promise<number> {
        return Promise.resolve(0);
    }

    retrieveAll(): Promise<LaptopEntity[]> {
        let query: string = 'SELECT * FROM laptop';
        return new Promise((resolve, reject) => {
            dataBasePoolConnection.query<LaptopEntity[]>(query, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }

    retrieveBy(sn: string): Promise<LaptopEntity | undefined> {
        let query: string = 'SELECT * FROM laptop where SerialNumber = ?';
        return new Promise((resolve, reject) => {
                dataBasePoolConnection.query<LaptopEntity[]>(query, [sn], (err, res) => {
                    if (err) {
                        reject(err);
                    } else
                        resolve(res?.[0]);
                })
            }
        );
    }

    save(laptop: LaptopEntity): Promise<LaptopEntity> {
        return Promise.resolve(laptop);
    }

    update(laptop: LaptopEntity): Promise<number> {
        return Promise.resolve(0);
    }

}

export default new LaptopRepository();
