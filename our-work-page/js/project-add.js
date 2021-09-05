let itemBox=document.querySelector(".content .container");
data.forEach(element => {
    let item=`
        <div class="item-project">
            <div class="info">
                <div class="title">${element.title}</div>
                <div class="name">${element.name}</div>
                <div class="desc">${element.desc}</div>
            </div> <!-- ./info -->
            <div class="view">
                <div class="large-device" style="background-image:url('${element.imagesProjectURL[0]}')"></div>
                <div class="medium-device" style="background-image:url('${element.imagesProjectURL[1]}')"></div>
                <div class="small-device" style="background-image:url('${element.imagesProjectURL[2]}')"></div>
            </div> <!-- ./view -->
            <a href="${element.projectURL}"><div class="btn">Visit</div></a> <!-- ./btn -->
        </div> <!-- ./item-project -->
    `;
    itemBox.innerHTML+=item;
});
