export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { bootHandler } = await import("./config/boot.config");
    const boot = await bootHandler();
    console.log("🚀 ~ booted:", boot)
  } 
}