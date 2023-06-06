import { createClient } from "@supabase/supabase-js"

import useAuthUser from "./useAuthUser"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey);

supabase.auth.onAuthStateChange((_, session) => {
  const { myUser } = useAuthUser()
  myUser.value = session?.user || null
})

export default function useSupabase() {
  return { supabase }
}