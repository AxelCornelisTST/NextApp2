export interface INav {
    routeCallback: (authLevel: string, isLogged: boolean) => string;
    nameCallback: (authLevel: string, isLogged: boolean) => string;
}