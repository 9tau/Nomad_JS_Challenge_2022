const guess_form = document.querySelector("#guessForm");
const generate_form = document.querySelector("#generateForm");
const guess_num = document.querySelector("#guessForm input");
const generate_num = document.querySelector("#generateForm input");
const chosen_num = document.querySelector("#chosen_num");
const machine_num = document.querySelector("#machine_num");
const result = document.querySelector("#result");

const RANGE_NUM = "range_num";
const USER_NUM = "user_num";
const GENERATE_NUM = generate_num.value;

function RangeNumber(event) {
    event.preventDefault();
    const range_num = generate_num.value;
    if (range_num > 0) {
    localStorage.setItem(RANGE_NUM, range_num);
    } else {
        alert("Please insert the value bigger than 0")
    }
}

function submitUserNum(event) {
    event.preventDefault();
    const user_num = guess_num.value;
    localStorage.setItem(USER_NUM, user_num);
    chosen_num.innerText = `You chose:${user_num}`;
    hiddenRemove();

    var savedUserNum = parseInt(localStorage.getItem(USER_NUM));
    var savedRangeNum = parseInt(localStorage.getItem(RANGE_NUM));
    const RANDOM_NUM = Math.ceil(Math.random()*savedRangeNum);

    if (savedUserNum !== RANDOM_NUM)
   {
    machine_num.innerText = `,the machine chose ${RANDOM_NUM}`;    
    result.innerText = '\n You lost!';
   } else {
    machine_num.innerText = `,the machine chose ${RANDOM_NUM}`;  
    result.innerText = '\n You won!';
   }
}

function hiddenRemove() {
    chosen_num.classList.remove("hidden");
    machine_num.classList.remove("hidden");
    result.classList.remove("hidden");
}


generate_form.addEventListener("submit",RangeNumber);
guess_form.addEventListener("submit",submitUserNum);
