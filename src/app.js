//using rxjs
var rxjs = require('rxjs');
//search/submit button  to trigger an event listener
let submit_button = document.getElementById('submit_button');
// creating an observable event using rxjs
const buttonEvent = rxjs.fromEvent(submit_button, 'click');
let symbol_text = document.getElementById('symbol_text').value;
//url from where the data has to be fetched
var url ="https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=demo";
var arr=[];
// fetch data function containing a promise function
var fetchData =()=>{
console.log("fetch function");
let promise = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log("success 200");
                  //  console.log(xhr.response.data);
                    var data = xhr.response.data;
                    resolve(data);
                } else {
                    console.log("failure status code is not 200");
                     reject(Error(xhr.status));
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    });
// resolving a promise
promise.then((resolve) =>{
    document.getElementById('tbl').getElementsByTagName('tbody')[0].innerHTML="";
data = resolve;
console.log(data);
// array of all the user inputted values
arr = document.getElementById('symbol_text').value.split(',');
console.log(arr);
if(arr.length!=1){
for(i=0;i<=arr.length-1;i++){
    for(j=0;j<=data.length-1;j++){
        var stringarr =arr[i].toString().toUpperCase();
        if(stringarr==data[j].symbol){
            var x=document.getElementById('tbl').getElementsByTagName('tbody')[0].insertRow(0);
            // building a table row in tbody with all cells and data
            var c1=x.insertCell(0);
            var c2=x.insertCell(1);
            var c3=x.insertCell(2);
            var c4=x.insertCell(3);
            var c5=x.insertCell(4);
            var c6=x.insertCell(5);
            var c7=x.insertCell(6);
            var c8=x.insertCell(7);
            var c9=x.insertCell(8);
            var c10=x.insertCell(9);
            var c11=x.insertCell(10);
            var c12=x.insertCell(11);
            var c13=x.insertCell(12);
            var c14=x.insertCell(13);
            var c15=x.insertCell(14);
            var c16=x.insertCell(15);
            var c17=x.insertCell(16);
            var c18=x.insertCell(17);
            var c19=x.insertCell(18);
            var c20=x.insertCell(19);
            var c21=x.insertCell(20);
            var c22=x.insertCell(21);
            var c23=x.insertCell(22);
            var c24=x.insertCell(23);
            c1.innerHTML=data[j].symbol;
            c2.innerHTML=data[j].name;
            c3.innerHTML=data[j].price;
            c4.innerHTML=data[j].currency;
            c5.innerHTML=data[j].price_open;
            c6.innerHTML=data[j].day_high;
            c7.innerHTML=data[j].day_low;
            c8.innerHTML=data[j]["52_week_high"];
            c9.innerHTML=data[j]["52_week_low"];
            c10.innerHTML=data[j].day_change;
            c11.innerHTML=data[j].change_pct;
            c12.innerHTML=data[j].close_yesterday;
            c13.innerHTML=data[j].market_cap;
            c14.innerHTML=data[j].volume;
            c15.innerHTML=data[j].shares;
            c16.innerHTML=data[j].stock_exchange_long;
            c17.innerHTML=data[j].stock_exchange_short;
            c18.innerHTML=data[j].timezone;
            c19.innerHTML=data[j].timezone_name;
            c20.innerHTML=data[j].last_trade_time;
            c21.innerHTML=data[j].pe;
            c22.innerHTML=data[j].eps;
            c23.innerHTML=data[j].market_cap;
            c24.innerHTML=data[j].gmt_offset;
        }
    }
}
}
else{
    for(j=0;j<=data.length-1;j++){
        var stringarr =arr.toString().toUpperCase();
        console.log(stringarr +"compare"+data[j].symbol )
        if(stringarr==data[j].symbol){
            // building a table row in tbody with all cells and data
            var x=document.getElementById('tbl').getElementsByTagName('tbody')[0].insertRow(0);
            var c1=x.insertCell(0);
            var c2=x.insertCell(1);
            var c3=x.insertCell(2);
            var c4=x.insertCell(3);
            var c5=x.insertCell(4);
            var c6=x.insertCell(5);
            var c7=x.insertCell(6);
            var c8=x.insertCell(7);
            var c9=x.insertCell(8);
            var c10=x.insertCell(9);
            var c11=x.insertCell(10);
            var c12=x.insertCell(11);
            var c13=x.insertCell(12);
            var c14=x.insertCell(13);
            var c15=x.insertCell(14);
            var c16=x.insertCell(15);
            var c17=x.insertCell(16);
            var c18=x.insertCell(17);
            var c19=x.insertCell(18);
            var c20=x.insertCell(19);
            var c21=x.insertCell(20);
            var c22=x.insertCell(21);
            var c23=x.insertCell(22);
            var c24=x.insertCell(23);
            c1.innerHTML=data[j].symbol;
            c2.innerHTML=data[j].name;
            c3.innerHTML=data[j].price;
            c4.innerHTML=data[j].currency;
            c5.innerHTML=data[j].price_open;
            c6.innerHTML=data[j].day_high;
            c7.innerHTML=data[j].day_low;
            c8.innerHTML=data[j]["52_week_high"];
            c9.innerHTML=data[j]["52_week_low"];
            c10.innerHTML=data[j].day_change;
            c11.innerHTML=data[j].change_pct;
            c12.innerHTML=data[j].close_yesterday;
            c13.innerHTML=data[j].market_cap;
            c14.innerHTML=data[j].volume;
            c15.innerHTML=data[j].shares;
            c16.innerHTML=data[j].stock_exchange_long;
            c17.innerHTML=data[j].stock_exchange_short;
            c18.innerHTML=data[j].timezone;
            c19.innerHTML=data[j].timezone_name;
            c20.innerHTML=data[j].last_trade_time;
            c21.innerHTML=data[j].pe;
            c22.innerHTML=data[j].eps;
            c23.innerHTML=data[j].market_cap;
            c24.innerHTML=data[j].gmt_offset;
        }
    }
}
    },(reject)=>{
    console.log(reject);
})
}
// subscribing the observable rxjs event
let subscription = buttonEvent.subscribe(function (x) {
    console.log("input values are" + symbol_text);
   fetchData();
});

