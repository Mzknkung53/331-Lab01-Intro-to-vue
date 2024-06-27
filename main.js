const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        // Attributes
        const product = ref("Boots");
        const brand = ref("SE 331");
        const description = ref("Wears on both feet, keeps you warm");
        const inventory = ref(100);
        const link = ref("https://www.camt.cmu.ac.th/");
        const sale = ref(false);
        const onSale = ref(true);
        const details = ref(["50% cotton", "30% wool", "20% polyester"]);
        const variants = ref([
            { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50, sale: true},
            { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0, sale: false},
        ]);
        const selectedVariant = ref(0);
        const sizes = ref(["S", "M", "L"]);
        const cart = ref(0);

        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });
        
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity > 0;
        });

        const title = computed(() => {
            const variant = variants.value[selectedVariant.value];
            return brand.value + ' ' + product.value + (variant.sale ? ' is on sale' : ' is not on sale');
        });

        function add_to_cart() {
            cart.value++;
        }

        function update_image(variant_image) {
            image.value = variant_image;
        }

        function toggle_in_stock() {
            inStock.value = !inStock.value;
        }

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        // Return
        return { 
            title, 
            description, 
            image, 
            link, 
            inStock, 
            inventory, 
            sale, 
            details, 
            variants, 
            sizes, 
            cart, 
            add_to_cart, 
            update_image, 
            toggle_in_stock, 
            updateVariant, 
            onSale 
        };
    },
}).mount("#app");
