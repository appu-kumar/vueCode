import { reactive,onMounted,toRefs} from 'vue'

export function useFetchUser(url) {
  const state = reactive({
    data: null,
    loading: true,
    error: null,
  })

  async function fetchUser() {
    try {
      const response = await fetch(url)
      state.data = await response.json()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  onMounted(fetchUser);

  return {...toRefs(state),fetchUser};
}
