import React,{useState,useContext} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView, Platform, StatusBar} from 'react-native'
import FormInput from '../components/Form/FormInput'
import FormButton from '../components/Form/FormButton'

import { COLORS } from '../utils/Colors'
import { windowHeight, windowWidth } from '../utils/Dimensions';
import  AntDesign  from "react-native-vector-icons/AntDesign";

import logo  from '../assets/logo.png'
import SocialButton from '../components/Form/SocialButton';

import { AuthContext } from '../navigation/AuthProvider'


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login } = useContext(AuthContext);
    const signIn = () => {
        console.log(email, password);
        login('Grandoos', 'dim1992')
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View >
                    <TouchableOpacity
                        onPress={() => {
                           null
                        }}
                        style={{padding:18}}
                    >
                        
                    </TouchableOpacity>
                    
                    
                    
                </View>
            <View style={styles.main}>
                <View style={{width:'100%', alignContent:'center', alignItems:'center',paddingBottom:windowHeight*0.03}}>
                    <Image
                    source={require('../assets/logo.png')}
                    resizeMode='cover'
                    style={{
                        width:200,
                        height:windowHeight*0.12
                    }}
                    
                />

                </View>
            <Text style={styles.text}>Bienvenue sur Cleanik AUTO😊, </Text> 
            
            <Text style={styles.slogan}>Connectez le point de vente et permettez a vos clients de jouer differents jeux et d'obtenir nos nombreux lots!</Text>
             
            
            <View >
                <FormInput 
                    placeholderText={"username"}
                    iconType={'home'}
                    labelValue={email}
                    onChangeText={setEmail}
                    
                />
                <FormInput 
                    placeholderText={"code secret"}
                    iconType={'lock'}
                />

                <FormButton
                    buttonTitle="Connectez-vous"
                    
                    color={COLORS.primary}
                    backgroundColor="#f5e7ea"
                    onPress={() => login()}
                />
                
                

                
            </View>
            <Text style={styles.notice}>En continuant, vous reconnaissez avoir lu notre politique de confidentialité sur l'utilisation de vos données 
                    et accepté nos conditions d'utilisation </Text>

            
                </View>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

        justifyContent: 'center',
        //alignItems: 'center',
        //padding: 5,
        //paddingTop: 5,
        
    },
    main:{
        padding:20,
        paddingTop:2
    },
    header:{
        
        flexDirection:'row',
        width:'100%',
        alignItems:'flex-start'
    
    },
    text:{
        width:'100%',
        fontSize: 18,
        fontWeight:'bold',
        marginBottom: 10,
        color: COLORS.primary,
        textAlign:'left'
    },
    slogan:{
        width:'100%',
        fontSize:16,
        marginTop:20,
        marginBottom: 20,
        textAlign:'center',
    },
    logo:{
        height: 100,
        width: 100,
        resizeMode: 'cover',
        alignSelf:'center'
    },
    navButton: {
        marginTop: 15,
      },
    forgotButton: {
        marginVertical: 35,
        textAlign:'center',
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.primary,
       
      },
      notice:{
        width:'100%',
        fontSize:13,
        color:COLORS.gray,
        marginTop:20,
        textAlign:'center',
    },
})
