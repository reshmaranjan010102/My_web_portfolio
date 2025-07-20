from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.utils.html import strip_tags
from django.http import JsonResponse
from django.conf import settings


@csrf_exempt
def test_ping(request):
    print("Received a request:", request.method)
    return JsonResponse({"ping": "pong"})


@csrf_exempt
@api_view(["POST"])
def send_user_message(request):
    try:
        formData = request.data.get("data", {})
        username = formData.get("name", "")
        useremail = formData.get("email", "")
        userPhone = formData.get("phone", "")
        message = formData.get("message", "")
        if useremail != "":
            subject = "New Contact Form Submission"
            html_message = f"""
            <html>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                <div style="max-width: 600px; margin: auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <h2 style="color: #333;">📨 New Inquiry Form {username}</h2>
                <p>Dear Reshma,</p>
                <p>You have received a new inquiry from your website. Please review the details below:</p>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                    <td style="padding: 8px; font-weight: bold;">Name:</td>
                    <td style="padding: 8px;">{username}</td>
                    </tr>
                    <tr>
                    <td style="padding: 8px; font-weight: bold;">Email:</td>
                    <td style="padding: 8px;">{useremail}</td>
                    </tr>
                    <tr>
                    <td style="padding: 8px; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px;">{userPhone}</td>
                    </tr>
                    <tr>
                    <td style="padding: 8px; font-weight: bold;">Message:</td>
                    <td style="padding: 8px;">{message}</td>
                    </tr>
                </table>
                <p style="margin-top: 20px;">Thank you,<br>Reshma Ranjan Website</p>
                </div>
            </body>
            </html>
            """
            plain_message = strip_tags(html_message)

            send_mail(
                subject,
                plain_message,
                settings.EMAIL_HOST_USER,
                ["reshmaranjan02@gmail.com"],
                fail_silently=False,
                html_message=html_message,
            )

            return JsonResponse(
                {
                    "status": "success",
                    "message": "Thank you for your message. It has been received successfully. I will respond at the earliest opportunity.",
                }
            )
    except Exception as e:
        print("--error: ", e)
        return JsonResponse({"status": "error"}, status=400)
