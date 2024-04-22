import {dataBasePoolConnection} from "@/common/database";
import {IRepository} from "@/common/repository/IRepository";
import {IAuthUserBase, IRowDataAuthUser} from "@/common/models/IAuthUser";
import {ResultSetHeader} from "mysql2";

class AuthUserRepository implements IRepository<IAuthUserBase> {
    delete(id: any): Promise<number> {
        return Promise.resolve(0);
    }

    deleteAll(): Promise<number> {
        return Promise.resolve(0);
    }

    retrieveAll(): Promise<IAuthUserBase[]> {
        return Promise.resolve([]);
    }

    retrieveBy(id: any): Promise<IAuthUserBase | undefined> {
        let query: string = 'SELECT * FROM authUser where github_id = ?';
        return new Promise((resolve, reject) => {
                dataBasePoolConnection.query<IRowDataAuthUser[]>(query, [id], (err, res) => {
                    if (err) {
                        reject(err);
                    } else
                        resolve(res?.[0]);
                })
            }
        );
    }

    save(model: IAuthUserBase): Promise<IAuthUserBase> {
        let query: string = 'INSERT INTO authUser (id, role, github_id, username) values(?,?,?,?)';
        return new Promise((resolve, reject) => {
            dataBasePoolConnection.query<ResultSetHeader>(query, [model.id, model.role, model.github_id, model.username])
        });
    }

    update(model: IAuthUserBase): Promise<number> {
        return Promise.resolve(0);
    }
}

export default new AuthUserRepository();
