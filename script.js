let tab = [];
let data = {}

let val = document.querySelector("#val");
let names = document.querySelector("#name")
let author = document.querySelector("#author")
let date = document.querySelector("#publication")
let evals = document.querySelector("#rating")
let cont = document.querySelector(".books")
let cont2 = document.querySelector(".tf")
var a = 0;

let clk = document.querySelector(".rt")
let nav = document.querySelector("nav")
let bar  = document.querySelectorAll(".bar")

let h = document.querySelector("#home")
let m = document.querySelector("#movies")
let ab = document.querySelector("#about")
let c  = 0 ;

function hide(){
    bar.forEach(element => {
        element.classList.toggle("v")
        
    });
}

clk.addEventListener("click",()=>{
    nav.classList.toggle("h")
    
    

    h.addEventListener("click",()=>{
        nav.classList.remove("h")
    })
    m.addEventListener("click",()=>{
        nav.classList.remove("h")
    })
    ab.addEventListener("click",()=>{
        nav.classList.remove("h")
    })
    

})

h.addEventListener("click",()=>{
    clearContent()
    home()
})

m.addEventListener("click",()=>{
    clearContent()
    movie()
})

ab.addEventListener("click",()=>{
    clearContent()
    about()
})

function clear(){
    let cont2 = document.querySelector(".tf")
    while(cont2.firstChild){
        
        cont2.removeChild(cont2.firstChild)
    }

}

function check(){
    let inputs = document.querySelectorAll(".f-inp")
            
            inputs.forEach(e => {
                
                e.addEventListener("change",(el)=>{
                    if(el.target.checkValidity() == true){
                        el.target.style.border = "1px solid #22c55e"
                    }
                    else if(el.target.checkValidity() == false){
                        el.target.style.border = "1px solid #ef4444"
                    }
                })
                
            });
}

function rest(){
    let form = generateElement("form","gh","fm",cont2.id,"",true)


    let b1 = generateElement("div","close","b1",form.id,"",true)
    let c1 = generateElement("button","close-btn","c1",b1.id,"x",true)
    c1.addEventListener("click",(e)=>{
        e.preventDefault()
        c1.parentElement.parentElement.remove()
        clear()
        generateElement("button","show","",cont2.id,"Add a Movie")
        generate()
    })

    let b2 = generateElement("div","block","b2",form.id,"",true)
    
    
    let l1 = generateElement("label","name","l1",b2.id,true)
    l1.for = "name"
    l1.textContent = "Title"
    let i1 = generateElement("input","f-inp","name",b2.id,true)
    i1.maxLength = 40
    i1.type = "text"
    i1.placeholder = "Enter the title here"
    i1.required = "true"
    
    let b3 = generateElement("div","block","b3",form.id,"",true)
    
    let l2 = generateElement("label","auth","l2",b3.id,true)
    l2.textContent = "Producer"
    l1.for = "author"
    let i2 = generateElement("input","f-inp","author",b3.id,true)
    i2.maxLength = 40
    i2.type = "text"
    i2.placeholder = "Enter the producer's name here"
    i2.required = "true"

    let b4 = generateElement("div","block","b4",form.id,"",true)
    
    let l3 = generateElement("label","pub","l3",b4.id,true)
    l3.textContent = "Release Year"
    l3.for = "publication"
    let i3 = generateElement("input","f-inp","publication",b4.id,true)
    i3.type = "date"
    i3.required = "true"

    let b5 = generateElement("div","block","b5",form.id,"",true)
    
    let l4 = generateElement("label","pub","l4",b5.id,"",true)
    l4.textContent = "Your Rating/10"
    l4.for = "rating"
    let i4 = generateElement("input","f-inp","rating",b5.id,true)
    i4.type = "number"
    i4.min = 1
    i4.max = 10
    i4.required = "true"

    let b6 = generateElement("div","validate","b6",form.id,"",true)
    let b7 = generateElement("button","show","val",b6.id,"Validate",true)
    check()
    b7.addEventListener("click",(e)=>{
        if(i1.checkValidity() == true && i2.checkValidity() == true && i3.checkValidity() == true && i4.checkValidity() == true){
            e.preventDefault();
           
           let newBook = {name:i1.value,auth:i2.value,date:i3.value,rate:i4.value,id:a}
            data[`obj-${a}`] = newBook;
        
            a += 1;
            clear()
            let b9 = generateElement("div","blocky","b9",cont2.id,"",true)
            generateElement("button","show","",b9.id,"Add a Movie")
            generate()
            
        }
        else{
            check()
            e.target.style.display = "hidden"

        }

        
    })


    
}

function generateElement(type,cls = "",id = "",parent,content,ret="false"){
    let el = document.createElement(type);
    el.classList.add(cls)
    el.textContent = content;
    el.id = id;
    

    if(el.classList == "del-btn"){
        el.addEventListener("click",()=>{
            for(keys in data){
                if(`a-${data[keys]['id']}` == el.parentElement.id){
                    delete data[keys]
                }
            }
            el.parentElement.remove()
        })

    }

    if(el.classList == "show"){
        el.addEventListener("click",(e)=>{
            e.target.remove()
            clear()
            rest()
            generate()


        })
    }

    
    pp = document.querySelector(`#${parent}`)
        pp.append(el)
        return el




}

let vv = {objet1:{},objet2:{}}
delete vv['objet1']
vv['objet3'] = {}






generate = function(){
    let cont2 = document.querySelector(".tf")
    for(keys in data){
            let cont2 = document.querySelector(".tf")
            let div =  document.createElement("div");
            let div2 =  document.createElement("div");
            div.id = `a-${data[keys]['id']}`;
            div.classList.add("blocky");
            div2.append(div)
            cont2.append(div2)
            generateElement("p","txt","title",div.id,`${data[keys]['name']}`)
            generateElement("p","txt","",div.id,`Release Date: ${data[keys]['date']}`)
            generateElement("p","txt","",div.id,`Executive Producer: ${data[keys]['auth']}`)
            generateElement("p","txt","",div.id,`Review Notes: ${data[keys]['rate']}/10`)

            generateElement("button","del-btn","",div.id,`Delete`)

            
            

        }

}
    



function movie(){
    let titleP = document.querySelector("title")
    titleP.textContent = "FavBooks-Movies"
    let content = document.querySelector(".content")

    let title = generateElement("h3","tdd","hl",content.id,"Your favorites Movies/Tv Show",true)
    let books = generateElement("div","books","b10",content.id,"",true)
    let tf = generateElement("div","tf","tf",books.id,"",true)
    generateElement("button","show","",tf.id,"Add a Movie")
    generate()
    
}   


function clearContent(){
    let content = document.querySelector(".content")
    while(content.firstChild){
            
        content.removeChild(content.firstChild)
    }
}

function about(){
    let titleP = document.querySelector("title")
    titleP.textContent = "FavBooks-About"
    let content = document.querySelector(".content")
    let title = generateElement("h3","tdds","p3",content.id,"Introduction",true)
    let text1 = generateElement("p","tdds","t1",content.id,"Hello, I'm Igeon22, a web developer passionate about creating interactive and aesthetically pleasing websites. My journey in the world of web development started 1 year ago, and since then, I have delved deep into the languages and technologies essential for crafting exceptional online experiences.",true)

    let title2 = generateElement("h3","tdds","p4",content.id,"HTML (HyperText Markup Language)",true)
    let text2 = generateElement("p","tdds","t2",content.id,"HTML forms the foundation of every website. It allows me to structure content, integrate links and media, and establish a robust framework for navigation.",true)

    let title3 = generateElement("h3","tdds","p5",content.id,"CSS (Cascading Style Sheets)",true)
    let text3 = generateElement("p","tdds","t3",content.id,"With CSS, I breathe life into my creations by applying unique styles and layouts. I can create responsive designs that adapt to all screen sizes.",true)
    
    let title4 = generateElement("h3","tdds","p6",content.id,"JavaScript",true)
    let text4 = generateElement("p","tdds","t4",content.id,"JavaScript adds interactivity to my projects. Thanks to it, I can create smooth animations, dynamic forms, and advanced features for an outstanding user experience.",true)

    let title5 = generateElement("h3","tdds","p6",content.id,"What Drives Me",true)
    let text5 = generateElement("p","tdds","t4",content.id,"What motivates me the most is the opportunity to solve complex problems through programming and create web products that simplify users' lives. I also enjoy staying updated with the latest trends and emerging technologies to remain current in this ever-evolving field.",true)

    let title6 = generateElement("h3","tdds","p6",content.id,"In Conclusion",true)
    let text6 = generateElement("p","tdds","t4",content.id,"As a web developer, I aspire to continue learning and growing, working on innovative projects, and contributing to the evolution of the online experience. If you share my passion for digital creation, please don't hesitate to get in touch. I'm always open to new collaboration opportunities. Thank you for your attention!",true)


}

function pic1(){
    let content = document.querySelector(".content")
    let cp1 = generateElement("div","image-container","b5",content.id,"",true)
    let picture1 = document.createElement("picture")
    cp1.append(picture1)
    let source11 = document.createElement("source")
    source11.srcset = `images/movie640.jpg`
    source11.media = "(max-width:600px)"
    let source12 = document.createElement("source")
    source12.srcset = `images/movie1280.jpg`
    source12.media = "(min-width:601px)"
    let img = document.createElement("img")
    img.alt = "Film"



    picture1.append(source11)
    picture1.append(source12)
    picture1.append(img)
}


function pic2(){
    let content = document.querySelector(".content")
    let cp1 = generateElement("div","image-container","b5",content.id,"",true)
    let picture1 = document.createElement("picture")
    cp1.append(picture1)
    let source11 = document.createElement("source")
    source11.srcset = `images/movie-theater640.jpg`
    source11.media = "(max-width:600px)"
    let source12 = document.createElement("source")
    source12.srcset = `images/movie-theater1280.jpg`
    source12.media = "(min-width:601px)"
    let img = document.createElement("img")
    img.alt = "Theater"


    picture1.append(source11)
    picture1.append(source12)
    picture1.append(img)
}

function pic3(){
    let content = document.querySelector(".content")
    let cp1 = generateElement("div","image-container","b5",content.id,"",true)
    let picture1 = document.createElement("picture")
    cp1.append(picture1)
    let source11 = document.createElement("source")
    source11.srcset = `images/ticket640.jpg`
    source11.media = "(max-width:600px)"
    let source12 = document.createElement("source")
    source12.srcset = `images/ticket1280.jpg`
    source12.media = "(min-width:601px)"
    let img = document.createElement("img")
    img.alt = "Ticket"

    picture1.append(source11)
    picture1.append(source12)
    picture1.append(img)
}

function home(){
    let titleP = document.querySelector("title")
    titleP.textContent = "FavBooks-Home"
    let content = document.querySelector(".content")
    
    
    let title1 = generateElement("h3","tdds","p3",content.id,`Welcome to FavWatch`,true)
    let text1 = generateElement("p","tdds","t1",content.id,"Discover FavWatch, your personal space to explore the magical world of cinema and keep track of your favorite movies. Whether you're a passionate cinephile or just someone who loves movies, our site is designed for you.",true)
    pic3()
    
    
    let title2 = generateElement("h3","tdds","p4",content.id,"Explore the History of Cinema",true)
    let text2 = generateElement("p","tdds","t2",content.id,`Dive into the rich and fascinating history of cinema, from its humble beginnings in the 19th century to the golden age of Hollywood and beyond. Our "Cinema History" section will take you on a journey through time, highlighting key moments in this remarkable artistic and technological adventure.`,true)
    
    
    pic1()
    let title3 = generateElement("h3","tdds","p5",content.id,"Manage Your Movie Collection",true)
    let text3 = generateElement("p","tdds","t3",content.id,`With FavWatch, you can easily create your own list of favorite movies. Add your timeless classics, recent favorites, and share your recommendations with other film enthusiasts. It's the perfect place to organize your future viewings and rediscover your favorites.`,true)


    pic2()
    let title4 = generateElement("h3","tdds","p6",content.id,"Join the Community",true)
    let text4 = generateElement("p","tdds","t4",content.id,"FavWatch is not just a movie directory site; it's also a community of cinephiles. Exchange opinions, discuss the latest releases, and share your reviews with fellow members. Together, we celebrate our love for the seventh art.",true)
    let text5 = generateElement("p","tdds","t5",content.id,"Sign up now on FavWatch and dive into the world of cinema like never before. Join us on this exciting cinematic journey!",true)
    let text6 = generateElement("p","tdds","t6",content.id,"FavWatch - Your Personal Cinephile Space.",true)
}

clearContent()
home()