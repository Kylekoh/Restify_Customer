module.exports = {
    EVN: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODEB_URI: process.env.MONGODEB_URI ||
    'mongodb://test123:test123@ds151943.mlab.com:51943/restify_customer'
}