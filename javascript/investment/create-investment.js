const handle_submit_request = async (form) => {
  const token = getCookie("token");
  const user = getCookie("user");
  document.querySelector("#submit").innerHTML = "proccesing...";
  try {
    const response = await fetch(
      "https://grandvilleglobalfinance-api.glitch.me/api/user/create_investment",
      // "http://localhost:5000https://grandvilleglobalfinance-api.glitch.me/api/user/create_investment",

      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          token,
          user,
          investment_plan: form.plan,
          investment_amount: form.amount,
          completion_time: form.completion_time,
          // return_time: return_time.value,
          profit: form.profit,
        }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "try again";
      return;
    }
    document.querySelector("#submit").innerHTML = "success";
    window.location.href = `/action/loading.html`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "try again";
  }
};

const handle_button_request = (selected_package, investment_amount) => {
  // if (!amount.value) return;

  // const package = investment_packages.filter(
  //   (package) => package.package_name == plan.value,
  // );
  // if (parseInt(amount.value) < package[0].min) return show_err();
  // disable_show_err();
  // var percentage = `${package[0].percentage}%`;
  // var earning = `My Profit: $${Math.round(
  //   (amount.value / 100) * package[0].percentage,
  // )}`;
  // payment_period = package[0].payment_period;
  // profit = Math.round((amount.value / 100) * package[0].percentage);
  // write_percentage(percentage, earning, payment_period);
  if (investment_amount < selected_package.package_min) {
    document.querySelector("#investment_amount").style.border = "2px solid red";
    document.querySelector(
      "#errMessage",
    ).innerHTML = `Investment amount must not be lesser than $${selected_package.package_min} which is minimum amount for the selected plan`;
    return;
  }

  let profit = Math.round(
    (investment_amount / 100) * selected_package.percentage,
  );
  handle_submit_request({
    profit,
    plan: selected_package.package_name,
    completion_time: selected_package.payment_period,
    amount: investment_amount,
  });
};

document.querySelector("#submit").onclick = () => {
  // let plan = document.querySelector("#plan");
  let investment_amount = document.querySelector("#investment_amount");

  if (!selected_package) {
    document
      .querySelectorAll("#plan")
      .forEach((plan) => (plan.style.border = "2px solid red"));
    return;
  }

  // return (plan.style.border = "2px solid red");

  if (!investment_amount.value)
    return (investment_amount.style.border = "2px solid red");
  handle_button_request(selected_package, investment_amount.value);
};
