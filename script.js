fetch('users.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("name").textContent = "Name: " + data.name;
        document.getElementById("email").textContent = "Email: " + data.email;
        document.getElementById("street").textContent = "Street: " + data.address.street;
        document.getElementById("city").textContent = "City: " + data.address.city;

        document.getElementById("name2").textContent = "Name: " + data.name;
        document.getElementById("email2").textContent = "Email: " + data.email;
        document.getElementById("street2").textContent = "Street: " + data.address.street;
        document.getElementById("city2").textContent = "City: " + data.address.city;

        document.getElementById("name3").textContent = "Name: " + data.name;
        document.getElementById("email3").textContent = "Email: " + data.email;
        document.getElementById("street3").textContent = "Street: " + data.address.street;
        document.getElementById("city3").textContent = "City: " + data.address.city;

        document.getElementById("name4").textContent = "Name: " + data.name;
        document.getElementById("email4").textContent = "Email: " + data.email;
        document.getElementById("street4").textContent = "Street: " + data.address.street;
        document.getElementById("city4").textContent = "City: " + data.address.city;

        document.getElementById("name5").textContent = "Name: " + data.name;
        document.getElementById("email5").textContent = "Email: " + data.email;
        document.getElementById("street5").textContent = "Street: " + data.address.street;
        document.getElementById("city5").textContent = "City: " + data.address.city;

        document.getElementById("name6").textContent = "Name: " + data.name;
        document.getElementById("email6").textContent = "Email: " + data.email;
        document.getElementById("street6").textContent = "Street: " + data.address.street;
        document.getElementById("city6").textContent = "City: " + data.address.city;

        document.getElementById("name7").textContent = "Name: " + data.name;
        document.getElementById("email7").textContent = "Email: " + data.email;
        document.getElementById("street7").textContent = "Street: " + data.address.street;
        document.getElementById("city7").textContent = "City: " + data.address.city;

        document.getElementById("name8").textContent = "Name: " + data.name;
        document.getElementById("email8").textContent = "Email: " + data.email;
        document.getElementById("street8").textContent = "Street: " + data.address.street;
        document.getElementById("city8").textContent = "City: " + data.address.city;

        document.getElementById("name9").textContent = "Name: " + data.name;
        document.getElementById("email9").textContent = "Email: " + data.email;
        document.getElementById("street9").textContent = "Street: " + data.address.street;
        document.getElementById("city9").textContent = "City: " + data.address.city;

        document.getElementById("name10").textContent = "Name: " + data.name;
        document.getElementById("email10").textContent = "Email: " + data.email;
        document.getElementById("street10").textContent = "Street: " + data.address.street;
        document.getElementById("city10").textContent = "City: " + data.address.city;

        document.getElementById("name11").textContent = "Name: " + data.name;
        document.getElementById("email11").textContent = "Email: " + data.email;
        document.getElementById("street11").textContent = "Street: " + data.address.street;
        document.getElementById("city11").textContent = "City: " + data.address.city;

        document.getElementById("name12").textContent = "Name: " + data.name;
        document.getElementById("email12").textContent = "Email: " + data.email;
        document.getElementById("street12").textContent = "Street: " + data.address.street;
        document.getElementById("city12").textContent = "City: " + data.address.city;

        document.getElementById("name13").textContent = "Name: " + data.name;
        document.getElementById("email13").textContent = "Email: " + data.email;
        document.getElementById("street13").textContent = "Street: " + data.address.street;
        document.getElementById("city13").textContent = "City: " + data.address.city;

        document.getElementById("name14").textContent = "Name: " + data.name;
        document.getElementById("email14").textContent = "Email: " + data.email;
        document.getElementById("street14").textContent = "Street: " + data.address.street;
        document.getElementById("city14").textContent = "City: " + data.address.city;

        document.getElementById("name15").textContent = "Name: " + data.name;
        document.getElementById("email15").textContent = "Email: " + data.email;
        document.getElementById("street15").textContent = "Street: " + data.address.street;
        document.getElementById("city15").textContent = "City: " + data.address.city;

        document.getElementById("name16").textContent = "Name: " + data.name;
        document.getElementById("email16").textContent = "Email: " + data.email;
        document.getElementById("street16").textContent = "Street: " + data.address.street;
        document.getElementById("city16").textContent = "City: " + data.address.city;
            })
        .catch(error => console.error('Error fetching JSON:', error));