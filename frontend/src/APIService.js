export default class APIService{
    
    static getStocks(ticker){
       
        return fetch('http://127.0.0.1:8000/get_stocks/'+ticker,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
            },
        }).then(resp=>resp.json())
        .then(data => console.log(data));

    }

    static newsTicker(ticker){
       
        return fetch('http://127.0.0.1:8000/news_with_ticker/'+ticker,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
            },
        }).then(resp=>resp.json())
        .then(data => console.log(data));

    }

    static webScrapping(ticker){
        return fetch('http://127.0.0.1:8000/webscrapping/'+ticker,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
            },
        }).then(resp=>resp.json())
        .then(data => console.log(data));
    }

    static predict(ticker){
       
        return fetch('http://127.0.0.1:8000/predict/'+ticker,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
            },
        }).then(resp=>resp.json())
        .then(data => console.log(data));

    }
    
}