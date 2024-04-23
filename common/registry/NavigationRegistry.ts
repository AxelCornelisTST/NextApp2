import {INav} from "@/common/interface/INav";
import {aboutPage, homePage, loginPage, logoutPage, lookupPage, scanPage} from "@/components/routerhelper";

export class NavigationRegistry {
    public static values: INav[] = [
        {
            routeCallback: () => homePage(),
            nameCallback: () => "button_nav_home"
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
            routeCallback: () => aboutPage(),
            nameCallback: () => "button_nav_about"
        },
        {
            routeCallback: isLogged => isLogged ? logoutPage() : loginPage(),
            nameCallback: isLogged => isLogged ? "button_nav_logout" : "button_nav_login"
        }
    ];
}
