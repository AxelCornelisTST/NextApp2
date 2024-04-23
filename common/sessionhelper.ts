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

    isAuthorized(): boolean {
        return this.loggedIn && (this.isAdmin() || this.isUser());
    }

    isAdmin(): boolean {
        return !!this.user && "ADMIN" === this.user.role;
    }

    isUser(): boolean {
        return !!this.user && ("USER" === this.user.role);
    }
}