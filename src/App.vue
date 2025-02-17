<template>
  <el-config-provider>
    <Home />
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import Home from './components/Home.vue'
</script>