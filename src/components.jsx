import {fahrenheitToCelsius, hello, squareFeetToAcres} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Chloe") == "{hello('Chloe')}"</p>
      <p>hello("Kaitlyn") == "{hello('Kaitlyn')}"</p>
      <p>hello("Jose") == "{hello('Jose')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celsius 
<h2>results</h2>
<p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p>
<p>fahrenheitToCelsius(212) == "{fahrenheitToCelsius(212)}"</p>
<p>fahrenheitToCelsius(70) == "{fahrenheitToCelsius(70)}"</p>
    </section>;
}

function Question2_0(){
    return <section>
2.0 Write a function that converts square feet to acres. There are 43,560 square feet per acre.
<h2>results</h2>
<p>squareFeetToAcres(43560) == "{squareFeetToAcres(43560)}"</p>
<p>squareFeetToAcres(21780) == "{squareFeetToAcres(21780)}"</p>
<p>squareFeetToAcres(8712) == "{squareFeetToAcres(8712)}"</p>
    </section>;
}

function Question3(){
    return <section>
3. Given the width and length of a lawn in metres and the square metres cut per minute, calculate the minutes it would take to mow that lawn.
<h2>results</h2>
<p>mowingTime(5, 8, 2) == "{mowingTime(5, 8, 2)}" minutes</p> {/* 40 / 2 = 20 */}
<p>mowingTime(12, 6, 3) == "{mowingTime(12, 6, 3)}" minutes</p> {/* 72 / 3 = 24 */}
<p>mowingTime(18, 10, 6) == "{mowingTime(18, 10, 6)}" minutes</p> {/* 180 / 6 = 30 */}
    </section>;
}

function Question4(){
    return <section>
4. Compute the air quality given an air quality index.
<h2>results</h2>
<p>airQuality(48) == "{airQuality(48)}"</p>
<p>airQuality(82) == "{airQuality(82)}"</p>
<p>airQuality(103) == "{airQuality(103)}"</p>
<p>airQuality(177) == "{airQuality(177)}"</p>
<p>airQuality(299) == "{airQuality(299)}"</p>
<p>airQuality(304) == "{airQuality(304)}"</p>
    </section>;
}

function Question5(){
    return <section>
5. yee_ha takes an integer and returns one of the following:
<p>"Yee" if number is evenly divisible by 3</p>
<p>"Ha" if number is evenly divisible by 7</p>
<p>"Yee Ha" if number is evenly divisible by both</p>
<p>"Nada" if number is none of the above</p>
<h2>results</h2>
    <p>yee_ha(6) == "{yee_ha(6)}"</p>     {/* Yee */}
    <p>yee_ha(14) == "{yee_ha(14)}"</p>   {/* Ha */}
    <p>yee_ha(42) == "{yee_ha(42)}"</p>   {/* Yee Ha */}
    <p>yee_ha(10) == "{yee_ha(10)}"</p>     {/* Nada */}
        </section>;
}

function Question6(){
    return <section>
6. Calculate the slope of a line.
<h2>results</h2>
<p>slope(3, 1, 7, 5) == "{slope(3, 1, 7, 5)}"</p>   {/* (5 - 1) / (7 - 3) = 4 / 4 = 1 */}
<p>slope(1, 4, 5, 4) == "{slope(1, 4, 5, 4)}"</p>   {/* (4 - 4) / (5 - 1) = 0 / 4 = 0 */}
<p>slope(2, 10, 6, 2) == "{slope(2, 10, 6, 2)}"</p> {/* (2 - 10) / (6 - 2) = -8 / 4 = -2 */}
    </section>;
}

export {Question1, Question2, Question2_0, Question3, Question4, Question5, Question6,}