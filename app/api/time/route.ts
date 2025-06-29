let counter = 0;

export async function GET(request: Request) {
    counter++;
    console.log(`请求次数: ${counter}`);

    const { searchParams } = new URL(request.url);
    const s = Number(searchParams.get("s")) || 0;

    const start = Date.now();
    // 延迟 s 毫秒
    await new Promise((resolve) => setTimeout(resolve, s * 1000));
    const end = Date.now();

    const responseTime = end - start;

    return Response.json({ responseTime, counter });
}