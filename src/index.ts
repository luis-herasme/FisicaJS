// --------------- Circle ---------------
import WorldCircle from './World'
import CircleObj from './Circle/Circle'
import Trigger from './Circle/Trigger'
import { Vector2D } from 'vector_class'

const Circle = {
  Circle: CircleObj,
  Trigger,
  World: WorldCircle
}

// --------------- Mesh ---------------
import DynamicCircle from './Mesh/DynamicCircle'
import DynamicRect from './Mesh/DynamicRect'
import DynamicMesh from './Mesh/DynamicMesh'
import WorldMesh from './Mesh/World'

const Mesh = {
  World: WorldMesh,
  DynamicMesh,
  DynamicCircle,
  DynamicRect
}

// --------------- Rect ---------------
import RectCollider from './Rect/RectCollider'
import RectDynamic from './Rect/Dynamic'
import RectTrigger from './Rect/RectTrigger'
import WorldRect from './World'

const Rect = {
  RectCollider,
  RectTrigger,
  RectDynamic,
  World: WorldRect
}

// --------------- Rect Circle ---------------
import DynamicRectRC from './RectCircle/DynamicRect'
import DynamicCricleRC from './RectCircle/DynamicCircle'
import StaticRectRC from './RectCircle/StaticRect'
import StaticCircleRC from './RectCircle/StaticCircle'
import WorldRC from './RectCircle/World'

const RectCircle = {
  DynamicRect: DynamicRectRC,
  DynamicCircle: DynamicCricleRC,
  StaticRectRC: StaticRectRC,
  StaticCricle: StaticCircleRC,
  World: WorldRC
}

// EXPORT

export {
  Circle,
  Rect,
  Mesh,
  RectCircle,
  Vector2D
}
