// const getCookie = (cname) => {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   // return "";
//   window.location.href = "/login.html";
// };

// const setText = (investment_package) => {
//   investment_package.forEach((investment_package) => {
//     const plan_container_div = document.createElement("div");
//     const container_div = document.createElement("div");

//     plan_container_div.className = "live-auction-box wow fadeInUp";
//     container_div.style.padding = "22px";
//     const package_name = document.createElement("h1");
//     package_name.innerHTML = investment_package.package_name;

//     const package_ul = document.createElement("ul");
//     const package_min_li = document.createElement("li");
//     const package_max_li = document.createElement("li");
//     const package_return_li = document.createElement("li");
//     const package_return_li_b = document.createElement("b");
//     const package_principal_li = document.createElement("li");
//     const package_instant_li = document.createElement("li");

//     package_return_li_b.style.color = "#fff";
//     package_return_li_b.innerHTML = `${investment_package.percentage}`;
//     package_min_li.innerHTML = `Min: $${investment_package.min}`;
//     package_max_li.innerHTML = `Max: $${investment_package.max}`;

//     package_return_li.append(
//       `${investment_package.percentage}% Return After ${investment_package.payment_period} `,
//     );

//     package_principal_li.innerHTML = "PRINCIPAL WITHDRAWAL";
//     package_instant_li.innerHTML = "INSTANT WITHDRAWAL";
//     const package_btn = document.createElement("a");
//     package_btn.href = "register.html";
//     package_btn.className = "btn btn-default";
//     package_btn.innerHTML = "Get Started";
//     package_btn.style.margin="4px"
//     // package_return_li.innerHTML=;
//     package_ul.append(
//       package_min_li,
//       package_max_li,
//       package_return_li,
//       package_principal_li,
//       package_instant_li,
//       package_btn,
//     );
//     plan_container_div.append(container_div);
//     container_div.append(package_name, package_ul);
// // plan_container_div.className = "owl-item active";
// // plan_container_div.style.width = "264.8px";
// // plan_container_div.style.marginRight = "30px";

// container_div.className="live-auction-box wow fadeInUp delay-2 animated"
// container_div.style.visibility="visible"
// // class="live-auction-box wow fadeInUp delay-2 animated"
// //                                             style="visibility: visible;"

// // class="owl-item cloned" style="width: 264.8px; margin-right: 30px;"
//     // plan_container_div.style.padding = "20px";
//     // plan_container_div.append(package_name, package_ul);
//     document.querySelector("#pricing_list").append(plan_container_div);
//   });
// };

// (async () => {
//   try {
//     const response = await fetch(
//       "https://invesco-global-backend.glitch.me/api/investment_packages/fetch",
//       // "http://localhost:5000/api/investment_packages/fetch",

//       {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         // body: JSON.stringify({ token, user }),
//       },
//     );
//     const result = await response.json();
//     console.log("result", result);
//     if (result.error) {
//       alert(result.errMessage);
//     } else {
//       setText(result.message);
//     }
//   } catch (error) {
//     console.log(error);
//     alert(error.message);
//   }
// })();




const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  // return "";
  window.location.href = "/login.html";
};

const setText = (investment_package) => {

console.log(investment_package)

// alert(investment_package)

  investment_package.forEach((investment_package) => {
   
   
   const div_col_lg = document.createElement("div");
   const div_hvr_grow = document.createElement("div");
   const planbg1_div = document.createElement("div");
   const planhead_div= document.createElement("div");
   const plan_bg1_div= document.createElement("div");
   const plan_top_heartbeat= document.createElement("div");
   const plan_img=document.createElement("img");
   const plan_name_h2=document.createElement("h2");
   const division_div=document.createElement("div");
   const plan_mid_div=document.createElement("h2");
   const price_h2=document.createElement("h2");
const percentage_p=document.createElement("p")
// const division2_div=document.createElement("div");
const plan_details_div=document.createElement("div");
const p1=document.createElement("p")
const p2=document.createElement("p")
const p3=document.createElement("p")
const p4=document.createElement("p")

div_col_lg.className="col-lg-4 col-md-4 col-sm-12 col-xs-12";
div_hvr_grow.className="hvr-grow";
planbg1_div.className="planbg1"
planhead_div.className="planhead";
plan_bg1_div.className="plan-bg1"
plan_top_heartbeat.className="plan-top heartbeat"

plan_mid_div.className="plan-mid"
plan_details_div.className="plan-details"



plan_img.src="images/plan1.png";

div_col_lg.append(div_hvr_grow)
div_hvr_grow.append(planbg1_div)
planbg1_div.append(planhead_div)
planhead_div.append(plan_bg1_div)
plan_bg1_div.append(plan_top_heartbeat)
plan_top_heartbeat.append(plan_img)
plan_top_heartbeat.append(plan_name_h2)
plan_top_heartbeat.append(division_div)
planhead_div.append(plan_mid_div)
plan_mid_div.append(price_h2,percentage_p)

planbg1_div.append(plan_details_div)
plan_details_div.append(p1,p2,p3,p4)

plan_name_h2.innerHTML=investment_package.package_name;
price_h2.innerHTML=`$${investment_package.min} $${investment_package.max}- `
percentage_p.innerHTML=`${investment_package.percentage}% Return After ${investment_package.payment_period} `

p1.innerHTML="Fast Withdrawals"
p2.innerHTML="5% Referral Bonus"
p3.innerHTML="Enhanced security"
p4.innerHTML="Principal Included"
document.querySelector("#investment_plans").append(div_col_lg)

//     const plan_container_div = document.createElement("div");
//     const container_div = document.createElement("div");

//     plan_container_div.className = "col-lg-4";
//     container_div.style.padding = "22px";
//     const package_name = document.createElement("h1");
//     package_name.innerHTML = investment_package.package_name;

//     const package_ul = document.createElement("ul");
//     const package_min_li = document.createElement("span");
//     const package_max_li = document.createElement("span");
//     package_min_li.style.fontSize="20px"
//     package_max_li.style.fontSize="20px"
//     const package_return_li = document.createElement("li");
//     const package_return_li_b = document.createElement("b");
//     const package_principal_li = document.createElement("li");
//     const package_instant_li = document.createElement("li");

//     package_return_li_b.style.color = "#fff";
//     package_return_li_b.innerHTML = `${investment_package.percentage}`;
//     package_min_li.innerHTML = `Min: $${investment_package.min}`;
//     package_max_li.innerHTML = `Max: $${investment_package.max}`;

//     package_return_li.append(
//       `${investment_package.percentage}% Return After ${investment_package.payment_period} `,
//     );

//     package_principal_li.innerHTML = "PRINCIPAL WITHDRAWAL";
//     package_instant_li.innerHTML = "INSTANT WITHDRAWAL";
//     const package_btn = document.createElement("a");
//     package_btn.href = "register.html";
//     // package_btn.className = "btn btn-default";
//     package_btn.innerHTML = "Get Started";
//     const main_blue_button_hover=document.createElement("div")
//     main_blue_button_hover.className = "main-blue-button-hover";
//     main_blue_button_hover.append(package_btn)
//     // package_btn.style.margin="4px"
//     // package_return_li.innerHTML=;
//     package_ul.append(
//       package_min_li,
//       package_max_li,
//       package_return_li,
//       package_principal_li,
//       package_instant_li,
//       main_blue_button_hover
//     );
//     plan_container_div.append(container_div);
//     container_div.append(package_name, package_ul);
// // plan_container_div.className = "owl-item active";
// // plan_container_div.style.width = "264.8px";
// // plan_container_div.style.marginRight = "30px";

// container_div.className = "item first-item delay-2 animated";
// container_div.style.visibility="visible"
// // class="live-auction-box wow fadeInUp delay-2 animated"
// //                                             style="visibility: visible;"

// // class="owl-item cloned" style="width: 264.8px; margin-right: 30px;"
//     // plan_container_div.style.padding = "20px";
//     // plan_container_div.append(package_name, package_ul);
//     document.querySelector("#pricing_list").append(plan_container_div);



  });


};

(async () => {
  try {
    const response = await fetch(
      "https://invesco-global-backend.glitch.me/api/investment_packages/fetch",
      // "http://localhost:5000/api/investment_packages/fetch",

      {
        method: "POST",
        headers: { "content-type": "application/json" },
        // body: JSON.stringify({ token, user }),
      },
    );
    const result = await response.json();
    console.log("result", result);
    if (result.error) {
      // alert(result.errMessage);
    } else {
      setText(result.message);
    }
  } catch (error) {
    console.log(error);
    // alert(error.message);
  }
})();


// alert











