import { ref } from "vue";

import useSupabase from "./useSupabase"

const user = ref(null)

export default function useAuthUser() {
  const { supabase } = useSupabase()

  const login = async ({ email, password }) => {
    const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return user
  }

  const loginWithSocialProvider = async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) throw error
    return data
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const isLoggedIn = () => {
    return !!user.value
  }
  /**
   * Register
   */
  const register = async ({ email, password, ...meta }) => {
    const { data: { user }, error } = await supabase.auth.signUp({ email, password })

    if (error) throw error
    return user
  }

  const update = async (data) => {
    const { data: { user }, error } = await supabase.auth.updateUser(data)
    if (error) throw error
    return user
  }

  const sendPasswordRestEmail = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
    return data
  }

  return {
    user,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail
  };
}