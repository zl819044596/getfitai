export const runtime = "edge";

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, plan } = await req.json() as { email: string; plan: any };

    if (!email || !plan) {
      return NextResponse.json(
        { error: "Email and plan are required" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 构建邮件内容
    const exercisesHtml = plan.exercises
      .map(
        (ex: any) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${ex.name}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${ex.sets} sets</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${ex.reps}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">Rest ${ex.rest}</td>
        </tr>
      `
      )
      .join("");

    const { data, error } = await resend.emails.send({
      from: "GetFitAI <hi@getfitai.io>",
      to: email,
      subject: `Your Workout Plan: ${plan.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #000;">Your Personalized Workout Plan</h1>
          <p style="color: #666;">Here is your AI-generated workout plan from GetFitAI.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h2 style="margin-top: 0;">${plan.title}</h2>
            <p><strong>Duration:</strong> ${plan.duration}</p>
            <p><strong>Intensity:</strong> ${plan.intensity}</p>
          </div>
          
          <h3>Exercises</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #000; color: #fff;">
                <th style="padding: 10px; text-align: left;">Exercise</th>
                <th style="padding: 10px; text-align: left;">Sets</th>
                <th style="padding: 10px; text-align: left;">Reps</th>
                <th style="padding: 10px; text-align: left;">Rest</th>
              </tr>
            </thead>
            <tbody>
              ${exercisesHtml}
            </tbody>
          </table>
          
          ${plan.warmup ? `
          <h3>Warm-up</h3>
          <ul>
            ${plan.warmup.map((item: string) => `<li>${item}</li>`).join("")}
          </ul>
          ` : ""}
          
          ${plan.cooldown ? `
          <h3>Cool-down</h3>
          <ul>
            ${plan.cooldown.map((item: string) => `<li>${item}</li>`).join("")}
          </ul>
          ` : ""}
          
          <div style="margin-top: 30px; padding: 20px; background: #f5f5f5; border-radius: 10px; text-align: center;">
            <p style="margin: 0;">Generate more plans at <a href="https://getfitai.io" style="color: #000; font-weight: bold;">GetFitAI.io</a></p>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            This email was sent from GetFitAI. You received this because you requested a workout plan on our website.
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
