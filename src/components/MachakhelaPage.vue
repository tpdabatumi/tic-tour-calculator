<template>
  <div class="container-fluid main-background bg-image">
    <div class="card card-container shadow border-0 rounded-3 my-3">
      <div class="card-header border-0">
        <h3 class="mt-2 fw-bold">მაჭახელას თოფის გზა</h3>
        <router-link
          class="btn btn-link p-0 text-decoration-none"
          :to="{ name: 'Home' }"
        >
          <i class="fas fa-angle-left fa-sm me-1"></i>უკან
        </router-link>
      </div>
      <div class="card-body p-0 border-0">
        <div class="form-group p-3">
          <div class="form-group">
            <div class="row">
              <div class="col-md-12">
                <label for="touristCount">ადამიანთა რაოდენობა</label>
                <div class="input-group">
                  <button
                    class="btn btn-light border"
                    @click="decrementTouristCount"
                  >
                    <i class="fas fa-minus fa-sm text-success"></i>
                  </button>
                  <input
                    type="text"
                    id="touristCount"
                    class="form-control text-center"
                    v-model.number="touristCount"
                  />
                  <button
                    class="btn btn-light border"
                    @click="incrementTouristCount"
                  >
                    <i class="fas fa-plus fa-sm text-success"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group p-3">
          <div class="row">
            <div class="col-md-6">
              <label for="transportSelect"> ტრანსპორტის ტიპი </label>
              <select
                id="transportSelect"
                class="form-select"
                v-model="selectedTransport"
              >
                <option
                  v-for="transportPrice in transportPrices"
                  :key="transportPrice.id"
                  :value="transportPrice"
                >
                  {{ transportPrice.name }}
                </option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="transportTotal"> ტრანსპორტის ფასი </label>
              <input
                id="transportTotal"
                type="text"
                class="form-control"
                v-model.number="transportTotal"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="form-group p-3">
          <div class="row">
            <div class="col-md-6">
              <label for="guidePrice">გიდი</label>
              <input
                type="text"
                id="guidePrice"
                class="form-control"
                v-model.number="guidePrice"
              />
            </div>
            <div class="col-md-6">
              <label for="guideTotal">გიდის ფასი ჯამში</label>
              <input
                type="text"
                id="guideTotal"
                class="form-control"
                v-model.number="guideTotal"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="form-group p-3">
          <div class="row">
            <div class="col-md-6">
              <label for="foodPrice">კვება</label>
              <input
                type="text"
                id="foodPrice"
                class="form-control"
                v-model.number="foodPrice"
              />
            </div>
            <div class="col-md-6">
              <label for="foodTotal">კვება ჯამში</label>
              <input
                type="text"
                id="foodTotal"
                class="form-control"
                v-model.number="foodTotal"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="form-group p-3">
          <div class="row">
            <div class="col-md-6">
              <label for="museumPrice">მუზეუმი</label>
              <input
                type="text"
                id="museumPrice"
                class="form-control"
                v-model.number="museumPrice"
              />
            </div>
            <div class="col-md-6">
              <label for="museumTotal">მუზეუმის ფასი ჯამში</label>
              <input
                type="text"
                id="museumTotal"
                class="form-control"
                v-model.number="museumTotal"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="form-group p-3">
          <div class="row">
            <div class="col-md-6">
              <label for="folklorePrice">ფოლკლორი</label>
              <input
                type="text"
                id="folklorePrice"
                class="form-control"
                v-model.number="folklorePrice"
              />
            </div>
            <div class="col-md-6">
              <label for="folkloreTotal">ფოლკლორის ფასი ჯამში</label>
              <input
                type="text"
                id="folkloreTotal"
                class="form-control"
                v-model.number="folkloreTotal"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="form-group p-3">
          <div class="row">
            <div class="col-md-6">
              <label for="additionalServicePrice">დამატებითი სერვისი</label>
              <input
                type="text"
                id="additionalServicePrice"
                class="form-control"
                v-model.number="additionalServicePrice"
              />
            </div>
            <div class="col-md-6">
              <label for="additionalServiceTotal"
                >დამატებითი სერვისი ჯამში</label
              >
              <input
                type="text"
                id="additionalServiceTotal"
                class="form-control"
                v-model.number="additionalServiceTotal"
                disabled
              />
            </div>
          </div>
        </div>
        <div v-if="selectedTransport != ''">
          <div class="form-group p-3 bg-light">
            <div class="row">
              <div class="col-md-6">
                <label for="serviceTax"
                  >მომსახურების % (<span class="fw-bold">{{
                    serviceTaxCalculated.toFixed(2)
                  }}</span
                  >)</label
                >
                <input
                  type="text"
                  id="serviceTax"
                  class="form-control"
                  v-model.number="serviceTax"
                />
              </div>
              <div class="col-md-6">
                <label for="vat"
                  >დღგ % (<span class="fw-bold">{{
                    vatCalculated.toFixed(2)
                  }}</span
                  >)</label
                >
                <input
                  type="text"
                  id="vat"
                  class="form-control"
                  v-model.number="vat"
                />
              </div>
            </div>
          </div>
          <div class="form-group p-3">
            <div class="row">
              <div class="col-md-6 my-1">
                <p class="m-0 p-2 bg-info shadow rounded-pill text-center">
                  ხარჯი საკომისიოს გარეშე:
                  <span class="fw-bold fs-5">{{
                    noComissionExpenses.toFixed(2)
                  }}</span>
                </p>
              </div>
              <div class="col-md-6 my-1">
                <p class="m-0 p-2 bg-warning shadow rounded-pill text-center">
                  ხარჯი საკომისიოს ჩათვლით:
                  <span class="fw-bold fs-5">{{
                    comissionExpenses.toFixed(2)
                  }}</span>
                </p>
              </div>
              <div class="col-md-6 my-1">
                <p
                  class="
                    m-0
                    p-2
                    bg-success
                    shadow
                    rounded-pill
                    text-center text-white
                  "
                >
                  ტურის ფასი ჯამში:
                  <span class="fw-bold fs-5">{{ totalPrice.toFixed(2) }}</span>
                </p>
              </div>
              <div class="col-md-6 my-1">
                <p
                  class="
                    m-0
                    p-2
                    bg-danger
                    shadow
                    rounded-pill
                    text-center text-white
                  "
                >
                  ტურის ფასი ერთ ადამიანზე:
                  <span class="fw-bold fs-5">{{
                    perPersonPrice.toFixed(2)
                  }}</span>
                </p>
              </div>
              <div class="col-md-12 mb-1 mt-2 text-center">
                <button
                  class="btn btn-link text-decoration-none"
                  @click="openInvoiceModal"
                >
                  <i class="fas fa-receipt fa-sm me-1"></i>
                  ინვოისი
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid invoice-modal bg-white" v-show="invoiceModal">
      <span class="close-modal" @click="closeInvoiceModal">
        <i class="fas fa-times fa-2x"></i>
      </span>
      <div class="modal-centered-container">
        <div class="card-container">
          <div class="col-md-12">
            <ul class="list-group">
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
                v-if="touristCount > 0"
              >
                ადამიანთა რაოდენობა
                <span class="badge text-dark rounded-pill">{{
                  touristCount
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
                v-if="transportTotal > 0"
              >
                ტრანსპორტი
                <span class="badge text-dark rounded-pill">{{
                  transportTotal
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
                v-if="guideTotal > 0"
              >
                გიდი
                <span class="badge text-dark rounded-pill">{{
                  guideTotal
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
                v-if="foodTotal > 0"
              >
                კვება
                <span class="badge text-dark rounded-pill">{{
                  foodTotal
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
                v-if="museumTotal > 0"
              >
                მუზეუმი
                <span class="badge text-dark rounded-pill">{{
                  museumTotal
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
                v-if="folkloreTotal > 0"
              >
                ფოლკლორი
                <span class="badge text-dark rounded-pill">{{
                  folkloreTotal
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
                v-if="additionalServiceTotal > 0"
              >
                დამატებითი სერვისი
                <span class="badge text-dark rounded-pill">{{
                  additionalServiceTotal
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                  bg-light
                "
              >
                მომსახურების {{ serviceTax }}%
                <span class="badge bg-white text-dark rounded-pill">{{
                  serviceTaxCalculated.toFixed(2)
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                  bg-light
                "
              >
                დღგ {{ vat }}%
                <span class="badge bg-white text-dark rounded-pill">{{
                  vatCalculated.toFixed(2)
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                ხარჯი საკომისიოს გარეშე
                <span class="badge bg-info text-dark rounded-pill">{{
                  noComissionExpenses.toFixed(2)
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                ხარჯი საკომისიოს ჩათვლით
                <span class="badge bg-warning text-dark rounded-pill">{{
                  comissionExpenses.toFixed(2)
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                ტურის ფასი ჯამში
                <span class="badge bg-success text-dark rounded-pill">{{
                  totalPrice.toFixed(2)
                }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                ტურის ფასი ერთ ადამიანზე
                <span class="badge bg-danger text-dark rounded-pill">{{
                  perPersonPrice.toFixed(2)
                }}</span>
              </li>
            </ul>
          </div>
          <div class="text-center my-3">
            <button
              class="btn btn-link text-decoration-none"
              onclick="window.print()"
            >
              <i class="fas fa-print fa-sm me-1"></i>
              ამობეჭდვა
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MachakhelaPage",
  data() {
    return {
      transportPrices: [
        {
          id: 1,
          name: "სედანი",
          price: 180,
        },
        {
          id: 2,
          name: "მინივენი",
          price: 200,
        },
        {
          id: 3,
          name: "სპრინტერი",
          price: 250,
        },
      ],
      selectedTransport: {
        id: 3,
        name: "სპრინტერი",
        price: 250,
      },
      touristCount: 10,
      guidePrice: 80,
      foodPrice: 25,
      museumPrice: 3,
      folklorePrice: 0,
      additionalServicePrice: 0,
      serviceTax: 15,
      vat: 18,
      invoiceModal: false,
    };
  },
  computed: {
    transportTotal() {
      return this.selectedTransport.price;
    },
    guideTotal() {
      return (this.guidePrice / 0.784).toFixed(2);
    },
    foodTotal() {
      return this.foodPrice * this.touristCount;
    },
    museumTotal() {
      return this.museumPrice * this.touristCount;
    },
    folkloreTotal() {
      return this.folklorePrice * this.touristCount;
    },
    additionalServiceTotal() {
      return this.additionalServicePrice * this.touristCount;
    },
    noComissionExpenses() {
      return (
        this.transportTotal +
        Number(this.guideTotal) +
        this.foodTotal +
        this.museumTotal +
        this.folkloreTotal +
        this.additionalServiceTotal
      );
    },
    serviceTaxCalculated() {
      return (this.noComissionExpenses * this.serviceTax) / 100;
    },
    comissionExpenses() {
      return this.noComissionExpenses + this.serviceTaxCalculated;
    },
    vatCalculated() {
      return (this.comissionExpenses * this.vat) / 100;
    },
    totalPrice() {
      return this.comissionExpenses + this.vatCalculated;
    },
    perPersonPrice() {
      return this.totalPrice / this.touristCount;
    },
  },
  methods: {
    decrementTouristCount() {
      if (this.touristCount > 1) {
        this.touristCount--;
      }
    },
    incrementTouristCount() {
      this.touristCount++;
    },
    openInvoiceModal() {
      this.invoiceModal = true;
    },
    closeInvoiceModal() {
      this.invoiceModal = false;
    },
  },
};
</script>

<style scoped>
.main-background {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-image {
  background-color: #000;
  background-image: linear-gradient(
      175deg,
      rgba(0, 0, 0, 0.7) 100%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(../assets/img/machakhela.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-container {
  max-width: 768px;
}
</style>
