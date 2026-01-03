const users = [
  {
    fullname: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Web Developer",
    description: "A passionate front-end developer who loves building interactive and user-friendly websites."
  },
  {
    fullname: "Ananya Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "UI/UX Designer",
    description: "Creative designer focused on clean layouts, smooth user experience, and modern design trends."
  },
  {
    fullname: "Amit Patel",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    profession: "Software Engineer",
    description: "Backend-focused engineer experienced in APIs, databases, and scalable system design."
  },
 
  {
    fullname: "Vikram Singh",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    profession: "Data Analyst",
    description: "Data-driven analyst skilled in turning raw data into meaningful business insights."
  }
];

var sum = ''
users.forEach(function(elem){
    sum = sum +` <div class="card">
            <img src=${elem.image} alt="">
            <h3>${elem.fullname}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
    
})
var main =document.querySelector('main')
main.innerHTML = sum
