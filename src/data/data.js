const products = [
    {
        id: "1231",
        name: "Fotoprotector Fusion Water Magic Isdin",
        description: "Fotoprotector facial ultraligero de fase externa acuosa y uso diario que se funde con la piel sin dejar residuo graso. Con ácido hialurónico",
        price: 99,
        stock: 10,
        category: "belleza",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/19994504_1?wid=200&hei=200&qlt=70"
    },
    {
        id: "1232",
        name: "Cartera City Malley Aldo",
        description: "¡Si eres amante de la moda las carteras de mujer de Aldo son la opción ideal para ti!",
        price: 129,
        stock: 5,
        category: "bolsos",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/20144566_1?wid=200&hei=200&qlt=70"
    },
    {
        id: "1233",
        name: "Zapatos casuales Mujer Milano Bags",
        description: "Colección de zapatos para mujer Milano Bags y encuentra el par perfecto para ti.",
        price: 350,
        stock: 5,
        category: "zapatos",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/19724641_2?wid=200&hei=200&qlt=70"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 1000);
    });
  };
  
  export default getProducts