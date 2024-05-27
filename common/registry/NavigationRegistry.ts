import {INav} from "@/common/interface/INav";
import {
    aboutPage,
    adminPage,
    homePage,
    laptopUserPage,
    loginPage,
    logoutPage,
    lookupPage,
    scanPage
} from "@/components/routerhelper";
import {SessionHelper} from "@/common/sessionhelper";

export class NavigationRegistry {
    public static values: INav[] = [
        {
            isVisibleCallback: () => true,
            route: homePage(),
            name: "button_nav_home"
        },
        {
            isVisibleCallback: (authLevel) => SessionHelper.isAdmin(authLevel),
            route: adminPage(),
            name: "button_nav_admin"
        },
        {
            isVisibleCallback: (authLevel) => SessionHelper.isAuthorized(authLevel),
            route: scanPage(),
            name: "button_nav_scannow"
        },
        {
            isVisibleCallback: (authLevel) => SessionHelper.isAuthorized(authLevel),
            route: lookupPage(),
            name: "button_nav_lookup"
        },
        {
            isVisibleCallback: (authLevel) => SessionHelper.isAuthorized(authLevel),
            route: laptopUserPage(),
            name: "button_nav_laptopuser"
        },
        {
            isVisibleCallback: (authLevel, isLogged) => !isLogged,
            route: aboutPage(),
            name: "button_nav_about"
        },
        {
            isVisibleCallback: (authLevel, isLogged) => isLogged,
            route: logoutPage(),
            name: "button_nav_logout"
        },
        {
            isVisibleCallback: (authLevel, isLogged) => !isLogged,
            route: loginPage(),
            name: "button_nav_login"
        }
    ];
}
