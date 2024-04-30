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

export enum Roles {
    USER,
    ADMIN
}