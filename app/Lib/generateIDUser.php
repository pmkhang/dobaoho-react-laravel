<?php
function generateIDUser()
{
    $year = date('Y');
    $randomDigits = sprintf('%08d', mt_rand(1, 999999999));
    $id = 'KH' . $year . '-' . $randomDigits;
    return $id;
}
