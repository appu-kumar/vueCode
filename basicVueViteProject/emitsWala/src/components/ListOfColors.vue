<script>
export default {
  data() {
    return {
      listOfColors: [
        {
          name: 'Red',
          hex: '#FF0000',
          rgb: 'rgb(255, 0, 0)',
          description: 'A bold, warm color often associated with passion and energy.',
        },
        {
          name: 'Green',
          hex: '#008000',
          rgb: 'rgb(0, 128, 0)',
          description: 'A natural color symbolizing growth, harmony, and freshness.',
        },
        {
          name: 'Blue',
          hex: '#0000FF',
          rgb: 'rgb(0, 0, 255)',
          description: 'A calming color representing trust, loyalty, and stability.',
        },
        {
          name: 'Yellow',
          hex: '#FFFF00',
          rgb: 'rgb(255, 255, 0)',
          description: 'A bright and cheerful color associated with happiness and energy.',
        },
        {
          name: 'Cyan',
          hex: '#00FFFF',
          rgb: 'rgb(0, 255, 255)',
          description: 'A cool, refreshing color often linked to water and clarity.',
        },
        {
          name: 'Magenta',
          hex: '#FF00FF',
          rgb: 'rgb(255, 0, 255)',
          description: 'A vibrant, playful color blending red and blue.',
        },
        {
          name: 'Black',
          hex: '#000000',
          rgb: 'rgb(0, 0, 0)',
          description: 'A strong, mysterious color often associated with elegance and power.',
        },
        {
          name: 'White',
          hex: '#FFFFFF',
          rgb: 'rgb(255, 255, 255)',
          description: 'A pure, clean color symbolizing simplicity and peace.',
        },
        {
          name: 'Gray',
          hex: '#808080',
          rgb: 'rgb(128, 128, 128)',
          description: 'A neutral color representing balance and sophistication.',
        },
        {
          name: 'Orange',
          hex: '#FFA500',
          rgb: 'rgb(255, 165, 0)',
          description: 'A warm and energetic color often associated with creativity.',
        },
        {
          name: 'Purple',
          hex: '#800080',
          rgb: 'rgb(128, 0, 128)',
          description: 'A royal, mysterious color linked to luxury and wisdom.',
        },
        {
          name: 'Pink',
          hex: '#FFC0CB',
          rgb: 'rgb(255, 192, 203)',
          description: 'A soft, romantic color symbolizing love and kindness.',
        },
        {
          name: 'Brown',
          hex: '#A52A2A',
          rgb: 'rgb(165, 42, 42)',
          description: 'A natural, earthy color representing stability and reliability.',
        },
        {
          name: 'Lime',
          hex: '#00FF00',
          rgb: 'rgb(0, 255, 0)',
          description: 'A bright green color symbolizing energy and freshness.',
        },
        {
          name: 'Navy',
          hex: '#000080',
          rgb: 'rgb(0, 0, 128)',
          description: 'A dark blue shade associated with professionalism and authority.',
        },
        {
          name: 'Gold',
          hex: '#FFD700',
          rgb: 'rgb(255, 215, 0)',
          description: 'A luxurious, warm color representing wealth and success.',
        },
        {
          name: 'Turquoise',
          hex: '#40E0D0',
          rgb: 'rgb(64, 224, 208)',
          description: 'A refreshing blue-green shade linked to tropical vibes and relaxation.',
        },
        {
          name: 'Lavender',
          hex: '#E6E6FA',
          rgb: 'rgb(230, 230, 250)',
          description: 'A light purple shade symbolizing elegance and grace.',
        },
        {
          name: 'Maroon',
          hex: '#800000',
          rgb: 'rgb(128, 0, 0)',
          description: 'A deep red color often linked to passion and determination.',
        },
      ],
    }
  },
  emits:['fav-color']
}
</script>

<template>
  <h1 v-if="listOfColors.length === 0">There is no list of colors</h1>
  <div v-else>
    <p>List of colors</p>

    <ul>
      <li v-for="(color, idx) in listOfColors" v-bind:key="idx">
      {{ color.name }}
       <button v-on:click="$emit('fav-color',color.name)"> add to favColor </button>   <!--Emitting the custom event to parent with data(payload)    -->
      </li>
    </ul>
  </div>
</template>
