<?php
$message_status = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["message-name"];
    $subject = $_POST["message-subject"];
    $email = $_POST["email"];
    $message = $_POST["message-body"];

    // Replace the below with your actual email address
    $to = "ahmadbamallee@gmail.com";

    // Compose the email
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    $body = "Name: $name\n";
    $body .= "Subject: $subject\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        $message_status = "Message sent successfully. Thank you for contacting us!";
    } else {
        $message_status = "Message delivery failed. Please try again later.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="styles/style.css" />
  <link rel="stylesheet" href="styles/message.css">
  <link rel="shortcut icon" href="assets/logo/icon.PNG" type="image/x-icon">
  <title>My Profile</title>
</head>
<body>
  <nav>
    <div class="nav__content">
      <div class="logo"><a href="#">AHMAD</a></div>
      <label for="check" class="checkbox">
        <i class="ri-menu-line"></i>
      </label>
      <input type="checkbox" name="check" id="check" />
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="resume.html">Resume</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="skills.html">Skills</a></li>
        <li><a href="message.php">Send Me Message</a></li>
      </ul>
    </div>
  </nav>

  <div class="message" style="background-image: url(assets/background/myphoto.JPG);">
    <h5>SEND ME A MESSAGE</h5><br>
    <form class="message-form" action="" method="post">
      <input class="in" type="text" name="message-name" id="subject" placeholder="Enter Your Name" required> <br><br>
      <input class="in" type="text" name="message-subject" id="subject" placeholder="Message Subject" required> <br><br>
      <input class="mail" type="email" name="email" placeholder="example@gmail.com" required><br><br>
      <textarea class="t-area" name="message-body" placeholder="Your Message" id="message-body" cols="30" rows="10" required></textarea> <br>
      <button class="btn" type="submit">Send Message</button>
    </form>
    <?php if (!empty($message_status)) : ?>
      <p><?php echo $message_status; ?></p>
    <?php endif; ?>
  </div>

  <footer class="footer">
    &copy; 2023 Designed by Ahmad Bamalli
  </footer>
</body>
</html>
