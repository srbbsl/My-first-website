




/*
function add(x, y) {
    const d = x + y;
    console.log(d);
}

add(1, 1);
add(1, 2);



function add() {
    d = 1 + 1;
    console.log(d);
}

add();
add();



// calculation of grade according to score
/*let score = prompt("Entert you scour 0 to 100");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <=49) {
    grade = "E";
}

console.log("According to your score your grade is", grade);



/*let grade = prompt("Enter your grade")
console.log(grade);

if (grade >= 90 && grade <= 100) {
    console.log("Grade : A");

} else if (grade >= 70 && grade <= 89) {
    console.log("Grade : B");

} else if (grade >= 60 && grade <= 69) {
    console.log("Grade : C");

} else if (grade >= 50 && grade <= 59) {
    console.log("Grade : D");

} else if (grade >= 0 && grade <= 49) {
    console.log("Grade : F");
}


//Check multiple of 5
/*let a = prompt("Enter a number");

if (a % 5 === 0) {
    console.log(a, "is multiple of 5");
}  else {
        console.log(a, "is not multiple of 5");
}

/*
let a = prompt("Enter age for voting right");

if (a >= 18) {
    console.log("You can vote");

}    else {
        console.log("You cannot vote");
    }

let b = prompt("Enter age for presedent eligibility")    

if (b >= 35) {
    console.log("You can run president");
}    
    else {
        console.log("You cannot run president");
    }


/*program question no. 1

let age = prompt("Enter Age Number:");
console.log(typeof age); //age is string

age = Number(age); //now age is number
console.log(typeof age);

if (age >= 18) {
    console.log("You are eligible to vote");


    if (age >= 35) {
        console.log("You are eligible to run for president");
    } 

    else {
        console.log("You are not eligible to run for president");
    }
}

else {
    console.log("You are not eligible for vote");
}    */


//progarm question no. 2

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("The sum of all numbers from 1 to 100:", sum);