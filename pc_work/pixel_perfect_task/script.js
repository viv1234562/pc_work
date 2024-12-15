document.addEventListener("DOMContentLoaded", () => {
    const radioButtons = document.querySelectorAll("input[name='bundle']");
    const totalPrice = document.getElementById("total-price");
  
    const selectors = {
      pair1: document.getElementById("pair1-selectors"),
      pair2: document.getElementById("pair2-selectors"),
      pair3: document.getElementById("pair3-selectors"),
    };
  
    
    const discounts = {
      pair1: 50,
      pair2: 40, 
      pair3: 60, 
    };
  
  
    radioButtons.forEach((radio) => {
      radio.addEventListener("change", (e) => {
    
        Object.values(selectors).forEach((selector) => selector.classList.add("hidden"));
  
        if (selectors[e.target.id]) {
          selectors[e.target.id].classList.remove("hidden");
        }
  
   
        const discountPercentage = discounts[e.target.id] || 0; // Get discount
        const originalPrice = parseFloat(e.target.dataset.price) / (1 - discountPercentage / 100);
        const formattedOriginalPrice = originalPrice.toFixed(2);
        const discountedPrice = parseFloat(e.target.dataset.price).toFixed(2);
  
        totalPrice.textContent = `DKK ${discountedPrice} (Original: DKK ${formattedOriginalPrice}, ${discountPercentage}% OFF)`;
      });
    });
      document.querySelector(".add-to-cart").addEventListener("click", () => {
      alert("Items added to cart successfully!");
    });
  });
  


