//TASK 1:
//Own JSON format resume:

let resume1={
    "name":"Mathivathana.K.K",
    "email":"mathikk06gmail.com",
    "phonenumber":"9807654321",
    "Education":
        {
        "Institution":"Vivekanandha nursing college",
        "course":"Diploma in Nursing",
        "yearofpassing":"2020-2024"
    },

    "Language":["Tamil","English","Kannada"],
    "Skills":["Javascript","Html","css","MondoDb","Reactjs","Expressjs","Nodejs"],
    "Address":
        {
            "District":"Tiruppur",
            "state":"Tamilnadu",
            "country":"India"

    }
}
//TASK 2:

let resume={
    "name":"Mathivathana.K.K",
    "email":"mathikk06gmail.com",
    "phonenumber":"9807654321",
    "Education":
        {
        "Institution":"Vivekanandha nursing college",
        "course":"Diploma in Nursing",
        "yearofpassing":"2020-2024"
    },

    "Language":["Tamil","English","Kannada"],
    "Skills":["Javascript","Html","css","MondoDb","Reactjs","Expressjs","Nodejs"],
    "Address":
        {
            "District":"Tiruppur",
            "state":"Tamilnadu",
            "country":"India"

    }
}
console.log(resume);
console.log(resume.name);
console.log(resume.email);
console.log(resume.phonenumber);
console.log(resume.Education);
console.log(resume.Language);
console.log(resume.Skills);
console.log(resume.Address);

//for loop

for(var i=0;i<resume.Language.length;i++){
    console.log(resume.Language[i]);

}
for(var i=0;i<resume.Skills.length;i++){
    console.log(resume.Skills[i]);
}

//for in loop 

for(var x in resume){
    console.log(resume[x]);
}
//for of loop

let data= Object.entries(resume);
//console.log(data);
for(var[key,values] of data){
    console.log(key,values);
}
//ARRAY ELEMENTS
for(var a of resume.Skills){
console.log(a);
}
for(var a of resume.Language){
    console.log(a);
}

//for each loop

data.forEach(([key,values])=>console.log(values));
