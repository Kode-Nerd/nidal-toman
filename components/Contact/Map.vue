<template>
  <div class="wrapper" :class="{ mobile }">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.2073385194286!2d13.32398562857337!3d52.500328498246226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850fa4954eca3%3A0x1406c2788da9ed70!2sProf.%20Dr.%20Nidal%20Toman!5e0!3m2!1sen!2sid!4v1730638451520!5m2!1sen!2sid"
      style="border: 0; height: 100%; width: 100%"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <!-- <GMap
      ref="gMap"
      :center="{ lat: 52.50026483203335, lng: 13.32467700913042 }"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative',
        styles: mapStyle,
      }"
      :zoom="15"
      class="wrapper"
      :class="{ mobile }"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
      >
        <GMapInfoWindow :options="{ maxWidth: 300 }">
          <div class="map-info__container">
            <div class="map-info__title">{{ location.name }}</div>
            <div>Uhlandstrasse 33 10719 Berlin</div>
            <div>(+49) 030 21 300 8000</div>
            <div>info@nidal-toman.de</div>
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap> -->
  </div>
</template>

<script>
export default {
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      locations: [
        {
          lat: 52.50026483203335,
          lng: 13.32467700913042,
          name: 'Nidal Toman Office',
        },
      ],
      mapStyle: [],
    }
  },
}
</script>

<style>
.map-info__container {
  padding: 5px 10px 10px 0px;
}

.map-info__title {
  font-size: 16px;
  line-height: 32px;
  font-weight: 700;
}

.map-info__subtitle {
}

.GMap__Wrapper {
  width: 100%;
  height: 100%;
}
.wrapper {
  height: 400px;
}
.mobile {
  height: calc(100dvh - 56px);
}
</style>
