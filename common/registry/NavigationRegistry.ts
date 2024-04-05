import {INav} from "@/common/interface/INav";
import {aboutPage, homePage, lookupPage, scanPage} from "@/components/routerhelper";

export class NavigationRegistry {
    public static values: INav[] = [
        {
            routeCallback: isAuth => homePage(),
            nameCallback: isAuth => "Home"
        },
        {
            routeCallback: isAuth => isAuth ? scanPage() : "",
            nameCallback: isAuth => isAuth ? "Scan Now" : ""
        },
        {
            routeCallback: isAuth => isAuth ? lookupPage() : "",
            nameCallback: isAuth => isAuth ? "SN Lookup" : ""
        },
        {
            routeCallback: isAuth => aboutPage(),
            nameCallback: isAuth => "About"
        },
        {
            routeCallback: isAuth => isAuth ? "/api/auth/logout" : "/api/auth/login",
            nameCallback: isAuth => isAuth ? "Logout" : "Login"
        }
    ];
}
