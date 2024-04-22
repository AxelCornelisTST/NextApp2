// import {ILaptopBase, LaptopEntity} from "@/common/models/ILaptop";
// import {IRepository} from "@/common/repository/IRepository";
// import {databaseSource} from "@/app/api/auth/[...nextauth]/route";
//
// //https://github.com/bezkoder/node-js-typescript-mysql-rest-api
//
// class LaptopRepository implements IRepository<ILaptopBase> {
//     delete(sn: string): Promise<number> {
//         return Promise.resolve(0);
//     }
//
//     deleteAll(): Promise<number> {
//         return Promise.resolve(0);
//     }
//
//     retrieveAll(): Promise<ILaptopBase[]> {
//         return new Promise(() => databaseSource.manager.find(LaptopEntity));
//     }
//
//     retrieveBy(sn: string): Promise<ILaptopBase | undefined> {
//         return new Promise((resolve, reject) => databaseSource.getRepository(LaptopEntity).findOneBy({serialNumber: sn}));
//     }
//
//     save(laptop: ILaptopBase): Promise<ILaptopBase> {
//         return Promise.resolve(databaseSource.getRepository(LaptopEntity).save(laptop));
//     }
//
//     update(laptop: ILaptopBase): Promise<number> {
//         return Promise.resolve(0);
//     }
//
// }
//
// export default new LaptopRepository();
