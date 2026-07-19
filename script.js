const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");


function addMessage(sender, text, type) {

    const message = document.createElement("div");

    message.className = type;

    message.innerHTML = `<b>${sender}</b><br>${text}`;

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;

}



function showTyping() {

    const typing = document.createElement("div");

    typing.className = "bot";

    typing.id = "typing";

    typing.innerHTML = "FansoAI is thinking... 🤖";

    chat.appendChild(typing);

    chat.scrollTop = chat.scrollHeight;

}



function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {

        typing.remove();

    }

}




function sendMessage() {


    let userText = input.value.trim();


    if (userText === "") return;



    addMessage("You", userText, "user");


    input.value = "";


    showTyping();



    fetch("http://localhost:3000/chat", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            message: userText

        })

    })


    .then(response => response.json())


    .then(data => {


        removeTyping();


        addMessage(

            "FansoAI",

            data.reply,

            "bot"

        );


    })


    .catch(error => {


        removeTyping();


        addMessage(

            "FansoAI",

            "I cannot connect to my brain yet 🤖. Start the server first.",

            "bot"

        );


    });


}




sendBtn.addEventListener("click", sendMessage);




input.addEventListener("keydown", function(event) {


    if (event.key === "Enter") {


        event.preventDefault();


        sendMessage();


    }


});





function clearChat() {


    chat.innerHTML = `

    <div class="bot">

    Hello! I am FansoAI. Ask me anything.

    </div>

    `;


}
