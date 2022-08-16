


export const ConnexionUser = async (username, password) =>{
  /*const API_KEY = "563492ad6f91700001000001ba23a3d005f6448b86f12731d9c6ddfe";
  const API_URL = `http://guinness.bonaberifc.com/public/user/connexion`;
  console.log(username,password)
  const data = await fetch(API_URL, {
     method:'POST',
     headers: {
       Authorization: API_KEY,
       Accept: 'application/json',
        'Content-Type': 'application/json'
     },
     body: JSON.stringify({
      username: username,
      password: password,
    })
   }); 
  */
   
   return await data.json();
}


export const AddProduitGuinness = async (data, target,type,category) =>{
  const API_KEY = "563492ad6f91700001000001ba23a3d005f6448b86f12731d9c6ddfe";
  const API_URL = `http://guinness.bonaberifc.com/public/produit/create`;
  
  const dataRequest = await fetch(API_URL, {
     method:'POST',
     headers: {
       Authorization: API_KEY,
       Accept: 'application/json',
        'Content-Type': 'application/json'
     },
     body: JSON.stringify({
      data: data,
      target: target,
      type: type,
      category: category,
    })
   }); 
 
   
   return await dataRequest.json();
}


export const CheckProduct = async (data, target,type,category) =>{
  const API_KEY = "563492ad6f91700001000001ba23a3d005f6448b86f12731d9c6ddfe";
  const API_URL = `http://guinness.bonaberifc.com/public/produit/check`;
  
  const dataRequest = await fetch(API_URL, {
     method:'POST',
     headers: {
       Authorization: API_KEY,
       Accept: 'application/json',
        'Content-Type': 'application/json'
     },
     body: JSON.stringify({
      data: data,
      target: target,
      type: type,
      category: category,
    })
   }); 
 
   
   return await dataRequest.json();
}

export const SendResultToServer = async (username, phone,jeu,result) =>{
  const API_KEY = "563492ad6f91700001000001ba23a3d005f6448b86f12731d9c6ddfe";
  const API_URL = `http://guinness.bonaberifc.com/public/client/create`;
  
  const dataRequest = await fetch(API_URL, {
     method:'POST',
     headers: {
       Authorization: API_KEY,
       Accept: 'application/json',
        'Content-Type': 'application/json'
     },
     body: JSON.stringify({
      username: username,
      phone: phone,
      jeu: jeu,
      result: result,
    })
   }); 
 
   
   return await dataRequest.json();
}
