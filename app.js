let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let comp_score_obj = document.querySelector("#comp_score").getAttribute("data-value");
comp_score = parseInt(comp_score_obj);

let user_score_obj = document.querySelector("#user_score").getAttribute("data-value")
user_score = parseInt(user_score_obj);

let lst = [rock, paper, scissors];
let rand_choice; 
let comp_elem;
let user_choice = rock;

rock.addEventListener("click", () => {
    user_choice = rock;
    rand_choice = Math.floor(Math.random()*lst.length);
    comp_elem = lst[rand_choice];

    if (comp_elem === rock){
    console.log("Game draw");
    }

    else if (comp_elem === paper){
        console.log("User losses");
        console.log(comp_score);
        comp_score = comp_score+1;
        comp_score_obj.innerText = comp_score;
    }

    else if (comp_elem === scissors){
        console.log("User wins");
        user_score += 1;
    }
    console.log(user_choice, "Computer", comp_elem);

})

paper.addEventListener("click", () => {
    user_choice = paper;
    rand_choice = Math.floor(Math.random()*lst.length);
    comp_elem = lst[rand_choice];

    if (comp_elem === rock){
        console.log("User losses");
        comp_score = comp_score+1;
    }

    else if (comp_elem === paper){
        console.log("Game draws");
    }

    else if (comp_elem === scissors){
        console.log("User wins");
        user_score += 1;
    }
        console.log(user_choice, "Computer", comp_elem);

})

scissors.addEventListener("click", () => {
    user_choice = scissors;
    rand_choice = Math.floor(Math.random()*lst.length);
    comp_elem = lst[rand_choice];

    if (comp_elem === rock){
        console.log("User losses");
        comp_score = comp_score+1;
    }

    else if (comp_elem === paper){
        console.log("User wins");
        user_score += 1;
    }

    else if (comp_elem === scissors){
        console.log("Game draws");
    }
    console.log(user_choice, "Computer", comp_elem);
})