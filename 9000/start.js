var service = require('./service')
var router = require('./route')
var handler = require('./requestHandler')

var handlers = {
'/':handler.index,
'/will.js': handler.will
}

service.start(router.route,handlers);