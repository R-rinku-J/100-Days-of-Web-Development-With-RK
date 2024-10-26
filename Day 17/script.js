function updateColor(id) {
    const red = document.getElementById(`red${id}`).value;
    const green = document.getElementById(`green${id}`).value;
    const blue = document.getElementById(`blue${id}`).value;

    const colorBox = document.getElementById(`colorBox${id}`);
    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    const hexColor = rgbToHex(red, green, blue);
    document.getElementById(`hex${id}`).innerText = hexColor;
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
}

function copyHexCode(id) {
    const hexCode = document.getElementById(`hex${id}`).innerText;
    navigator.clipboard.writeText(hexCode).then(() => {
        alert(`Copied ${hexCode} to clipboard!`);
    });
}

// Event listeners for color updates
document.querySelectorAll('.slider').forEach((slider, idx) => {
    slider.addEventListener('input', () => updateColor(Math.ceil((idx + 1) / 3)));
});
