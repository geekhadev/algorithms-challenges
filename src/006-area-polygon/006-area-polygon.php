<?php

function areaPoligon ($n) {

  if (!$n) {
    return "Input must be a number integer";
  }

  if (!is_int($n)) {
    return "Input must be a number integer";
  }

  $d = ($n - 1) * 2;
  $a = ($d * $n) + 1;
  return $a;
}

?>
