let counter = 0;

export async function GET(request: Request) {
    counter++;

    const time2 = 'time2';

    return Response.json({ time2, counter });
}