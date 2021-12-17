<?php 
$name = "Undefined name";
if(isset($_POST['name'])){
  $name = $_POST['name'];
}

$message = "<p>A new message was received from:</p>";
$message .= "<p>$name</p>";
$message .= "<p>$name's email address is:</p>";
$message .= "<p>ToDo</p>";
$message .= "<hr>";
$message .= "<p>Message:</p>";
$message .= "<p>ToDo</p>";

$to_email = 'condellomark@mail.com';
$subject = 'Subject ToDo';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Name ToDo <noreply@condellomark.com.au>';

$status = mail($to_email, $subject, $message, implode("\r\n", $headers));

$message = [
  'status' => $status ? 'success' : 'error',
];
return json_encode($message);
?>