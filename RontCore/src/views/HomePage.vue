<!--<template>-->
<!--  <div>-->
<!--    <div v-for="(field, index) in page.fields" :key="index">-->
<!--      {{page.fields}}-->
<!--      <v-select-->
<!--        v-model="field.selectValue"-->
<!--        label="Select"-->
<!--        variant="outlined"-->
<!--        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"-->
<!--      ></v-select>-->
<!--      <v-text-field variant="outlined" v-model="field.textValue"></v-text-field>-->
<!--      <v-btn @click="page.clearFields(index)">send</v-btn>-->

<!--    </div>-->
<!--    <button @click="page.addField()">Add Field</button>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {usePageStore} from "@/store/Page";-->
<!--const months = ['Jan', 'March', 'April', 'June'];-->
<!--months.splice(2, 1, 'May',)-->
<!--console.log(months)-->
<!--const page = usePageStore()-->
<!--</script>-->

<template>
  <div>
  <input type="checkbox" id="darkmode-toggle"/>
  <label for="darkmode-toggle" />
  </div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'

const switchTheme = ref<boolean>(false)
watch(switchTheme, (newValue) => {
  console.log(newValue)
})
</script>

<style>
label {
  width:500px;
  height:200px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4);
  cursor: pointer;
}

label:after {
  content: "";
  width:180px;
  height: 180px;
  position: absolute;
  top:10px;
  left:10px;
  background: linear-gradient(180deg,#ffcc89,#d8860b);
  border-radius: 180px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
}
input {
  width: 0;
  height: 0;
  visibility: hidden;
}

input:checked + label {
  background: #242424;
}
input:checked + label:after {
  left:490px;
  transform: translateX(-100%);
  background: linear-gradient(180deg,#777,#3a3a3a);
}
label, label:after {
  transition: 0.3s
}

label svg {
  position: absolute;
  width: 120px;
  top:40px;
  z-index: 100;
}
label svg.sun {
  left:40px;
  fill:#fff;
  transition: 0.3s;
}
label svg.moon {
  left:340px;
  fill:#7e7e7e;
  transition: 0.3s;
}
input:checked + label svg.sun {
  fill:#7e7e7e;
}
input:checked + label svg.moon {
  fill:#fff;
}
</style>
