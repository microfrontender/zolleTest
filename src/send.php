<?php

    $to = 'vb@zolle.ru'; 
    $subject ='Zolle Test '; 
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Сумма: '.$_POST['sum'].'</p>
                    <p>Год: '.$_POST['date'].'</p>
                    <p>Район: '.$_POST['area'].'</p>
                    <p>Требования и пожелания: '.$_POST['other'].'</p>
                    <p>Телефон: '.$_POST['tel'].'</p>
                    
                                         
                </body>
            </html>'; 
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: Kalinovsky <kalinovsky.job@gmail.com'>\r\n"; 
    mail($to, $subject, $message, $headers); 

    include_once "smsc_api.php";
    $r = send_sms('79110800284', $message);
?>