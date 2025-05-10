import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rdtdlctcfeqpfkyygdyi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkdGRsY3RjZmVxcGZreXlnZHlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MjEwMDcsImV4cCI6MjA2MjI5NzAwN30.-7fDKTSMPvI81xmoZfvAJx8MUe6tFevhHVEspyZBPmg";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
