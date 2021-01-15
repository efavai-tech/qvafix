<template>
  <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list-item style="height: 64px">
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="img/default-avatar-man.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{ username }}</v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router-link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
   props: ["drawer"],
   data: () => ({
  }),
};
</script>

<style>
</style>