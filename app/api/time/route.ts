export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const s = Number(searchParams.get("s")) || 0;
  
    const start = Date.now();
    // 延迟 s 毫秒
    await new Promise((resolve) => setTimeout(resolve, s));
    const end = Date.now();
  
    const responseTime = end - start;
  
    return Response.json({ responseTime });
  }