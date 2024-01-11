<?php

use PHPUnit\Framework\TestCase;

require 'area-polygon.php';

class AreaPolygonTest extends TestCase
{
  public function testAreaPolygon()
  {
    $this->assertEquals(1, areaPoligon(1));
    $this->assertEquals(5, areaPoligon(2));
    $this->assertEquals(13, areaPoligon(3));
  }

  public function testInputIsNotInteger()
  {
    $this->assertEquals("Input must be a number integer", areaPoligon("test"));
    $this->assertEquals("Input must be a number integer", areaPoligon(null));
  }
}

?>
