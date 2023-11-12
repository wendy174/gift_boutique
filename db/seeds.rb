require 'faker'
puts 'Seeding'



Item.destroy_all
Seller.destroy_all
Customer.destroy_all
Review.destroy_all

# Reset primary key sequence for all tables
ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end


s1 = Seller.create!(
    company_name: "Kawaii Shop", 
    email: Faker::Internet.email, 
    password: "kawaii", 
    profile_pic: ""
)


s2 = Seller.create!(
    company_name: "Modakawa", 
    email: Faker::Internet.email, 
    password: "123", 
    profile_pic: ""
)

s3 = Seller.create!(
    company_name: "KawaiiMerch", 
    email: Faker::Internet.email, 
    password: "1234", 
    profile_pic: ""
)


## Ten Items 
I1 = Item.create!(
    name: "6 Pcs I love Milk Press Gel Pens", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/products/S451c5a52540c41368b616e9a5374717dx_460x.jpg?v=1680367129", 
            "https://thekawaiishoppu.com/cdn/shop/products/Sfd57f47d3017413a8a255318e1708c48b_460x.jpg?v=1680367141", 
            "https://thekawaiishoppu.com/cdn/shop/products/S157cbe723f3f4e668c31c4528cc90f31s_460x.jpg?v=1680367149"], 
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "stationery", 
    seller_id: Seller.all.sample.id
)

I2 = Item.create!(
    name: "Kawaii Bear Multi Colour Pop Pen", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/files/S8d8bc06936eb4516a38ee3eb948639b0Y_460x.jpg?v=1690479735",
            "https://thekawaiishoppu.com/cdn/shop/files/Sf63792a7b6b7424a9256f97069c351d7q_460x.jpg?v=1690479735",
            "https://thekawaiishoppu.com/cdn/shop/files/Sb7fda88c656140a0bf7f04666d4dff92b_460x.jpg?v=1690479735"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "stationery", 
    seller_id: s1.id
)

I3 = Item.create!(
    name: "Fortune Cat Keychain", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/files/Sb5349a8ee41a41b79aa6894308929574m_460x.jpg?v=1690224828",
            "https://thekawaiishoppu.com/cdn/shop/files/S69f9df179454425494cd2d14c7eb85faR_460x.jpg?v=1690224828"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "stationery", 
    seller_id: s1.id
)

I4 = Item.create!(
    name: "Red Panda Kawaii Plushie Soft Toy", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/products/S1e1a5eece2454a7d87b161709afe40f8G_460x.jpg?v=1687785743", 
            "https://thekawaiishoppu.com/cdn/shop/files/S9428fa49e013478792e9d9b8b04d74cdi_460x.jpg?v=1687785743"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "plushie", 
    seller_id: s2.id
)

I5 = Item.create!(
    name: "Piggy Squishy Jumbo Plushie", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/products/40-50-60-80cm-Squish-Pig-Stuffed-Doll-Lying-Plush-Piggy-Toy-Animal-Soft-Plushie-Pillow.jpg_640x640_1125e47b-e7fa-46ec-8810-92a1b839f7bc_460x.jpg?v=1677861660", 
            "https://thekawaiishoppu.com/cdn/shop/products/Hdeb5f5ee77a840bf92f872d37e24b662k_460x.jpg?v=1677861660",
            "https://thekawaiishoppu.com/cdn/shop/products/S5fd8f4e1319e4b48a0735fd12a409e02A_720x.jpg?v=1677861660"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "plushie", 
    seller_id: s2.id
)

I6 = Item.create!(
    name: "Sky Dragon Kawaii Anime Plushie", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/products/sky-dragon-kawaii-anime-plushie-80cm-white-soft-toy-the-kawaii-shoppu-1_460x.jpg?v=1657937156"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "plushie", 
    seller_id: s2.id
)

I7 = Item.create!(
    name: "Peas in a Pod Plush", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/products/peas-in-a-pod-plush-1-22cm-25cm-soft-toy-the-kawaii-shoppu-1_460x.jpg?v=1657954575"], 
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "plushie", 
    seller_id: s3.id
)

I8 = Item.create!(
    name: "Anime Cotton Bedding Set", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/products/3-4pcs-set-kawaii-anime-cotton-bedding-set-pink-full1-5m-bed-decor-the-kawaii-shoppu-1_460x.jpg?v=1657922642",
     "https://thekawaiishoppu.com/cdn/shop/products/3-4pcs-set-kawaii-anime-cotton-bedding-set-pink-decor-the-kawaii-shoppu-2_460x.jpg?v=1657922649", 
     "https://thekawaiishoppu.com/cdn/shop/products/3-4pcs-set-kawaii-anime-cotton-bedding-set-pink-decor-the-kawaii-shoppu-3_460x.jpg?v=1657922653"],
    quantity:Faker::Number.between(from: 1, to: 100), 
    category: "home", 
    seller_id: s3.id
)

I9 = Item.create!(
    name: "Shoppu Kawaii Snuddie Cloak Blanket Hoodie", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/products/Sec893cc389b8484aada28521cef74e14b_460x.jpg?v=1676570140", 
        "https://thekawaiishoppu.com/cdn/shop/products/S77d018490cbd4e97bfdba75db4e6b7d0M_460x.jpg?v=1676570140"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Apparel", 
    seller_id: s3.id
)

I10 = Item.create!(
    name: "Cute Panda Japanese Style Chopstick Holder", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://thekawaiishoppu.com/cdn/shop/products/cute-panda-japanese-style-chopstick-holder-accessory-the-kawaii-shoppu-0_460x.jpg?v=1657942882",
        "https://thekawaiishoppu.com/cdn/shop/products/cute-panda-japanese-style-chopstick-holder-accessory-the-kawaii-shoppu-2_460x.jpg?v=1657942890", 
        "https://thekawaiishoppu.com/cdn/shop/products/cute-panda-japanese-style-chopstick-holder-accessory-the-kawaii-shoppu-3_460x.jpg?v=1657942894"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "home", 
    seller_id: s3.id 
)

## adding more items 

I11 = Item.create!(
    name: "Comfy Shiba Inu Slippers", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2022/01/53268-xhow2c.jpg",
    "https://kawaiitherapy.com/wp-content/uploads/2022/01/53268-1wrncu.jpg", 
    "https://kawaiitherapy.com/wp-content/uploads/2022/01/53268-fkizzb.jpg"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Home", 
    seller_id: s3.id 
)

I12 = Item.create!(
    name: "Fluffy Cow Warm Cozy Slippers", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2023/10/19aa0d70-56e3-4c00-b823-9c03af8e4406-3.jpg",
    'https://kawaiitherapy.com/wp-content/uploads/2023/10/fbe7f9c0-275a-4545-9652-f267593a0326.jpg'],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Home", 
    seller_id: s3.id 
)

I13 = Item.create!(
    name: "Shiba Inu Bathroom Floor Mat", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2022/05/56071-brtft3.jpg",
    "https://kawaiitherapy.com/wp-content/uploads/2022/05/56071-1soie4.jpg",
    "https://kawaiitherapy.com/wp-content/uploads/2022/05/56071-k8ircc.jpg"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "home", 
    seller_id: s3.id 
)

I14 = Item.create!(
    name: "Cute Panda Japanese Style Chopstick Holder", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2021/02/39897-4afair.jpg",
    "https://kawaiitherapy.com/wp-content/uploads/2021/02/0-5774cc.jpeg",
    "https://kawaiitherapy.com/wp-content/uploads/2021/02/39895-kzwvka.jpg"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Home", 
    seller_id: s3.id 
)

I15 = Item.create!(
    name: "Korea Style Bear", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2021/10/50418-h0ijcn.jpg"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Home", 
    seller_id: s3.id 
)

I16 = Item.create!(
    name: "Bubbles the Bumble Bee Shark Plush", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2023/03/66089-er4w90.jpg",
    "https://kawaiitherapy.com/wp-content/uploads/2023/03/66089-p92bk3.jpg"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Home", 
    seller_id: s3.id 
)

I17 = Item.create!(
    name: "Bubbles the Bumble Bee Shark Plush", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2022/04/0-4887b3.jpeg",
    "https://kawaiitherapy.com/wp-content/uploads/2022/04/55285-3yh5ax.jpg"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Home", 
    seller_id: s3.id 
)

I18 = Item.create!(
    name: "Cat Paw Hearts Seat Cushion", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2021/04/42772-asesxn.jpg"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Home", 
    seller_id: s3.id 
)

I19 = Item.create!(
    name: "Chubby Squirrel Plush", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2020/09/0-f58d77.jpeg"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Home", 
    seller_id: s3.id 
)

I20 = Item.create!(
    name: "Jumbo Bear Cover", 
    price: Faker::Commerce.price(range: 0..100.0), 
    image: ["https://kawaiitherapy.com/wp-content/uploads/2022/01/Bear-Cover-Plush.jpg"],
    quantity: Faker::Number.between(from: 1, to: 100), 
    category: "Home", 
    seller_id: s3.id 
)




# customers 


c1 = Customer.create!(
    first_name: Faker::Name.first_name, 
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email, 
    profile_pic: ""
)

c2 = Customer.create!(
    first_name: Faker::Name.first_name, 
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email, 
    profile_pic: ""
)

c3 = Customer.create!(
    first_name: Faker::Name.first_name, 
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email, 
    profile_pic: ""
)

# nothing for orderitems, order, cart, cart items 

## reviews 


random_comment = Faker::Lorem.sentence 
item_id = Faker::Number.between(from: 1, to: 10)
customer_id = Faker::Number.between(from: 1, to: 3)

50.times do 
    Review.create!(
    rating: Faker::Number.between(from: 1, to: 5), 
    comment: Faker::Lorem.sentence, 
    item_id: Item.all.sample.id, 
    customer_id: Customer.all.sample.id
    )
end

puts 'Done seeding'





