
function trianglePattern1() {
    let rows = 5;

    //pattern variable carries the final pattern in string format
    let pattern = "";

    //outer loop runs for 'rows' no. of times
    for (let n = 1; n <= rows; n++) {

        //inner loop runs for n
        for (let num = 1; num <= n; num++) {
            pattern += num;
        }

        //add a new line character after contents of each line 
        pattern += "\n";
    }

    console.log(pattern);
}
trianglePattern1();

function trianglePattern2() {
    let rows = 5;

    //pattern variable carries the final pattern in string format
    let pattern = "";

    //outer loop runs for 'rows' no. of times
    for (let n = 1; n <= rows; n++) {

        //inner loop runs for n
        for (let num = 1; num <= n; num++) {
            pattern += n;
        }

        //add a new line character after contents of each line 
        pattern += "\n";
    }

    console.log(pattern);
}
trianglePattern2();

function trianglePattern3() {
    let rows = 4;

    //variable contains the next element of the pattern
    let variable = 1;

    //pattern variable carries the final pattern in string format
    let pattern = "";

    //outer loop runs for 'rows' no. of times
    for (let n = 1; n <= rows; n++) {

        //inner loop runs for n
        for (let num = 1; num <= n; num++) {
            pattern += variable + "";
            variable++;
        }

        //add a new line character after contents of each line 
        pattern += "\n";
    }

    console.log(pattern);
}
trianglePattern3();

function reverseTriangle4() {
    let rows = 5;

    //pattern variable carries the final pattern in string format
    let pattern = "";

    //outer loop runs for 'rows' no. of times
    for (let n = 1; n <= rows; n++) {

        //inner loop runs for n
        for (let num = 1; num <= 6 - n; num++) {
            pattern += num;
        }

        //add a new line character after contents of each line 
        pattern += "\n";
    }

    console.log(pattern);
}
reverseTriangle4();

function pyramidPattern5() {
    let rows = 4;


    //pattern variable carries the final pattern in string format
    let pattern = "";

    //outer loop runs for 'rows' no. of times
    for (let n = 1; n <= rows; n++) {

        //inner loop - I -> for the numbers 
        for (let space = 1; space <= rows - n; space++) {
            pattern += "";
        }

        //inner loop - II -> for the numbers 
        for (let num = 1; num <= 2 * n - 1; num++) {
            pattern += num;
        }

        //add a new line character after contents of each line 
        pattern += "\n";
    }

    console.log(pattern);
}
pyramidPattern5();

function pyramidPattern6() {
    let rows = 3;
    let variable = 1;
    let pattern = "";

    //outer loop runs for 'rows' no. of times
    for (let n = 1; n <= rows; n++) {

        //inner loop - I -> for the spaces
        for (let space = 1; space <= rows-n; space++) {
            pattern += "";
        }

        //inner loop - II -> for the series of numbers
        for (let num = 1; num <= 2 * n - 1; num++) {
            pattern += "";
            variable++;
        }
        pattern += "\n";
    }
    console.log(pattern);
}
pyramidPattern6();

function squareStarPattern1() {
    let rows = 5;

    //pattern variable carries the final pattern in string format 
    let pattern = "";

    //outer loop runs for 'rows' no. of times
    for (let n = 1; n <= rows; n++) {

        //inner loop for printing stars{
        for (let num = 1; num <= 5; num++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern);
}
squareStarPattern1();

function hollowSquareStarPattern2() {
    let rows = 5;

    //pattern variable carries the final pattern in string format
    let pattern = "";

    //outer loop runs for 'rows' no. of times
    for (let n = 1; n <= rows; n++) {

        for (let num = 1; num <= 5; num++) {

            //print star only if it is the boundary location
            if (n == 1 || n == rows) pattern += "*";
            else {
                if (num == 1 || num == 5) {
                    pattern += "*";
                } else {
                    pattern += "";
                }
            }
        }
        pattern += "\n";
    }
    console.log(pattern);
}
hollowSquareStarPattern2();

function rightTrianglePattern3(){
    let rows = 5;

    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop runs for `rows` no. of times
    for (let n = 1; n <= rows; n++) {
       // Inner loop - I -> prints spaces
       for (let space = 1; space <= rows - n; space++) {
          pattern += " ";
       }
    
       // Inner Loop - II -> prints stars
       for (let num = 1; num <= n; num++) {
          pattern += "*";
       }
       pattern += "\n";
    }
    console.log(pattern);
}
rightTrianglePattern3();

function leftTrianglePattern4(){
    let rows = 5;

    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop runs for `rows` no. of times
    for (let n = 1; n <= rows; n++) {
       // print stars for n number of times in each row
       for (let num = 1; num <= n; num++) {
          pattern += "*";
       }
       pattern += "\n";
    }
    console.log(pattern);
}
leftTrianglePattern4();

function pyramidTrianglePattern5(){
    let rows = 5;

    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop runs for `rows` no. of times
    for (let n = 1; n <= rows; n++) {
       // Inner Loop - I -> prints spaces
       for (let space = 1; space <= rows - n; space++) {
          pattern += " ";
       }
    
       // Inner Loop - II -> prints stars
       for (let num = 1; num <= 2 * n - 1; num++) {
          pattern += "*";
       }
       pattern += "\n";
    }
    console.log(pattern);
}
pyramidTrianglePattern5();

function reverseTriangleNum1(){
    let rows = 5;

    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop runs for `rows` no. of times
    for (let n = 1; n <= rows; n++) {
       for (let num = rows; num >= n; num--) {
          pattern += num;
       }
       pattern += "\n";
    }
    console.log(pattern);
}
reverseTriangleNum1();

function reverseTriangleNum2(){
    let rows = 5;

    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop runs for `rows` no. of times
    for (let n = 1; n <= rows; n++) {
       // print 6-n stars
       for (let num = 6 - n; num >= 1; num--) {
          pattern += num;
       }
       pattern += "\n";
    }
    console.log(pattern);
    
}
reverseTriangleNum2();

function holloTriangleStarPattern3(){
    let rows = 5;

    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop runs for `rows` no. of times
    for (let n = 1; n <= rows; n++) {
       for (let num = 1; num <= n; num++) {
          // Print only boundary stars
          if (num === 1 || num === n || n === rows) pattern += "*";
          else {
             pattern += " ";
          }
       }
       pattern += "\n";
    }
    console.log(pattern);
}
holloTriangleStarPattern3();

function downwardTriangleStarPattern4(){
    let rows = 5;

    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop runs for `rows` no. of times
    for (let n = 1; n <= rows; n++) {
       for (let num = 1; num <= 6 - n; num++) {
          pattern += "*";
       }
       pattern += "\n";
    }
    console.log(pattern);
    
}
downwardTriangleStarPattern4();

function trianglePatternStr1(){
    let rows = 5;
    let char = "A";
    
    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop runs for `rows` no. of times
    for (let n = 1; n <= rows; n++) {
       // prints the character n times in each row
       for (let num = 1; num <= n; num++) {
          pattern += char;
       }
       pattern += "\n";
    }
    console.log(pattern);
}
trianglePatternStr1();

function reverseTriangleStr2(){
    let rows = 5;

    // pattern variable carries the final pattern in string format
    let pattern = "";
    let char = "A";
    
    // outer loop runs for `rows` no. of times
    for (let n = 1; n <= rows; n++) {
       for (let num = 1; num <= 6 - n; num++) {
          pattern += char;
       }
       pattern += "\n";
    }
    console.log(pattern);
    
}
reverseTriangleStr2();

function inverseTrianglePyramid3(){
    let rows = 5;
    let char1 = "$";
    let char2 = "%";
    
    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop - I -> runs for `rows-1` no. of times
    // forms a character triangle
    for (let n = 1; n <= rows - 1; n++) {
       for (let num = 1; num <= n; num++) {
          pattern += char1;
       }
       pattern += "\n";
    }
    
    // outer loop - II -> runs for `rows` no. of times
    // forms an inverse character triangle
    for (let n = 1; n <= rows; n++) {
       for (let num = 1; num <= 6 - n; num++) {
          pattern += char2;
       }
       pattern += "\n";
    }
    
    console.log(pattern);
}
inverseTrianglePyramid3();

function inverseTrianglePyramid4(){
    let rows = 5;
    let char1 = "A";
    let char2 = "B";
    
    // pattern variable carries the final pattern in string format
    let pattern = "";
    
    // outer loop - I -> runs for `rows` no. of times
    // forms an inverse character triangle with 'A'.
    for (let n = 1; n <= rows; n++) {
       for (let num = 1; num <= 6 - n; num++) {
          pattern += char1;
       }
       pattern += "\n";
    }
    pattern += "\n";
    
    // outer loop - II -> runs for `rows` no. of times
    // forms a character triangle with 'B'.
    for (let n = 1; n <= rows; n++) {
       for (let num = 1; num <= n; num++) {
          pattern += char2;
       }
       pattern += "\n";
    }
    
    console.log(pattern);
}
inverseTrianglePyramid4();