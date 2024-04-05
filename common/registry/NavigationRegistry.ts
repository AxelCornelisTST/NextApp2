import {INav} from "@/common/interface/INav";
import {aboutPage, homePage, lookupPage, scanPage} from "@/components/routerhelper";

export class NavigationRegistry {
    public static values: INav[] = [
        {
            route: homePage(),
            name: "Home"
        },
        {
            route: scanPage(),
            name: "Scan Now"
        },
        {
            route: lookupPage(),
            name: "SN Lookup"
        },
        {
            route: aboutPage(),
            name: "About"
        },
        {
            route: "/api/auth/logout",
            name: "Logout"
        }
    ];
}
