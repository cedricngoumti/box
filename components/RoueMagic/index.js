import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import * as d3Shape from 'd3-shape';


import Svg, {G, Text, TSpan, Path, Pattern} from 'react-native-svg';
const numberOfSegments = 10;
const wheelSize =  Dimensions.get('window').width * 0.9
const {width} = Dimensions.get('window')
const makeWheel = () => {
    const data = Array.from({length: numberOfSegments}).fill(1);
    const arcs = d3Shape.pie()(data);
    

    return arcs.map((arc, index) =>{
        const instance = d3Shape
            .arc()
            .padAngle(0.1)
            .outerRadius(Dimensions.get('window').width/2)
            .innerRadius(20);


        return {
            path: instance(arc),
            //color:colors
            value: Math.round(Math.random() * 10 + 1) * 200,
            centroid: instance.centroid(arc)
        }    
    })
}



const RoueMagic = () => {

    
    const _renderSVG = () => {
        return <View>
            <Svg
                width={wheelSize}
                height={wheelSize}
                viewBox={` 0 0 ${width}  ${width}`}
            >
                <G>
                {
                    _makeWheel.map((arc, i )=>{
                        return <G>
                            <Path d={arc.path} fill={'#fff'} />
                        </G>
                    })


                }
                </G>
            </Svg>
        </View>
    } 


   const  _makeWheel = makeWheel();
  return (
    <View>
            {_renderSVG()}
    </View>
  )
}

export default RoueMagic

const styles = StyleSheet.create({})