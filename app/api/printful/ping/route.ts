import { NextResponse } from "next/server"

const PRINTFUL_API = "https://api.printful.com"

export async function GET() {
  const token = process.env.PRINTFUL_API_KEY
  if (!token) {
    return NextResponse.json({ ok: false, error: "PRINTFUL_API_KEY is missing" }, { status: 500 })
  }
  try {
    const res = await fetch(`${PRINTFUL_API}/sync/products?limit=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })
    const json = await res.json()
    return NextResponse.json({ ok: res.ok, status: res.status, body: json }, { status: res.ok ? 200 : res.status })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}

 