import  axios from 'axios' 
import { Person } from '../Types/types';

const instance = axios.create({
     baseURL : "http://localhost:5500",
});

export const getPerson = async(props : string)  => {
     try{
          return await instance.get<Person>( props )
          .then(response => response.data )
          .catch(err => console.log(err))
     } catch (err) {
          console.log(err);
     }
}
