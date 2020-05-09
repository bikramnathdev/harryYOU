import axios from 'axios';

class apis {
    getHogwartHouse = async () =>{
        let res = await axios.get('https://www.potterapi.com/v1/sortingHat');
        return res.data;
    }

    registerUser = async (apiRoute, requestObject) => {
        const config={
            'headers':{
                'Content-Type' : 'application/json'
            }
        }
        let res = await axios.post(apiRoute,requestObject,config);
        return res;
    }
}

const APIS = new apis();
export default APIS;