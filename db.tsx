import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lcktyhbvmpmbfokxfvwo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxja3R5aGJ2bXBtYmZva3hmdndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4Mjg2NTgsImV4cCI6MjAxMzQwNDY1OH0.PJsZg48JoxbvfOrj6cp9Roah7eMd16tEBX8FIr4UMR4';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
