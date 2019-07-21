// document.querySelectorAll('.privacy-settings')
//     .forEach((privacySettings)=> {
//         const heading = privacySettings.querySelector('.heading');
//         const navBar = privacySettings.querySelector('.nav-bar');

//         heading.addEventListener('click', function(){
//             if(navBar.classList.contains('deactive')){
//                 navBar.classList.remove('deactive');
//             }else{
//                 navBar.classList.add('deactive');
//             }
//         })
//     })

document.querySelectorAll('.privacy-settings')
.forEach(function(privacySettings) {
    const heading = privacySettings.querySelector('.heading');
    const navBar = privacySettings.querySelector('.nav-bar');

    heading.addEventListener('click', function(){
        navBar.classList.toggle('deactive');
    })

})