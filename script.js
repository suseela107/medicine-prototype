const medicineInfo = {
    en: {
        name: "Paracetamol 500 mg",
        uses: "Reduces fever and pain.",
        dosage: "Take one tablet after food.",
        sideEffects: "Nausea, dizziness.",
        expiry: "09-Jan-2028",
        manufacturer: "ABC Pharma"
    },

    te: {
        name: "పారాసిటమాల్ 500 మి.గ్రా",
        uses: "జ్వరం మరియు నొప్పిని తగ్గిస్తుంది.",
        dosage: "భోజనం తర్వాత ఒక మాత్ర తీసుకోండి.",
        sideEffects: "వికారం, తల తిరగడం.",
        expiry: "09-Jan-2028",
        manufacturer: "ABC Pharma"
    },

    hi: {
        name: "पैरासिटामोल 500 मि.ग्रा",
        uses: "बुखार और दर्द कम करता है।",
        dosage: "भोजन के बाद एक गोली लें।",
        sideEffects: "मतली, चक्कर आना।",
        expiry: "09-Jan-2028",
        manufacturer: "ABC Pharma"
    },

    ta: {
        name: "பாராசிட்டமால் 500 மி.கி.",
        uses: "காய்ச்சல் மற்றும் வலியை குறைக்கிறது.",
        dosage: "உணவுக்குப் பிறகு ஒரு மாத்திரை எடுத்துக்கொள்ளவும்.",
        sideEffects: "குமட்டல், தலைச்சுற்றல்.",
        expiry: "09-Jan-2028",
        manufacturer: "ABC Pharma"
    }
};

function translateText() {
    const lang = document.getElementById("language").value;

    document.querySelector("h2").innerText = medicineInfo[lang].name;

    document.getElementById("info").innerHTML = `
        <b>Uses:</b> ${medicineInfo[lang].uses}<br><br>
        <b>Dosage:</b> ${medicineInfo[lang].dosage}<br><br>
        <b>Side Effects:</b> ${medicineInfo[lang].sideEffects}<br><br>
        <b>Expiry Date:</b> ${medicineInfo[lang].expiry}<br><br>
        <b>Manufacturer:</b> ${medicineInfo[lang].manufacturer}
    `;
}
