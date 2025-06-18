// Wait for both DOM and quiz data to be loaded
document.addEventListener("DOMContentLoaded", () => {
  // Check if quiz data is available
  if (typeof window.quizData === "undefined") {
    console.error("Quiz data not found! Make sure quiz-data.js is loaded before script.js")

    // Create a fallback quiz data with just a few questions for testing
    window.quizData = {
      os: {
        1: [
          {
            question: "Which of the following is NOT a function of an operating system?",
            options: ["Memory management", "Process management", "Device management", "Database management"],
            correctAnswer: "Database management",
          },
          {
            question: "What is the primary purpose of an operating system?",
            options: [
              "To provide a user interface",
              "To manage hardware resources",
              "To run application software",
              "To connect to the internet",
            ],
            correctAnswer: "To manage hardware resources",
          },
          {
          question: "What is the primary purpose of an operating system?" ,
          options: [
"To provide a user interface",
"To manage hardware resources",
"To run application software",
"To connect to the internet"
],
correctAnswer: "To manage hardware resources"
          },
          {
question: "Which component of the operating system is responsible for managing memory?",
options: [
"File system",
"Memory manager",
"Process scheduler",
"Device driver"
],
correctAnswer: "Memory manager"
          },
          {
question: "What does GUI stand for in operating systems?",
options: [
"Graphical User Interaction",
"Graphical User Interface",
"Graphical Unified Interface",
"General User Interface"
],
correctAnswer: "Graphical User Interface"
          },
          
          {
question: "Which of the following is an example of an open-source operating system?",
options: [
"Windows",
"Linux",
"MacOS",
"DOS"
],
correctAnswer: "Linux"
  },
          {
question: "What is multitasking in operating systems?",
options: [
"Running multiple processes simultaneously",
"Running a single process",
"Running processes sequentially",
"Running background services only"
],
correctAnswer: "Running multiple processes simultaneously"
          },
          {
question: "Which of the following is NOT a function of an operating system?",
options: [
"Managing hardware resources",
"Providing a user interface",
"Running application software",
"Manufacturing hardware components"
],
correctAnswer: "Manufacturing hardware components"
          },
          {
question: "What is the main function of a command interpreter in an operating system?",
options: [
"To provide the interface between API and application program",
"To handle the files in the operating system",
"To get and execute the next user-specified command",
"To manage hardware resources"
],
correctAnswer: "To get and execute the next user-specified command"
          },
          {
question: "Which of the following is a real-time operating system?",
options: [
"Windows",
"Unix",
"RTOS",
"Linux"
],
correctAnswer: "RTOS"
          },
          {
question: "What is the role of a device controller in a computer system?",
options: [
"Execute all programs sent to it",
"In charge of a specific device type",
"Manage the operating system functions",
"Control access to all resources"
],
correctAnswer: "In charge of a specific device type"
          },
          {
question: "Which interface is typically used to access the services of an operating system?",
options: [
"System calls",
"API",
"Library",
"Assembly instructions"
],
correctAnswer: "System calls"
        ],
      },
    }
  }

  // DOM Elements
  const loadingScreen = document.getElementById("loading-screen")
  const topicSelection = document.getElementById("topic-selection")
  const setSelection = document.getElementById("set-selection")
  const quizScreen = document.getElementById("quiz-screen")
  const resultsScreen = document.getElementById("results-screen")
  const reviewScreen = document.getElementById("review-screen")

  const loadingProgress = document.getElementById("loading-progress")
  const loadingPercentage = document.getElementById("loading-percentage")
  const selectedTopicTitle = document.getElementById("selected-topic-title")
  const backToTopicsBtn = document.getElementById("back-to-topics")

  const currentTopic = document.getElementById("current-topic")
  const currentSet = document.getElementById("current-set")
  const questionNumber = document.getElementById("question-number")
  const timer = document.getElementById("timer")
  const questionText = document.getElementById("question-text")
  const optionsContainer = document.getElementById("options-container")
  const prevButton = document.getElementById("prev-button")
  const nextButton = document.getElementById("next-button")
  const submitButton = document.getElementById("submit-button")

  const scorePercentage = document.getElementById("score-percentage")
  const circleProgress = document.getElementById("circle-progress")
  const correctAnswers = document.getElementById("correct-answers")
  const totalquestions = document.getElementById("total-questions")
  const feedbackText = document.getElementById("feedback-text")
  const reviewButton = document.getElementById("review-button")
  const restartButton = document.getElementById("restart-button")
  const homeButton = document.getElementById("home-button")

  const reviewquestionNumber = document.getElementById("review-question-number")
  const reviewquestionText = document.getElementById("review-question-text")
  const reviewoptionsContainer = document.getElementById("review-options-container")
  const reviewPrevButton = document.getElementById("review-prev-button")
  const reviewNextButton = document.getElementById("review-next-button")
  const backToResultsButton = document.getElementById("back-to-results-button")

  const celebrationContainer = document.getElementById("celebration-container")
  const sadContainer = document.getElementById("sad-container")

  // Quiz State
  let selectedTopic = ""
  let selectedSet = ""
  let currentquestions = []
  let currentquestionIndex = 0
  let userAnswers = []
  let timeRemaining = 30
  let timerInterval

  // Initialize the app
  function init() {
    simulateLoading()
    setupEventListeners()
    createTopicCards()
  }

  // Simulate loading progress
  function simulateLoading() {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 10
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setTimeout(() => {
          showScreen(topicSelection)
        }, 500)
      }
      loadingProgress.style.width = `${progress}%`
      loadingPercentage.textContent = `${Math.round(progress)}%`
    }, 200)
  }

  // Create topic cards dynamically
  function createTopicCards() {
    const topicsGrid = document.querySelector(".topics-grid")
    if (topicsGrid) {
      topicsGrid.innerHTML = "" // Clear existing cards

      // Create a card for each topic in quizData
      for (const topic in window.quizData) {
        const topicName = topic.charAt(0).toUpperCase() + topic.slice(1) // Capitalize first letter

        // Create emoji based on topic
        let emoji = "📚"
        if (topic === "os") emoji = "💻"
        if (topic === "java") emoji = "☕"
        if (topic === "python") emoji = "🐍"
        if (topic === "coa") emoji = "🔌"
        if (topic === "dbms") emoji = "🗄️"
        if (topic === "cpp") emoji = "🔧"
        if (topic === "c") emoji = "⚙️"
        if (topic === "html") emoji = "🌐"
        if (topic === "csharp") emoji = "🔷"
        if (topic === "javascript") emoji = "📜"
        if (topic === "css") emoji = "🎨"
        if (topic === "dsa") emoji = "🧩"

        const card = document.createElement("div")
        card.className = "topic-card"
        card.setAttribute("data-topic", topic)
        card.innerHTML = `
          <div class="topic-icon">${emoji}</div>
          <h3>${topicName}</h3>
        `

        card.addEventListener("click", () => {
          selectedTopic = topic
          selectedTopicTitle.textContent = topicName
          updateSetCards(topic)
          showScreen(setSelection)
        })

        topicsGrid.appendChild(card)
      }
    }
  }

  // Update set cards based on selected topic
  function updateSetCards(topic) {
    const setsContainer = document.querySelector(".sets-container")
    if (setsContainer) {
      setsContainer.innerHTML = "" // Clear existing cards

      // Get the number of sets available for this topic
      const sets = window.quizData[topic] ? Object.keys(window.quizData[topic]) : []

      // Create difficulty levels based on set number
      const difficulties = ["Beginner", "Easy", "Intermediate", "Advanced", "Expert"]

      // Create a card for each set
      sets.forEach((setNum) => {
        const difficultyIndex = Number.parseInt(setNum) - 1
        const difficulty = difficulties[difficultyIndex] || "Custom"

        const card = document.createElement("div")
        card.className = "set-card"
        card.setAttribute("data-set", setNum)
        card.innerHTML = `
          <h3>Set ${setNum}</h3>
          <p>${difficulty} Level</p>
        `

        card.addEventListener("click", () => {
          selectedSet = setNum
          startQuiz()
        })

        setsContainer.appendChild(card)
      })
    }
  }

  // Setup event listeners
  function setupEventListeners() {
    // Back to topics
    backToTopicsBtn.addEventListener("click", () => {
      showScreen(topicSelection)
    })

    // Quiz navigation
    prevButton.addEventListener("click", goToPreviousquestion)
    nextButton.addEventListener("click", goToNextquestion)
    submitButton.addEventListener("click", submitQuiz)

    // Results screen
    reviewButton.addEventListener("click", () => {
      initReviewMode()
      showScreen(reviewScreen)
    })
    restartButton.addEventListener("click", () => {
      resetQuiz()
      startQuiz()
    })
    homeButton.addEventListener("click", () => {
      resetQuiz()
      showScreen(topicSelection)
    })

    // Review navigation
    reviewPrevButton.addEventListener("click", goToPreviousReviewquestion)
    reviewNextButton.addEventListener("click", goToNextReviewquestion)
    backToResultsButton.addEventListener("click", () => {
      showScreen(resultsScreen)
    })
  }

  // Show a specific screen
  function showScreen(screen) {
    document.querySelectorAll(".screen").forEach((s) => {
      s.classList.remove("active")
    })
    screen.classList.add("active")
  }

  // Start the quiz
  function startQuiz() {
    // Get questions for the selected topic and set
    currentquestions = getquestions(selectedTopic, selectedSet)
    console.log(`Starting quiz with ${currentquestions.length} questions`)

    // Initialize quiz state
    currentquestionIndex = 0
    userAnswers = Array(currentquestions.length).fill(null)

    // Update UI
    currentTopic.textContent = selectedTopicTitle.textContent
    currentSet.textContent = selectedSet

    // Show first question
    showquestion()

    // Start timer
    startTimer()

    // Show quiz screen
    showScreen(quizScreen)
  }

  // Get questions for the selected topic and set
  function getquestions(topic, set) {
    console.log(`Getting questions for ${topic} set ${set}`)
    console.log(`Available topics: ${Object.keys(window.quizData).join(", ")}`)

    // Check if the topic and set exist in our data
    if (window.quizData[topic] && window.quizData[topic][set]) {
      console.log(`Found ${window.quizData[topic][set].length} questions`)
      return window.quizData[topic][set]
    }

    // Fallback to OS set 1 if the selected topic/set doesn't exist
    console.log(`Falling back to OS set 1 with ${window.quizData.os[1].length} questions`)
    return window.quizData.os[1]
  }

  // Show the current question
  function showquestion() {
    const question = currentquestions[currentquestionIndex]

    // Update question number
    questionNumber.textContent = `question ${currentquestionIndex + 1}/${currentquestions.length}`

    // Update question text
    questionText.textContent = question.question

    // Clear options container
    optionsContainer.innerHTML = ""

    // Add options
    question.options.forEach((option, index) => {
      const optionElement = document.createElement("div")
      optionElement.className = "option"
      if (userAnswers[currentquestionIndex] === option) {
        optionElement.classList.add("selected")
      }

      optionElement.innerHTML = `
        <span class="option-label">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${option}</span>
      `

      optionElement.addEventListener("click", () => {
        selectOption(option)
      })

      optionsContainer.appendChild(optionElement)
    })

    // Update navigation buttons
    updateNavigationButtons()

    // Apply a slight random position to the question container for dynamic positioning
    const questionContainer = document.getElementById("question-container")
    const randomX = Math.floor(Math.random() * 20) - 10
    const randomY = Math.floor(Math.random() * 20) - 10
    questionContainer.style.transform = `translate(${randomX}px, ${randomY}px)`
  }

  // Select an option
  function selectOption(option) {
    userAnswers[currentquestionIndex] = option

    // Update UI to show selected option
    const options = optionsContainer.querySelectorAll(".option")
    options.forEach((optionElement) => {
      if (optionElement.querySelector(".option-text").textContent === option) {
        optionElement.classList.add("selected")
      } else {
        optionElement.classList.remove("selected")
      }
    })
  }

  // Go to the previous question
  function goToPreviousquestion() {
    if (currentquestionIndex > 0) {
      currentquestionIndex--
      showquestion()
      resetTimer()
    }
  }

  // Go to the next question
  function goToNextquestion() {
    if (currentquestionIndex < currentquestions.length - 1) {
      currentquestionIndex++
      showquestion()
      resetTimer()
    }
  }

  // Update navigation buttons
  function updateNavigationButtons() {
    prevButton.disabled = currentquestionIndex === 0

    if (currentquestionIndex === currentquestions.length - 1) {
      nextButton.style.display = "none"
      submitButton.style.display = "block"
    } else {
      nextButton.style.display = "block"
      submitButton.style.display = "none"
    }
  }

  // Start the timer
  function startTimer() {
    timeRemaining = 30
    timer.textContent = `${timeRemaining}s`
    timer.classList.remove("warning")

    clearInterval(timerInterval)
    timerInterval = setInterval(() => {
      timeRemaining--
      timer.textContent = `${timeRemaining}s`

      if (timeRemaining <= 10) {
        timer.classList.add("warning")
      }

      if (timeRemaining <= 0) {
        clearInterval(timerInterval)

        // Auto-move to next question or submit if on last question
        if (currentquestionIndex < currentquestions.length - 1) {
          goToNextquestion()
        } else {
          submitQuiz()
        }
      }
    }, 1000)
  }

  // Reset the timer
  function resetTimer() {
    clearInterval(timerInterval)
    startTimer()
  }

  // Submit the quiz
  function submitQuiz() {
    clearInterval(timerInterval)

    // Calculate score
    const score = calculateScore()
    const percentage = Math.round((score / currentquestions.length) * 100)

    // Update results screen
    scorePercentage.textContent = `${percentage}%`
    circleProgress.setAttribute("stroke-dasharray", `${percentage}, 100`)

    // Set color based on score
    if (percentage >= 70) {
      circleProgress.setAttribute("stroke", "#4caf50")
    } else if (percentage >= 40) {
      circleProgress.setAttribute("stroke", "#ff9800")
    } else {
      circleProgress.setAttribute("stroke", "#f44336")
    }

    correctAnswers.textContent = score
    totalquestions.textContent = currentquestions.length

    // Set feedback text
    if (percentage >= 90) {
      feedbackText.textContent = "Outstanding! You're a master of this topic!"
    } else if (percentage >= 70) {
      feedbackText.textContent = "Great job! You have a solid understanding of the material!"
    } else if (percentage >= 50) {
      feedbackText.textContent = "Good effort! Keep studying to improve your knowledge."
    } else {
      feedbackText.textContent = "Keep learning! With more practice, you'll improve."
    }

    // Show results screen
    showScreen(resultsScreen)

    // Show celebration animation if score is good
    if (percentage >= 70) {
      showCelebration()
    }
  }

  // Calculate the score
  function calculateScore() {
    let score = 0
    for (let i = 0; i < currentquestions.length; i++) {
      if (userAnswers[i] === currentquestions[i].correctAnswer) {
        score++
      }
    }
    return score
  }

  // Initialize review mode
  function initReviewMode() {
    currentquestionIndex = 0
    showReviewquestion()
  }

  // Show review question
  function showReviewquestion() {
    const question = currentquestions[currentquestionIndex]

    // Update question number
    reviewquestionNumber.textContent = `question ${currentquestionIndex + 1}/${currentquestions.length}`

    // Update question text
    reviewquestionText.textContent = question.question

    // Clear options container
    reviewoptionsContainer.innerHTML = ""

    // Add options with correct/incorrect indicators
    question.options.forEach((option, index) => {
      const optionElement = document.createElement("div")
      optionElement.className = "option"

      if (option === question.correctAnswer) {
        optionElement.classList.add("correct")
      } else if (userAnswers[currentquestionIndex] === option) {
        optionElement.classList.add("incorrect")
      }

      let iconHtml = ""
      if (option === question.correctAnswer) {
        iconHtml = '<span class="option-icon">✓</span>'
      } else if (userAnswers[currentquestionIndex] === option) {
        iconHtml = '<span class="option-icon">✗</span>'
      }

      optionElement.innerHTML = `
        <span class="option-label">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${option}</span>
        ${iconHtml}
      `

      reviewoptionsContainer.appendChild(optionElement)
    })

    // Update navigation buttons
    reviewPrevButton.disabled = currentquestionIndex === 0
    reviewNextButton.disabled = currentquestionIndex === currentquestions.length - 1
  }

  // Go to previous review question
  function goToPreviousReviewquestion() {
    if (currentquestionIndex > 0) {
      currentquestionIndex--
      showReviewquestion()
    }
  }

  // Go to next review question
  function goToNextReviewquestion() {
    if (currentquestionIndex < currentquestions.length - 1) {
      currentquestionIndex++
      showReviewquestion()
    }
  }

  // Show celebration animation
  function showCelebration() {
    celebrationContainer.style.display = "block"

    // Create confetti
    for (let i = 0; i < 100; i++) {
      createConfetti()
    }

    setTimeout(() => {
      celebrationContainer.style.display = "none"
      celebrationContainer.innerHTML = ""
    }, 3000)
  }

  // Create a confetti particle
  function createConfetti() {
    const confetti = document.createElement("div")
    confetti.className = "confetti"

    // Random position
    const startX = Math.random() * window.innerWidth
    confetti.style.left = `${startX}px`
    confetti.style.top = "-10px"

    // Random color
    const colors = ["#f44336", "#2196f3", "#ffeb3b", "#4caf50", "#9c27b0", "#ff9800"]
    const color = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.backgroundColor = color

    // Random size
    const size = Math.random() * 10 + 5
    confetti.style.width = `${size}px`
    confetti.style.height = `${size}px`

    // Random rotation
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`

    // Random animation duration
    const duration = Math.random() * 3 + 2
    confetti.style.animationDuration = `${duration}s`

    celebrationContainer.appendChild(confetti)
  }

  // Show sad animation
  function showSadAnimation() {
    sadContainer.style.display = "flex"

    setTimeout(() => {
      sadContainer.style.display = "none"
    }, 1000)
  }

  // Reset quiz state
  function resetQuiz() {
    clearInterval(timerInterval)
    currentquestionIndex = 0
    userAnswers = []
  }

  // Start the app
  init()
})

