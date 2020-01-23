import React from 'react'
import { Spring, animated, interpolate } from 'react-spring/renderprops'
import Title from './title'

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
const styles = {
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        willChange: 'background',
    },
    shape: { width: 750, height: 750, willChange: 'transform' },
}

interface ComponentState {
    toggle: boolean,
}

export default class MorePage extends React.Component<null, ComponentState> {
    state = { toggle: true }
    toggle = () => this.setState(state => ({ toggle: !state.toggle }))
    componentDidMount() {
        //setInterval(() => this.forceUpdate(), 1000)
    }
    render() {
        const toggle = this.state.toggle
        return (
            <div className="more-section">
                <Spring
                    native
                    from={{ fill: 'black' }}
                    to={{
                        fill: toggle ? '#486A47' : '#24562B',
                        rotate: toggle ? '0deg' : '180deg',
                        scale: toggle ? 0.3 : 0.7,
                        shape: toggle ? TRIANGLE : RECTANGLE,
                    }}
                    // toggle={this.toggle}
                    onRest={() => console.log('done')}>
                    {({ fill, rotate, scale, shape }: { fill: any, scale: any, shape: any, rotate: number | string }) => (
                        <animated.div style={{ ...styles.container }}>
                            <div className="flex justify-center items-center cursor-pointer" onClick={this.toggle}>
                                <animated.svg
                                    style={{
                                        ...styles.shape,
                                        fill,
                                        transform: interpolate(
                                            [rotate, scale],
                                            (r: any, s: any) => `rotate3d(0,1,0,${r}) scale(${s})`
                                        ),
                                    }}
                                    version="1.1"
                                    viewBox="0 0 400 400">
                                    <g
                                        fillRule="evenodd">
                                        <animated.path id="path-1" d={shape} />
                                    </g>
                                </animated.svg>
                                <div className="absolute">
                                    {!toggle && <Title />}
                                </div>
                            </div>
                        </animated.div>
                    )}
                </Spring>
            </div>
        )
    }
}