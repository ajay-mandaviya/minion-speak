let submitBtn = document.querySelector('.submit-btn');
let userInput = document.querySelector('#user-input');
let minionTranslate = document.querySelector('#minion-translate')

let url = 'https://api.funtranslations.com/translate/minion.json?text='

    function generateUrl(text){ 
        return url+text;
    }

function handleAlert(err){
    alert("try again" , err);
}

submitBtn.addEventListener('click' ,()=>{
    let textForTranslation  = userInput.value;
    let endPoint  = generateUrl(textForTranslation )
    // console.log("click");
    // console.log(textForTranslation);

    fetch(endPoint)
        .then((response)=>  response.json())
        .then((json)=>{
            minionTranslate.innerHTML = json.contents.translated;
            console.log(json);
            userInput.value = '';
        })
        .catch(err=>{
            handleAlert(err);
        })
})
