import { createClient } from "@supabase/supabase-js";
import useAuthUser from "./useAuthUser";

// config
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// setup client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ⬇ setup auth state listener ⬇
supabase.auth.onAuthStateChange((_, session) => {
    // the "event" is a string indicating what trigger the state change (ie. SIGN_IN, SIGN_OUT, etc)
    // the session contains info about the current session most importanly the user dat
  const { myUser } = useAuthUser();

    // if the user exists in the session we're logged in
    myUser.value = session?.user || null;
});

// expose supabase client
export default function useSupabase() {
  return { supabase }
}