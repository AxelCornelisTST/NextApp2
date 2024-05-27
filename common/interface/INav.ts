export interface INav {
    isVisibleCallback: (authLevel: string, isLogged: boolean) => boolean
    route: string;
    name: string;
}