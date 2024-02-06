function calculateLoan(){
    const loanAmount = document.getElementById("loanAmount").value;
    const interestRate = document.getElementById("interestRate").value;
    const years = document.getElementById("loanYears").value;
    const n = Number(years)*12;
    const p = Number(loanAmount);
    const r = (Number(interestRate)/12)/100;
    
    const emi =Math.round((p*r*(Math.pow(1+r,n))/((Math.pow(1+r,n)-1))));

const interest = Math.round((emi*n)-(p));
  document.querySelector(".emi").innerHTML = "Emi :"+`${emi}`;
  document.querySelector(".interest").innerHTML = "Total Interest :"+`${interest}`;
}
