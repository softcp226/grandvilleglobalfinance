var color = "red";
let prev_percentage;
let new_percentage;

// const setColor = () => {
//   // const percentage_view = document.querySelector("#percentage_view").innerHTML;
//   // color = "red";
//   // prev_percentage = parseInt(percentage_view);
//   // new_percentage = parseInt(percentage_view);
//   // if(new_percentage ==prev_percentage){
//   // }else{
//   // }
//   // color = "red";

//   if (color == "red") {
//     color = "green";
//   } else {
//     color = "red";
//   }

//   document.querySelector("#percentage_view").style.color = color;
// };
// function generate_percentage() {
//   return Math.random() * (12 - 1) + 1;
// }



const createAndAppendElement = (element) => {
  console.log(element);
  const section = document.createElement("section");
  section.className = "table-list-credit";

  let FNH4 = document.createElement("h4");
  let LDH4 = document.createElement("h4");
  // let FDH4=document.createElement("h4");
  //   let RTH4 = document.createElement("h4");
  //   let EPH4 = document.createElement("h4");
  //   EPH4.id = "percentage_view";
  // let IVP = document.createElement("h4");
  // let PT_LS = document.createElement("h4");

  //   let AN = document.createElement("h4");

  //   TDH4.innerHTML = element.transaction_date;
  //   REFH4.innerHTML = element.refrence_number;
  FNH4.innerHTML = element.full_name;
  // LNH4.innerHTML = element.last_name;
  LDH4.innerHTML =
    `$${element.last_deposit
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.0` || "0";

  section.append(FNH4, LDH4);
  document.querySelector(".history-table").append(section);

  // set_percentage();
};

const shape_result = (referrals) => {
  referrals.map((referral) => createAndAppendElement(referral));
};

(async () => {
  let token = getCookie("token");
  let user = getCookie("user");
  try {
    const response = await fetch(
      "https://grandvilleglobalfinance-api.glitch.me/api/user/referral/fetch",
      // "http://localhost:5000/api/user/referral/fetch",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, user }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error)
      return (document.querySelector(".errMessage").innerHTML =
        result.errMessage);
    shape_result(result.message);
  } catch (err) {
    console.log(err);
    document.querySelector(".errMessage").innerHTML = err.message;
  }
})();
