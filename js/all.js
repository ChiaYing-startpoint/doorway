$(document).ready(function () {
    // 至頂按鈕
    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },300);
    });

    // 漢堡選單出現
    $('.hamburger').click(function (e) { 
       
       $('.ham-card').toggleClass('active');
    });


   /*-------------------------------------*/
   /* productDital視差滾動
   ---------------------------------------*/
    // 滾動到位置
    $('.scrollTop').click(function (e) { 
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html,body').animate({ scrollTop : targetPos},100);
    });

    // 滾動時，需讀到滾動的位置
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        // active加入選單
        $('.scrollTop').each(function () {
            //id、位置、高度
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();

            // 做判斷，滾動時有無到指定位置
            if (targetPos-180 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active');
                $(this).addClass('active');
                
            }else{
                $(this).removeClass('active');
            }
        });

    })

   
    
    


    /*-------------------------------------*/ 
    /* swiper
    ---------------------------------------*/

    // product
    var swiper = new Swiper('#swiper2', {
       
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 24,
        grabCursor: true,
    });


});


/*----------------------------------*/
/* productDital的地圖
------------------------------------*/

var ditalmap = L.map('ditalmap', {
    center: [41.0258759, 28.9701692],
    zoom: 17
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(ditalmap);


var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.marker([41.0258759, 28.9701692], { icon: greenIcon }).addTo(ditalmap)
    .bindPopup('<h5 class="fw-bold">加拉塔沃爾頓酒店</h5><p>4.8(239)<br>4 星級飯店</p>')
    .openPopup();


