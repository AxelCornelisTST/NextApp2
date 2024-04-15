import {dataBasePoolConnection} from "@/common/database";
import {IRepository} from "@/common/repository/IRepository";
import {IAuthUser} from "@/common/models/IAuthUser";

class AuthUserRepository implements IRepository<IAuthUser> {
    delete(id: any): Promise<number> {
        return Promise.resolve(0);
    }

    deleteAll(): Promise<number> {
        return Promise.resolve(0);
    }

    retrieveAll(): Promise<IAuthUser[]> {
        return Promise.resolve([]);
    }

    retrieveBy(id: any): Promise<IAuthUser | undefined> {
        let query: string = 'SELECT * FROM users where github_id = ?';
        return new Promise((resolve, reject) => {
                dataBasePoolConnection.query<IAuthUser[]>(query, [id], (err, res) => {
                    if (err) {
                        reject(err);
                    } else
                        resolve(res?.[0]);
                })
            }
        );
    }

    save(model: IAuthUser): Promise<IAuthUser> {
        return Promise.resolve(model);
    }

    update(model: IAuthUser): Promise<number> {
        return Promise.resolve(0);
    }
}

export default new AuthUserRepository();
