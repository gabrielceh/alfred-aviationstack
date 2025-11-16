const requiredEnvVars = [
  'API_URL',
  'API_KEY',
  'SERVER_URL',

];

for (const varName of requiredEnvVars) {
  if (!process.env[varName]) {
    console.error(`Error: The environment variable "${varName}" is not defined`);
    process.exit(1); 
  }
}


const environments = {
  apiUrl: process.env.API_URL || "",
  apiKey: process.env.API_KEY || "",
  serverUrl: process.env.SERVER_URL || "",
};

export {environments};