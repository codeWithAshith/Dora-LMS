import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = "https://rdtdlctcfeqpfkyygdyi.supabase.co";
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkdGRsY3RjZmVxcGZreXlnZHlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MjEwMDcsImV4cCI6MjA2MjI5NzAwN30.-7fDKTSMPvI81xmoZfvAJx8MUe6tFevhHVEspyZBPmg";


const supabaseUrl = "https://oucpbqlyytzbkobusobi.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91Y3BicWx5eXR6YmtvYnVzb2JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NTMzMDEsImV4cCI6MjA2MDEyOTMwMX0.QYH399JVxHnZ25L6Z14L5onqFzPca-rtV_gunp6NYIc";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
