var longiRes = 0;
var latiRes = 0;

function initialize() {
    var address = (document.getElementById('add-input'));
    var autocomplete = new google.maps.places.Autocomplete(address);
    autocomplete.setTypes(['geocode']);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

    var address = '';
    if (place.address_components) {
        address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
    }
    /*********************************************************************/
    /* var address contain your autocomplete address *********************/
    /* place.geometry.location.lat() && place.geometry.location.lat() ****/
    /* will be used for current address latitude and longitude************/
    /*********************************************************************/

    // let lati = place.geometry.location.lat();
    // let longi = place.geometry.location.lng();

    // document.getElementById('lat').innerHTML = lati;
    // document.getElementById('long').innerHTML = longi ;

    longiRes = place.geometry.location.lng();
    latiRes = place.geometry.location.lat();

    });
}

export { latiRes, longiRes };

google.maps.event.addDomListener(window, 'load', initialize);
