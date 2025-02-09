
import { createClient } from '@supabase/supabase-js';

// Your actual Supabase credentials
const supabaseUrl = 'https://wytrytqypliwsbsmyrka.supabase.co';  // Replace with your actual project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5dHJ5dHF5cGxpd3Nic215cmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMjYxNjQsImV4cCI6MjA1NDcwMjE2NH0.IwdrBxGMb4f41YGaKEpoF3gWTgfgREWQR3tJKORQqTE';  // Replace with your actual public API key

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
