fetch("scripts/data.json")
        .then(function (response) {
          console.log(response.body);
          return response.json();
        })
        .then(function (jsonObject) {
          console.log(jsonObject); // temporary checking for valid response and data parsing
          const businesses = jsonObject.businesses;
          Math.floor(Math.random() * 9);
          for (var i = 0; i < 3; i++) {
            var index = Math.floor(Math.random() * 9);
            var business = businesses[index];
            // Create elements to add to the document
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            //let business_paragraph = document.createElement('p');
            let image = document.createElement("img");

            // Change the textContent property of the h2 element to contain the business name
            h2.textContent = business.name + " ";

            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
            //(Fill in the blank with the appropriate variable).
            image.setAttribute(
              "src",
              `images/directory_images/${business.image}`
            );
            image.setAttribute("alt", `Logo of ${business.name}`);
            image.setAttribute("loading", "lazy");

            // Add/append the section(card) with the h2 element
            card.appendChild(h2);
            card.appendChild(image);

            // address
            let address_paragrapgh = document.createElement("p");
            address_paragrapgh.innerHTML = `${business.address}`;
            card.appendChild(address_paragrapgh);

            //phone number
            let pn_paragrapgh = document.createElement("p");
            pn_paragrapgh.innerHTML = `${business.phoneNumber}`;
            card.appendChild(pn_paragrapgh);

            // website url
            let url_paragrapgh = document.createElement("p");
            url_paragrapgh.innerHTML = `<a href="${business.websiteUrl}" target="_blank"> Website</a>`;
            card.appendChild(url_paragrapgh);

            // membership level
            let ml_paragrapgh = document.createElement("p");
            ml_paragrapgh.innerHTML = `Membership Level: ${business.membershipLevel}`;
            card.appendChild(ml_paragrapgh);

            // Add/append the existing HTML div with the cards class with the section(card)
            document.querySelector(`div#spotlight_${i + 1}`).appendChild(card);
          }
        });