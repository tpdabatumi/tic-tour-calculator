<template>
  <div class="container-fluid main-background bg-image">
    <div class="card card-container shadow border-0 rounded-3">
      <div class="card-header border-0">
        <h3 class="my-2 fw-bold">ტურის კალკულაცია</h3>
      </div>
      <div class="card-body p-3 border-0">
        <div class="row justify-content-center">
          <h5>აირჩიეთ ტური:</h5>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Machakhela' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/machakhela.jpg"
                  alt="Machakhela"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                მაჭახელას თოფის გზა
              </span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Wine' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/wine.jpg"
                  alt="Wine"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                ღვინის მარშრუტი
              </span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Mtirala' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/mtirala.jpg"
                  alt="Mtirala"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                მტირალას ეროვნული პარკი
              </span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Chirukhi' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/chirukhi.jpg"
                  alt="Chirukhi"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                ჩირუხი, ხიხანი, გოდერძი, მწვანე ტბა
              </span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Gobroneti' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/gobroneti.jpg"
                  alt="Gobroneti"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                გობრონეთი
              </span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Merisi' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/merisi.jpg"
                  alt="Merisi"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                მერისის ხეობა
              </span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Mirveti' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/mirveti.jpg"
                  alt="Mirveti"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                მირვეთი - ველომარშრუტი
              </span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Tago' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/tago.jpg"
                  alt="Tago"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                თაგო-სხალთის საფეხმავლო მარშრუტი
              </span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Kapnistavi' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/kapnistavi.jpg"
                  alt="Kapnistavi"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                კაპნისთავი
              </span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3 my-2">
            <div class="card shadow border-0 animation">
              <router-link class="stretched-link" :to="{ name: 'Ghorjomi' }">
                <img
                  class="img-size cover rounded-3"
                  src="../assets/img/ghorjomi.jpg"
                  alt="Ghorjomi"
                />
              </router-link>
              <span
                class="
                  position-absolute
                  text-white text-shadow
                  fw-bold
                  m-2
                  fs-6
                "
              >
                ღორჯომი-ბახმარო
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.main-background {
  display: flex;
  height: 100vh;
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
    url(../assets/img/bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-container {
  max-width: 992px;
}

.img-size {
  width: 100%;
  height: 120px;
}

.text-shadow {
  text-shadow: 0px 0px 5px #000;
}
</style>
