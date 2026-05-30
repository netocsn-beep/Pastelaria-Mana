function finalizarPedido(){

let total = 15;

let adicionais = [];

document
.querySelectorAll("input[type=checkbox]:checked")
.forEach(item=>{
  total += Number(item.dataset.price);
  adicionais.push(item.value);
});

const combo = Number(
document.getElementById("combo").value
);

if(combo > 0){
  total = combo;
}

const batata = Number(
document.getElementById("batata").value
);

const bebida = Number(
document.getElementById("bebida").value
);

if(combo === 0){
  total += batata;
  total += bebida;
}

let taxa = Number(
document.getElementById("bairro").value
);

total += taxa;

const sabor1 =
document.getElementById("sabor1").value;

const sabor2 =
document.getElementById("sabor2").value;

const pagamento =
document.getElementById("pagamento").value;
  const nome =
document.getElementById("nome").value;

const telefone =
document.getElementById("telefone").value;

const rua =
document.getElementById("rua").value;

const numero =
document.getElementById("numero").value;

const referencia =
document.getElementById("referencia").value;

const troco =
document.getElementById("troco").value;

let mensagem =
let mensagem =
`🍔 PASTELARIA MANÁ
Sabor que vem do Céu

👤 Cliente:
${nome}

📱 Telefone:
${telefone}

📍 Endereço:
${rua}

🏠 Número:
${numero}

📌 Referência:
${referencia}

🥟 Pastel:
${sabor1}
${sabor2 !== "Não quero" ? "+ " + sabor2 : ""}

🧀 Adicionais:
${adicionais.join(", ") || "Nenhum"}

🍟 Batata:
R$ ${batata}

🥤 Bebida:
R$ ${bebida}

🔥 Combo:
${combo > 0 ? "Sim" : "Não"}

🚚 Entrega:
R$ ${taxa}

💰 Total:
R$ ${total}

💳 Pagamento:
${pagamento}

💵 Troco:
${troco || "Não precisa"}

PIX:
91981018269

Cícero Sabino da Costa Neto
RecargaPay`;
