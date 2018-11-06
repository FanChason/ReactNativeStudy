import {Component} from "react";


export default class HttpUtil extends Component {
    static get(url){
        return new Promise((resolve, reject) =>{
            fetch(url).then((response)=>response.json())
                .then((responseData) => {
                    if(responseData.c && responseData.c == 10000){
                        resolve(responseData.d);
                    }else{
                        reject(new Error(responseData.d));
                    }
                }).catch((error) => {
                reject(new Error('网路异常'));
            }).done();
        });
    }
}