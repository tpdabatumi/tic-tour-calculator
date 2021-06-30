<template>
  <router-view />
</template>

<style>
body {
  font-family: "FiraGO", sans-serif !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: "FiraGO", sans-serif !important;
}

.animation:hover {
  top: -2px;
}

.cover {
  object-fit: cover;
}

.invoice-modal {
  position: fixed;
  top: 0;
  height: 100vh;
  max-height: 100%;
  width: 100%;
  overflow-y: auto;
  z-index: 9;
}

.close-modal {
  position: absolute;
  top: 2%;
  margin-left: 80%;
  color: #6c757d;
  cursor: pointer;
  transition: 0.3s;
}

.close-modal:hover {
  color: #dc3545;
}

.modal-centered-container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
