// Template for environment configuration
// Copy this file to environment.ts and environment.prod.ts
// Then fill in your actual Supabase credentials

export const environment = {
  production: false, // Set to true for environment.prod.ts
  supabase: {
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY'
  }
};

