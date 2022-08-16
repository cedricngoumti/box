import React,{createContext,useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ConnexionUser } from '../utils/API';
//import { auth } from '../utils/Firebase';
//import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
//rimport * as Facebook from 'expo-facebook';
//import { ConnexionUser } from '../utils/API';







export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

   

    useEffect(() => {
      async function localStorageData(){
        const storagedUser = await AsyncStorage.getItem('@PointDeVente_Auth:user')
        //const storagedUser = null;

          if (storagedUser){
            
            const userDataLocal = JSON.parse(storagedUser)
              setUser(userDataLocal)
              
              
          }else{
            
          }
      }

      localStorageData()
      
    }, [])

    return (
            <AuthContext.Provider 
                value={{
                    user, 
                    setUser,
                    loading,
                    setLoading,
                    login: async(email,password) =>{
                      
                     // await signInWithEmailAndPassword(auth, email,password).then((userCredential) => {
                        // Signed in 
                       // console.log('userCredentials',userCredential.user);
                        //setUser(userCredential.user);
                        // ...
                      //})
                      //.catch((error) => {
                        //const errorCode = error.code;
                        //const errorMessage = error.message;

                        //console.log('userCredentials',error.code)
                        // ..
                      //});
                      
                      //auth
                      //.createUserWithEmailAndPassword(email,password).then(userCredentials =>{
                        //console.log(userCredentials)
                      //}).catch(err => console.log(err))
                        try{
                          const userData = {
                            userid:3,
                            userToken: 'gyugsu',
                            username:'cedric10',
                            userPhone:'655742128',
                            picture:'http://graph.facebook.com/5051748314868016/picture?type=square'
                          }
                          const userObject = JSON.stringify(userData)
                          AsyncStorage.setItem('@MoodAfrika_Auth:user', userObject)
                          setUser(userData)
                          await ConnexionUser(email,password).then((e)=>{
                            
                          }).catch(e => console.log(e));
                            
                            
                        } catch(e){
                            console.log(e)
                        }
                    },
                    
                      logout: async () => {
                        AsyncStorage.clear().then( () => {
                          try {
                            setUser(null) 
                          } catch (e) {
                            console.log(e);
                          }
                        })
                          
                        },
                      }}>
                {children}
            </AuthContext.Provider>
        )

}
