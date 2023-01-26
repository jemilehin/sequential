import api from './base_url'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

let token


const ApiRequestInstance = (type,data,callback,errcallback,path,formdata,auth) => {
  const contentType = formdata === 'formdata' ? 'multipart/form-data' : null;
  let config = {
    // method: 'PUT',
    // body: data,
    headers: {
        "Accept": 'application/json',
        "Content-type" : contentType,
    },
    timeout: 3000
  }
  const pathString = path.split('/').find(x => x === 'login')
  switch (type) {
    case 'post':
        if(auth){
            api.post(path,data)
            .then(response => response.data)
            .then(async (response) => {
                if(pathString === 'login'){
                    token = response.data.tokens.access;
                    let decodedToken = jwt_decode(token);
                    const jsonValue = JSON.stringify(response.data.tokens)
                    await AsyncStorage.multiSet([['tokens', jsonValue],['userInfo', JSON.stringify(decodedToken)]])
                }
                callback(response)
            })
            .catch(err => {
                errcallback(err.response.data)
            })
        }else{
            if(formdata === 'formdata'){
                console.log('formdata')
                // let baseUrl = api.getUri()
                api.put(path,data,config)
                .then(response => response.data)
                .then(result => callback(result))
                .catch(err => errcallback(err))
            }else{
                api.post(path,data)
                .then(response => response.data)
                .then(data => callback(data.data))
                .catch(err => errcallback(err.response))
            }
        }
        break;
    case 'get':
        api.get(path)
        .then(response => response.data)
        .then(response => callback(response))
        .catch(err => errcallback(err.response))
        break;
    default:
        break;
  }
}

export default ApiRequestInstance