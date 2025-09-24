import { NextResponse, type NextRequest } from "next/server";
export async function POST(req: NextRequest) {
    const tokenIssuerPubKey = Buffer.from(process.env.TOKEN_ISSUER_KEY!, "base64").toString("utf-8")
    const privateKey = await crypto.subtle.importKey("jwk", JSON.parse(tokenIssuerPubKey), { name: "Ed25519" }, true, ["verify"])
    console.log(privateKey)
    const header = {
        alg: "Ed25519",
        typ: "JWT"
    }
    const jwtHeader = Buffer.from(JSON.stringify(header)).toString("base64url")
    const jwtPayload = Buffer.from(JSON.stringify({})).toString("base64url")
    const data = new TextEncoder().encode()
    const signature = await crypto.subtle.sign({ name: "Ed25519" }, privateKey, data)
    const body = await req.json()
    
    const jwtSignature = Buffer.from(signature).toString("base64url")
    return NextResponse.json({})
}

export async function GET(req: NextRequest) {
    const url = new URL(req.url)
    const authReason = url.searchParams.get("reason")
    if(authReason === "register") {
        
    } else if(authReason === "login") {

    }
}