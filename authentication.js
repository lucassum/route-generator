const jwt = (req, res, next) => {
    console.log('auth')
}

const authenticate = { jwt }

const AuthUtils = { authenticate }

module.exports = AuthUtils