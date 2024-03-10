<?php
function generateIDCart()
{
    $datetime = gmdate('dmYHi', time() + 7 * 3600);
    $randomDigits = sprintf('%07d', mt_rand(1, 99999999));
    $id = 'DH' .  $datetime . '-' . $randomDigits;
    return $id;
}
