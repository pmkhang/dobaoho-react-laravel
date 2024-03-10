<?php
function generateIDProduct()
{
    $year = date('Y');
    $randomDigits = sprintf('%08d', mt_rand(1, 999999999));
    $id = 'SP' . $year . '-' . $randomDigits;
    return $id;
}
