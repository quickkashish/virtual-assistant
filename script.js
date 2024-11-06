let btn = document.querySelector("#btn")
let content = document.querySelector("#content")

// we use SpeechSynthesisutterance to get the voice over.
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    // text_speak.lang = 'hi-GB' // this will change the voice from male to female
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours >= 0 && hours < 12){
        speak("Good Morning Sir")
    }
    else if(hours >= 12 && hours <= 4){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load', ()=>{
    // wishMe()
})

/* speech recognition :- speech recognition helps in listening to our voice and recognise it after that,
    it provides the data into the form of API by which we access our data.

    we have two types of speech recognition which is :- 
                - speaker dependent
                - speaker independent

    types of speech recognition :- speech recognition  and webkit speech recognition
*/

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new SpeechRecognition()

recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript= event.results[currentIndex][0].transcript.toLowerCase()
    content.innerText = transcript.toLowerCase()
    console.log(event)
    takeCommand(transcript.toLowerCase())
}

// Error handling
recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
};


btn.addEventListener("click",()=>{
    recognition.start()
})

function takeCommand(message){
    if(message.includes("hello") || message.includes("hey")){
        speak("Hello sir, how can i help you ?")
    }
    else if(message.includes("who are you")){
        speak("I am chitti, Virtual assistant created by kashish")
    }
    else if(message.includes("open youtube") || message.includes("Youtube kholiyo")){
        speak("Opening Youtube....")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open spotify")|| message.includes("play some music") || message.includes("songs")){
        speak("Opening Spotify")
        window.open("https://open.spotify.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open facebook") || message.includes("open fb")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedIn")
        window.open("https://in.linkedin.com/")
    }
    else if(message.includes("open whatsapp")){
        speak("Opening whatsapp")
        window.open("https://web.whatsapp.com/")
    }
    else if(message.includes("open gmail")){
        speak("opening Gmail")
        window.open("https://mail.google.com/")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.co.in/")
    }
    else if(message.includes("what is weather today") || message.includes("weather")){
        speak("Here is the weather forecast")
        window.open("https://weather.com/en-IN/")
    }
    else if(message.includes("news today") || message.includes("give me some breaking news") || message.includes("news")){
        speak("Here are the latest news headlines")
        window.open("https://news.google.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("https://www.online-calculator.com/")
    }
    else if(message.includes("show some quote") || message.includes("motivational lines")){
        speak("Here are some best quote")
        window.open("https://www.keepinspiring.me/")
    }
    else if(message.includes("open google maps")){
        speak("open google maps")
        window.open("https://www.google.co.in/maps")
    }
    else if(message.includes("what is time") || message.includes("time")){
        const now = new Date()
        const timeString = now.toLocaleTimeString()
        speak(`The time is ${timeString}`)
    }
    else if(message.includes("what is date today") || message.includes("date") || message.includes("date today")){
        const today = new Date()
        const dateString = today.toLocaleDateString()
        speak(`date today is ${dateString}`)
    }

}
