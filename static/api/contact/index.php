<?php
//include the two files
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['name']) && empty($_POST['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    ); 
    exit();
}

if ($_POST){
    http_response_code(200);
    $subject = 'Formularz kontaktowy: ' . $_POST['name'] . ' ' . $_POST['tel'];
    $from = $noreplyEmail;
    $message = '<b>Wiadomość: </b>' . $_POST['message'] . '<br/>' . '<b>Email: </b>' . $_POST['email'] . '<br/>' . '<b>Telefon: </b>' . $_POST['phone'] . '<br/>' . '<b>Pakiet: </b>' . $_POST['package'];
    $sendEmail = new Sender($adminEmail, $from, $subject, $message);
    $sendEmail->send();

    $subjectResp = 'Dziękujemy za kontakt! || Spring Studio';
    $fromResp = $noreplyEmail;
    $messageResp = 'Dziękujemy za kontakt z nami.' . '<br/>' . 'Odpowiemy na Twoją wiadomość najszybciej jak to możliwe.'  . '<br/>' . 'Pozdrawiamy!';
    $sendEmailResp = new Sender($_POST['email'], $fromResp, $subjectResp, $messageResp);
    $sendEmailResp->send();
} else {
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}
