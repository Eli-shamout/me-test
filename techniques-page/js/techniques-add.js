let itemContiner=document.querySelector(".content .container");
data.forEach(element=>{
    let item=`
    <div class="boxElements">
        <div class="item-project">
            <div class="head">
                <div class="title">${element.title}</div>
                <div class="name">${element.name}</div>
            </div>
            <div class="desc">
            ${element.desc}
            </div>
            <div class="btn">
                Visit
                <a href="${element.projectURL}"><div class="btnLayer">Try it now</div></a>
            </div>
            <div class="imageBox"></div>
        </div>
    </div>
    `;
    itemContiner.innerHTML+=item;
});