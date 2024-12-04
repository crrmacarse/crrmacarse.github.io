import { useSpring, to, animated, config } from '@react-spring/web'
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture'
import { useCallback, useEffect, useState } from 'react'

// TODO: Adjust zindex
const Rocket = () => {
  type trackType = "initial" | "idle" | "moved"
  const [track, setTrack] = useState<trackType>('initial');

  const [{ pos }, api] = useSpring(() => ({ pos: [0, 0] }))
  const [{ angle }, angleApi] = useSpring(() => ({
    angle: 0,
    config: config.wobbly,
  }))

  // direction calculates pointer direction
  // memo is like a cache, it contains the values that you return inside "set"
  // this way we can inject the springs current coordinates on the initial event and
  // add movement to it for convenience
  const bind = useDrag(
    ({ xy, previous, down, movement: pos, velocity, direction }) => {
      setTrack("moved")

      api.start({
        pos,
        immediate: down,
        config: { velocity: scale(direction, velocity), decay: true },
      })

      if (dist(xy, previous) > 10 || !down)
        angleApi.start({ angle: Math.atan2(direction[0], -direction[1]) })
    },
    { initial: () => pos.get() }
  )

  const handleReset = () => {
    api.set({ pos: [0, 0] })
    setTrack("initial")
  }

  useEffect(() => {
    if(track !== 'initial') return;

    const timer = setTimeout(() => {
      setTrack('idle')
    }, 5000)

    return () => clearTimeout(timer);
  }, [track])

  return (
    <p className='text-center mb-2'>
      <animated.div
        {...bind()}
        style={{
          transform: to(
            [pos, angle],
            // @ts-ignore
            ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`
          ),
        }}>
        <img src={"/assets/images/rocket.gif"} className='rocket mx-auto' width={200} height={200} draggable="false" style={{
          cursor: '-webkit-grab',
          willChange: 'transform',
          userSelect: 'none',
        }} />
      </animated.div>
      <p className={`text-xs blink ${track === 'idle' ? 'visible' : 'invisible'}`}>(Drag me!)</p>
      <p className={`text-xs ${track === 'moved' ? 'visible' : 'invisible'}`}>(Rocket lost? <button onClick={handleReset}>Click here</button>)</p>
    </p>
  )
}

export default Rocket;
