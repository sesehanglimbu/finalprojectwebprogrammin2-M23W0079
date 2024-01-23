document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form"),
        nextBtns = form.querySelectorAll(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        jsonOutput = document.getElementById('jsonOutput');


  // Handle Next Button Click
  nextBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          form.classList.add('secActive');
      });



      const slider = document.getElementById('wardNumber');
      const output = document.getElementById('wardNumberValue');
      output.textContent = slider.value; // Display the default slider value

      // Update the current slider value each time you drag the slider handle
      slider.oninput = function() {
          output.textContent = this.value;
      }
  });

  // Handle Back Button Click
  backBtn.addEventListener("click", () => form.classList.remove('secActive'));

  // Function to update time
  function updateTime() {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleTimeString();
      document.getElementById('real-time').textContent = formattedTime;
  }

  // Update the time every second
  setInterval(updateTime, 1000);
  updateTime(); // Initialize the time display



    // Update time function (if needed)




form.addEventListener("submit", function(event) {
event.preventDefault(); // Prevent default form submission

const formData = new FormData(form);
const jsonData = {};

for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
}

console.log("Form Data:", jsonData); // Debugging line

jsonOutput.value = JSON.stringify(jsonData, null, 2);
});

});
