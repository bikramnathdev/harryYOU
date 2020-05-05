import axios from 'axios';

class apis {
    getHogwartHouse = async () =>{
        let res = await axios.get('https://www.potterapi.com/v1/sortingHat');
        return res.data;
    }
}

const APIS = new apis();
export default APIS;