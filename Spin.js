import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import Modal from "react-native-modal";
import ModalResult from './components/ModalResult';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import FormInput from './components/Form/FormInput'
import FormButton from './components/Form/FormButton'
import { windowHeight, windowWidth } from './utils/Dimensions';
import { COLORS } from './utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { SendResultToServer } from './utils/API';


const participants = [
  'MALTA',
  'PERDU',
  'GUINNESS',
  'PERDU',
  'SMOOTH',
  'PERDU',
  'ORIJIN',
  'PERDU',
];

export const  logoParticipants= [
  require('./assets/malta.png'),
  require('./assets/lost.png'),
  require('./assets/guinness.png'),
  require('./assets/lost.png'),
  require('./assets/smooth.png'),
  require('./assets/lost.png'),
  require('./assets/orijin.png'),
  require('./assets/lost.png'),
];


class Spin extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
      isModalVisible:false,
      client:null,
      username:null,
      userphone:null
    };
    this.child = null;
  }

login = ( ) => {
    if(this.state.username && this.state.userphone){
      this.setState({
        client: {
            username : this.state.username,
            userphone: this.state.userphone,
            usergame: "La Roue du Bonheur",
        }
      });
       
    }
}
  
  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._tryAgain()
  };
  handleModal = () => {
    this.setState({
      isModalVisible: false,
      winnerValue: null,
      winnerIndex: null,
      started: false,
    });
  };
  render() {
    const wheelOptions = {
      rewards: participants,
      knobSize: 20,
      borderWidth: 5,
      borderColor: '#ffd843',
      innerRadius: 30,
      duration: 10000,
      backgroundColor: '#ffd843',
      textAngle: 'horizontal',
      knobSource: require('./assets/knob.png'),
      onRef: ref => (this.child = ref),
    };
    return (
      <View style={styles.container}>
            <View  >
               
                {!this.state.started ? (<View style={{flexDirection:'row'}}>
                    
                    <View style={{alignItems:'center',justifyContent:'center', flex:1,marginTop:10}}>
                   
                        <Text style={{color:'#fff',fontSize:10,margin:10,alignSelf:'center'}}>
                        Votre chance augmente à chaque tour !
                        </Text>
                    
                        <TouchableOpacity style={{
                                backgroundColor:'#ffd843',
                                padding:10,
                                borderRadius:50,
                                alignItems:'center',
                                justifyContent:'center',
                                width:200
                         }} onPress={() => this.buttonPress()}>
                            <Text style={{color:'#000',fontWeight:'700'}}>TOURNEZ POUR GAGNEZ</Text>
                            
                        </TouchableOpacity>
                        
                    </View>
                    
                </View>
                ):(<View style={{flexDirection:'row'}}>
                    
                <View style={{alignItems:'center',justifyContent:'center', flex:1,marginTop:10}}>
               
                    <Text style={{color:'#fff',fontSize:10,margin:10,alignSelf:'center'}}>
                    Votre chance augmente à chaque tour !
                    </Text>
                
                    <TouchableOpacity activeOpacity={90} style={{
                            backgroundColor:'#ffd843',
                            padding:10,
                            borderRadius:50,
                            alignItems:'center',
                            justifyContent:'center',
                            width:200
                     }} onPress={() => null}>
                        <Text style={{color:'#000',fontWeight:'700'}}>EN COURS...</Text>
                        
                    </TouchableOpacity>
                    
                </View>
                
            </View>)}
                
                <View style={{justifyContent:'center',alignItems:'center' ,width:Dimensions.get('window').width,paddingHorizontal:10}}>
                   <Image source={require('./assets/pub.jpg')} style={{width:Dimensions.get('window').width,height:170}} resizeMode={'contain'}/>
                </View>
            </View>
            <View>
                <WheelOfFortune
                options={wheelOptions}
                getWinner={(value, index) => {
                    this.setState({winnerValue: value, winnerIndex: index,isModalVisible:true});
                }}
                />
            </View>
        
        {/*{!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => this.buttonPress()}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>Spin to win!</Text>
            </TouchableOpacity>
          </View>
        )}*/}
        
            <Modal isVisible={this.state.isModalVisible}>
              
                
                  
                  
                  {(this.state.winnerIndex != null && participants[this.state.winnerIndex]=='PERDU') && (
                  <View style={styles.modalContainerTry}>
                    <View style={{alignItems:'center', justifyContent:'center'}} >
                      <Text style={{fontSize:18, fontWeight:'600',color:'#000'}} >
                        Vous avez {participants[this.state.winnerIndex]}
                      </Text>
                      <Image 
                          source={logoParticipants[this.state.winnerIndex]}
                          style={{ width: 120, height:120
                          }}
                          resizeMode={'cover'}
                      /> 
                      <Text style={styles.description}>Appuyez sur "Ok, j'ai compris" et  Faites tourner la roue  pour tentez  à nouveau de gagner de nombreux lots</Text>
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
                            
                            SendResultToServer(this.state.username,this.state.userphone,this.state.client.usergame,"PERDU")
                        } catch (error) {
                      
                        } 
                        this.handleModal()
                       }}>
                        <Text style={{color:'#000',fontWeight:'700'}}>Ok, j'ai compris</Text>
                        
                    </TouchableOpacity>
                </View>
                )}


                {(this.state.winnerIndex != null && participants[this.state.winnerIndex] != 'PERDU') && (
                  <View style={styles.modalContainer}>
                  <View style={{alignItems:'center', justifyContent:'center'}} >
                    <Text style={{fontSize:18, fontWeight:'600',color:'#000'}} >
                      Vous avez gagné une {participants[this.state.winnerIndex]}
                    </Text>
                    <Image 
                        source={logoParticipants[this.state.winnerIndex]}
                        style={{ width: 200, height:200
                        }}
                        resizeMode={'cover'}
                    /> 
                    <Text style={styles.description}>Un message contenant votre lot vous sera transmis sur votre numero whatzapp.</Text>
                    <Text style={styles.description}> Appuyez sur "Ok, j'ai compris" et  Faites tourner la roue  pour tentez  à nouveau de gagner de nombreux lots</Text>
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
                         
                         SendResultToServer(this.state.username,this.state.userphone,this.state.client.usergame,"GAGNER "+ participants[this.state.winnerIndex])
                     } catch (error) {
                   
                     } 
                     this.handleModal()
                    }}>
                      <Text style={{color:'#000',fontWeight:'700'}}>Ok, j'ai compris</Text>
                      
                  </TouchableOpacity>
              </View>
                )}
                
                
            </Modal>
            <Modal isVisible={!this.state.client}>
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
                                labelValue={this.state.username}
                                onChangeText={(text)=>this.setState({
                                  username:text})} 
                            />
                            <FormInput 
                                placeholderText={"telephone"}
                                iconType={'phone'}
                                labelValue={this.state.userphone}
                                onChangeText={(text)=>this.setState({
                                  userphone:text})} 
                                type={'number'}
                                keyboardType="number-pad"
                                secureTextEntry
                            />

                            <FormButton
                                buttonTitle="Connectez-vous"
                                
                                color={COLORS.primary}
                                backgroundColor="#f5e7ea"
                                onPress={() => this.login()}
                            />
                            
                            

                            
                        </View>
                        <TouchableOpacity activeOpacity={90} style={{
                                backgroundColor:'#ffd843',
                                padding:10,
                                borderRadius:50,
                                alignItems:'center',
                                justifyContent:'center',
                                width:300
                        }} onPress={()=>this.props.navigation.goBack()}>
                            <Text style={{color:'#000',fontWeight:'700'}}>Quittez le jeu</Text>
                            
                        </TouchableOpacity>
              </View>
          </Modal>
      </View>
    );
  }
}
export default Spin;

const styles = StyleSheet.create({
  container: {
      flex:1,
    flexDirection:'column-reverse',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    //backgroundColor: '#ffd843'
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
  description:{
    color:'#000',
    fontSize:14,
    letterSpacing:2,
    textAlign:'center',
    padding:5,
    paddingBottom:20
  },
  descriptionResult:{
    color:'#000',
    fontSize:14,
    letterSpacing:2,
    textAlign:'center',
    padding:5,
    paddingBottom:20
  },
});