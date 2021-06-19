console.log("DAY-7 \nObject Programs:-\n");

// question no. 1
console.log("Program no. 1\n");
const student = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12
}
console.log(Object.keys(student));


//question no. 2
console.log("Program no. 2\n");
console.log(Object.keys(student));
delete(student.rollno);
console.log(Object.keys(student));


//question no. 3
console.log("Program no. 3\n");
student.rollno = 12;
console.log("Length of object is: "+ Object.keys(student).length);


//question no. 4
console.log("Program no. 4\n");
lib = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead', 
        readingStatus: true 
    }, 
    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        readingStatus: true 
    }, 
    { 
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false 
    }   
];

for(i=0;i<lib.length;i++)
{
    if(lib[i].readingStatus)
    {
        console.log(lib[i].title+' -> Already Read');
    }
    else{
        console.log(lib[i].title+' -> Not Read');
    }
}


//question no. 5
console.log("Program no. 5\n");
const cylinder={
    vol:1.0000,
    volume: function(h,r){
        vol=2*3.14*r*h
        console.log(vol)
    }}
cylinder.volume(3.1,2.4)


//question no. 6
console.log("Program no. 6\n")
var lib=[
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]
console.log(lib.sort((a,b)=>{
    return b.libraryID-a.libraryID;
}))