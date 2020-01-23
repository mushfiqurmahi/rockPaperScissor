// Coder : SM 
// Date : Oct 20 '19 

let player_score = 0
let pc_score = 0

const pc_input_func = () => {
    return Math.floor(Math.random() * 3 +1)
}

function action(value){
    
    if(value && value!=='tie'){
        document.getElementsByClassName("name")[0].textContent = 'Congrates, You WIN !'
        player_score += 1
        document.getElementsByClassName("player_score")[0].textContent = player_score
    }else if(value==='tie'){
        document.getElementsByClassName("name")[0].textContent = 'It\'s a TIE'
        
    }else if(!value){
        document.getElementsByClassName("name")[0].textContent = 'Computer WIN'
        pc_score += 1
        document.getElementsByClassName("pc_score")[0].textContent = pc_score
        
    }

    document.getElementsByClassName("player-hand")[0].style.animation = "";
    document.getElementsByClassName("pc-hand")[0].style.animation = ""
}


function compare(user, computer) {
    var result 
    console.log('user',user);
    console.log('pc',computer);
    
    //!change the img
    let images = [`./assets/rock.png`,`./assets/paper.png`,`./assets/scissors.png`]
    
    setTimeout(()=>{
        document.getElementsByClassName("player-hand")[0].src = images[user-1]
        document.getElementsByClassName("pc-hand")[0].src = images[computer-1]
        
    },1500)
    document.getElementsByClassName("player-hand")[0].style.animation = "shakePlayer 1.5s ease";
    document.getElementsByClassName("pc-hand")[0].style.animation = "shakeComputer 1.5s ease"
    

    if (user === computer) {
        result = 'tie'
    } else {
        switch (user) {

            case 1:
                result = computer === 3  ? true : false;
                break;
            case 2:
                result =  computer === 1 ? true : false;
                break;
            case 3:
                result =  computer === 2 ? true : false;
                break;
            
        }
    }

    return result
//     result === true --> userWin
//     result === false --> pcWin
//     result === 'tie' --> tie
}


function play() {

    let player_input
    let player_buttons = [
        document.getElementById('rock'),
        document.getElementById('paper'),
        document.getElementById('scissors')
    ]

    player_buttons.forEach((element) => {

        element.addEventListener('click', () => {

            player_input = element.value

            pc_input = pc_input_func()

            let winner = compare(parseInt(player_input), parseInt(pc_input))
            console.log(winner);
            //     result === true --> userWin
            //     result === false --> pcWin
            //     result === 'tie' --> tie

            setTimeout(()=>{
                action(winner)

            },1500)

        })
    })


}

function main() {
    const play_btn = document.getElementById('play_btn')
    play_btn.addEventListener('click', () => {
        document.getElementsByClassName('fadeout')[0].style.opacity = '0'
        document.getElementsByClassName('fadein')[0].style.opacity = '1'
        document.getElementsByClassName('fadein')[0].style.zIndex = '1'

        play()
    })

}
// calling the main function-->
main()