function navigateToPreviousPage() {
    window.history.back();
}
document.addEventListener("DOMContentLoaded", () => {
    const date15 = document.getElementById('date-15');
    const date16 = document.getElementById('date-16');
    const date17 = document.getElementById('date-17');
    const outfitContainer = document.getElementById('outfit-container');

    const outfits = {
        '15': `
            <div class="product-card">
                <img src="product1.png" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>FLOWERVELL</b> V-Neck Striped Fit and Flare Dresses</p>
                    <p class="price">Rs. 1119 <span class="original-price">Rs. 3499</span> (68% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn"><i class="fa-regular fa-heart"></i> WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="denim.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>20 Dresses</b>Men Regular Denim Shorts</p>
                    <p class="price">Rs. 1596 <span class="original-price">Rs. 1995</span> (20% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="crocs.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>Crocs</b> Women Pink Shimmery Croslite Clogs</p>
                    <p class="price">Rs 2271 <span class="original-price">Rs. 3495</span> (35% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="sunscreen.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>Neutrogena</b> Ultra Sheer Dry Touch Sunblock SPF 50+ 88 ml</p>
                    <p class="price">Rs. 1119 <span class="original-price">Rs. 3499</span> (68% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="sunglasses.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>Voyage</b> Unisex Black Lens & Black Round Sunglasses</p>
                    <p class="price">Rs. 720 <span class="original-price">Rs. 3000</span> (2280 OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        '16': `
            <div class="product-card">
                <img src="raincoat.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>Super</b> Reversible Waterproof Rain Suit With Hood Belt & Carrying Pouch</p>
                    <p class="price">Rs 2271 <span class="original-price">Rs. 3495</span> (35% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="umbrella.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>LOOM LEGACY</b> Manual 3 Fold Floral Umbrellas</p>
                    <p class="price">Rs. 739 <span class="original-price">Rs. 999</span> (26% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
             <div class="product-card">
                <img src="mens boots.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>bacca bucci</b> Men Textured Platform-Heeled Waterproof Hiking Boots</p>
                    <p class="price">Rs 1499 <span class="original-price">Rs. 2999</span> (Rs.1500 OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="kids raincoat.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>THE CLOWNFISH</b> Kids Printed Hooded Waterproof Rain Suit</p>
                    <p class="price">Rs. 829 <span class="original-price">Rs. 1299</span> (Rs.470 OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="mascara.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>LAKYOU BEAUTY</b> Long Lasting Show Iconic Waterproof Mascara 10ml - Black</p>
                    <p class="price">Rs. 299 <span class="original-price">Rs. 3499</span> (68% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        '17': `
            <div class="product-card">
                <img src="jacket.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>Campus Sutra</b> Men Maroon Windcheater Outdoor Bomber Jacket</p>
                    <p class="price">Rs. 1279 <span class="original-price">Rs. 3999</span> (68% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="kids caps.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>Moms Home</b> Kids Pack Of 2 Woolen Caps</p>
                    <p class="price">Rs. 499 <span class="original-price">Rs. 999</span> (50% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn"><i class="fa-regular fa-heart"></i> WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="hoops.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>Accessorize</b> Gold-Toned Classic Half Hoop Earrings</p>
                    <p class="price">Rs. 388 <span class="original-price">Rs. 995</span> (61% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn">❤️ WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="women boots.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>Shoetopia</b> Women Black Solid Knee High Boots</p>
                    <p class="price">Rs. 1119 <span class="original-price">Rs. 3499</span> (68% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn"><i class="fa-regular fa-heart"></i> WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
             <div class="product-card">
                <img src="sweater.jpg" alt="Product Image" class="product-image">
                <div class="product-info">
                    <p><b>Roadster</b> Women Solid Pullover Sweater</p>
                    <p class="price">Rs. 599 <span class="original-price">Rs. 2999</span> (80% OFF)</p>
                    <div class="wishlist-container">
                        <button class="wishlist-btn"><i class="fa-regular fa-heart"></i> WISHLIST</button>
                        <div class="wishlist-options">
                            <p>Add to Wishlist</p>
                            <p>View Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    date15.addEventListener('click', () => {
        outfitContainer.innerHTML = outfits['15'];
    });

    date16.addEventListener('click', () => {
        outfitContainer.innerHTML = outfits['16'];
    });

    date17.addEventListener('click', () => {
        outfitContainer.innerHTML = outfits['17'];
    });
});
