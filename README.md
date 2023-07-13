# Application name:
* Mr. Roboger's Neighborhood

## Contributors:
* Peter Do

## Description: 
* A webpage showcasing html, css, and javascript skills.

## Technologies used:
1. HTML
2. CSS
3. Javascript
4. Web APIs

## Application setup instructions:
1. git clone https://github.com/KIL4ME/Mr.-Roboger-s-Neighborhood
2. Open index.html in the a web browser.

## known bugs:
* N/A

## Tests:
Describe: subsituteDigits()

Test: "It should return a list of numbers up to the user inputted number."
Code: subsituteDigits(0)
Expected Output: "0"

Test: "It should replace all numbers containing a 1 with "beep"."
Code: subsituteDigits(1)
Expected Output: "0, 'beep'"

Test: "It should replace all numbers containing a 2 with "boop"."
Code: subsituteDigits(2)
Expected Output: "0, 'beep', 'boop'"

Test: "It should replace all numbers containing a 3 with "wont you be my neighbor"."
Code: subsituteDigits(3)
Expected Output: "0, 'beep', 'boop', "wont you be my neighbor""

Test: "It should replace all numbers containing both a 1 and a 2 with "boop"."
Code: subsituteDigits(12)
Expected Output: "0,...........'boop'"

Test: "It should replace all numbers containing both a 1 and a 3 with "wont you be my neighbor"."
Code: subsituteDigits(13)
Expected Output: "0,..........."wont you be my neighbor""

Test: "It should replace all numbers containing both a 2 and a 3 with "wont you be my neighbor"."
Code: subsituteDigits(23)
Expected Output: "0,..........."wont you be my neighbor""

## License
Copyright (c) 2023 Peter Do

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.