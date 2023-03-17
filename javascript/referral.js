function copyToClipboard() {
  var copyText = document.querySelector("#referral").innerHTML;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    if (copyText.length < 1) return;
    alert("Copied wallet to clipboard");
    copied_to_clipboard = true;
  });
}

document.querySelector("#copy").onclick = () => copyToClipboard();

const setText2 = (user) => {
  let referral = document.querySelector("#referral");
  referral.href = user.referral_link;
  referral.innerHTML = user.referral_link;
};

(async () => {
  const user = getCookie("user");
  const token = getCookie("token");
  try {
    const response = await fetch(
      "https://invesco-global-backend.glitch.me/api/user/find",
      // "http://localhost:5000/api/user/find",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, user }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      alert(result.errMessage);
    } else {
      setText2(result.message);
    }
  } catch (error) {
    alert(error.message);
  }
})();
