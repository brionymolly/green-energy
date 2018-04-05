(function () { // Closure - wrapping your code in a "safe-bubble"    
    const resource = {
       chrome: {},
       firefox: {},
       opera: {}
    };
    
    // Load your images on page-load
    function preloader() {
        const imagesList = [
           "./wind.jpeg",
           "./rain.jpeg",
           "./solar.jpeg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in an HTMLCollection */
        let button = document.querySelectorAll(".button button");

    function highlight(ev) {

        let clickedButton = ev.target;

        //removes classes with value active
        for(let i=0; i < button.length; i++){
            if(button[i].hasAttribute("class")) {
             button[i].removeAttribute("class");

               }
        }
        //adds value active to selected button
        clickedButton.setAttribute("class", "active");
    }

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", highlight); 
    }


     /* 
    Complete the rest of your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

    const topics = {
        wind: {
            headingContent: "Wind Energy",
            bodyText:"Investing in wind power does not mean you need to invest in a plethora of 70ft high wind turbines in your back yard. There are smaller, simpler and cheaper ways to harness zephir's power, that you can bring home with you. Small turbines are a fraction of the cost and can eventually bring back profit after a 5-6 year period, or sooner if you happen to live in a particullary windy place.",
            imgUrl: "./wind.jpeg",
            imgAlt:"wind turbine"
        },
         rain: {
            headingContent: "Harvest the Rain",
            bodyText:"We are all concious of the water we use, with the mantres of today's society of taking a quick shower instead of a bath, or making sure you only turn on the tap when you use it... One of the simpliest things you can do to make your house and garden more green.Literally! Having a small system to direct your guttering to a water storage container can save you alot of money throughout the year, as well as protecting the environment. The stored water can be used for non-potable uses, such as irigation, waste water for toilet flushes as well as keeping your garden lush and green through the year.",
            imgUrl: "./rain.jpeg",
            imgAlt:"Window pane rain"
        },
         solar: {
            headingContent: "Capture the Sun",
            bodyText:"Solar Pannels. When thinking of these blue and gold rectangles, reflected back at us is the eye watering prices. But, if you install a small set of pannels for simple tasks such as heating up water, you can save incredible amounts in electricity and gas bills, as well as the satisfaction of not using the two. As the years go on and the environment grows more and mroe to the forefront of our societal minds, the prices of solarpanels has also dropped, making it a viable option for the average family household.",
            imgUrl: "./solar.jpeg",
            imgAlt:"solar pannels and sky" 
        }
    }

    //accessing


    const article = document.querySelector("article");

    function loadContent(ev){
        let clickedBtn = ev.target;
        let key = clickedBtn.getAttribute("data-content");

        article.innerHTML = "";

        while(article.firstChild) {

            article.firstChild.remove();
        }

        let h2 = document.createElement("h2");
        h2.textContent = topics[key].headingContent;
        article.appendChild(h2);
        
        let img = document.createElement("img");
        img.setAttribute("src", topics[key].imgUrl);
//        img.textContent = topics[key].imgUrl;
        article.appendChild(img);
        
        let p = document.createElement("p");
        p.textContent = topics[key].bodyText;
        article.appendChild(p);

    }
   
        
        /* 
        Create HTML:
        <h1>{heading-content}</h1>
        <img src="{img-url}" alt="{img-alt}">
        <p>{text-content}</p> */
    
        /* 
        Load the created HTML into the HTML-container for dynamic content */  
    
    /* 
    Close your handleSelection function here. */  
    

        for (let i=0; i < button.length; i++) {
        button[i].addEventListener("click", loadContent);
    }
    
}());
    

    














