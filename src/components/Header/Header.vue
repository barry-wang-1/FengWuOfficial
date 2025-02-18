<template>
  <div class="header">
    <div class="header-content">
      <div class="logo-container">
        <img src="/images/logo.jpg" alt="锋吾物流" class="logo"/>
        <span class="company-name">锋吾快运</span>
      </div>
      <nav class="nav-menu">
        <a v-for="(item, index) in menuItems" 
           :key="index" 
           :href="item.link" 
           class="nav-item">
          {{ item.name }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  { name: '首页', link: '#home' },
  { name: '企业文化', link: '#culture' },
  { name: '车型展示', link: '#vehicles' },
  { name: '司机团队', link: '#drivers' },
  { name: '企业视频', link: '#video' }
]
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 40px;
}

.nav-menu {
  display: flex;
  gap: 30px;
}

.nav-item {
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 16px;
  padding: 5px 0;
  position: relative;
}

.nav-item:hover {
  color: var(--primary-color);
}

.nav-item:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.company-name {
  font-size: 24px;
  font-weight: bold;
  color: var(--secondary-color);
}
</style>