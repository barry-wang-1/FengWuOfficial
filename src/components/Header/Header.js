import { ref } from 'vue'
import { Menu } from '@element-plus/icons-vue'

export default {
  name: 'Header',
  components: {
    Menu
  },
  setup() {
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu
    }
  }
}