<template>
  <el-config-provider>
    <Header />
    <Home />
    <Footer />
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Home from './components/Home/Home.vue'
</script>