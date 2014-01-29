$(function() {
	contactMap();
});

function contactMap() {
	if(document.getElementById("contacts-map")) {
		var map, gridaPlacemark;
		ymaps.ready(init);
	}
		
	function init() {
		map = new ymaps.Map("contacts-map", {
			center: [55.686406, 37.609389],
			zoom: 16
		});
		
		gridaPlacemark = new ymaps.Placemark([55.686406, 37.609389], {
            balloonContentHeader: "Общество с ограниченной ответственностью «Грида»",
            balloonContentBody: "Нагорный проезд, д. 12, корп. 2, стр. 20",
            balloonContentFooter: "+7 (495) 961 80 46"
        });
		
		map.geoObjects.add(gridaPlacemark);
		
		map.controls.add('zoomControl', {left: 5, top: 5});
	}	
}