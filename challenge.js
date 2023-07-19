// Good Luck! You got this 💪🏾
// Write your code here.
const ali ={
    fullName:'ali',
    weight:100,
    height:1.69,
    calculateBMI:function () {
        this.bmi=this.weight/this.height*2;
        return this.bmi;
        
    }

};
const mohamed={
    fullName:'mohamed',
    weight:120,
    height:1.80,
    calculateBMI:function(){
        this.bmi=this.weight/this.height*2;
        return this.bmi;                                                                                    
    }
}
ali.calculateBMI();
mohamed.calculateBMI();
console.log(ali.mi,mohamed.bmi);
if (ali.bmi>mohamed.bmi){
    console.log(`${ali.fullName} 's BMI ${ali.bmi} is higher than ${mohamed.fullName}' s(${mohamed.bmi})!`);
}else if(mohamed.BMI>ali.BMI){
    console.log(`${mohamed.fullName}'s BMIm (${mohamed.BMI}) is higher than ${ali.fullName}'s (${ali.BMI})! `);
}