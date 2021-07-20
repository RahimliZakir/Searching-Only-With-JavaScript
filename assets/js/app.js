$(document).ready(function () {
    let products = [
        {
            id: 1,
            title: "BMW",
            imgUrl: "bmw.jpg",
            description: "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporation which produces luxury vehicles and motorcycles. ",
            price: 15.500
        },
        {
            id: 2,
            title: "Mercedes",
            imgUrl: "mercedes.jpg",
            description: "Mercedes-Benz commonly referred to as Mercedes, is both a German automotive brand and, from late 2019 onwards, a subsidiary – as Mercedes-Benz AG – of Daimler AG.",
            price: 20.750
        },
        {
            id: 3,
            title: "LADA",
            imgUrl: "lada.jpg",
            description: "Lada is a brand of cars manufactured by AvtoVAZ (originally VAZ), a Russian company owned by the French Groupe Renault.",
            price: 7.200
        },
        {
            id: 4,
            title: "Hyundai",
            imgUrl: "hyundai.jpg",
            description: "The Hyundai Motor Company, is a South Korean multinational automotive manufacturer headquartered in Seoul.",
            price: 10.440
        },
        {
            id: 5,
            title: "GMC",
            imgUrl: "gmc.webp",
            description: "GMC (formerly the General Motors Truck Company, or the GMC Truck & Coach Division (of General Motors Corporation), is a division of the American automobile manufacturer General Motors (GM) that primarily focuses on trucks and utility vehicles. ",
            price: 30.235
        },
        {
            id: 6,
            title: "Scania",
            imgUrl: "scania.jpg",
            description: "Scania AB is a major Swedish manufacturer headquartered in Södertälje, focusing on commercial vehicles—specifically heavy lorries, trucks and buses.",
            price: 145.211
        }
    ];


    let row = $('.row');

    $.each(products, (index, item) => {
        let card = `<div class="col-4">
       <div class="card" style="width: 18rem;">
           <div class="img-div">
           <img src="assets/images/${item.imgUrl}" class="card-img-top" alt="Cars"></div>
           <div class="card-body text-center">
               <h5 class="card-title">${item.title}</h5>
               <p class="card-text">
               ${item.description.substr(0, 75)}...
               </p>
               <a href="#" class="btn btn-primary">Id: ${item.id}</a>
           </div>
       </div>
   </div>`;

        $(row).append(card);
    });

    let searchingInput = $('#search-input');

    $(searchingInput).keyup(function () {
        let searchText = $(searchingInput).val();

        searchText = searchText.toLowerCase();

        $(row).html('');

        $.each(products, (index, item) => {
            if (item.title.toLowerCase().indexOf(searchText) != -1) {
                let card = `<div class="col-4">
           <div class="card" style="width: 18rem;">
               <div class="img-div">
               <img src="assets/images/${item.imgUrl}" class="card-img-top" alt="Cars"></div>
               <div class="card-body text-center">
                   <h5 class="card-title">${item.title}</h5>
                   <p class="card-text">
                   ${item.description.substr(0, 75)}...
                   </p>
                   <a href="#" class="btn btn-primary">Id: ${item.id}</a>
               </div>
           </div>
       </div>`;

                $(row).append(card);
            }
            else if (searchText == null) {
                let card = `<div class="col-4">
                <div class="card" style="width: 18rem;">
                    <div class="img-div">
                    <img src="assets/images/${item.imgUrl}" class="card-img-top" alt="Cars"></div>
                    <div class="card-body text-center">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">
                        ${item.description.substr(0, 75)}...
                        </p>
                        <a href="#" class="btn btn-primary">Id: ${item.id}</a>
                    </div>
                </div>
            </div>`;

                $(row).append(card);
            }
        });
    });
});