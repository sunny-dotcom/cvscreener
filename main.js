console.log("this is main.js")
let data = [
    {
        username: "Rohan Das",
        age: 23,
        city: "kolkata",
        language: "python",
        framework: "django",
        image: "https://randomuser.me/api/portraits/med/men/50.jpg"
    },
    {
        username: "Aniket Gond",
        age: 18,
        city: "Mumbai",
        language: "javascript",
        framework: "react",
        image: "https://randomuser.me/api/portraits/med/men/60.jpg"
    },
    {
        username: "utie camellia",
        age: 31,
        city: "los angeles",
        language: "c++",
        framework: ".net",
        image: "https://randomuser.me/api/portraits/med/women/20.jpg"
    },
    {
        username: "unifer tennyson",
        age: 19,
        city: "bangalore",
        language: "php",
        framework: "laravel",
        image: "https://randomuser.me/api/portraits/med/women/50.jpg"
    },
    {
        username: "jack fury",
        age: 28,
        city: "Santa Monica",
        language: "python",
        framework: "flask",
        image: "https://randomuser.me/api/portraits/med/men/10.jpg"
    },
    
]


function CvIterator(profiles){
    let index = 0;
    return{
        next: function(){
            return index<profiles.length ?
            {value: profiles[index++], done:false}:
            {done:false}
            
        }
    }

}
let candidates = CvIterator(data)
NextCv()

let next = document.getElementById('next')
next.addEventListener('click',NextCv)

function NextCv(){
    const CurrentCandidate = candidates.next().value
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrentCandidate !=undefined){    
    image.innerHTML = `<img src = "${CurrentCandidate.image}"></img>`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${CurrentCandidate.username}</li>
    <li class="list-group-item">${CurrentCandidate.age} Years old</li>
    <li class="list-group-item">lives in ${CurrentCandidate.city}</li>
    <li class="list-group-item">primarily works on ${CurrentCandidate.language}</li>
    <li class="list-group-item">Uses ${CurrentCandidate.framework} framework</li>
  </ul>`
    }
    else{
        alert("list of application for data scientist job is over!")
        window.location.reload();
    }
}