function calculateInsurance() {
    //document.getElementById('calculationResults').innerHTML="hello";
    console.log('calculate insurance now');

    var name = document.getElementById('clientName').value;
    var age = Number(document.getElementById('clientAge').value);
    var country = document.getElementById('clientCountry').value;
    var horsepower = Number(document.getElementById('clientHorsepower').value);

    localStorage.insuranceCalculated = "true";
    localStorage.insureeName = name;

    if (country == "Austria") {
        var insurance = horsepower * 100 / age + 50;
    }
    if (country == "Germany") {
        var insurance = horsepower * 120 / age + 100;
    }
    if (country == "Italy") {
        var insurance = horsepower * 150 / (age + 2) + 150;
    }

    localStorage.insuranceAmount = insurance;
}