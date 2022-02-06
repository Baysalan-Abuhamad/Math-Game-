let questions = [
    {
      numb: 1,
      question: "5+10-6 ?",
      answer: "9",
      options: [
        "21",
        "15",
        "9",
        "10"
      ]
    },
    {
      numb: 2,
      question: "38-4-9",
      answer: "25",
      options: [
        "24",
        "8",
        "12",
        "25"
      ]
    },
    {
      numb: 3,
      question: "-65 -14 +2 =",
      answer: "-77",
      options: [
        "17",
        "-77",
        "77",
        "7"
      ]
    },
    {
      numb: 4,
      question: "18 / 3 - 6 =",
      answer: "0",
      options: [
        "1",
        "0",
        "18",
        "-1"
      ]
    },
    {
      numb: 5,
      question: "9 * 9 -20 =  ",
      answer: "21",
      options: [
        "20",
        "81",
        "21",
        "22"
      ]
    
   },
   {
    numb:6,
    question: "0 / 4 + 4=",
    answer: "4",
    options: [
      "4",
      "0",
      "8",
      "-8"
    ]
  },
  {
    numb: 7,
    question: "25 / 5 - 5 =",
    answer: "-5",
    options: [
      "-10",
      "5",
      "-5",
      "-10"
    ]
  },

  {
    numb: 8,
    question: "100 * 0 * 4",
    answer: "0",
    options: [
      "4",
      "0",
      "100",
      "400"
    ]
  },

  {
    numb: 9,
    question: "22 - 7 * 2=",
    answer: "8",
    options: [
      "9",
      "24",
      "18",
      "8"
    ]
  },

  {
    numb: 10,
    question: "10 * 10 * 10 =",
    answer: "1000",
    options: [
      "1000",
      "100",
      "10",
      "0"
    ]
  },

  {
    numb: 11,
    question: "100 / 5 + 5 = ",
    answer: "25",
    options: [
      "5",
      "10",
      "25",
      "20"
    ]
  },
  {
    numb: 12,
    question: "(4+ 14) * 2 =",
    answer: "36",
    options: [
      "24",
      "8",
      "12",
      "36"
    ]
  },
  {
    numb: 13,
    question: "6/0+6 =",
    answer: "12",
    options: [
      "0",
      "6",
      "12",
      "-12"
    ]
  },
  {
    numb: 14,
    question: "28 + 4 - 6 =",
    answer: "26",
    options: [
      "26",
      "16",
      "10",
      "0"
    ]
  },
  {
    numb: 15,
    question: "50 * 2 -17",
    answer: "83",
    options: [
      "5",
      "17",
      "30",
      "83"
    ]
  
 },
 {
  numb:16,
  question: "10 * 10 + 10",
  answer: "110",
  options: [
    "100",
    "110",
    "-110",
    "0"
  ]
},
{
  numb:17,
  question: "0/ 0 +100",
  answer: "100",
  options: [
    "0",
    "100",
    "-100",
    "-1"
  ]
},

{
  numb: 18,
  question: "100 * 0 + 100",
  answer: "100",
  options: [
    "1",
    "0",
    "100",
    "10"
  ]
},

{
  numb: 19,
  question: "3 * 9 + 7 = ",
  answer: "34",
  options: [
    "9",
    "24",
    "34",
    "27"
  ]
},

{
  numb: 20,
  question: "15 / 4 - 5 =",
  answer: "-1.25",
  options: [
    "125",
    "1.25",
    "-1.25",
    "0"
  ]
},
{
    numb: 21,
    question: "20 / 6 + 4  =",
    answer: "7.3",
    options: [
      "7.3",
      "1",
      "7",
      "-7.3"
    ]
  },
  {
    numb: 22,
    question: "16 / 2 - 16",
    answer: "-8",
    options: [
      "16",
      "8",
      "12",
      "-8"
    ]
  },
  {
    numb: 23,
    question: "34 + 5 +6 =",
    answer: "45",
    options: [
      "40",
      "45",
      "-40",
      "-45"
    ]
  },
  {
    numb: 24,
    question: "1 * 0 +0=",
    answer: "0",
    options: [
      "1",
      "0",
      "10",
      "-1"
    ]
  },
  {
    numb: 25,
    question: "15 * 2 - 40= ",
    answer: "-10",
    options: [
      "0",
      "10",
      "-10",
      "30"
    ]
}


    
  ];

  //selecting all required elements
  const start_btn = document.querySelector(".start_btn button");
  const info_box = document.querySelector(".info_box");
  
  const exit_btn = info_box.querySelector(".buttons .quit");
  const continue_btn = info_box.querySelector(".buttons .restart");
  
  const quiz_box = document.querySelector(".quiz_box");
  const result_box = document.querySelector(".result_box");
  const option_list = document.querySelector(".option_list");
  

  
  // if startQuiz button clicked
  start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
    document.getElementById('welcome').style.visibility="hidden"
  };
  
  // if exitQuiz button clicked
  exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
  };
  
  // if continueQuiz button clicked
  continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    

  };
  
  let que_count = 0;
  let que_numb = 1;
  let userScore = 0;
  let counter;
  let counterLine;
  let widthValue = 0;
  
  const restart_quiz = result_box.querySelector(".buttons .restart");
  const quit_quiz = result_box.querySelector(".buttons .quit");
  
  // if restartQuiz button clicked
  restart_quiz.onclick=() => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    
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
      //if question count is less than total question length
      que_count++; //increment the que_count value
      que_numb++; //increment the que_numb value
      showQuetions(que_count); //calling showQestions function
      queCounter(que_numb); //passing que_numb value to queCounter
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
    
    } else {
      showResult(); //calling showResult function
    }
  };
  
  // getting questions and options from array
  function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
  
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag =
      "Q" +
      questions[index].numb +
      " ) " +
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
    if (userScore >= 45) {
        playSound("congrats.mp3"); 
        icon1 = document.getElementById("icon1").style.visibility="visible"
        icon2 = document.getElementById("icon2").style.visibility="hidden"
      let scoreTag =
        userScore +
        "/ 50" +" "
        +"Congrats you pass"
        ;
      scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text

    } else {
        playSound("fail.mp3"); 
     icon1 = document.getElementById("icon1").style.visibility="hidden"
     icon2 = document.getElementById("icon2").style.visibility="visible"
      let scoreTag =
     
      userScore +
      "/ 50" +" "
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
  























