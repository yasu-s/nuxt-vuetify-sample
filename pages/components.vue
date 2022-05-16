<template>
  <div>
    <v-card>
      <v-responsive :aspect-ratio="16 / 9" :style="{ background: 'aqua' }">
        <v-card-text> This card will always be 16:9 (unless you put more stuff in it) </v-card-text>
      </v-responsive>
    </v-card>
    <v-card height="80px">
      <v-row justify="space-around">
        <v-avatar color="info">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>

        <v-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
        </v-avatar>

        <v-avatar color="red">
          <span class="text-white text-h5">CJ</span>
        </v-avatar>
      </v-row>
    </v-card>
    <v-card>
      <v-chip class="ma-2" closable> Closable </v-chip>
      <v-divider inset></v-divider>
      <v-color-picker hide-inputs show-swatches></v-color-picker>
      <v-expansion-panels>
        <v-expansion-panel v-for="i in 3" :key="i">
          <v-expansion-panel-title> Item </v-expansion-panel-title>
          <v-expansion-panel-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>
