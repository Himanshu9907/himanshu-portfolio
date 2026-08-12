import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        {
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // Message length protection
    if (message.length > 5000) {
      return Response.json(
        {
          error: "Message is too long.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
    //   from: "Portfolio Contact <onboarding@resend.dev>",
    from: "Portfolio <onboarding@resend.dev>",
    //   to: ["himanshu05119@gmail.com"],
    to: ["hp696007@gmail.com"],
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px;">
          
          <h2 style="margin-bottom: 24px;">
            New Portfolio Inquiry
          </h2>

          <div style="margin-bottom: 18px;">
            <strong>Name</strong>
            <p style="margin-top: 6px;">
              ${escapeHtml(name)}
            </p>
          </div>

          <div style="margin-bottom: 18px;">
            <strong>Email</strong>
            <p style="margin-top: 6px;">
              ${escapeHtml(email)}
            </p>
          </div>

          <div style="margin-bottom: 18px;">
            <strong>Message</strong>
            <p style="margin-top: 6px; white-space: pre-wrap;">
              ${escapeHtml(message)}
            </p>
          </div>

          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #ddd;" />

          <p style="font-size: 13px; color: #666;">
            Sent from your portfolio contact form.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "Unable to send your message right now.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json(
      {
        success: true,
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}