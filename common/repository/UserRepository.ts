import {dataBasePoolConnection} from "@/common/database";
import {IRepository} from "@/common/repository/IRepository";
import {IUser} from "@/common/models/IUser";

//https://github.com/bezkoder/node-js-typescript-mysql-rest-api

class UserRepository implements IRepository<IUser> {
    delete(id: number): Promise<number> {
        return Promise.resolve(0);
    }

    deleteAll(): Promise<number> {
        return Promise.resolve(0);
    }

    retrieveAll(): Promise<IUser[]> {
        let query: string = 'SELECT * FROM users';
        return new Promise((resolve, reject) => {
            dataBasePoolConnection.query<IUser[]>(query, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }

    retrieveBy(id: number): Promise<IUser | undefined> {
        let query: string = 'SELECT * FROM users where UserID = ?';
        return new Promise((resolve, reject) => {
                dataBasePoolConnection.query<IUser[]>(query, [id], (err, res) => {
                    if (err) {
                        reject(err);
                    } else
                        resolve(res?.[0]);
                })
            }
        );    }

    save(user: IUser): Promise<IUser> {
        return Promise.resolve(user);
    }

    update(user: IUser): Promise<number> {
        return Promise.resolve(0);
    }

}

export default new UserRepository();
