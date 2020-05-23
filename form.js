class form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email")
                      this.text = createElement('h1', "Youtube vs Tiktok survey");
                      this.question1 = createElement('h3',"Which do you think is better??Youtube/Tiktok")
                      this.answer1 = createInput()
                      this.question2 = createElement('h3',"Which do you think is more entertaining??Youtube/Tiktok")
                this.answer2 = createInput()
                this.question3 = createElement('h3',"Which do you think is more informative??Youtube/Tiktok")
                this.answer3 = createInput()
                this.button = createButton('Start');
               
    }


    display() {
        this.input.position(670, 255)
    this.button.position(200,200);
        this.email.position(670, 165)
               this.text.position(600, 5)
        this.question1.position(400,300)
        this.answer1.position(700,350)
        this.question2.position(400,400)
        this.answer2.position(700,450)
        this.question3.position(400,500)
        this.answer3.position(700,550)
    }
    

    
    
}