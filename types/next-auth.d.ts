// import "next-auth";
// //
// declare module "next-auth" {
//
//     interface User {
//         role: string;
//     }
//
//     /**
//      * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//      */
//     interface Session {
//         user?: {
//             role: string
//         } & DefaultSession["user"];
//     }
// }
//
// declare module "next-auth/jwt" {
//     interface JWT {
//         role: "SUPER" | "USER";
//     }
// }
