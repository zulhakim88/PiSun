# The PiSun calculator

Culculate the circumference of the Sun with an increasing/Nth number of PI precision.

## Objectives

* Calculate PI to the Nth decimal point precision
* Use that PI value to calculate the circumfrence of the sun
* Display both values in a WebApp

## The Journey

### The Calculation of PI

I started researching on mathematical algorithms hoping to find a simple formula which can be translated into code. (Up to this point I still haven't decided on the programming language just yet). Little that I know I have left school for too long and what I ended up doing was just staring at lines and lines of formula with 0 understanding.

I bumped into a site where it's all about [PI](https://www.piday.org/learn-about-pi/) and saw an article explaining about PI and the Chudnovsky brothers. That led me to the [Chudnovsky's algorithm](https://en.wikipedia.org/wiki/Chudnovsky_algorithm).

Learning more about implementing Chudnovsky's algorithm led me to [Fabrice Bellard's implementation](https://bellard.org/quickjs/pi.html). 

### The radius of the Sun

According to Google: [696,340 KM](https://www.google.com/search?q=sun+radius&oq=sun+radius&aqs=chrome..69i57j0l7.1465j1j7&sourceid=chrome&ie=UTF-8)

### The PI algorithm

[Fabrice Bellard's](https://bellard.org/quickjs/pi.html) take on [Chudnovsky's algorithm](https://en.wikipedia.org/wiki/Chudnovsky_algorithm).

### The Beginning

* Thinking of using Node/Express JS
* Calculate PI to the Nth decimal points.
* Store it somewhere (was thinking of MangoDB).
* Calculation will run by itself for a certain period of time.
* Do a GET call and retrieve whatever value that has been calculated.

### The End

* Ended up using Node/Express JS.
* Along the way, I realized that I will not have to store anything in the DB as PI or Circumference calculation can be done on-demand.
* I also found out that calculation percision doesn't matter much after the PI's 15th decimal point as per this article [here](https://www.jpl.nasa.gov/edu/news/2016/3/16/how-many-decimals-of-pi-do-we-really-need/).
* As I want to have the utmost performance in getting the circumference result, calculating on-demand and limiting it up to 15 decimal points makes more sense for me in terms of implementation.
* Can it compute circumference using PI bigger than 15 decimal points? **ABSOLUTELY!** Just use the manual calculation button that generates PI with the increase precision of +1.

### The Test

* I've generated up to 200,000 PI decimal points and works as expected. 

* I've compared the PI generated to [1 million digits of PI](https://pi2e.ch/blog/2017/03/10/pi-digits-download/).

### The Issues

* It is slower when trying to display when the app reaches ~100k decimal points of PI.

## How to run the project

### The Requirements

You will need this to run the project:
* npm

### Start the server

```
cd PiSunServer
npm install
npm start
```

### Start the app

```
cd pi-sun-client
npm install
npm start
```

Frontend: http://localhost:3000

## The Limitations

* Value is not store anywhere. I don't see or maybe understand enough for the use of storing the PI value.

## The Future

* Probably find a better(faster) PI generating algorithm.
* I decided to use Node/Express as it's the easiest/fastest for me to start of with. Probably using a more robust/high performance languages like Rust.
* Write test for the implementation
* Scalibility (Never really thought about it).
