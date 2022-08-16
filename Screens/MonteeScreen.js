import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image, FlatList, Dimensions } from 'react-native'
import React, { useState,useEffect } from 'react'
import LigneMontee from '../components/LigneMontee'
import Modal from "react-native-modal";
import FormInput from '../components/Form/FormInput'
import FormButton from '../components/Form/FormButton'
import { COLORS } from '../utils/Colors'
import { windowWidth } from '../utils/Dimensions';
import { useNavigation } from '@react-navigation/native';
import { SendResultToServer } from '../utils/API';

const MonteeScreen = () => {
    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
        
    }
    const navigation = useNavigation()
    const [username, setUsername] = useState();
    const [userphone, setUserphone] = useState();
    const [active, setActive] = useState(6);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [winnerIndex, setWinnerIndex] = useState(-1);
    const [winnerValue, setWinnerValue] = useState(null);
    const [client, setClient]=useState(null)
    const data7=shuffle([{result:0,show:0},{result:1,show:0},{result:1,show:0},{result:1,show:0}])
    const data6=shuffle([{result:1,show:0},{result:1,show:0},{result:1,show:0},{result:0,show:0}])
    const data5=shuffle([{result:1,show:0},{result:1,show:0},{result:1,show:0},{result:1,show:0}])
    const data4=shuffle([{result:1,show:0},{result:1,show:0},{result:1,show:0},{result:1,show:0}])
    const data3=shuffle([{result:1,show:0},{result:1,show:0},{result:1,show:0},{result:1,show:0}])
    const data2=shuffle([{result:1,show:0},{result:1,show:0},{result:1,show:0},{result:1,show:0}])
    const data1=shuffle([{result:1,show:0},{result:1,show:0},{result:1,show:0},{result:1,show:0}])

    const [alldata , setAlldata] = useState([])

    useEffect(() => {
        
        setAlldata([item7,item6,item5,item4,item3,item2,item1])
    }, [])
    
    const item7={
        data:data7,
        gain:require('../assets/pack4.jpg'),
        nameGain:'Pack 4 RED LABEL'
    }
    const item6={
        data:data6,
        gain:require('../assets/balileysRed.png'),
        nameGain:'RED LABEL et BAILEYS'
    }
    const item5={
        data:data5,
        gain:require('../assets/redlabel.png'),
        nameGain:'1 RED LABEL',
    }
    const item4={
        data:data4,
        gain:require('../assets/guinness.png'),
        nameGain:'Petite Bouteille Guinness'
    }
    const item3={
        data:data3,
        gain:require('../assets/casquette.jpg'),
        nameGain:'Casquette Guinness'
    }
    const item2={
        data:data2,
        gain:null,
        nameGain:null
    }
    const item1={
        data:data1,
        gain:null,
        nameGain:null
    }

    const login = ( ) => {
        if(username && userphone){
           setClient ({
             username : username,
             userphone: userphone,
             usergame: "Montee du succès",

           })
        }
    }


    useEffect(() => {
        if(active==-1){
            setIsModalVisible(true)
        }
        console.log('result', active)
    }, [active])
    
    const getGift = (value) =>{
       
            setIsModalVisible(true)
            setWinnerValue('GAGNER')
            setWinnerIndex(value)
            setActive(null)
        

        
    }
    

    const play = (value) =>{
        
        if(value){
            setActive(active-1)
        }else{
            setIsModalVisible(true)
            setWinnerValue('PERDU')
            setActive(null)
        }
  
    }

    const handleModal = () => {
        setIsModalVisible(false)
        //setWinnerValue(null)
        
        
      };
  return (
    <View style={{flex:1}}>
        <ImageBackground source={require('../assets/back.png')} resizeMode={'cover'} blurRadius={20} style={{flex:1, width:'100%',height:'100%'}}>
            <View style={styles.container}>
                
                <View style={{justifyContent:'center',alignItems:'center',marginTop:'2%',alignSelf:'center'}}>
                    <Text style={styles.title}>LA MONTEE DU Succès</Text>
                    <Text style={styles.description}>Bienvenue {username},</Text>
                    <Text style={styles.description}>prédisez où se trouve le produit GUINNESS et tentez de gagner de nombreux lots</Text>
                </View>
                <View style={{height:'80%'}}>
                    <FlatList 
                        data={alldata}
                        //inverted={true}
                        renderItem={({item,index})=>
                            <LigneMontee 
                                key={index} 
                                data={item.data} 
                                gain={item.gain}  
                                active={index==active} 
                                play={play} 
                                winnerValue={winnerValue}
                            />
                        }
                    />
                    {
                        (active < 4 && winnerValue == null && active != winnerIndex) && (<View style={{flex:1,alignItems:'center'}}>
                        <TouchableOpacity activeOpacity={90} style={{
                                backgroundColor:'#ffd843',
                                paddingHorizontal:10,
                                borderRadius:10,
                                alignItems:'center',
                                justifyContent:'center',
                                width:300,
                                height:Dimensions.get('window').height*0.07
                        }} onPress={()=>getGift(active+1)}>
                            <Text style={{color:'#000',fontWeight:'700'}}>Recuperer ce lot</Text>
                            
                        </TouchableOpacity>
                    </View>)
                    }
                   
                </View>
                
            </View>

        </ImageBackground>
        <Modal isVisible={isModalVisible}>
            {(winnerValue=='PERDU') && (
                  <View style={styles.modalContainerTry}>
                    <View style={{alignItems:'center', justifyContent:'center'}} >
                      <Text style={{fontSize:18, fontWeight:'600',color:'#000'}} >
                        Vous avez PERDU
                      </Text>
                      <Image 
                          source={require('../assets/lost.png')}
                          style={{ width: 120, height:120
                          }}
                          resizeMode={'cover'}
                      /> 
                      <Text style={styles.descriptionResult}>Appuyez sur "Ok, j'ai compris" et  Faites tourner la roue  pour tentez  à nouveau de gagner de nombreux lots</Text>
                    </View>
                    <TouchableOpacity activeOpacity={90} style={{
                            backgroundColor:'#ffd843',
                            padding:10,
                            borderRadius:50,
                            alignItems:'center',
                            justifyContent:'center',
                            width:300
                     }} onPress={() => {
                          try {
                              SendResultToServer(username,userphone,"Montée du succès","PERDU")
                          } catch (error) {
                            
                          } 
                          handleModal()
                       }}>
                        <Text style={{color:'#000',fontWeight:'700'}}>Ok, j'ai compris</Text>
                        
                    </TouchableOpacity>
                </View>
                )}

                {(winnerIndex==active) && (
                  <View style={styles.modalContainer}>
                  <View style={{alignItems:'center', justifyContent:'center'}} >
                    <Text style={{fontSize:18, fontWeight:'600',color:'#000'}} >
                    Félicitation {username}, 
                    </Text>
                    <Text style={{fontSize:18, fontWeight:'600',color:'#000'}} >
                    vous avez gagné un lot
                    </Text>
                    <Image 
                        source={item7.gain}
                        style={{ width: 200, height:200
                        }}
                        resizeMode={'cover'}
                    /> 
                    <Text style={styles.descriptionResult}>Un message contenant votre lot vous sera transmis sur votre numero whatzapp.</Text>
                    <Text style={styles.descriptionResult}> Appuyez sur "Ok, j'ai compris" et  Faites tourner la roue  pour tentez  à nouveau de gagner de nombreux lots</Text>
                  </View>
                  <TouchableOpacity activeOpacity={90} style={{
                          backgroundColor:'#ffd843',
                          padding:10,
                          borderRadius:50,
                          alignItems:'center',
                          justifyContent:'center',
                          width:300
                   }} onPress={()=>{
                            try {
                                SendResultToServer(username,userphone,"Montée du succès","GAGNE "+item7.nameGain)
                            } catch (error) {
                              
                            } 
                            handleModal()}}>
                      <Text style={{color:'#000',fontWeight:'700'}}>Ok, j'ai compris</Text>
                      
                  </TouchableOpacity>
              </View>
                )}
                {(winnerValue=="GAGNER" && winnerIndex!=null  && winnerIndex !=active) && (
                  <View style={styles.modalContainer}>
                  <View style={{alignItems:'center', justifyContent:'center'}} >
                  <Text style={{fontSize:18, fontWeight:'600',color:'#000'}} >
                    Félicitation {username}, 
                    </Text>
                    <Text style={{fontSize:18, fontWeight:'600',color:'#000'}} >
                    vous avez gagné un lot
                    </Text>
                    <Image 
                        source={alldata[winnerIndex].gain}
                        style={{ width: 200, height:200
                        }}
                        resizeMode={'cover'}
                    /> 
                    <Text style={styles.descriptionResult}>Un message contenant votre lot vous sera transmis sur votre numero whatzapp.</Text>
                    <Text style={styles.descriptionResult}> Appuyez sur "Ok, j'ai compris" et  Faites tourner la roue  pour tentez  à nouveau de gagner de nombreux lots</Text>
                  </View>
                  <TouchableOpacity activeOpacity={90} style={{
                          backgroundColor:'#ffd843',
                          padding:10,
                          borderRadius:50,
                          alignItems:'center',
                          justifyContent:'center',
                          width:300
                   }} onPress={()=>
                        {
                            try {
                                SendResultToServer(username,userphone,"Montée du succès","GAGNE "+alldata[winnerIndex].nameGain)
                            } catch (error) {
                              
                            } 
                            handleModal()
                        }
                   }>
                      <Text style={{color:'#000',fontWeight:'700'}}>Ok, j'ai compris</Text>
                      
                  </TouchableOpacity>
              </View>
                )}

        </Modal>
        <Modal isVisible={!client}>
              <View style={styles.modalContainerTry}>
                        <View style={{alignItems:'center', justifyContent:'center'}} >
                          <Text style={{fontSize:18, fontWeight:'600',color:'#000'}} >
                            Inscription
                          </Text>


                          <Text style={styles.descriptionResult}>prédisez où se trouve le produit GUINNESS et tentez de gagner de nombreux lots</Text>
                         
                        </View>
                        <View style={{width:windowWidth*0.8}}>
                            <FormInput 
                                placeholderText={"Nom"}
                                iconType={'user'}
                                labelValue={username}
                                onChangeText={setUsername} 
                            />
                            <FormInput 
                                placeholderText={"telephone"}
                                iconType={'phone'}
                                labelValue={userphone}
                                onChangeText={setUserphone} 
                                type={'number'}
                                keyboardType="number-pad"
                                secureTextEntry
                            />

                            <FormButton
                                buttonTitle="Connectez-vous"
                                
                                color={COLORS.primary}
                                backgroundColor="#f5e7ea"
                                onPress={() => login()}
                            />
                            
                            

                            
                        </View>
                        <TouchableOpacity activeOpacity={90} style={{
                                backgroundColor:'#ffd843',
                                padding:10,
                                borderRadius:50,
                                alignItems:'center',
                                justifyContent:'center',
                                width:300
                        }} onPress={()=>navigation.goBack()}>
                            <Text style={{color:'#000',fontWeight:'700'}}>Quittez le jeu</Text>
                            
                        </TouchableOpacity>
              </View>
        </Modal>
    </View>
  )
}

export default MonteeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'column', 
        paddingTop:'2%',
        paddingBottom:'15%',
        
        //backgroundColor:'#000'
        
    },
    title:{
          color:'#ffd843',
          fontSize:30,
          fontWeight:'700',
          textTransform:'uppercase'
        
    },
    description:{
        color:'#fff',
        fontSize:12,
        letterSpacing:2,
        textAlign:'center'
    },
    secondDescription:{
      color:'#fff',
      fontSize:18,
      marginTop:10
    },
    modalContainer:{
        height:Dimensions.get('window').height*0.6, 
        backgroundColor:'#ff0',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
         
      },
      modalContainerTry:{
        height:Dimensions.get('window').height*0.4, 
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
         
      },
      btnOk:{
        width:Dimensions.get('window').width*0.8,
        backgroundColor:'#ff0'
      },
      startButtonView: {
        position: 'absolute',
      },
      startButton: {
        backgroundColor: 'rgba(0,0,0,.5)',
        marginTop: 50,
        padding: 5,
      },
      startButtonText: {
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold',
      },
      winnerView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tryAgainButton: {
        padding: 10,
      },
      winnerText: {
        fontSize: 30,
      },
      tryAgainButton: {
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      tryAgainText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
      descriptionResult:{
        color:'#000',
        fontSize:14,
        letterSpacing:2,
        textAlign:'center',
        padding:5,
        paddingBottom:20
      },

})