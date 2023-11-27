import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-85v7rthh6mh5w8si.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck