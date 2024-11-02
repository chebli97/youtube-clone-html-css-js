var darkButton = document.getElementById('dark-mode')
var navBar = document.getElementsByTagName('nav')
var logo = document.getElementById('youtube-logo')

var iconsList = document.getElementsByClassName('icons-list') 


var clicked = false

//onClick Event Handler

// function handleDarkMode() {
//     if (!clicked) {
//         // Dark Mode Body
//         document.body.style.backgroundColor = 'black'
//         document.body.style.color = 'white'
//         // Dark Mode Navbar
//         navBar[0].style.backgroundColor = 'black'
//         navBar[0].style.color = 'white'
        
//         // Dark Mode Icons and Logo
//         logo.src = './assets/yt_logo_rgb_dark.png'
//         iconsList[0].querySelectorAll('i')[2].innerText = '\ue518'
//         clicked = true
//         } else {
//              // Light Mode Body
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//         // Light Mode Navbar
//         navBar[0].style.backgroundColor = 'white'
//         navBar[0].style.color = 'black'
        
//         // Light Mode Icons and Logo
//         logo.src = './assets/yt_logo_rgb_light.png'
//         iconsList[0].querySelectorAll('i')[2].innerText = '\ue51c'
//             clicked = false
//         }
    
// }


darkButton.addEventListener('click' , function() {
    
    if (!clicked) {
    // Dark Mode Body
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    // Dark Mode Navbar
    navBar[0].style.backgroundColor = 'black'
    navBar[0].style.color = 'white'
    
    // Dark Mode Icons and Logo
    logo.src = './assets/yt_logo_rgb_dark.png'
    iconsList[0].querySelectorAll('i')[2].innerText = '\ue518'
    clicked = true
    } else {
         // Light Mode Body
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    // Light Mode Navbar
    navBar[0].style.backgroundColor = 'white'
    navBar[0].style.color = 'black'
    
    // Light Mode Icons and Logo
    logo.src = './assets/yt_logo_rgb_light.png'
    iconsList[0].querySelectorAll('i')[2].innerText = '\ue51c'
        clicked = false
    }

})

