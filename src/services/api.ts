import axios from 'axios';
import { reject } from 'lodash';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BACKEND
})


 export async function login(email:string,password:string){
    const login = {
        email: 'felipeab10@hotmail.com',
        password:'12345678'
    }
   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(email === login.email && password === login.password){
                const user = {
                    name:'Felipe Almeida Batista',
                    email:'felipeab10@hotmail.com',
                    token:'DASDA@#!@$#6535654645ddsfsf'
                }
                resolve(user);
            }else{
                reject('Usuário e senha inválidos!')
            }
        },750)
    })
 }