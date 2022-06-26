
let chart = document.getElementById("chart")

fetch("./data.json").then(function (res) {
    return res.json()
}).then(function (data) {

    let na = []

    data.forEach(ele => {
        na.push(ele["amount"])
    });

    for (var i = 0; i < data.length; i++) {

        chart.innerHTML += `
        <div class="${data[i]["day"]} days">
            <div class="money-show"></div>
            <div class="piece"></div>
            <p>${data[i]["day"]}</p>
        </div>`

        document.querySelectorAll(`.days>.piece`)[i].style.height = `calc(${data[i]["amount"]} * 4px)`
        document.querySelectorAll(`.days>.money-show`)[i].innerHTML = `$${data[i]["amount"]}`

        if (data[i]["amount"] === Math.max(...na)) {
            document.querySelectorAll(`.days>.piece`)[i].style.backgroundColor = "var(--primary-cyan)"
        }else{
            document.querySelectorAll(`.days>.piece`)[i].style.backgroundColor = "var(--primary-red)"
        }

    }


});
