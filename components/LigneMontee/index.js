import { StyleSheet, Text, View,TouchableOpacity,Image, TouchableWithoutFeedback, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import ItemMontee from '../ItemMontee';
import { COLORS } from '../../utils/Colors';
import  AntDesign  from "react-native-vector-icons/AntDesign";

const LigneMontee = ({data,gain,active,play,winnerValue}) => {
  

  return (
      <View>
          {active ? (
              <View style={{flexDirection:'row',paddingVertical:'1%',borderColor:COLORS.primary,borderWidth:2,zIndex:3}}>
              {
                  gain ? (<TouchableWithoutFeedback onPress={()=>null}>    
                  <View
                      style={{
                      width: 50,
                      height: 50,
                      borderRadius: 8,
                      borderWidth: 2,
                      borderColor: "#fff",
                      overflow: "hidden",
                      margin:5,
                      marginRight:'8%',
                      alignContent:'center',
                      justifyContent:'center',
                      alignItems:'center'
                      }}
                  > 
                          <Image
                              source={gain}
                              style={{ width: 50, height: 50, resizeMode: "cover" }}
                          />
                  </View>
          
                                  
                                      
              </TouchableWithoutFeedback >):(<TouchableWithoutFeedback onPress={()=>null}>    
                          <View
                              style={{
                              width: 50,
                              height: 50,
                              borderRadius: 8,
                              borderWidth: 2,
                              borderColor: "#fff",
                              overflow: "hidden",
                              margin:5,
                              marginRight:'8%',
                              alignContent:'center',
                              justifyContent:'center',
                              alignItems:'center'
                              }}
                          > 
                                  <AntDesign name="arrowup" size={30} color={COLORS.white} />
                          </View>
                  
                                          
                                              
              </TouchableWithoutFeedback >)
              }
              
              <FlatList 
                  horizontal
                  data={data}
                  renderItem={(item,index) => <ItemMontee item={item.item} gain={gain} active={active} play={play} winnerValue={winnerValue}/>}
              />
              
              
          </View>
          ):(
            <View style={{flexDirection:'row',paddingVertical:'1%'}}>
                    {
                        gain ? (<TouchableWithoutFeedback onPress={()=>null}>    
                        <View
                            style={{
                            width: 40,
                            height: 40,
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: "#fff",
                            overflow: "hidden",
                            margin:5,
                            marginRight:'8%',
                            alignContent:'center',
                            justifyContent:'center',
                            alignItems:'center'
                            }}
                        > 
                                <Image
                                    source={gain}
                                    style={{ width: 30, height: 30, resizeMode: "cover" }}
                                />
                        </View>
                
                                        
                                            
                    </TouchableWithoutFeedback >):(<TouchableWithoutFeedback onPress={()=>null}>    
                                <View
                                    style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    borderWidth: 2,
                                    borderColor: "#fff",
                                    overflow: "hidden",
                                    margin:5,
                                    marginRight:'8%',
                                    alignContent:'center',
                                    justifyContent:'center',
                                    alignItems:'center'
                                    }}
                                > 
                                        <AntDesign name="arrowup" size={30} color={COLORS.white} />
                                </View>
                        
                                                
                                                    
                    </TouchableWithoutFeedback >)
                    }
                    
                    <FlatList 
                        horizontal
                        data={data}
                        renderItem={(item,index) => <ItemMontee item={item.item} gain={gain} active={active}/>}
                    />
                    
                    
                </View>
          )}

      
                
     </View>
  )
}

export default LigneMontee

const styles = StyleSheet.create({})