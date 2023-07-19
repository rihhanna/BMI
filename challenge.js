// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight,height){
    const bmi =weight/(height*height);
}
    const mohamedWeight=70;//in kg
    const mohamedHeight=1.70;// in meters
    const mohamedBMI=calculateBMI(mohamedWeight,mohamedHeight)
    const aliWeight=60; //in kg
    const aliHeight=1.80;//in meters
    const aliBMI=calculateBMI(aliWeight,aliHeight);
    if (mohamedBMI>aliBMI){
        console.log("mohamed has a higher BMI");
    }else if (aliBMI>mohamedBMI){
        console.log('ali has a higher MBI');
    }else{
        console.log("mohamed and ali have the same MBI")
    }