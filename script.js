/* ==================================
   QUIZ
================================== */

// EDITAR PERGUNTAS AQUI

const perguntas = [
    {
        pergunta: "quem costuma responder mensagens mais rápido?",
        opcoes: ["eu", "você", "os dois"],
        correta: 0
    },
    {
        pergunta: "quem é mais teimoso?",
        opcoes: ["eu", "você", "ninguém 😅"],
        correta: 1
    },
    {
        pergunta: "quem demora mais para escolher algo?",
        opcoes: ["eu", "você", "os dois"],
        correta: 1
    },
    {
        pergunta: "quem fala mais?",
        opcoes: ["eu", "você", "depende do dia"],
        correta: 1
    },
    {
        pergunta: "quem manda mais fotos aleatórias?",
        opcoes: ["eu", "você", "os dois"],
        correta: 2
    },
    {
        pergunta: "quem é mais organizada?",
        opcoes: ["eu", "você", "os dois"],
        correta: 1
    },
    {
        pergunta: "quem costuma dormir primeiro?",
        opcoes: ["eu", "você", "ninguém"],
        correta: 1
    },
    {
        pergunta: "quem é mais romântica?",
        opcoes: ["eu", "você", "os dois"],
        correta: 2
    },
    {
        pergunta: "quem ama mais o outro?",
        opcoes: ["eu", "você", "os dois ❤️"],
        correta: 2
    },
    {
        pergunta: "pronta para desbloquear suas recompensas?",
        opcoes: ["sim ❤️", "claro ❤️", "com certeza ❤️"],
        correta: 0
    }
];

let perguntaAtual = 0;

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const progressFill =
    document.getElementById("progress-fill");

const questionCounter =
    document.getElementById("question-counter");

/* ==================================
   CARREGAR PERGUNTA
================================== */

function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    questionElement.textContent =
        pergunta.pergunta;

    questionCounter.textContent =
        `pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    progressFill.style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;

    answersElement.innerHTML = "";

    pergunta.opcoes.forEach((opcao, index) => {

        const button =
            document.createElement("button");

        button.classList.add("answer-btn");

        button.textContent = opcao;

        button.addEventListener("click", () => {

            responder(index);

        });

        answersElement.appendChild(button);

    });

}

/* ==================================
   RESPOSTA
================================== */

function responder(indiceSelecionado) {

    const pergunta =
        perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".answer-btn");

    botoes.forEach(btn => {

        btn.disabled = true;

    });

    if (indiceSelecionado === pergunta.correta) {

        botoes[indiceSelecionado]
            .classList.add("correct");

    } else {

        botoes[indiceSelecionado]
            .classList.add("wrong");

        botoes[pergunta.correta]
            .classList.add("correct");

    }

    setTimeout(() => {

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {

            carregarPergunta();

        } else {

            finalizarQuiz();

        }

    }, 1200);

}

/* ==================================
   FINALIZAR QUIZ
================================== */

function finalizarQuiz() {

    document
        .getElementById("unlock-section")
        .classList.remove("hidden");

    document
        .getElementById("unlock-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}

/* ==================================
   CONTADOR DE NAMORO
================================== */

const namoroData =
    new Date("2026-03-28T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca =
        agora - namoroData;

    const dias =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );

    const horas =
        Math.floor(
            (diferenca / (1000 * 60 * 60)) % 24
        );

    const minutos =
        Math.floor(
            (diferenca / (1000 * 60)) % 60
        );

    const segundos =
        Math.floor(
            (diferenca / 1000) % 60
        );

    document.getElementById("days")
        .textContent = dias;

    document.getElementById("hours")
        .textContent = horas;

    document.getElementById("minutes")
        .textContent = minutos;

    document.getElementById("seconds")
        .textContent = segundos;

}

setInterval(
    atualizarContador,
    1000
);

atualizarContador();

/* ==================================
   DIAS DESDE QUE SE CONHECERAM
================================== */

const conheceramData =
    new Date("2025-03-28");

function atualizarSurpresa() {

    const hoje = new Date();

    const conhecidos =
        Math.floor(
            (hoje - conheceramData)
            /
            (1000 * 60 * 60 * 24)
        );

    const namoro =
        Math.floor(
            (hoje - namoroData)
            /
            (1000 * 60 * 60 * 24)
        );

    document.getElementById(
        "known-days"
    ).textContent = conhecidos;

    document.getElementById(
        "love-days"
    ).textContent = namoro;

}

atualizarSurpresa();

/* ==================================
   MODAIS
================================== */

const letterModal =
    document.getElementById(
        "letter-modal"
    );

const galleryModal =
    document.getElementById(
        "gallery-modal"
    );

const surpriseModal =
    document.getElementById(
        "surprise-modal"
    );

document
    .getElementById("open-letter")
    .addEventListener("click", () => {

        letterModal.classList.remove(
            "hidden"
        );

    });

document
    .getElementById("open-gallery")
    .addEventListener("click", () => {

        galleryModal.classList.remove(
            "hidden"
        );

    });

document
    .getElementById("open-surprise")
    .addEventListener("click", () => {

        surpriseModal.classList.remove(
            "hidden"
        );

        criarCoracoes();

    });

document
    .querySelectorAll(".close-modal")
    .forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                letterModal.classList.add(
                    "hidden"
                );

                galleryModal.classList.add(
                    "hidden"
                );

                surpriseModal.classList.add(
                    "hidden"
                );

            }
        );

    });

/* ==================================
   MÚSICA
================================== */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById(
        "music-toggle"
    );

let tocando = false;

musicButton.addEventListener(
    "click",
    () => {

        if (!tocando) {

            music.play();

            tocando = true;

            musicButton.innerHTML =
                "❚❚";

        } else {

            music.pause();

            tocando = false;

            musicButton.innerHTML =
                "♫";

        }

    }
);

/* ==================================
   CHUVA DE CORAÇÕES
================================== */

function criarCoracoes() {

    const container =
        document.getElementById(
            "hearts-container"
        );

    const intervalo =
        setInterval(() => {

            const heart =
                document.createElement(
                    "div"
                );

            heart.classList.add(
                "heart"
            );

            heart.innerHTML = "❤️";

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.bottom =
                "-50px";

            container.appendChild(
                heart
            );

            setTimeout(() => {

                heart.remove();

            }, 6000);

        }, 300);

    setTimeout(() => {

        clearInterval(intervalo);

    }, 10000);

}

/* ==================================
   INICIAR QUIZ
================================== */

carregarPergunta();