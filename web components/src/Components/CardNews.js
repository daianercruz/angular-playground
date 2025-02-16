class CardNews extends HTMLElement{
    
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");


        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");    
        cardRight.setAttribute("class", "card__right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/img2.jpg";
        cardRight.appendChild(newsImage);
        

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent =`
                
        .card{
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;

        }

        .card__right > img{
            
            max-width:400px;
            max-height:250px;
            width: auto;
            height: auto;

        }

        .card__left > span{
            
            font-weight: 300;

        } 

        .card__left > a{
            margin-top: 15px;
            font-size: 30px;

        } 

        .card__left > p{
            
            font-size: 20px;
            color: gray;

        } 
        `
        return style;
    }
}

customElements.define("card-news", CardNews);