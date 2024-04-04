const get_loan_request = () => {
  const urlParams = new URLSearchParams(location.search);

  for (const [key, value] of urlParams) {
    return key;
  }
};

const get_adminInfo = (cname) => {
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
  window.location.href = "/admin";
};

// const addProblem = async (data) => {
//   document.querySelector("#add_to_problem").innerHTML = "Proccessing...";
//   try {
//     const response = await fetch(
//       "https://invesco-global-backend.glitch.me/api/admin/loan_request/problem",
//       {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(data),
//       },
//     );
//     const result = await response.json();
//     console.log(result);
//     if (result.error) {
//       document.querySelector("#errMessage").innerHTML = result.errMessage;
//     } else {
//       document.querySelector("#add_to_problem").innerHTML = "Success";

//       window.location.replace("/admin/pending-deposit.html");
//     }
//   } catch (error) {
//     document.querySelector("#add_to_problem").innerHTML = "Try again";
//     console.log(error);
//   }
// };

// document.querySelector("#add_to_problem").onclick = () => {
//   event.preventDefault();
//   const admin = get_adminInfo("admin");
//   const token = get_adminInfo("admin_token");
//   console.log(token);
//   const loan_request = get_loan_request();

//   addProblem({ token, admin, loan_request });
// };

// const handle_delete_loan_request = async (btn,loan_id) => {
//   btn.innerHTML = "Proccessing...";
//   let token = get_adminInfo("admin_token");
//   let admin = get_adminInfo("admin");
//   console.log(deposit_id);
//   try {
//     const response = await fetch(
//       "https://invesco-global-backend.glitch.me/api/admin/loan_request/delete",
//       {
//         method: "DELETE",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ token, admin, loan_request: deposit_id }),
//       },
//     );
//     const result = await response.json();
//     console.log(result);
//     if (result.error) {
//       btn.innerHTML = "Try again";
//       document.querySelector(".errMessage").innerHTML = result.errMessage;
//       console.log(result);
//     } else {
//       alert(result.message);
//       btn.innerHTML = "Success";
//       window.location.href = "/admin/pending-deposit.html";
//     }
//   } catch (err) {
//     btn.innerHTML = "Try again";
//     console.log(err);
//     console.log(err.message);
//   }
// };






const handle_disaprove_loan = async (btn, loan_request) => {
  let token = get_adminInfo("admin_token");
  let admin = get_adminInfo("admin");
  btn.innerHTML = "Proccessing...";
  try {
    const response = await fetch(
      "https://invesco-global-backend.glitch.me/api/admin/loan_request/crud/disaprove",
      // "http://localhost:5000/api/admin/loan_request/crud/disaprove",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, admin, loan_request }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      btn.innerHTML = "Try again";
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      return;
    }
    btn.innerHTML = "Success";
    window.location.replace("/admin/pending-loan.html");
  } catch (err) {
    btn.innerHTML = "Try again";

    console.log(err);
    document.querySelector(".errMessage").innerHTML = err.message;
  }
};


document.querySelector("#delete_btn").onclick = () => {
  event.preventDefault();
  handle_disaprove_loan(
    document.querySelector("#delete_btn"),
    get_loan_request(),
  );
};



const submit_loan_approval = async (form) => {
  document.querySelector("#approve_loan").innerHTML = "processing...";
  try {
    const response = await fetch(
     "https://invesco-global-backend.glitch.me/api/admin/deposit/approve",
      // "http://localhost:5000/api/admin/loan_request/crud",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#approve_loan").innerHTML = "Try again";
      return;
    }
    document.querySelector("#approve_loan").innerHTML = "success";
    window.location.href = "/admin/pending-loan.html";
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#approve_loan").innerHTML = "Try again";
    console.log(err);
  }
};
// //deposit-details

document.querySelector("#approve_loan").onclick = () => {
  event.preventDefault();
  const amount = document.querySelector("#loan_amount");

  if (!amount.value) return (amount.style.border = "2px solid red");
  amount.style.border = "2px solid #fff";
  const admin = get_adminInfo("admin");
  const token = get_adminInfo("admin_token");
  const loan_request = get_loan_request();
  submit_loan_approval({
    admin: admin,
    token: token,
    loan_request,
    loan_amount: amount.value,
  });
};

const create_element = (data) => {
  document.querySelector("#loan_amount").value = data.loan_amount;
  document.querySelector("#percentage").value = data.interest;
  document.querySelector("#loan_details").innerHTML = data.loan_details;
  document.querySelector("#loan_type").innerHTML = data.loan_type;
  document.querySelector("#user").innerHTML = data.user.username;
  document.querySelector("#loan_duration").innerHTML = data.loan_duration;
//   document.querySelector("#transaction_id").innerHTML = data._id;
};

(async () => {
  let admin = get_adminInfo("admin");
  let token = get_adminInfo("admin_token");
  let loan_request = get_loan_request();
  try {
    const response = await fetch(
       "https://invesco-global-backend.glitch.me/api/admin/loan_request/single",
      // "http://localhost:5000/api/admin/loan_request/one",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ admin, token, loan_request }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector("#errMessage").innerHTML = result.errMessage;

    } else {
      create_element(result.message);
    }
  } catch (error) {
    console.log(error)
    document.querySelector("#errMessage").innerHTML = error.message;
  }
})();
