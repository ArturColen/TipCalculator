// Execute the event by clicking the button
document.getElementById('tips-form').addEventListener('submit', calculateTip);

// Calculate the tip value
function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let service = document.getElementById('service').value;
    let numberOfPeople = document.getElementById('people').value;

    if (numberOfPeople == "" | numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById('each').style.display = "none";
    }
    else {
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * service) / numberOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('result').style.display = "block";
}
