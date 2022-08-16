import { StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback } from 'react-native'
import React, { useState,useEffect } from 'react'
import { COLORS } from '../../utils/Colors'
import  AntDesign  from "react-native-vector-icons/AntDesign";


const ItemMontee = ({item,gain,active,play,winnerValue}) => {

    const [display , setDisplay] = useState(false)
    const [touch , setTouch] = useState(false)
    
    
    
   
    
  return (
    <>
        {
            active ? (
            <>
                {
                    display ? (
                      <TouchableWithoutFeedback onPress={()=>null}>
                               
                      <View
                          style={{
                          width: 50,
                          height: 50,
                          borderRadius: 14,
                          
                          overflow: "hidden",
                          margin:5,
                          alignContent:'center',
                          justifyContent:'center',
                          alignItems:'center',
                          borderWidth: 2,
                          borderColor: '#fff',
                          
                          overflow: "hidden",
                                     
                                      
                          }}
                      >
                          {
                              item.result? (<View>
                                  {gain ?(
                                      <Image
                                      source={gain}
                                      style={{ width: 50, height: 50, resizeMode: "cover" }}
                                  />
                                  ):(<AntDesign name="arrowup" size={30} color={COLORS.white} />)}
                              </View>
                              ):(<Image
                                  source={require('../../assets/lost.png')}
                                  style={{ width: 50, height: 50, resizeMode: "cover" }}
                              />)
                          }
                          
                      </View>
          
                                  
                                      
                   </TouchableWithoutFeedback>
                    ):(
                      <TouchableOpacity onPress={()=>{
                          setDisplay(true)
                          setTouch(true)
                          play(item.result)
                          }}>
                                       
                      <View
                          style={{
                          width: 50,
                          height: 50,
                          borderRadius: 14,
                          
                          overflow: "hidden",
                          margin:5,
                          alignContent:'center',
                          justifyContent:'center',
                          alignItems:'center'
                          }}
                      >
                          
                          <Image
                              source={{
                                  uri: "https://esquilo.io/png/thumb/HGEKbw0tT9WWzSY-Question-Mark-PNG-Transparent-HD-Photo.png"
                              }}
                              style={{ width: 50, height: 50, resizeMode: "cover" }}
                          />
                      </View>
          
                                  
                                      
                   </TouchableOpacity>
                    )
                }
            </>):(
            <>
            {
                display ? (
                    <TouchableWithoutFeedback onPress={()=>null}>
                         {touch ? (
                             <View
                             style={{
                             width: 40,
                             height: 40,
                             borderRadius: 14,
                             
                             overflow: "hidden",
                             margin:5,
                             alignContent:'center',
                             justifyContent:'center',
                             alignItems:'center',
                             borderWidth: 2,
                             borderColor: COLORS.primary,
                             
                             overflow: "hidden",
                                     
                                         
                             }}
                         >
                         {
                                 item.result? 
                                 (
                                 <View>
                                     {gain ?(
                                         <Image
                                             source={gain}
                                             style={{ width: 40, height: 40, resizeMode: "cover" }}
                                         />
                                     ):(<AntDesign name="arrowup" size={30} color={COLORS.white} />)}
                                 </View>
                                 ):(
                                 <Image
                                 source={require('../../assets/lost.png')}
                                 style={{ width: 40, height: 40, resizeMode: "cover" }}
                                 />)
                             }
                         
                         </View>    
                         ):(
                            <View
                            style={{
                            width: 40,
                            height: 40,
                            borderRadius: 14,
                            
                            overflow: "hidden",
                            margin:5,
                            alignContent:'center',
                            justifyContent:'center',
                            alignItems:'center',
                            borderWidth: 2,
                            borderColor: "#fff",
                            
                            overflow: "hidden",
                                    
                                        
                            }}
                        >
                        {
                                item.result? 
                                (
                                <View>
                                    {gain ?(
                                        <Image
                                            source={gain}
                                            style={{ width: 40, height: 40, resizeMode: "cover" }}
                                        />
                                    ):(<AntDesign name="arrowup" size={30} color={COLORS.white} />)}
                                </View>
                                ):(
                                <Image
                                source={require('../../assets/lost.png')}
                                style={{ width: 40, height: 40, resizeMode: "cover" }}
                                />)
                            }
                        
                        </View>    
                         )}    
                           
                    </TouchableWithoutFeedback>
                    ):(
                    <TouchableWithoutFeedback onPress={()=>null}>
                                            
                            <View
                                style={{
                                width: 40,
                                height: 40,
                                borderRadius: 14,
                                
                                overflow: "hidden",
                                margin:5,
                                alignContent:'center',
                                justifyContent:'center',
                                alignItems:'center'
                                }}
                            >
                                
                                <Image
                                    source={{
                                        uri: "https://esquilo.io/png/thumb/HGEKbw0tT9WWzSY-Question-Mark-PNG-Transparent-HD-Photo.png"
                                    }}
                                    style={{ width: 40, height: 40, resizeMode: "cover" }}
                                />
                            </View>

                                        
                                            
                        </TouchableWithoutFeedback>
                    )
            }
      </>)}
        
    </>
  )
}

export default ItemMontee

const styles = StyleSheet.create({})