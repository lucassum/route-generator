const AuthUtils = require("./authentication")
const ACLUtils = require('./acl')

const generateRoutes = ({ Router, route, action }) => {
    Router[route.method](
        route.path,
        ...authMiddlewares(route),
        action)
}

const authMiddlewares = ({ authentication, acl }) => {
    const middlewares = []
    if (authentication) middlewares.push(AuthUtils.authenticate[route.authentication])
    if (acl) middlewares.push(ACLUtils.checkAbility(acl))
    return middlewares
}

const RouteGenerator = { generateRoutes }