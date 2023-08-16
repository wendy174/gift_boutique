require 'faker'

price = Faker::Number.decimal(1_digits: 2) 
quantity = Faker::Number.between(from: 1, to: 100)
email = Faker::Internet.email
## Ten Items 
I1 = Item.create!(
    name: "6 Pcs I love Milk Press Gel Pens", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/products/S451c5a52540c41368b616e9a5374717dx_460x.jpg?v=1680367129", 
            "https://thekawaiishoppu.com/cdn/shop/products/Sfd57f47d3017413a8a255318e1708c48b_460x.jpg?v=1680367141", 
            "https://thekawaiishoppu.com/cdn/shop/products/S157cbe723f3f4e668c31c4528cc90f31s_460x.jpg?v=1680367149"
    quantity: quantity, 
    category: "stationery", 
    seller_id: s1.id
)

I2 = Item.create!(
    name: "Kawaii Bear Multi Colour Pop Pen", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/files/S8d8bc06936eb4516a38ee3eb948639b0Y_460x.jpg?v=1690479735",
            "https://thekawaiishoppu.com/cdn/shop/files/Sf63792a7b6b7424a9256f97069c351d7q_460x.jpg?v=1690479735",
            "https://thekawaiishoppu.com/cdn/shop/files/Sb7fda88c656140a0bf7f04666d4dff92b_460x.jpg?v=1690479735"
    quantity: quantity, 
    category: "stationery", 
    seller_id: s1.id
)

I3 = Item.create!(
    name: "Fortune Cat Keychain", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/files/Sb5349a8ee41a41b79aa6894308929574m_460x.jpg?v=1690224828",
            "https://thekawaiishoppu.com/cdn/shop/files/S69f9df179454425494cd2d14c7eb85faR_460x.jpg?v=1690224828"
    quantity: quantity, 
    category: "stationery", 
    seller_id: s1.id
)

I4 = Item.create!(
    name: "Red Panda Kawaii Plushie Soft Toy", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/products/S1e1a5eece2454a7d87b161709afe40f8G_460x.jpg?v=1687785743", 
            "https://thekawaiishoppu.com/cdn/shop/files/S9428fa49e013478792e9d9b8b04d74cdi_460x.jpg?v=1687785743"
    quantity: quantity, 
    category: "plushie", 
    seller_id: s2.id
)

I5 = Item.create!(
    name: "Piggy Squishy Jumbo Plushie", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/products/40-50-60-80cm-Squish-Pig-Stuffed-Doll-Lying-Plush-Piggy-Toy-Animal-Soft-Plushie-Pillow.jpg_640x640_1125e47b-e7fa-46ec-8810-92a1b839f7bc_460x.jpg?v=1677861660", 
            "https://thekawaiishoppu.com/cdn/shop/products/Hdeb5f5ee77a840bf92f872d37e24b662k_460x.jpg?v=1677861660"
            "https://thekawaiishoppu.com/cdn/shop/products/S5fd8f4e1319e4b48a0735fd12a409e02A_720x.jpg?v=1677861660"
    quantity: quantity, 
    category: "plushie", 
    seller_id: s2
)

I6 = Item.create!(
    name: "Sky Dragon Kawaii Anime Plushie", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/products/sky-dragon-kawaii-anime-plushie-80cm-white-soft-toy-the-kawaii-shoppu-1_460x.jpg?v=1657937156",
    quantity: quantity, 
    category: "plushie", 
    seller_id: s2.id
)

I7 = Item.create!(
    name: "Peas in a Pod Plush", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/products/peas-in-a-pod-plush-1-22cm-25cm-soft-toy-the-kawaii-shoppu-1_460x.jpg?v=1657954575", 
    quantity: quantity, 
    category: "plushie", 
    seller_id: s3.id
)

I8 = Item.create!(
    name: "Anime Cotton Bedding Set", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/products/3-4pcs-set-kawaii-anime-cotton-bedding-set-pink-full1-5m-bed-decor-the-kawaii-shoppu-1_460x.jpg?v=1657922642",
     "https://thekawaiishoppu.com/cdn/shop/products/3-4pcs-set-kawaii-anime-cotton-bedding-set-pink-decor-the-kawaii-shoppu-2_460x.jpg?v=1657922649", 
     "https://thekawaiishoppu.com/cdn/shop/products/3-4pcs-set-kawaii-anime-cotton-bedding-set-pink-decor-the-kawaii-shoppu-3_460x.jpg?v=1657922653"
    quantity: quantity, 
    category: "home", 
    seller_id: s3.id
)

I9 = Item.create!(
    name: "Shoppu Kawaii Snuddie Cloak Blanket Hoodie", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/products/Sec893cc389b8484aada28521cef74e14b_460x.jpg?v=1676570140", 
        "https://thekawaiishoppu.com/cdn/shop/products/S77d018490cbd4e97bfdba75db4e6b7d0M_460x.jpg?v=1676570140"
    quantity: quantity, 
    category: "Apparel", 
    seller_id: s3
)

I10 = Item.create!(
    name: "Cute Panda Japanese Style Chopstick Holder", 
    price: price, 
    image: "https://thekawaiishoppu.com/cdn/shop/products/cute-panda-japanese-style-chopstick-holder-accessory-the-kawaii-shoppu-0_460x.jpg?v=1657942882",
        "https://thekawaiishoppu.com/cdn/shop/products/cute-panda-japanese-style-chopstick-holder-accessory-the-kawaii-shoppu-2_460x.jpg?v=1657942890", 
        "https://thekawaiishoppu.com/cdn/shop/products/cute-panda-japanese-style-chopstick-holder-accessory-the-kawaii-shoppu-3_460x.jpg?v=1657942894"
    quantity: quantity, 
    category: "home", 
    seller_id: s3.id 
)

## sellers 

s1 = Seller.create!(
    company_name: "Kawaii Shop", 
    email: email, 
    password: "kawaii", 
    profile_pic: "https://thekawaiishoppu.com/cdn/shop/files/Kawaii_Shoppu_3_340x.png?v=1660945726"
)

s2 = Seller.create!(
    company_name: "Modakawa", 
    email: email, 
    password: "123", 
    profile_pic: 
)

s3 = Seller.create!(
    company_name: "KawaiiMerch", 
    email: email, 
    password: "1234", 
    profile_pic: 
)





## reviews 






