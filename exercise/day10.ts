// no.1

function phoneNumber(input: string){
    if (input.length !== 12) {
        return "Invalid phone number";
    }

    for(let i = 0 ;i < input.length;i++) {
        if (input[i] < "0" || input[i] > "9") {
            return "Invalid phone number";
        }
    }

    input = "62" + input.slice(1);

    let template = "(xxxx)-xxxx-xxxx";

    input.split("").forEach((item) => {
        template = template.replace("x",item);
    });
    
    return template;
}

console.log(phoneNumber("085234342453"));

// no.2

// class onlineShop {
//     product: Product[];
//     cart: {jumlah: number ;product: Product}[];

//     constructor(){
//         this.product = [];
//         this.cart = [];
//     }

//     tambahProduct(product: Product) {
//         const existingProduct = this.products.find((p) => phoneNumber.nama === product.nama);

//         if ( existingProduct) {
//             return "produk sudah ada dikatalog";
//         }

//         this.products.push(product);
//         return "Tambah produk sukses!";
//     }

//     tambahKeranjang(jumlah: number, product: Product) {
//         const availableProduct = this.products.find((p) => p.nama === product.nama);

//         if (availableProduct) {
//             return "Produk tidak ada dikatalog"
//         }

//         let cartItem = this.cart.find((item) => item.product.nama === product.nama);

//         if(cartItem) {
//             if(availableProduct.stok >= jumlah){
//                 availableProduct.stok -= jumlah;
//                 cartItem.jumlah += jumlah;
//                 return "produk berhasil ditambahkan ke keranjang";
//             } else {
//                 return {
//                     message: "stok tidak mencukupi",
//                     remainingStok: availableProduct.stok,
//                 };
//             }
//         } else {
//             if(availableProduct.stok >= jumlah){
//                 availableProduct.stok -= jumlah;
//                 cartItem.jumlah += jumlah;
//                 return "produk berhasil ditambahkan ke keranjang";
//             } else {
//                 return {
//                     message: "stok tidak mencukupi",
//                     remainingStok: availableProduct.stok,
//                 };
//         }
//     }
// }