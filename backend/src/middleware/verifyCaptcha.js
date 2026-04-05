import axios from "axios"

export const verifyCaptcha = (_req, _res, next) => {
    // đã gỡ reCAPTCHA, đi thẳng luôn
    next()
}