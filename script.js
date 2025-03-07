// Constants for calculations
const HOURLY_RATE = 30.50;
const ORDER_BONUS = 5.50;
const ORDERS_PER_HOUR = 2;
const TAX_RATE = 0.23;

// Calculate total hourly rate including bonuses
const TOTAL_HOURLY_RATE = HOURLY_RATE + (ORDER_BONUS * ORDERS_PER_HOUR);

// Get DOM elements
const slider = document.getElementById('earnings');
const sliderValue = document.getElementById('sliderValue');
const hoursNeeded = document.getElementById('hoursNeeded');
const ordersNeeded = document.getElementById('ordersNeeded');
const bruttoValue = document.getElementById('brutto');
const nettoValue = document.getElementById('netto');

// Format number with 2 decimal places and thousands separator
function formatNumber(number) {
    return number.toLocaleString('pl-PL', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Update calculations based on slider value
function updateCalculations() {
    // Get desired earnings from slider
    const desiredEarnings = parseFloat(slider.value);
    
    // Calculate hours needed
    const hours = desiredEarnings / TOTAL_HOURLY_RATE;
    
    // Calculate orders needed (2 orders per hour)
    const orders = Math.ceil(hours * ORDERS_PER_HOUR);
    
    // Calculate Brutto and Netto
    const brutto = desiredEarnings;
    const netto = brutto * (1 - TAX_RATE);
    
    // Update display values with animations
    sliderValue.textContent = formatNumber(desiredEarnings);
    hoursNeeded.textContent = formatNumber(hours);
    ordersNeeded.textContent = orders;
    bruttoValue.textContent = `${formatNumber(brutto)} zł`;
    nettoValue.textContent = `${formatNumber(netto)} zł`;
}

// Add event listeners
slider.addEventListener('input', updateCalculations);

// Initial calculation
updateCalculations();
