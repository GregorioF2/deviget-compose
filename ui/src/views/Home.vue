<template>
  <div class="viewport">
    <div class="viewport-middle-section">
      
      <div class="section">
        <multiselect :multiple="true" v-model="selectedItems" :options="options"></multiselect>
      </div>

      <div class="section">
        <button class="ui secondary button submit-button" @click="getPrices">
          Get prices
        </button>
      </div>

      <div class="section" v-if="showError">
        <span class="error">
          {{ errorMessage }}
        </span>
      </div>
    

      <div class="section">
        <div class="results">
        <div class="ui active dimmer" v-if="loadingResults">
          <div class="ui loader"></div>
        </div>
         <p  v-if="results.length > 0">
          [ {{results.join(', ')}} ]
         </p>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import pricesController from '../controllers/prices'
export default {
  name: "Home",
  components: { Multiselect },
  mounted() {},
  data() {
    return {
      options: ['p1', 'p2', 'p3', 'p4'],
      selectedItems: [],
      showError: false,
      errorMessage: '',
      results: [],
      loadingResults: false
    };
  },
  computed: {
  },
  methods: {
    clearError() {
        this.showError = false;
        this.errorMessage = '';
    },
    async getPrices() {
      this.clearError();
      try {
        this.loadingResults = true;
        this.results = [];
        this.results = await pricesController.getPricesForItems(this.selectedItems);
      } catch(err) {
        this.showError = true;
        this.errorMessage = err;
      } finally {
        this.loadingResults = false;
      }
    }
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.viewport {
  background-repeat: no-repeat;
  background-color: rgb(61, 61, 61);
  color: white;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: auto;
}
.viewport-middle-section {
  display: flex;
  background-color: transparent;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  border: black 1px solid;
  background-color: rgba(158, 163, 160, 255);
  flex-direction: column;
  overflow: auto;
}
.viewport-middle-section .section {
  width: 90%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 0px;
  display: flex;
}

.submit-button {
  margin: auto !important;
  width: 80%;
  text-align: center;
}
.error {
  background-color: transparent;
  color: red;
  font-weight: bold;
}
.results {
  position: relative;
  height: 40px;
  width: 100%;
}
.results p {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}
</style>
