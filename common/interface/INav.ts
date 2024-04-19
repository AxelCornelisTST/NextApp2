export interface INav {
    /**the route used to go to when clicking this button*/
    routeCallback: (isAuth: boolean) => string;
    /**return empty string to skip this button in the navbar*/
    nameCallback: (isAuth: boolean) => string;
}