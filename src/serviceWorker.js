
export const register = () => {
}

export const unregister = () => {
    console.log(window)
    console.log(process)
    console.log(process.env)
    console.log(new URL(process.env.PUBLIC_URL, window.location.href));

}
