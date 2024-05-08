const EmailTemplate = ({name}: { name: string }) => {
    return (
        <body>
        <p>Beste Ouder</p>
        <p>Uw kind, {name}, heeft zijn laptop binnengebracht voor herstel.</p>
        <p>U kan hier binnenkort een factuur van verwachten</p>
        <p>met vriendelijke groeten</p>
        <p>het ict team</p>
        </body>
    )
}
export default EmailTemplate