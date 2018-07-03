const pointY = Vector.add(config.position, [0, config.height])
const pointX = Vector.add(config.position, [config.width, 0])
const pointXY = Vector.add(config.position, [config.width, config.height])

this.vertices.add(config.position)
this.vertices.add(pointX)
this.vertices.add(pointXY)
this.vertices.add(pointY)