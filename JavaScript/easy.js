let questions = [
    {
      numb: 1,
      question: "5+3 ?",
      answer: "8",
      options: [
        "5",
        "3",
        "8",
        "15"
      ]
    },
    {
      numb: 2,
      question: "4+4",
      answer: "8",
      options: [
        "24",
        "8",
        "12",
        "16"
      ]
    },
    {
      numb: 3,
      question: "25-15",
      answer: "10",
      options: [
        "-25",
        "15",
        "-10",
        "10"
      ]
    },
    {
      numb: 4,
      question: "2+1",
      answer: "3",
      options: [
        "2",
        "5",
        "3",
        "1"
      ]
    },
    {
      numb: 5,
      question: "62-9 ",
      answer: "53",
      options: [
        "53",
        "35",
        "52",
        "50"
      ]
    
   }
    
  ];


  const start_btn = document.querySelector(".start_btn button");
  const info_box = document.querySelector(".info_box");
  
  const exit_btn = info_box.querySelector(".buttons .quit");
  const continue_btn = info_box.querySelector(".buttons .restart");
  
  const quiz_box = document.querySelector(".quiz_box");
  const result_box = document.querySelector(".result_box");
  const option_list = document.querySelector(".option_list");
  

  
  
  start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); 
    document.getElementById('welcome').style.visibility="hidden"
  };
  
 
  exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); 
  };
  
  
  continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    

  };
  
  let que_count = 0;
  let que_numb = 1;
  let userScore = 0;
  let counter;
  let counterLine;
  let widthValue = 0;
  
  const restart_quiz = result_box.querySelector(".buttons .restart");
  const quit_quiz = result_box.querySelector(".buttons .quit");
  
  
  restart_quiz.onclick=() => {
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    next_btn.classList.remove("show"); //hide the next button
  };
  
  
  
  // if quitQuiz button clicked
  quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
  };
  

  
  const next_btn = document.querySelector("footer .next_btn");
  const bottom_ques_counter = document.querySelector("footer .total_que");
  
  // if Next Que button clicked
  next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
      
      que_count++; 
      que_numb++; 
      showQuetions(que_count);
      queCounter(que_numb); 
      clearInterval(counter);
      clearInterval(counterLine); 
    
    } else {
      showResult(); 
    }
  };
  
  // getting questions and options from array
  function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
  
    
    let que_tag =
      "Q" +
      questions[index].numb +
      ") " +
      questions[index].question +
      "</span>";
    let option_tag =
      '<div class="option"><span>' +
      questions[index].options[0] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[1] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[2] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[3] +
      "</span></div>";
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
    const option = option_list.querySelectorAll(".option");
  
    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick", "optionSelected(this)");
    }
  }
  // creating the new div tags which for icons
  let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
  let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
  
  //if user clicked on option
  function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
  
    if (userAns == correcAns) {
      //if user selected option is equal to array's correct answer
      userScore +=2; //upgrading score value with 1
      answer.classList.add("correct"); //adding green color to correct selected option
      answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
      console.log("Correct Answer");
      console.log("Your correct answers = " + userScore);
    } else {
      answer.classList.add("incorrect"); //adding red color to correct selected option
      answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
      console.log("Wrong Answer");
  
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Auto selected correct answer.");
        }
      }
    }
    for (i = 0; i < allOptions; i++) {
      option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
  }

  

 function playSound(soundfile){
  document.getElementById("sound").innerHTML="<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\"/>";
}

  function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore >= 7) {
      playSound("congrats.mp3"); 
      // if user scored equal or more than 15
      //creating a new span tag and passing the user score number and total question number
      icon1 = document.getElementById("icon1").style.visibility="visible"
     
      let scoreTag =
        userScore +
        "/ 10"+" "
        +"Congrats you pass"
        ;
      scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
      
      
    } else {
      
      playSound("fail.mp3"); 
      icon2 = document.getElementById("icon2").style.visibility="visible"
      
      let scoreTag =
     
      userScore +
      "/ 10" +" "
      +"sorry you failed , try again !"
        ;
      scoreText.innerHTML = scoreTag;
      
      
    }
  }
  
  
  
  function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag =
      index +"/"+
      questions.length 
      ;
    bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
  }
  
