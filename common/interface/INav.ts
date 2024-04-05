export interface INav {
    routeCallback: (isAuth: boolean) => string;
    nameCallback: (isAuth: boolean) => string;
}