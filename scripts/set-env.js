const fs = require('fs');
const path = require('path');

// Get environment variables
const supabaseUrl = process.env.NG_APP_SUPABASE_URL || '';
const supabaseKey = process.env.NG_APP_SUPABASE_KEY || '';

// Fallback to default values if not set (for local development)
const defaultUrl = 'https://snbnywhixglgxstoqiyc.supabase.co';
const defaultKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuYm55d2hpeGdsZ3hzdG9xaXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3MzU0ODIsImV4cCI6MjA3NTMxMTQ4Mn0.Mxd4G__QKUbsuj15Vrmaihuq2mnNG4YmX9fbW7Kj7lE';

// Development environment file
const envDevContent = `export const environment = {
  production: false,
  supabase: {
    url: '${supabaseUrl || defaultUrl}',
    anonKey: '${supabaseKey || defaultKey}'
  }
};
`;

// Production environment file
const envProdContent = `export const environment = {
  production: true,
  supabase: {
    url: '${supabaseUrl || defaultUrl}',
    anonKey: '${supabaseKey || defaultKey}'
  }
};
`;

// Write environment files
const envDir = path.join(__dirname, '..', 'src', 'environments');

// Ensure directory exists
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

fs.writeFileSync(path.join(envDir, 'environment.ts'), envDevContent);
fs.writeFileSync(path.join(envDir, 'environment.prod.ts'), envProdContent);

console.log('✅ Environment files generated successfully!');
console.log(`   - Using Supabase URL: ${supabaseUrl || defaultUrl}`);
console.log(`   - Using Supabase Key: ${supabaseKey ? '***' + supabaseKey.slice(-8) : '***' + defaultKey.slice(-8)}`);

