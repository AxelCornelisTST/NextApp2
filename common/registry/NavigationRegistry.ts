import {INav} from "@/common/interface/INav";
import {aboutPage, homePage, loginPage, logoutPage, lookupPage, scanPage} from "@/components/routerhelper";
import {SessionHelper} from "@/common/sessionhelper";

export class NavigationRegistry {
    public static values: INav[] = [
        {
            routeCallback: () => homePage(),
            nameCallback: () => "button_nav_home"
        },
        {
            routeCallback: authLevel => SessionHelper.isAdmin(authLevel) ? "/admin" : "",
            nameCallback: authLevel => SessionHelper.isAdmin(authLevel) ? "button_nav_admin" : ""
        },
        {
            routeCallback: authLevel => SessionHelper.isAuthorized(authLevel) ? scanPage() : "",
            nameCallback: authLevel => SessionHelper.isAuthorized(authLevel) ? "button_nav_scannow" : ""
        },
        {
            routeCallback: authLevel => SessionHelper.isAuthorized(authLevel) ? lookupPage() : "",
            nameCallback: authLevel => SessionHelper.isAuthorized(authLevel) ? "button_nav_lookup" : ""
        },
        {
            routeCallback: authLevel => SessionHelper.isAuthorized(authLevel) ? lookupPage() : "",
            nameCallback: authLevel => SessionHelper.isAuthorized(authLevel) ? "button_nav_laptopuser" : ""
        },
        {
            routeCallback: (authLevel, isLogged) => isLogged ? "" : aboutPage(),
            nameCallback: (authLevel, isLogged) => isLogged ? "" : "button_nav_about"
        },

        {
            routeCallback: (authLevel, isLogged) => isLogged ? logoutPage() : loginPage(),
            nameCallback: (authLevel, isLogged) => isLogged ? "button_nav_logout" : "button_nav_login"
        },
    ];
}
