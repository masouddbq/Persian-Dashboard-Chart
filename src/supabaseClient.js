import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tcaoahxrzbvecuhrboew.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYW9haHhyemJ2ZWN1aHJib2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyODMxMjIsImV4cCI6MjA2ODg1OTEyMn0.COboAuG_yGC63AitK3Gf-EYoHhrSfeJ8OS8xaP0ILIQ'
export const supabase = createClient(supabaseUrl, supabaseKey)