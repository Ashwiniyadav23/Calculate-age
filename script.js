document.getElementById("calculate-age-btn").addEventListener("click", () => {
    const birthDate = document.getElementById("birth-year").value;
    const birthParts = birthDate.split("-");
    const birthDay = parseInt(birthParts[0]);
    const birthMonth = parseInt(birthParts[1]) - 1; 
    const birthYear = parseInt(birthParts[2]);
  
    const today = new Date();
    let age = today.getFullYear() - birthYear;
    const monthDifference = today.getMonth() - birthMonth;
    const dayDifference = today.getDate() - birthDay;
  
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
  
    console.log("Calculated age: ", age); 
  
    const ageElement = document.getElementById("age");
    const milestoneMessage = document.getElementById("milestone-message");
  
    milestoneMessage.innerText = "";
  
    if (birthDate && age >= 0) {
      let counter = 0;
      const animationInterval = setInterval(() => {
        if (counter < age) {
          counter++;
          ageElement.innerText = counter;
          ageElement.classList.add("animate");
        } else {
          clearInterval(animationInterval);
          ageElement.classList.remove("animate");
        }
      }, 50);
        if (age <= 17) {
          milestoneMessage.innerText = "Happy teen years! Enjoy the rollercoaster of drama! 🎢😜";
        } else if (age === 18) {
            milestoneMessage.innerText = "Welcome to adulthood! Now you can legally make bad decisions! 🎉";
        } else if (age <= 25) {
            milestoneMessage.innerText = `In your ${age}? Time to figure out life... or just take naps! 😴`;
        } else if (age <= 30) {
            milestoneMessage.innerText = `Cheers to your ${age}! Adulting level: Expert (or still a noob)! 🎂`;
        } else if (age <= 40) {
            milestoneMessage.innerText = `Flirting with ${age}? Remember, age is just a number... and cake is life! 🎊`;
        } else if (age <= 50) {
            milestoneMessage.innerText = `Hitting ${age}? You're now officially a classic! 🏆`;
        } else if (age <= 75) {
            milestoneMessage.innerText = `In your ${age}? You've got wisdom... and probably a few good jokes! 😂`;
        } else if (age <= 100) {
            milestoneMessage.innerText = "Wow, a century! You must have the best stories! 🎉";
        } else {
            milestoneMessage.innerText = "A ghost? Because you're beyond this world! 👻";
        }
        

    } else {
      alert("Please enter a valid date in DD-MM-YYYY format.");
    }
  
      
  });
  
  document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("birth-year").value = "";
    document.getElementById("age").innerText = "0";
    document.getElementById("milestone-message").innerText = "";
  });
  