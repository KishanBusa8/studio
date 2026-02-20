import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        baseurl: 'https://comparable-vivyanne-marksolutions-86b432b2.koyeb.app',
    });
}