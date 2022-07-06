\c cta_dev;

INSERT INTO products (name, description,color, price, rating, featured, image) VALUES
('Nars Powermatte Lip Pigment','Full coverage lipstick with one swipe application','Red',19 ,4 ,true,'https://jarroldcdn.azureedge.net/products-temp/nars/194251021669.jpg'),
('Ichiyo Beauty Uuchuu Lipgloss','Berry scented gloss with rainbow glitter','Clear',12 ,5 ,true,'https://m.media-amazon.com/images/I/61nmw8QiklL._SL1500_.jpg'),
('Elf Matte Blush','Pigmented blush for the face','Orange',5 ,4 ,true,'https://m.media-amazon.com/images/I/71V98sp7GOL._SL1500_.jpg'),
('Mac Studio Fluid','Lightweight, natural matte foundation','Rich Coffee',36 ,2 ,false,'https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_M6JC30_640x600_0.jpg'),
('NYX Epic Ink Eyeliner','Felt tip and waterproof','Black',9 ,5 ,true,'https://m.media-amazon.com/images/I/51PLtIih6xS._AC_SS450_.jpg');


INSERT INTO reviews (products_id, reviwer, title, content, rating) VALUES
(1, 'Sally', 'Best Lipstick Ever', 'Great color application', 5),
(2, 'Minnie', 'My Favorite Lip Gloss', 'Great shine on my lips!', 5),
(3, 'Eleanor', 'I Love This Blush!', 'Awesome pigmentation', 5),
(4,'Tati', "Cakey Foundation", 'Makes my face feel heavy', 2),
(5, 'Rolando', "Amazing Eyeliner", 'I can draw sharp lines!', 4);
