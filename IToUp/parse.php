<?php

//откуда будем парсить информацию
 $content = file_get_contents('https://www.dns-shop.ru/catalog/17a8946d16404e77/texnika-dlya-pechati/');

// Определяем позицию строки, до которой нужно все отрезать
 $pos = strpos($content, 'Техника для печати');

//Отрезаем все, что идет до нужной нам позиции
 $content = substr($content, $pos);

// Точно таким же образом находим позицию конечной строки
 $pos = strpos($content, 'Блоги');

// Отрезаем нужное количество символов от нулевого
 $content = substr($content, 0, $pos);

//если в тексте встречается текст, который нам не нужен, вырезаем его
 $content = str_replace('текст который нужно вырезать','', $content);

// выводим спарсенный текст.
 echo $content;

echo "вставляем сюда завершающий код";
 ?>