export default defineEventHandler(async (event) => {
   
    const { public: { apiBase } } = useRuntimeConfig()
    console.log( parseCookies(event))
    return'Data';
    // try {
    //     const data = await $fetch(`${apiBase}api/login` , {
    //         method: 'POST',
    //         body: body,
    //         headers: {
    //             'Accept': 'application/json',
    //         }
    //     })

    //     setCookie(event, 'token', data.token, {
    //         httpOnly: true,
    //         secure: true,
    //         maxAge: 60 * 60 * 24 * 7, // 1 week
    //         path: '/'
    //     })

    //     return data.user;
    // } catch (error) {
    //     return error
    // }
})