import {Session} from "next-auth";

export class SessionHelper {

    loggedIn: boolean = false;
    user: any = undefined;

    constructor(ses: Session | null) {
        this.loggedIn = !!ses;
        if (this.loggedIn)
            this.user = ses?.user
    }

    getSessionName(): string {
        if (this.loggedIn && !!this.user)
            return this.user.name;
        return "unknown user";
    }

    isAuthorized(bypassElevation?: boolean): boolean {
        return (this.isAdmin() || this.isUser());
    }

    isAdmin(): boolean {
        return !!this.user && Roles[Roles.ADMIN] === this.user.role;
    }

    isUser(): boolean {
        return !!this.user && (Roles[Roles.USER] === this.user.role);
    }

    static isAdmin(role: string): boolean {
        return Roles[Roles.ADMIN] === role;
    }

    static isAuthorized(role: string): boolean {
        return Roles[Roles.ADMIN] === role || Roles[Roles.USER] === role;
    }
}

//roles 'additive', they are ordered by importance. 0 is lowest and the highest role can do everything.
export enum Roles {
    NONE,
    USER,
    ADMIN
}

export function roleByName(name: string): Roles {
    switch (name) {
        case Roles[Roles.ADMIN]:
            return Roles.ADMIN;
        case Roles[Roles.USER]:
            return Roles.USER;
        default:
        case "":
        case Roles[Roles.NONE]:
            return Roles.NONE;
    }
}