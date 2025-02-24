import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    // 车型数据
    const vehicles = ref([
      {
        name: '重型货车',
        description: '载重量：40吨，适合长途运输',
        image: '/images/banner3.jpg'
      },
      {
        name: '厢式货车',
        description: '载重量：15吨，适合城市配送',
        image: '/images/banner2.jpg'
      }
    ])

    // 司机数据
    const drivers = ref([
      {
        name: '张师傅',
        experience: '从业15年',
        description: '安全驾驶里程超过100万公里',
        image: '/images/driver1.png'
      },
      {
        name: '李师傅',
        experience: '从业10年',
        description: '优秀驾驶员，多次获得表彰',
        image: '/images/driver2.png'
      },
      {
        name: '王师傅',
        experience: '从业12年',
        description: '专注长途运输，经验丰富',
        image: '/images/driver3.png'
      }
    ])

    // 视频数据
    const videos = ref([
      {
        aid: '326579797',
        title: '企业宣传片',
        params: 'autoplay=0'
      },
      {
        aid: '1351857705',
        title: '服务介绍',
        params: 'autoplay=0'
      },
      {
        aid: '1701881255',
        title: '车队展示',
        params: 'autoplay=0'
      },
      {
        aid: '1051551147',
        title: '车队展示',
        params: 'autoplay=0'
      }
    ])

    const banners = ref([
      {
        title: '全国物流配送',
        description: '安全、快捷、专业的物流服务',
        image: '/images/banner1.jpg'  // 修改这里
      },
      {
        title: '专业车队',
        description: '多种车型满足各类运输需求',
        image: '/images/banner2.jpg'  // 修改这里
      },
      {
        title: '智能物流',
        description: '先进的物流管理系统',
        image: '/images/banner3.jpg'
      }
    ])
    // 在 return 中添加
    return {
      vehicles,
      drivers,
      videos,  // 添加 videos 到返回值
      banners
    }
  }
}