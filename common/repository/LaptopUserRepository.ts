import {dataBasePoolConnection} from "@/common/database";
import {IRepository} from "@/common/repository/IRepository";
import {ILaptopUserBase, IRowDataLaptopUser} from "@/common/models/ILaptopUser";

//https://github.com/bezkoder/node-js-typescript-mysql-rest-api

class LaptopUserRepository implements IRepository<ILaptopUserBase> {


    delete(id: number): Promise<number> {
        return Promise.resolve(0);
    }

    deleteAll(): Promise<number> {
        return Promise.resolve(0);
    }

    retrieveAll(): Promise<ILaptopUserBase[]> {
        let query: string = 'SELECT * FROM laptopuser';
        return new Promise((resolve, reject) => {
            dataBasePoolConnection.query<IRowDataLaptopUser[]>(query, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }

    retrieveBy(id: number): Promise<ILaptopUserBase | undefined> {
        let query: string = 'SELECT * FROM laptopuser where userID = ?';
        return new Promise((resolve, reject) => {
                dataBasePoolConnection.query<IRowDataLaptopUser[]>(query, [id], (err, res) => {
                    if (err) {
                        reject(err);
                    } else
                        resolve(res?.[0]);
                })
            }
        );
    }

    save(user: ILaptopUserBase): Promise<ILaptopUserBase> {
        return Promise.resolve(user);
    }

    update(user: ILaptopUserBase): Promise<number> {
        return Promise.resolve(0);
    }

}

export default new LaptopUserRepository();
