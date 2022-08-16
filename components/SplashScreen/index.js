import { Animated, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useRef} from 'react'
import { COLORS } from '../../utils/Colors'
import { windowHeight } from '../../utils/Dimensions'

const SplashScreen = ({setLoading}) => {

    const startAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
    
        //Starting Animation after 500ms....
        setTimeout(() => {
            //sequence of animation....
            Animated.sequence([
                Animated.timing(startAnimation,{
                    toValue:-windowHeight+10,
                    useNativeDriver:true
                })

            ]).start()
        },500)
        setTimeout(()=>{
            setLoading(false)
        },800)
    }, [])
    
    return (
        <Animated.View style={{flex:1,backgroundColor:COLORS.grayLight,position:'absolute',top:0,right:0,left:0,bottom:0,transform:[{
            translateY:startAnimation
        }]}}>
            <Animated.View style={{flex:1,
                alignItems:'center',
                justifyContent:'center',
                
                
                }}>
                    <Image
                        source={require('../../assets/logo.png')}
                        resizeMode='cover'
                        style={{
                            width:200,
                            height:windowHeight*0.12,
                            marginBottom:windowHeight*0.02
                        }}

                    />
                    <Text style={{fontSize:16,fontWeight:'700'}}>GUINNESS GAMES😊</Text>
            </Animated.View>

            <View style={{position:'absolute',bottom:windowHeight*0.12,right:0,left:0,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:COLORS.primary}}>MoodAfrika</Text>
            </View>
        </Animated.View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})