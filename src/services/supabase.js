import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gsqdfmlrgquyvkcawmyt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzcWRmbWxyZ3F1eXZrY2F3bXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyODI4ODEsImV4cCI6MjAzNTg1ODg4MX0.3G-WtjrMo-Q1xYrdUIdvK-v8nHCDqEQWYgCYdE4gGWY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
