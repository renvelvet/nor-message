let name = prompt("Siapa nama kamu?")
let item = prompt("Habis beli apa aja, nih?")

gratitudeMessage = (buyerName, productName) => `Terima kasih ${buyerName} telah membeli produk ${productName}`;

alert(gratitudeMessage(name,item))
