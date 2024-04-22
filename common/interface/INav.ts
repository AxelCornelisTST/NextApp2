export interface INav {
    routeCallback: (isAuth: boolean, isLogged: boolean) => string;
    nameCallback: (isAuth: boolean, isLogged: boolean) => string;
}