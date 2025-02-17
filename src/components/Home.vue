<template>
  <div class="home">
    <!-- 头部横幅 -->
    <div class="banner">
      <h1>XX物流运输有限公司</h1>
      <p>专业可靠的物流运输服务商</p>
    </div>

    <!-- 企业文化部分 -->
    <div class="section culture">
      <h2>企业文化</h2>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="culture-content">
            <h3>企业愿景</h3>
            <p>成为中国最值得信赖的物流运输服务商</p>
            <h3>企业使命</h3>
            <p>为客户提供安全、高效、可靠的物流运输解决方案</p>
            <h3>核心价值观</h3>
            <p>诚信、专业、创新、共赢</p>
          </div>
        </el-col>
        <el-col :span="12">
          <el-image
            src="/images/culture.jpg"
            fit="cover"
            class="culture-image"
          />
        </el-col>
      </el-row>
    </div>

    <!-- 车型展示部分 -->
    <div class="section vehicles">
      <h2>车型展示</h2>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="(vehicle, index) in vehicles" :key="index">
          <el-card>
            <el-image :src="vehicle.image" fit="cover" />
            <div class="vehicle-info">
              <h3>{{ vehicle.name }}</h3>
              <p>{{ vehicle.description }}</p>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 司机团队部分 -->
    <div class="section drivers">
      <h2>专业司机团队</h2>
      <el-row :gutter="20">
        <el-col :span="8" v-for="(driver, index) in drivers" :key="index">
          <el-card>
            <el-image :src="driver.image" fit="cover" />
            <div class="driver-info">
              <h3>{{ driver.name }}</h3>
              <p>{{ driver.experience }}</p>
              <p>{{ driver.description }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 企业视频展示 -->
  <!-- 企业视频展示 -->
  <div class="section video">
      <h2>企业视频</h2>
      <iframe
        :src="`//player.bilibili.com/player.html?aid=${bilibiliAid}&page=1`"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
        class="bilibili-video"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 车型数据
const vehicles = ref([
  {
    name: '重型货车',
    description: '载重量：40吨，适合长途运输',
    image: '/images/truck1.jpg'
  },
  {
    name: '厢式货车',
    description: '载重量：15吨，适合城市配送',
    image: '/images/truck2.jpg'
  },
  // 可以添加更多车型
])

// 司机数据
const drivers = ref([
  {
    name: '张师傅',
    experience: '从业15年',
    description: '安全驾驶里程超过100万公里',
    image: '/images/driver1.jpg'
  },
  {
    name: '李师傅',
    experience: '从业10年',
    description: '优秀驾驶员，多次获得表彰',
    image: '/images/driver2.jpg'
  },
  {
    name: '王师傅',
    experience: '从业12年',
    description: '专注长途运输，经验丰富',
    image: '/images/driver3.jpg'
  }
])

// B站视频aid，需要替换成实际的视频aid
const bilibiliAid = ref('170001')
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.banner {
  text-align: center;
  padding: 60px 0;
  background-color: #f5f7fa;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 60px;
}

.section h2 {
  text-align: center;
  margin-bottom: 30px;
}

.culture-image {
  width: 100%;
  height: 300px;
}

.vehicle-info, .driver-info {
  padding: 15px;
  text-align: center;
}

.drivers .el-card {
  margin-bottom: 20px;
}

.bilibili-video {
  width: 800px;
  height: 600px;
  max-width: 100%;
}
</style>