const { createApp, ref } = Vue;
createApp({
    setup() {
        // Attributes
        const product = ref("Boots");
        const description = ref("Wears on both feet, keeps you warm");
        const image = ref("./assets/images/socks_green.jpg");
        const inStock = ref(true);
        const inventory = ref(100);
        const link = ref("https://www.camt.cmu.ac.th/");
        const sale = ref(false);
        const details = ref(["50% cotton", "30% wool", "20% polyester"]);
        const variants = ref([
            { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
            { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
        ]);
        const sizes = ref(["S", "M", "L"]);
        const cart = ref(0);
        function add_to_cart() {
            cart.value++;
        }
        function update_image(variant_image) {
            image.value = variant_image;
        }
        function toggle_in_stock() {
            inStock.value = !inStock.value;
        }
        // return
        return { product, description, image, link, inStock, inventory, sale, details, variants, sizes, cart, add_to_cart, update_image, toggle_in_stock };
    },
}).mount("#app");