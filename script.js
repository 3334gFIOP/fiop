document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");
    const panels = document.querySelectorAll(".panel");

    panels[0].style.maxHeight = panels[0].scrollHeight + "px";
    panels[0].classList.add("open");

    accordions.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            panels.forEach((p, i) => {
                if (i !== index) {
                    p.style.maxHeight = null;
                    p.classList.remove("open");
                }
            });

            const panel = btn.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove("open");
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add("open");
            }
        });
    });
});



const firebaseConfig = {
apiKey: "AIzaSyBbhKhCa5ATLTlcoOQV6t6ThKizL1SbWdw",
authDomain: "fiop-dev.firebaseapp.com",
projectId: "fiop-dev",
storageBucket: "fiop-dev.firebasestorage.app",
messagingSenderId: "744068750022",
appId: "1:744068750022:web:170333e242bbd4888155c7",
measurementId: "G-KWTFV991QR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

db.ref("test").set({ message: "Hello Firebase!" });


// Generate random username
const adjectives = ["Happy", "Crazy", "Blue", "Silent", "Fast"];
const nouns = ["Tiger", "Panda", "Ninja", "Fox", "Robot"];

function randomUsername() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adj} ${noun}`;
}

const username = randomUsername();

// Elements
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

// Send message
sendBtn.addEventListener("click", () => {
    const text = messageInput.value.trim();
    if (!text) return;

    const message = {
        user: username,
        text: text,
        timestamp: Date.now()
    };

    db.ref("messages").push(message);
    messageInput.value = "";
});

// Listen for new messages
db.ref("messages").on("child_added", (snapshot) => {
    const msg = snapshot.val();
    const msgDiv = document.createElement("div");
    msgDiv.textContent = `${msg.user}: ${msg.text}`;
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});