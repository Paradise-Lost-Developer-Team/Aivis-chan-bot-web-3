import { NextResponse, type NextRequest } from "next/server";


export async function GET(req: NextRequest) {
    if(req.headers.get("Authorization") !== ``) {

    return NextResponse.json({
        id: 
    })
}