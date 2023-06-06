function salary(input) {

    let numberBrowserTabs = Number(input[0]);
    let salary = Number(input[1]);
      
      for(let i = 2; i<=numberBrowserTabs + 1 ; i++) {
        let curResult = input[i];
          
          if(curResult === "Facebook") {
            salary -= 150;
          }else if(curResult === "Instagram") {
            salary -= 100;
          }else if(curResult === "Reddit") {
            salary -= 50;
          }else {
            salary = salary;
          }
      }
    
    if(salary<= 0) {
      console.log(`You have lost your salary.`);
    }else {
      console.log(`${salary}`);
    }

}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);
