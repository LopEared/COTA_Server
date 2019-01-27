<?php 
date_default_timezone_set('Europe/Minsk');
echo '<p>Привет, мир!</p>';

echo date("Y-m-d_G:i:s");

$date_name=date("Y-m-d_G-i-s");
echo "<p>Date right now: $date_name </p>";

$file_name="$date_name.txt";
$file_text="Привет, Михаил!";
	if(!file_exists($file_name)){
		echo "Создаем файл $file_name";
		file_put_contents($file_name,$file_text);
	}
	else{
		echo 'Файл существует! <br>';
		echo 'Перезаписываем файл! <br>';
		file_put_contents($file_name,$file_text,file_append);
	}
#phpinfo();
?>
