const PORTAL_URL = "http://localhost:34163"
const AUDETV_URL = "http://localhost:42747"

const allowedOrigins = [
    PORTAL_URL, AUDETV_URL
]

function checkLogin() {
    const token = localStorage.getItem('token')

    return {
        type: 'token',
        data: token
    }
}

function handleMessage(message) {
    if (!allowedOrigins.includes(message.origin)) {
        return console.log('Domínio não reconhecido')
    }

    if (message.data === 'checkLogin') {
        sendMessage(checkLogin(), message.origin)
    }
}

function sendMessage(message, targetOrigin) {
    parent.postMessage(message, targetOrigin)
}

window.addEventListener('message', handleMessage)


// const iframe = document.getElementById('checkIframe')
// const iframeWindow = iframe.contentWindow

// iframeWindow.postMessage('checkLogin', CONTA_URL)
