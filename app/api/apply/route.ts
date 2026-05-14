import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, instagram, country, email, token } = body

    // ✅ validation basique
    if (!name || !instagram || !country || !email) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    // ✅ lecture des variables ENV
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY

    const telegramToken = process.env.TELEGRAM_TOKEN
    const telegramChatId = process.env.TELEGRAM_CHAT_ID

    // ✅ sécurité
    if (!supabaseUrl || !supabaseKey || !turnstileSecret) {
      console.error("Missing ENV variables")

      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 }
      )
    }

    // 🔐 vérification captcha
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${turnstileSecret}&response=${token}`,
      }
    )

    const verifyData = await verifyRes.json()

    if (!verifyData.success) {
      return NextResponse.json(
        { error: "Captcha failed" },
        { status: 400 }
      )
    }

    // 🔥 import dynamique
    const { createClient } = await import("@supabase/supabase-js")

    const supabase = createClient(supabaseUrl, supabaseKey)

    // 💾 sauvegarde Supabase
    const { error } = await supabase.from("leads").insert([
      {
        name,
        instagram,
        email,
        country,
      },
    ])

    if (error) {
      console.error("SUPABASE ERROR:", error)

      return NextResponse.json(
        { error: "Database error" },
        { status: 500 }
      )
    }

    // 📩 envoi Telegram
    if (telegramToken && telegramChatId) {
      const message = `
🚀 New Lead

👤 Name: ${name}
📸 Instagram: ${instagram}
🌍 Country: ${country}
📧 Email: ${email}
      `

      const telegramRes = await fetch(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: message,
          }),
        }
      )

      const telegramData = await telegramRes.json()

      if (!telegramData.ok) {
        console.error("TELEGRAM ERROR:", telegramData)
      }
    }

    return NextResponse.json({
      success: true,
    })

  } catch (err) {
    console.error("API ERROR:", err)

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
