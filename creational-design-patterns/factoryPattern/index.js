// we are building a cross platform app that runs on both android and ios, both have same interface but here we are doing some conditional checking to determine which button to show

const os = 'ios'
class IosButton {
    constructor() {
        this.color = 'blue'
        this.click = function() {
            return 'Ios button clicked';
        }
    }
}

class AndroidButton {
    constructor() {
        this.color = 'green'
        this.click = function() {
            return 'Android button clicked';
        }
    }
}

class ButtonFactory {
    constructor(){
        this.createButton = function(os){
            let button;
            if(os === 'ios') button =  new IosButton();
            else button =  new AndroidButton();
            button.hover = function() {
                    return 'hovered';
                }
            return button;
        }
    }
}

const factory = new ButtonFactory();

const button1 = factory.createButton(os);
const button2 = factory.createButton(os);

console.log("color", button1.color, button2.color);
console.log("click", button1.click(), button2.click());
console.log("click", button1.hover(), button2.hover());