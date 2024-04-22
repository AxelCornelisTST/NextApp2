import {INav} from "@/common/interface/INav";
import {aboutPage, homePage, loginPage, logoutRoute, lookupPage, scanPage} from "@/components/routerhelper";

export class NavigationRegistry {
    public static values: INav[] = [
        {
            routeCallback: isAuth => homePage(),
            nameCallback: isAuth => "button_nav_home"
        },
        {
            routeCallback: isAuth => isAuth ? scanPage() : "",
            nameCallback: isAuth => isAuth ? "button_nav_scannow" : ""
        },
        {
            routeCallback: isAuth => isAuth ? lookupPage() : "",
            nameCallback: isAuth => isAuth ? "button_nav_lookup" : ""
        },
        {
            routeCallback: isAuth => aboutPage(),
            nameCallback: isAuth => "button_nav_about"
        },
        {
            routeCallback: isAuth => isAuth ? logoutRoute() : loginPage(),
            nameCallback: isAuth => isAuth ? "button_nav_logout" : "button_nav_login"
        }
    ];
}
