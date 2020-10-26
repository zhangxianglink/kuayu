var service = require('./service')
var router = require('./route')
var handler = require('./requestHandler')

var handlers = {
'/':handler.index,
'/qq.js': handler.qqjs,
'/user.json': handler.getUser,
'/friend.js': handler.friend
}

service.start(router.route,handlers);