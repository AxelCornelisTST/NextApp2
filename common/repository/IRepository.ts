import {ILaptop} from "@/common/models/ILaptop";

export interface IRepository<T> {
    save(model: T): Promise<T>;

    retrieveAll(): Promise<T[]>;

    retrieveBy(id: any): Promise<T | undefined>;

    update(model: T): Promise<number>;

    delete(id: any): Promise<number>;

    deleteAll(): Promise<number>;
}