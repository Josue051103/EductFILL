const menuItems = document.querySelectorAll('.menu-item'); //Sidebar//
//Messages
const messagesNotification = document.querySelector('#message-nofitication');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize.theme');
//Fontsizes
const fontSizes = document.querySelector('.choose-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



//Remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

//=====SideBar=====//
menuItems.forEach(item => {
        item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');
            if (item.id != 'notifications') {
                document.querySelector('.notifications-popup').style.display = 'none';
            } else {
                document.querySelector('.notifications-popup').style.display = 'block';
                document.querySelector('#notifications .notification-count').style.display = 'none';
            }
        })
    })
    //=====SideBar=====//


//=====Messages=====//

//Search Messages 

const searchMessage = () => {
        const val = messagesSearch.value.toLowerCase();
        // console.log(val);
        message.forEach(user => {
            let name = user.querySelector('h5').textContent.toLowerCase();
            if (name.indexOf(val) != -1) {
                user.style.display = 'flex';
            } else {
                user.style.display = 'none';
            }
        })
    }
    //Search chat

messageSearch.addEventListener('keyup', searchMessage);


//highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

//=====Messages=====//

//opens Modal
const openThemeModal = () => {
        themeModal.style.display = 'grid';
    }
    //close Modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}



//close modal
themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal);


//===========    Fonts   =============//


//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        size.addEventListener('click', () => {

            if (size.classList.contains('font-size-1')) {
                fontSize = '10px';
                root.style.setProperty(' --sticky-top-left', '5.4rem;');
                root.style.setProperty(' --sticky-top-right', '5.4rem;');
            } else if (size.classList.contains('font-size-2')) {
                fontSize = '13px';
                root.style.setProperty(' --sticky-top-left', '5.4rem;');
                root.style.setProperty(' --sticky-top-right', '-7rem;');
            } else if (size.classList.contains('font-size-3')) {
                fontSize = '16px';
                root.style.setProperty(' --sticky-top-left', '-2rem;');
                root.style.setProperty(' --sticky-top-right', '-17rem;');
            } else if (size.classList.contains('font-size-4')) {
                fontSize = '19px';
                root.style.setProperty(' --sticky-top-left', '-5rem;');
                root.style.setProperty(' --sticky-top-right', '-25rem;');
            } else if (size.classList.contains('font-size-5')) {
                fontSize = '22px';
                root.style.setProperty(' --sticky-top-left', '-12rem;');
                root.style.setProperty(' --sticky-top-right', '-35rem;');
            }
            //change font size of the rool the html element

            document.querySelector('html').style.fontSize = fontSize;
        })
    })

})

//remove active class from color
const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//change primary colors

colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primary
            //remove active class from color
        changeActiveColorClass();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);

    })
})

//theme background values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//changes background color

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    //add active class
    Bg2.classList.add('active');
    //remove active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})



Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg2.classList.add('active');
    //remove active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

//END