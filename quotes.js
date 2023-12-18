let url = 'https://api.api-ninjas.com/v1/quotes?category=happiness'
let option = {
    method: 'GET',
    headers: { 'X-Api-Key': '4L0zMnAP3ZeKNh7drWwLfQ==6nfZkW6qolu5F583'},
    contentType: 'application/json',
}

async function getQuote() {
    let q_promise = await fetch(url, option);
    let data = await q_promise.json();
    let quote_rec = data[0];
    document.getElementById('quote').innerHTML = '"' + quote_rec.quote + '"'
    document.getElementById('author').innerHTML = "~" + quote_rec.author
}
// btnClick = document.getElementById('btn');
// btnClick.onclick = function(){
//     btnClick.innerHTML = getQuote();
// }

getQuote();