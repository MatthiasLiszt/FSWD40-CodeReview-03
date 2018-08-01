
# HomePage for A CarInsurance Company

## Description

(5) Correct code structure (aka code indentation) for the HTML and Javascript code, that makes it easier for humans to read.

(5) Clear separation of CSS, JavaScript and images in distinct folders: css, js, img (access through relative paths).

(20) Correct CSS styling according to the provided design (colors, layout, fonts etc. Pay attention to the small details like shadows, rounded corners, etc.). Feel free to improve the design if you want.

(10) Use SASS/SCSS tools to style your site (include one of each: mixin, _partial file, variable and extend)

(20) Create a new function calculateInsurance(). This function does a calculation with a formula based on the selected country:

For Austria : insurance = horse_power x 100 / age   + 50;

For Germany: insurance = horse_power x 120 / age  + 100;

For Italy: insurance = horse_power x 150 / (age+2)  +  150;


(15) Extract the values from the input fields and use them as calculation values for calculateInsurance() function. (hint: pay attention to type conversion!)

(15) Use these calculated values to present the insurance price on the screen where "printed calculation goes here" is placed (see image example). e.g. “John, your insurance costs 300 €”

Note:  to be capable of getting bonus points, a function like  calculateInsurancePerCountry(horse_power, age, country)  that returns a value that can be tested will be needed.


Bonus Points:

(10) Add Jasmine to your project. Add tests to your script and test for various inputs of horse_power, age, country (3 or more different tests)

(10) Display the employees within the index.html outputting the data from an external JSON file.

Create a data.json file:

var teamMembers = '[{"name":"Fran", "email":"fran@index.com","image":"images/person1.png"},{"name":"Bill","email":"bill@index.com","image":"images/person2.png"},{"name":"Fritz", "email":"fritz@index.com","image":"images/person3.png"}]';
