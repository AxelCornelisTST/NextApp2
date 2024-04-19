"use server"

export default async function Login() {
    return (
        <>
            <h1>Sign in</h1>
            <a href="/login/github">Sign in with GitHub</a>
        </>
    );
}