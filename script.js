
 //qus
 //1.create your resume data inJSON sormat

 let myResume={
    "basics": {
      "name": "GOKUL S",
      "email": "gokulkks43@gamil.com",
      "phone":6379542045 ,
      "degree": "b.sc,b.ed",
      "location": {
        "address": "2/2konagarappatti(vii,post)",
        "postalCode": 635202,
        "city": "dharmapuri",
        "state": "Tamilnadu",
        "country": "India"
      },
    },

    "education": [
      {
        "institution 1 degre": "P.M.P COLLEGE OF ARTS AND SCINCE",
        "institution 2 degre": "SAMY COLLEGE OF EDUCATION",
        "department": "PHYSICS",
        "studyType": "fulltime",
        "batch year": 2019,
        "batch year": 2023,
      }
    ],
    "skills": [
      {
        "learning": "MERN fullstack devalopment",
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
 }
  console.log(myResume); 
  
 //qus 
 //2.JSON iterate over all for loops

 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send();
 request.onload = function(){
     var data = request.response;
     //console.log(data);
     var result = JSON.parse(data);
 // for loop method
     for(var i=0;i<result.length;i++){
         console.log(result[i].name.common);
     } 
  // for in method
      for (let key in result){
       console.log(result[key].region)
     }
  // for of method
     for (let val of result){
       console.log(val.population);
     }
  } 
 