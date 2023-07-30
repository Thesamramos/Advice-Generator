const btn = document.getElementById("btn");

btn.addEventListener('click', async (e) => {
    e.preventDefault();

    getAdvice()
})

async function getAdvice() {

    let settings = {
        method: "GET"
    }

    const response = await fetch('https://api.adviceslip.com/advice', settings);

    let data = await response.json();
    console.log(data);

    if(response.ok){
        const divAdvice = document.querySelector(".advice");
        const spanId = document.querySelector(".span_id");
        divAdvice.innerHTML = `"${data.slip.advice}"`;
        spanId.innerHTML = `Advice #${data.slip.id}`;
    }
}