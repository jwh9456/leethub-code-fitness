/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    var visited = new Array(rooms.length)
    var stack = [0]
    var count = 1
    visited[0] = 1
    while (stack.length) {
        let keys = rooms[stack.pop()]
        for (let k of keys)
            if (!visited[k]) stack.push(k), visited[k] = 1, count++
    }
    return rooms.length === count
};