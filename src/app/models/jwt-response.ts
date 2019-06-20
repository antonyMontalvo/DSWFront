export interface JwtResponseI {
    message: {
        userName: string,
        userEmail: string,
        userFirstName: string,
        userLastName: string,
        userSurName: string,
        userPhone: string,
        userPhoto: string,
        token: string
    }
    status: string;

    /* Las interfaces para las respuestas del servidor deben tener los mismos valores que se recibe
    para evitar problemas. También el mismo nombre de variables */

}