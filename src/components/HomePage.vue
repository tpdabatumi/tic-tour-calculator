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
                  class="w-100 h-100 cover rounded-3"
                  src="../assets/img/machakhela.jpg"
                  alt="Machakhela"
                />
              </router-link>
              <span class="position-absolute text-white fw-bold m-2 fs-6">
                მაჭახელას თოფის გზა
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
  name: "HomePage",
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
</style>
