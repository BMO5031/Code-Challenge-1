function calculateNetSalary() {
    const basicSalary =parseFloat(prompt('key in basic salary'));
    const allowance =parseFloat(prompt("key in allowance"))
    if(isNaN(basicsalary) || isNaN(allowance)){
        return ('please key in a valid number');
    }

const nssf = calculateNSSF (basicsalary);
const nhif = calculateNHIF (basicsalary);
const paye = calculatePAYE (basicsalary);
const grossSalary = basicsalary + allowance;
const netSalary = grossSalary - nssf -nhif -paye;

alert(`Net Salary; ${netSalary}`);

}
function calculateNSSF(basicsalary){
    return basicSalary * 0.06;
}
function calculateNHIF(basicSalary){
    if (basicsalary>=6000 && basicsalary <= 7999){
        return 300;
    }else if (basicsalary >= 8000 && basicsalary <= 11999){
        return 400;
    }else if (basicsalary >= 12000 && basicsalary <= 14999){
        return 500;
    }else if (basicsalary >= 15000 && basicsalary <= 19999){
        return 600;
    }else if (basicsalary >= 20000 && basicsalary <= 24999){
        return 750;    
    }else if (basicsalary >= 25000 && basicsalary <= 29999){
        return 850;
    }else if (basicsalary >= 30000 && basicsalary <= 34999){
        return 900;  
    }else if (basicsalary >= 35000 && basicsalary <= 39999){
        return 950;   
    } else if (basicsalary >= 40000 && basicsalary <= 44999){
        return 1000;
    }else if (basicsalary >= 45000 && basicsalary <= 49999){
        return 1100;
    }else if (basicsalary >= 50000 && basicsalary <= 59999){
            return 1200;   
    }else if (basicsalary >= 60000 && basicsalary <= 69999){
        return 1300; 
    }else if (basicsalary >= 70000 && basicsalary <= 79999){
        return 1400;   
    }else if (basicsalary >= 80000 && basicsalary <= 89999){
        return 1500;
    }else if (basicsalary >= 90000 && basicsalary <= 99999){
        return 1600;
    }else if (basicsalary >= 100000){
        return 1700;   
    }else if (basicSalary> 0 && basicsalary <=5999){
        return 150;
    }
}
function calculatePAYE(basicSalary) {
    if (basicSalary <=28000){
        return 0.25 * basicSalary;
    }else if (basicSalary >28000 && basicSalary <=32333){
        return 0.25 * basicSalary;
    }else{
        return 0.3 * basicSalary;
    }        
}
calculateNetSalary();