import {  StyleSheet, Text, View,TouchableOpacity,Image,TextInput,ScrollView } from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../utils/Colors';


import SearchBar from '../components/SearchBar.js';
import { windowWidth } from '../utils/Dimensions';


const DashboardScreen = ({navigation}) => {
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] =useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [data, setData] = useState([]);
  const [suggestion, setSuggestion] = useState(true);
  const [dataSuggestion, SetDataSuggestion] = useState([]);
  const [userSuggestion, SetUserSuggestion] = useState([]);
  const [hashtagSuggestion, SetHashtagSuggestion] = useState([]);

  const Search = () => {
    if(searchPhrase.length > 2) {
    setIsLoading(true)
    setSuggestion(false)
    fetch(`https://moodafrika.bonaberifc.com/api_search?text=${searchPhrase}`,{ 
            credentials: "same-origin",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        },
        )
        .then((response) => response.json())
        .then((json) => {
            
            //setPostUserData([...postUserData,...json.posts]);
            //setUserProfile(json.user);
            setData(json)
            //console.log(json);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
      }
  }

  const deleteSuggestion = () =>{
    SetUserSuggestion([])
    SetHashtagSuggestion([])
    console.log("delete cache");
  }

  const getSuggestion = () => {
    if(searchPhrase.length > 2) {
        fetch(`https://moodafrika.bonaberifc.com/api_search_suggestion?text=${searchPhrase}`,{ 
          credentials: "same-origin",
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
      },
      )
      .then((response) => response.json())
      .then((json) => {
          
          //setPostUserData([...postUserData,...json.posts]);
          //setUserProfile(json.user);
          SetDataSuggestion(json)
          SetHashtagSuggestion(json.hashtags)
          SetUserSuggestion(json.users)
          console.log(json.users);
          //console.log(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setSuggestion(true));
    }
        

  }
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
                   
                    <SearchBar 
                        searchPhrase={searchPhrase}
                        setSearchPhrase={(text)=>{
                            deleteSuggestion()
                            setSearchPhrase(text)
                            getSuggestion()
                          }
                          
                        }
                        clicked={clicked}
                        setClicked={setClicked}
                        searchFunction={Search}
                        deleteSuggestion = {deleteSuggestion}
                    />
                    
                    
                    
        </View>
        <View>
              <Text style={styles.text}>LISTES DES JEUX & SERVICES </Text> 
        </View>
        <ScrollView>
            <View style={{margin:10,flexDirection:'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Play')}       
                    
                    style={[{width:(windowWidth*0.47)},{height:(windowWidth*0.48)},{paddingLeft:0},{borderColor:COLORS.primary,borderWidth:1} ]}>
                            <Image style={{flex:1, width:windowWidth/2.2, height:windowWidth/3,paddingBottom:5}} 
                                source={require('../assets/roue.jpeg')} 
                                resizeMode='cover' 
                            />
                            <Text style={styles.text}>La Roue du Bonheur</Text>
                </TouchableOpacity> 

                <TouchableOpacity onPress={() => navigation.navigate('CodeBar')}       
                    
                    style={[{width:(windowWidth*0.47)},{height:(windowWidth*0.48)},{paddingLeft:0},{borderColor:COLORS.primary,borderWidth:1,marginLeft:5} ]}>
                            <Image style={{flex:1, width:windowWidth/2.2, height:windowWidth/3,paddingBottom:5}} 
                                source={require('../assets/scan.jpg')} 
                                resizeMode='cover' 
                            />
                            <Text style={styles.text}>Vérifier un produit Guinness</Text>
                </TouchableOpacity> 
            </View>
            <View style={{marginHorizontal:5,flexDirection:'row'}}>
                {/*<TouchableOpacity onPress={() => navigation.navigate('AddCodeBar')}       
                        
                        style={[{width:(windowWidth*0.47)},{height:(windowWidth*0.48)},{paddingLeft:0},{borderColor:COLORS.primary,borderWidth:1,marginLeft:5} ]}>
                                <Image style={{flex:1, width:windowWidth/2.2, height:windowWidth/3,paddingBottom:5}} 
                                    source={require('../assets/scan.jpg')} 
                                    resizeMode='cover' 
                                />
                                <Text style={styles.text}>Ajouter un produit Guinness</Text>
                </TouchableOpacity> 
                      */}
                <TouchableOpacity onPress={() => navigation.navigate('Montee')}       
                    
                    style={[{width:(windowWidth*0.47)},{height:(windowWidth*0.48)},{paddingLeft:0},{borderColor:COLORS.primary,borderWidth:1,marginLeft:5} ]}>
                            <Image style={{flex:1, width:windowWidth/2.2, height:windowWidth/3,paddingBottom:5}} 
                                source={require('../assets/stairway.jpg')} 
                                resizeMode='cover' 
                            />
                            <Text style={styles.text}>La Montée du Succès</Text>
                </TouchableOpacity> 
            </View>

            
        </ScrollView>
        
        {
          clicked && !suggestion ? (<Text>test</Text>
              
              ):null
        }
        {
               (clicked && suggestion) ? null:null
        }
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        //alignItems:'center',
        backgroundColor:COLORS.black
   },
   header:{
        
      paddingLeft:15,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      borderBottomWidth:0.5,

  },
  formField: {
    width:'90%',
    borderWidth: 1,
    padding: 12,
    marginLeft:10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    borderColor: '#888888',
    fontSize: 14,
    height: 40,
    color:COLORS.gray
  },
  text:{
    width:'100%',
    fontSize: 18,
    fontWeight:'bold',
    marginBottom: 10,
    color: COLORS.grayLight,
    textAlign:'center'
},
});
