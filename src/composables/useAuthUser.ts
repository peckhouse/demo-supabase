import { ref } from "vue";

import useSupabase from "./useSupabase"

const myUser= ref()

export default function useAuthUser() {
  const { supabase } = useSupabase()

  const login = async ({ email, password }: { email: string, password:string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) throw error
    return data
  }

  // @ts-ignore
  const loginWithSocialProvider = async (provider) => {
    const { data , error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/demo-supabase/`
      }
    })

    if (error) throw error
    return data
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const isLoggedIn = () => {
    return !!myUser.value
  }
  /**
   * Register
   */
  const register = async ({ email, password }: { email: string, password: string }) => {
    const { data, error } = await supabase.auth.signUp({ email, password })

    if (error) throw error
    return data
  }

  // @ts-ignore
  const update = async (updatedData) => {
    const { data, error } = await supabase.auth.updateUser(updatedData)
    
    if (error) throw error
    return data
  }

  const sendPasswordRestEmail = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
    return data
  }

  return {
    myUser,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail
  };
}