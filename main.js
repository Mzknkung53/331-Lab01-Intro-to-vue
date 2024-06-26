const { createApp, ref } = Vue
createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const description = ref('This is boots')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(false)
        const inventory = ref(7)
        const onsale = ref(true)
        return{
            product,
            description,
            image,
            link,
            inStock,
            inventory,
            onsale
        }
    }
}).mount('#app')