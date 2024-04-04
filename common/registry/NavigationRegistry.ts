import {INav} from "@/common/interface/INav";

export class NavigationRegistry {
    public static values: INav[] = [
        {
            route: "/",
            name: "Home"
        },
        {
            route: "/about",
            name: "About"
        },
        {
            route: "/info",
            name: "Scan Now"
        }
    ];
}
