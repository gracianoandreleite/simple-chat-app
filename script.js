const messageInput = document.getElementById('messageInput');
const messageContainer = document.getElementById('messageContainer');
const userSelect = document.getElementById('userSelect');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');

function createMessage(text, user) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(user === 'User1' ? 'sms1' : 'sms2');
    messageDiv.textContent = text;
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function checkMessages() {
    const div2 = document.querySelector('.div2');
    const noMessages = document.querySelector('.no-messages');
    
    const hasMessages = div2.querySelector('.sms1, .sms2');
    if (!hasMessages) {
        noMessages.style.display = 'block';
    } else {
        noMessages.style.display = 'none';
    }
}

sendBtn.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    const selectedUser = userSelect.value;

    if (messageText !== '') {
        createMessage(messageText, selectedUser);
        messageInput.value = '';
        messageInput.focus();
        checkMessages();
    }
});

clearBtn.addEventListener('click', () => {
    messageContainer.innerHTML = '';
    checkMessages();
});

window.onload = function() {
    checkMessages();
};