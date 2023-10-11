<?php
// Файлы phpmailer
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

# проверка, что ошибки нет
if (!error_get_last()) {

    // Переменные, которые отправляет пользователь
    $name = $_POST['name'] ;
    $phone = $_POST['phone'] ;
    $message = $_POST['message'];
   //  $email = $_POST['email'];
   //  $client = $_POST['client-type'];
   //  $fasad = $_POST['fasad-type'];
    //$file = $_FILES['myfile'];
    
    
    // Формирование самого письма
    $title = "ХОЧУ ТОРТ (запрос с сайта)";
    $body = "
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};
    
    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'RUPO@list.ru'; // Логин на почте
    $mail->Password   = 'xHrUinPJCS5w8aWGp98Z'; // Пароль на почте
    //$mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('RUPO@list.ru', ''); // Адрес самой почты и имя отправителя
    
    // Получатель письма
    $mail->addAddress('RUPO@list.ru');
    
    // Прикрипление файлов к письму
   //  if (!empty($file['name'][0])) {
   //      for ($i = 0; $i < count($file['tmp_name']); $i++) {
   //          if ($file['error'][$i] === 0) 
   //              $mail->addAttachment($file['tmp_name'][$i], $file['name'][$i]);
   //      }
   //  }
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    
    
    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "Сообщение успешно отправлено!";
    } else {
        $data['result'] = "error";
        $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
        $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";
    }
    
} else {
    $data['result'] = "error";
    $data['info'] = "В коде присутствует ошибка";
    $data['desc'] = error_get_last();
}

// Отправка результата
header('Content-Type: application/json');
echo json_encode($data);

?>