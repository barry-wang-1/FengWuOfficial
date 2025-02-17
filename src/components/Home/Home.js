import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
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
      }
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

    // B站视频aid
    const bilibiliAid = ref('1355043180')

    return {
      vehicles,
      drivers,
      bilibiliAid
    }
  }
}