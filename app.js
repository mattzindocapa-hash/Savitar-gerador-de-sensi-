let modoDpi = "SEM DPI";

function detectarDispositivo() {
    const info = navigator.userAgent;
    const display = document.getElementById('device-display');
    if (info.includes("Android")) {
        const match = info.match(/Android\s([0-9\.]*)/);
        display.innerText = `DISPOSITIVO: ANDROID ${match ? match[1] : ""}`;
    } else {
        display.innerText = "SISTEMA: COMPATÍVEL";
    }
}

function selectDpi(btn) {
    document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    modoDpi = btn.innerText;
}

function gerarSensi() {
    const resDiv = document.getElementById('resultado');
    const resText = document.getElementById('sensi-text');
    resDiv.style.display = "block";
    
    const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    let dpiExtra = "";
    if (modoDpi === "COM DPI") {
        dpiExtra = `
            <div class="sensi-item" style="border-color:#ffcc00">
                <span style="color:#ffcc00">🚀 DPI MÁXIMA</span>
                <span style="color:#ffcc00">${rng(720, 960)}</span>
            </div>
        `;
    }

    resText.innerHTML = `
        <p style="text-align:center; color:#00d9ff; font-size:0.8rem; margin-bottom:10px;">WIKI ATUALIZADA (LIMITE 200)</p>
        ${dpiExtra}
        <div class="sensi-item"><span> GERAL</span> <span class="sensi-val">${rng(180, 200)}</span></div>
        <div class="sensi-item"><span> RED DOT</span> <span class="sensi-val">${rng(170, 195)}</span></div>
        <div class="sensi-item"><span> MIRA 2X</span> <span class="sensi-val">${rng(185, 200)}</span></div>
        <div class="sensi-item"><span> MIRA 4X</span> <span class="sensi-val">${rng(180, 200)}</span></div>
        <div class="sensi-item"><span> MIRA AWM</span> <span class="sensi-val">${rng(50, 110)}</span></div>
        <div class="sensi-item"><span> OLHADINHA</span> <span class="sensi-val">${rng(150, 200)}</span></div>
        <div class="sensi-item" style="margin-top:10px; border-top:1px dashed #444">
            <span style="color:#fff"> BOTÃO DE ATIRAR</span> 
            <span style="color:#00ff88; font-weight:bold;">${rng(45, 62)}%</span>
        </div>
    `;
}

function ativarFlutuante() {
    alert("Balão Savitar ativado! Abra o jogo.");
}

window.onload = detectarDispositivo;
