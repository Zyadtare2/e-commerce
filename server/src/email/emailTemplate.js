export const emailTemplate = (OTP) => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      margin: 0;
      font-family: 'Barlow', sans-serif;
      background: #ffffff;
      font-size: 14px;
    "
  >
    <div
      style="
        max-width: 680px;
        margin: 0 auto;
        padding: 45px 30px 60px;
        font-size: 14px;
        background-color: #e2e2e2;
        color: #434343;
      "
    >
      <header>
        <table
          style="
            width: 100%;
            padding: 5px 30px;
            border-radius: 30px 30px 0 0;
            background-color: #ffc107;
          "
        >
          <tbody>
            <tr style="height: 0">
              <td style="text-align: center">
                <img
                  style="
                    width: 100%;
                    height: 100%;
                    max-height: 100px;
                    object-fit: contain;
                  "
                  alt=""
                  src="https://lcproductionstore.blob.core.windows.net/logo/Lighting%20Concepts%20Logo-%20Color.png"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </header>

      <main>
        <div
          style="
            margin: 0;
            padding: 92px 30px 115px;
            background: #ffffff;
            border-radius: 0 0 30px 30px;
            text-align: center;
          "
        >
          <div style="width: 100%; max-width: 489px; margin: 0 auto">
            <h1
              style="
                margin: 0;
                font-size: 24px;
                font-weight: 500;
                color: #1f1f1f;
              "
            >
              Your OTP
            </h1>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-size: 16px;
                font-weight: 500;
              "
            >
              Hey Tomy,
            </p>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              Use the following OTP to login. OTP is valid for
              <span style="font-weight: 600; color: #1f1f1f">5 minutes</span>.
              Do not share this code with others.
            </p>
            <p
              style="
                margin: 0;
                margin-top: 60px;
                font-size: 40px;
                font-weight: 600;
                letter-spacing: 25px;
                color: #ba3d4f;
              "
            >
              ${OTP}
            </p>
          </div>
        </div>

        <p
          style="
            max-width: 400px;
            margin: 0 auto;
            margin-top: 30px;
            text-align: center;
          "
        >
          This is a <b>MyCockpitView<sup>&copy;</sup></b> generated e-mail.
          Please do not reply to this mail.
        </p>
      </main>

      <footer
        style="
          width: 100%;
          max-width: 490px;
          margin: 20px auto 0;
          text-align: center;
          border-top: 1px solid #ffffff;
        "
      >
        <p style="margin: 0; margin-top: 16px; color: #434343">
          Copyright © 2022 Company. All rights reserved.
        </p>
        <p style="margin: 0; margin-top: 16px; color: #434343">
          <small
            >Powered by <b>Newarch<sup>&reg;</sup> Infotech LLP</b></small
          >
        </p>
      </footer>
    </div>
  </body>
</html>
`
}