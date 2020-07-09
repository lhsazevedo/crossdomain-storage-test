const CONTA_URL = "http://localhost:5000"

const allowedOrigins = [
    CONTA_URL
]

async function handleMessage(message) {
    await aguardar(500)

    if (!allowedOrigins.includes(message.origin)) {
        console.log('Domínio não reconhecido')
    }

    console.log(message)

    if (message.data.type === 'token' && message.data.data === 'token-logged-in') {
        document.getElementById('loading').style.display = 'none'
        document.getElementById('user').style.display = 'block'
        
        return
    }

    document.getElementById('loading').style.display = 'none'
    document.getElementById('login').style.display = 'block'
}

const iframe = document.getElementById('checkIframe')
const iframeWindow = iframe.contentWindow

iframeWindow.postMessage('checkLogin', CONTA_URL)

window.addEventListener('message', handleMessage)

function aguardar(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t);
    })
}