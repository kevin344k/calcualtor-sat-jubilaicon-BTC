
const inputBTC = document.querySelector("#input-BTC")
const inputSAT = document.querySelector("#input-sat")
const inputAnioJ = document.querySelector("#Input_anioJub")

const init = async () => {

    const { bitcoin: { blocks } } = mempoolJS({
        hostname: 'mempool.space'
    });

    const blocksTipHeight = await blocks.getBlocksTipHeight();

    let heightBlock = JSON.stringify(blocksTipHeight, undefined, 2);
    document.getElementById("result").textContent = heightBlock;

    let timeLeft = (840000 - blocksTipHeight) * (9.6 * 60 * 1000)
    let dateHalvin = (Date.now() + timeLeft)


    console.log({
        "timeleft": timeLeft,
        "DateHalvin": new Date(dateHalvin),
        "today": new Date()
    });



};

init();

/*
data for calculate next halvin

every halvin occurs each 210000 blocks

block last halvin(2020) : block number 630000
next halvin(2024): 630000 + 210000 = 840000
time for block (source mempool)= 9.6 minutes

them
for example, today 2023-11-06 9:21 minin block height(number) 815583

 formula

 timeLeft = (block objective - block current)* ( avereage minin block * 60*1000)
 DateHalvin=Today+timeleft
 DateHalvin(miliseconds)= timeleft
 

*/

let today = Date.now()
console.log(today);


//calculadora  de satoshis
//1 bitcoin = 100,000,000 satoshis



inputBTC.addEventListener("input", () => {


if (inputBTC.value!="" && inputBTC.value!=0 ) {
    inputSAT.value = parseInt((inputBTC.value * 100000000)).toLocaleString()
    console.log(inputSAT.value);
    function getJSONHalvins() {
        fetch('/halvins.json')
            .then(res => res.json())
            .then(datos => {
                console.log(datos);

               function findRewards(BTCHalf){
                return BTCHalf.Rewards<=inputBTC.value
               }
               console.log(datos.find(findRewards));
               inputAnioJ.value=(datos.find(findRewards)).Year


            })
    }
    getJSONHalvins()
} else{
    inputAnioJ.value=""
    inputSAT.value=""

}


})


///con x $BTC cuando me jubilo.

