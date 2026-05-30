function finalizarPedido(){

let total = 15;

let adicionais = [];

document
.querySelectorAll("input[type=checkbox]:checked")
.forEach(item=>{
total += Number(item.dataset.price);
adicionais.push(item.value);
});

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

let mensagem =
`🍔 PASTELARIA MANÁ

🥟 Pastel:
${sabor1}
${sabor2 !== "Não quero" ? "+ " + sabor2 : ""}

🧀 Adicionais:
${adicionais.join(", ") || "Nenhum"}

🚚 Taxa Entrega:
R$ ${taxa}

💰 Total:
R$ ${total}

💳 Pagamento:
${pagamento}

PIX:
91981018269
Cícero Sabino da Costa Neto
RecargaPay`;

window.open(
`https://wa.me/5591981018269?text=${encodeURIComponent(mensagem)}`
);

}
