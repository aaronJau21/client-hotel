<template>
  <div
    class="bg-[url(~/assets/img/home/banner.webp)] md:h-[50vh] bg-cover bg-no-repeat"
  >
    <!-- Navbar -->
    <div
      class="bg-gradient-to-b from-black to-100% text-white p-4 hover:bg-black transition-colors duration-500"
    >
      <div
        class="hidden md:flex md:justify-around md:gap-x-9 md:items-center md:mx-auto md:max-w-7xl"
      >
        <div class="w-32 flex justify-end">
          <h1 class="text-3xl">Hotel</h1>
        </div>
        <div class="flex-1">
          <div class="flex justify-end">
            <div class="flex items-center gap-x-7">
              <div class="flex items-center gap-x-2">
                <p>PEN</p>
                <Icon
                  name="material-symbols:keyboard-arrow-down"
                  class="text-primary font-bold"
                />
              </div>
              <div class="flex items-center gap-x-2">
                <p>ES</p>
                <Icon
                  name="material-symbols:keyboard-arrow-down"
                  class="text-primary font-bold"
                />
              </div>
              <div class="flex items-center gap-x-2">
                <Icon
                  name="material-symbols:phone-enabled-sharp"
                  class="text-primary font-bold"
                />
                <p>+51 9594676009</p>
              </div>
              <div>Agencias/Empresas</div>
              <div class="flex items-center gap-x-2">
                <Icon name="hugeicons:user" class="text-primary font-bold" />
                <p>Inicia sesión | Regístrate</p>
              </div>
            </div>
          </div>
          <div class="flex justify-start">
            <nav class="flex gap-x-5">
              <div>
                <button
                  class="border border-primary text-primary px-3 py-1 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors duration-300"
                >
                  CONOCE EL PERÚ
                </button>
              </div>
              <div>
                <p class="uppercase">Destinos y hoteles</p>
              </div>
              <div>
                <p class="uppercase text-primary underline underline-offset-8">
                  Ofertas
                </p>
              </div>
              <div>
                <p class="uppercase">Restaurantes</p>
              </div>
              <div>
                <p class="uppercase">LIFE</p>
              </div>
              <div>
                <p class="uppercase">CORPORATIVO</p>
              </div>
              <div>
                <p class="uppercase">Eventos</p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Informacon -->
    <div class="flex justify-center items-center gap-x-11">
      <NuxtImg
        src="hotel-s3/descuentos/1929junio.png"
        alt="imagen de descuento"
        class="w-96"
      />
      <NuxtImg
        src="hotel-s3/descuentos/descuento.png"
        alt="imagen de descuento"
        class="w-96"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
