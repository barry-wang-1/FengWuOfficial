import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    // 车型数据
    const vehicles = ref([
      {
        name: '重型货车',
        description: '载重量：40吨，适合长途运输',
        image: new URL('/src/assets/images/banner3.jpg', import.meta.url).href,
      },
      {
        name: '厢式货车',
        description: '载重量：15吨，适合城市配送',
        image: new URL('/src/assets/images/banner2.jpg', import.meta.url).href,
      }
    ]);

    // 司机数据
    const drivers = ref([
      {
        name: '张师傅',
        experience: '从业15年',
        description: '安全驾驶里程超过100万公里',
        image: new URL('/src/assets/images/driver1.png', import.meta.url).href,
      },
      {
        name: '李师傅',
        experience: '从业10年',
        description: '优秀驾驶员，多次获得表彰',
        image: new URL('/src/assets/images/driver2.png', import.meta.url).href,
      },
      {
        name: '王师傅',
        experience: '从业12年',
        description: '专注长途运输，经验丰富',
        image: new URL('/src/assets/images/driver3.png', import.meta.url).href,
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
        image: new URL('/src/assets/images/banner1.jpg', import.meta.url).href,
      },
      {
        title: '专业车队',
        description: '多种车型满足各类运输需求',
        image: new URL('/src/assets/images/banner2.jpg', import.meta.url).href,
      },
      {
        title: '智能物流',
        description: '先进的物流管理系统',
        image: new URL('/src/assets/images/banner3.jpg', import.meta.url).href,
      }
    ])

    const culture = ref([
      {
        image: new URL('/src/assets/images/banner2.jpg', import.meta.url).href,
      }
    ])

    // 在 return 中添加
    return {
      vehicles,
      drivers,
      videos, 
      banners,
      culture
    }
  }
}