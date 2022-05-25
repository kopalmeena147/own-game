var qCheck;

class Form {

  constructor() {
    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.whatisyourname = createElement('h2');
    this.tellingScore = createElement('h2');
    this.tellingAboutUpdates = createElement('h2');
    this.madeby = createElement('h2');
    this.instruction = createElement('h2');
    //this.reset = createButton('Reset');
    this.startQuiz = createButton('Start Quiz');

    this.qu1 = createElement('h2');
    this.qu1o1 = createButton('White');
    this.qu1o2 = createButton('Black');
    
    this.qu2 = createElement('h2');
    this.qu2o1 = createButton('Light yagami');
    this.qu2o2 = createButton('Lawliet');
    
    this.qu3 = createElement('h2');
    this.qu3o1 = createButton('Green apples');     
    this.qu3o2 = createButton('Red apples');
    
    this.qu4 = createElement('h2');
    this.qu4o1 = createButton('Misa');
    this.qu4o2 = createButton('L');
    
    this.qu5 = createElement('h2');
    this.qu5o1 = createButton('Sidoh');
    this.qu5o2 = createButton('Mellow');
   
    this.qu6 = createElement('h2');
    this.qu6o1 = createButton('Whole life span'); 
    this.qu6o2 = createButton('Half of their life span');
   
    this.qu7 = createElement('h2');
    this.qu7o1 = createButton('Teru Mikami');
    this.qu7o2 = createButton('Light');
    
    this.qu8 = createElement('h2');
    this.qu8o1 = createButton('Mellow and Near');
    this.qu8o2 = createButton('Mellow and Sidoh');
    
    this.qu9 = createElement('h2');
    this.qu9o1 = createButton('Kira');
    this.qu9o2 = createButton('Sakujo');
    
    this.qu10 = createElement('h2');
    this.qu10o1 = createButton('Ryuk wrote his name in his death note');
    this.qu10o2 = createButton('Misa wrote his name in death note');
    
    
   
    
    
  

  }

  getState(){
    var qCheckRef  = database.ref('qCheck');
    gameStateRef.on("value",function(data){
       qCheck = data.val();
    })

  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.instruction.hide();
    this.startQuiz.hide();
    //this.qu1.hide();  
  }

  display(){
    this.title.html("The Christmas Quiz");
    this.title.position(displayWidth/2-72 , 0);
    this.title.style('color',rgb(0,0,254))
    this.title.style('font-size',26)

    this.whatisyourname.html("Please type your name here:");
    this.whatisyourname.position(430,327);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2, displayHeight/2 - 10);
    this.button.style('width', '100px');
    this.button.style('height', '30px');
    this.button.style('background', 'yellow');

    this.button.mousePressed(()=>{
      this.whatisyourname.hide();
      this.input.hide();
      this.button.hide();
     name = this.input.value();
      this.greeting.html("Merry Christmas " + name + " and a Happy New Year");
      this.greeting.position(displayWidth/2 - 180, displayHeight/4);

      

      this.qu1.html("Q.1.What color shirt did L wear? ");
      this.qu2.html("Q.2.What is the main character's full name?  ");
      this.qu3.html("Q.3.What is the favorite food of Light's Shinigami, Ryuk? ");
      this.qu4.html("Q.4.Who is second Kira? ");
      this.qu5.html("Q.5.Which Shinigami, out of the options below, likes chocolate? ");
      this.qu6.html("Q.6.When making a deal for shinigami eyes, what must a human give up? ");
      this.qu7.html("Q.7.Whose arms did L die in? ");
      this.qu8.html("Q.8.Who are the two kids that grew up in Wammy's House and were competing to become L's successor?  ");
      this.qu9.html("Q.9.What does Mikami say when he kills someone with the Death Note?     ");
      this.qu10.html("Q.10.How did Light die? ");
      
      

      this.startQuiz.position(displayWidth/2, displayHeight/2 + 70);
      this.startQuiz.style('width', '120px');
      this.startQuiz.style('height', '30px');
      this.startQuiz.style('background', 'yellow');

    //  this.startQuiz.style('width', '150px');
      //this.startQuiz.style('height', '50px');

    this.instruction.html("The instructions of the game are as follows - As Christmas comes on 25th December every year, this quiz will also be having 25 questions. All the questions will be related to Christmas or New Year only.  Their is no time limit and so let's see how much you know about Christmas and New Year. The result will be displayed after attending all questions. You cannot skip any question. To start the quiz click on the 'Start Quiz' button below.");
    this.instruction.position(5,displayHeight/4 + 50);


    });

    this.startQuiz.mousePressed(()=>{
      qCheck = 1;
     
      if(qCheck === 1){
        this.greeting.hide();
        this.instruction.hide();
        this.startQuiz.hide();
  
        this.qu1.position(10,80);

        this.qu1o1.position(417,208.5);
        this.qu1o1.style('width', '150px');
        this.qu1o1.style('height', '50px');
        this.qu1o1.style('background', 'lightblue');
        this.qu1o1.style('color', rgb(240,0,0));
        this.qu1o1.style('font-size', '17.5px');
        
        this.qu1o2.position(1137,208.5);
        this.qu1o2.style('width', '150px');
        this.qu1o2.style('height', '50px');
        this.qu1o2.style('background', 'lightblue');
        this.qu1o2.style('color', rgb(240,0,0));
        this.qu1o2.style('font-size', '17.5px');
        
      }

      if(qCheck === 2){
  
        this.qu2.position(10,80);
          this.qu2o1.position(417,208.5);
         
          this.qu2o2.position(1137,208.5);
          
          
      this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
     
      }

      if(qCheck === 3){
  
        this.qu3.position(10,80);
          this.qu3o1.position(417,208.5);
          
          this.qu3o2.position(1137,208.5);
         
          
      this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
     
      }

      if(qCheck === 4){
  
        this.qu4.position(10,80);
          this.qu4o1.position(417,208.5);
         
          this.qu4o2.position(1137,208.5);
         
          
      this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
     
      }

      if(qCheck === 5){
  
        this.qu5.position(10,80);
          this.qu5o1.position(417,208.5);
         
          this.qu5o2.position(1137,208.5);
          
          
      this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      
      }

      if(qCheck === 6){
  
        this.qu6.position(10,80);
          this.qu6o1.position(417,208.5);
         
          this.qu6o2.position(1137,208.5);
           
          
      this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
     
      }

      if(qCheck === 7){
  
        this.qu7.position(10,80);
          this.qu7o1.position(417,208.5);
         
          this.qu7o2.position(1137,208.5);
         
          
      this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
     
      }

      if(qCheck === 8){
  
        this.qu8.position(10,80);
          this.qu8o1.position(417,208.5);
          
          this.qu8o2.position(1137,208.5);
           
          
      this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
     
      }

      if(qCheck === 9){
  
        this.qu9.position(10,80);
          this.qu9o1.position(417,208.5);
         
          this.qu9o2.position(1137,208.5);
          
          
      this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      
      }

      if(qCheck === 10){
  
        this.qu10.position(10,80);
          this.qu10o1.position(417,208.5);
         
          this.qu10o2.position(1137,208.5);
          
          
      this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
     
      }

      
          
    
    }); 

// ======================================
//                  qu1
// ======================================

this.qu1o1.mousePressed(()=>{
  qCheck = 2;
  q1 = "wrong";
  

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
  
    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
     
}); 

this.qu1o2.mousePressed(()=>{
  qCheck = 2;
  q1 = "right";
  score += 1;

  this.qu2.position(10,80);
  this.qu2o1.position(417,208.5);
  this.qu2o1.style('width', '150px');
  this.qu2o1.style('height', '50px');
  this.qu2o1.style('background', 'lightblue');
  this.qu2o1.style('color', rgb(240,0,0));
  this.qu2o1.style('font-size', '17.5px');
  
  
  this.qu2o2.position(1137,208.5);
  this.qu2o2.style('width', '150px');
  this.qu2o2.style('height', '50px');
  this.qu2o2.style('background', 'lightblue');
  this.qu2o2.style('color', rgb(240,0,0));
  this.qu2o2.style('font-size', '17.5px');
 

    this.qu1.hide();
      this.qu1o1.hide();
      this.qu1o2.hide();
     
}); 



// ======================================
//                  qu2
// ======================================

this.qu2o1.mousePressed(()=>{
  qCheck = 3;
  q2 = "wrong";
  

  this.qu3.position(10,80);
  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
 
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
  

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
     
}); 

this.qu2o2.mousePressed(()=>{
  qCheck = 3;
  q2 = "wrong";
  

  this.qu3.position(10,80);
  this.qu3o1.position(417,208.5);
  this.qu3o1.style('width', '150px');
  this.qu3o1.style('height', '50px');
  this.qu3o1.style('background', 'lightblue');
  this.qu3o1.style('color', rgb(240,0,0));
  this.qu3o1.style('font-size', '17.5px');
  
  this.qu3o2.position(1137,208.5);
  this.qu3o2.style('width', '150px');
  this.qu3o2.style('height', '50px');
  this.qu3o2.style('background', 'lightblue');
  this.qu3o2.style('color', rgb(240,0,0));
  this.qu3o2.style('font-size', '17.5px');
 

    this.qu2.hide();
      this.qu2o1.hide();
      this.qu2o2.hide();
      
}); 



// ======================================
//                  qu3
// ======================================

this.qu3o1.mousePressed(()=>{
  qCheck = 4;
  q3 = "right";
  score += 1;

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
  
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
  

    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
      
}); 

this.qu3o2.mousePressed(()=>{
  qCheck = 4;
  q3 = "wrong";
  

  this.qu4.position(10,80);
  this.qu4o1.position(417,208.5);
  this.qu4o1.style('width', '150px');
  this.qu4o1.style('height', '50px');
  this.qu4o1.style('background', 'lightblue');
  this.qu4o1.style('color', rgb(240,0,0));
  this.qu4o1.style('font-size', '17.5px');
 
  this.qu4o2.position(1137,208.5);
  this.qu4o2.style('width', '150px');
  this.qu4o2.style('height', '50px');
  this.qu4o2.style('background', 'lightblue');
  this.qu4o2.style('color', rgb(240,0,0));
  this.qu4o2.style('font-size', '17.5px');
 
    this.qu3.hide();
      this.qu3o1.hide();
      this.qu3o2.hide();
   
}); 



// ======================================
//                  qu4
// ======================================

this.qu4o1.mousePressed(()=>{
  qCheck = 5;
  q4 = "wrong";
  

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

this.qu4o2.mousePressed(()=>{
  qCheck = 5;
  q4 = "wrong";
  

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

this.qu4o3.mousePressed(()=>{
  qCheck = 5;
  q4 = "right";
  score += 1;

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

this.qu4o4.mousePressed(()=>{
  qCheck = 5;
  q4 = "wrong";
  

  this.qu5.position(10,80); 
  this.qu5o1.position(417,208.5);
  this.qu5o1.style('width', '150px');
  this.qu5o1.style('height', '50px');
  this.qu5o1.style('background', 'lightblue');
  this.qu5o1.style('color', rgb(240,0,0));
  this.qu5o1.style('font-size', '17.5px');
  this.qu5o3.position(417,625.5);
  this.qu5o3.style('width', '150px');
  this.qu5o3.style('height', '50px');
  this.qu5o3.style('background', 'lightblue');
  this.qu5o3.style('color', rgb(240,0,0));
  this.qu5o3.style('font-size', '17.5px');
  this.qu5o2.position(1137,208.5);
  this.qu5o2.style('width', '150px');
  this.qu5o2.style('height', '50px');
  this.qu5o2.style('background', 'lightblue');
  this.qu5o2.style('color', rgb(240,0,0));
  this.qu5o2.style('font-size', '17.5px');
  this.qu5o4.position(1137,625.5);
  this.qu5o4.style('width', '150px');
  this.qu5o4.style('height', '50px');
  this.qu5o4.style('background', 'lightblue');   
  this.qu5o4.style('color', rgb(240,0,0));
  this.qu5o4.style('font-size', '17.5px');

    this.qu4.hide();
      this.qu4o1.hide();
      this.qu4o2.hide();
      this.qu4o3.hide();
      this.qu4o4.hide();
}); 

// ======================================
//                  qu5
// ======================================

this.qu5o1.mousePressed(()=>{
  qCheck = 6;
  q5 = "right";
  score += 1;

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

this.qu5o2.mousePressed(()=>{
  qCheck = 6;
  q5 = "wrong";
  

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

this.qu5o3.mousePressed(()=>{
  qCheck = 6;
  q5 = "wrong";
  

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

this.qu5o4.mousePressed(()=>{
  qCheck = 6;
  q5 = "wrong";
  

  this.qu6.position(10,80);
  this.qu6o1.position(417,208.5);
  this.qu6o1.style('width', '150px');
  this.qu6o1.style('height', '50px');
  this.qu6o1.style('background', 'lightblue');
  this.qu6o1.style('color', rgb(240,0,0));
  this.qu6o1.style('font-size', '17.5px');
  this.qu6o3.position(417,625.5);
  this.qu6o3.style('width', '150px');
  this.qu6o3.style('height', '50px');
  this.qu6o3.style('background', 'lightblue');
  this.qu6o3.style('color', rgb(240,0,0));
  this.qu6o3.style('font-size', '17.5px');
  this.qu6o2.position(1137,208.5);
  this.qu6o2.style('width', '150px');
  this.qu6o2.style('height', '50px');
  this.qu6o2.style('background', 'lightblue');
  this.qu6o2.style('color', rgb(240,0,0));
  this.qu6o2.style('font-size', '17.5px');
  this.qu6o4.position(1137,625.5);
  this.qu6o4.style('width', '150px');
  this.qu6o4.style('height', '50px');
  this.qu6o4.style('background', 'lightblue');   
  this.qu6o4.style('color', rgb(240,0,0));
  this.qu6o4.style('font-size', '17.5px');

    this.qu5.hide();
      this.qu5o1.hide();
      this.qu5o2.hide();
      this.qu5o3.hide();
      this.qu5o4.hide();
}); 

// ======================================
//                  qu6
// ======================================

this.qu6o1.mousePressed(()=>{
  qCheck = 7;
  q6 = "wrong";
  

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 

this.qu6o2.mousePressed(()=>{
  qCheck = 7;
  q6 = "right";
  score += 1;

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 


this.qu6o3.mousePressed(()=>{
  qCheck = 7;
  q6 = "wrong";
  

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 

this.qu6o4.mousePressed(()=>{
  qCheck = 7;
  q6 = "wrong";
  

  this.qu7.position(10,80);
  this.qu7o1.position(417,208.5);
  this.qu7o1.style('width', '150px');
  this.qu7o1.style('height', '50px');
  this.qu7o1.style('background', 'lightblue');
  this.qu7o1.style('color', rgb(240,0,0));
  this.qu7o1.style('font-size', '17.5px');
  this.qu7o3.position(417,625.5);
  this.qu7o3.style('width', '150px');
  this.qu7o3.style('height', '50px');
  this.qu7o3.style('background', 'lightblue');
  this.qu7o3.style('color', rgb(240,0,0));
  this.qu7o3.style('font-size', '17.5px');
  this.qu7o2.position(1137,208.5);
  this.qu7o2.style('width', '150px');
  this.qu7o2.style('height', '50px');
  this.qu7o2.style('background', 'lightblue');
  this.qu7o2.style('color', rgb(240,0,0));
  this.qu7o2.style('font-size', '17.5px');
  this.qu7o4.position(1137,625.5);
  this.qu7o4.style('width', '150px');
  this.qu7o4.style('height', '50px');
  this.qu7o4.style('background', 'lightblue');   
  this.qu7o4.style('color', rgb(240,0,0));
  this.qu7o4.style('font-size', '17.5px');

    this.qu6.hide();
      this.qu6o1.hide();
      this.qu6o2.hide();
      this.qu6o3.hide();
      this.qu6o4.hide();
}); 

// ======================================
//                  qu7
// ======================================

this.qu7o1.mousePressed(()=>{
  qCheck = 8;
  q7 = "wrong";
  

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

this.qu7o2.mousePressed(()=>{
  qCheck = 8;
  q7 = "wrong";
  

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

this.qu7o3.mousePressed(()=>{
  qCheck = 8;
  q7 = "right";
  score += 1;

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

this.qu7o4.mousePressed(()=>{
  qCheck = 8;
  q7 = "wrong";
  

  this.qu8.position(10,80);
  this.qu8o1.position(417,208.5);
  this.qu8o1.style('width', '150px');
  this.qu8o1.style('height', '50px');
  this.qu8o1.style('background', 'lightblue');
  this.qu8o1.style('color', rgb(240,0,0));
  this.qu8o1.style('font-size', '17.5px');
  this.qu8o3.position(417,625.5);
  this.qu8o3.style('width', '150px');
  this.qu8o3.style('height', '50px');
  this.qu8o3.style('background', 'lightblue');
  this.qu8o3.style('color', rgb(240,0,0));
  this.qu8o3.style('font-size', '17.5px');
  this.qu8o2.position(1137,208.5);
  this.qu8o2.style('width', '150px');
  this.qu8o2.style('height', '50px');
  this.qu8o2.style('background', 'lightblue');
  this.qu8o2.style('color', rgb(240,0,0));
  this.qu8o2.style('font-size', '17.5px');
  this.qu8o4.position(1137,625.5);
  this.qu8o4.style('width', '150px');
  this.qu8o4.style('height', '50px');
  this.qu8o4.style('background', 'lightblue');   
  this.qu8o4.style('color', rgb(240,0,0));
  this.qu8o4.style('font-size', '17.5px');

    this.qu7.hide();
      this.qu7o1.hide();
      this.qu7o2.hide();
      this.qu7o3.hide();
      this.qu7o4.hide();
}); 

// ======================================
//                  qu8
// ======================================

this.qu8o1.mousePressed(()=>{
  qCheck = 9;
  q8 = "wrong";
  

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

this.qu8o2.mousePressed(()=>{
  qCheck = 9;
  q8 = "right";
  score += 1;

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

this.qu8o3.mousePressed(()=>{
  qCheck = 9;
  q8 = "wrong";
  

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

this.qu8o4.mousePressed(()=>{
  qCheck = 9;
  q8 = "wrong";
  

  this.qu9.position(10,80);
  this.qu9o1.position(417,208.5);
  this.qu9o1.style('width', '150px');
  this.qu9o1.style('height', '50px');
  this.qu9o1.style('background', 'lightblue');
  this.qu9o1.style('color', rgb(240,0,0));
  this.qu9o1.style('font-size', '17.5px');
  this.qu9o3.position(417,625.5);
  this.qu9o3.style('width', '150px');
  this.qu9o3.style('height', '50px');
  this.qu9o3.style('background', 'lightblue');
  this.qu9o3.style('color', rgb(240,0,0));
  this.qu9o3.style('font-size', '17.5px');
  this.qu9o2.position(1137,208.5);
  this.qu9o2.style('width', '150px');
  this.qu9o2.style('height', '50px');
  this.qu9o2.style('background', 'lightblue');
  this.qu9o2.style('color', rgb(240,0,0));
  this.qu9o2.style('font-size', '17.5px');
  this.qu9o4.position(1137,625.5);
  this.qu9o4.style('width', '150px');
  this.qu9o4.style('height', '50px');
  this.qu9o4.style('background', 'lightblue');   
  this.qu9o4.style('color', rgb(240,0,0));
  this.qu9o4.style('font-size', '17.5px');

    this.qu8.hide();
      this.qu8o1.hide();
      this.qu8o2.hide();
      this.qu8o3.hide();
      this.qu8o4.hide();
}); 

// ======================================
//                  qu9
// ======================================

this.qu9o1.mousePressed(()=>{
  qCheck = 10;
  q9 = "wrong";
  

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

this.qu9o2.mousePressed(()=>{
  qCheck = 10;
  q9 = "right";
  score += 1;

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

this.qu9o3.mousePressed(()=>{
  qCheck = 10;
  q9 = "wrong";
  

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

this.qu9o4.mousePressed(()=>{
  qCheck = 10;
  q9 = "wrong";
  

  this.qu10.position(10,80);
  this.qu10o1.position(417,208.5);
  this.qu10o1.style('width', '150px');
  this.qu10o1.style('height', '50px');
  this.qu10o1.style('background', 'lightblue');
  this.qu10o1.style('color', rgb(240,0,0));
  this.qu10o1.style('font-size', '17.5px');
  this.qu10o3.position(417,625.5);
  this.qu10o3.style('width', '150px');
  this.qu10o3.style('height', '50px');
  this.qu10o3.style('background', 'lightblue');
  this.qu10o3.style('color', rgb(240,0,0));
  this.qu10o3.style('font-size', '17.5px');
  this.qu10o2.position(1137,208.5);
  this.qu10o2.style('width', '150px');
  this.qu10o2.style('height', '50px');
  this.qu10o2.style('background', 'lightblue');
  this.qu10o2.style('color', rgb(240,0,0));
  this.qu10o2.style('font-size', '17.5px');
  this.qu10o4.position(1137,625.5);
  this.qu10o4.style('width', '150px');
  this.qu10o4.style('height', '50px');
  this.qu10o4.style('background', 'lightblue');   
  this.qu10o4.style('color', rgb(240,0,0));
  this.qu10o4.style('font-size', '17.5px');

    this.qu9.hide();
      this.qu9o1.hide();
      this.qu9o2.hide();
      this.qu9o3.hide();
      this.qu9o4.hide();
}); 

// ======================================
//                  qu10
// ======================================

this.qu10o1.mousePressed(()=>{
  qCheck = 11;
  q10 = "wrong";
  

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

this.qu10o2.mousePressed(()=>{
  qCheck = 11;
  q10 = "right";
  score += 1;

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

this.qu10o3.mousePressed(()=>{
  qCheck = 11;
  q10 = "wrong";
  

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

this.qu10o4.mousePressed(()=>{
  qCheck = 11;
  q10 = "wrong";
  

  this.qu11.position(10,80);
  this.qu11o1.position(417,208.5);
  this.qu11o1.style('width', '150px');
  this.qu11o1.style('height', '50px');
  this.qu11o1.style('background', 'lightblue');
  this.qu11o1.style('color', rgb(240,0,0));
  this.qu11o1.style('font-size', '17.5px');
  this.qu11o3.position(417,625.5);
  this.qu11o3.style('width', '150px');
  this.qu11o3.style('height', '50px');
  this.qu11o3.style('background', 'lightblue');
  this.qu11o3.style('color', rgb(240,0,0));
  this.qu11o3.style('font-size', '17.5px');
  this.qu11o2.position(1137,208.5);
  this.qu11o2.style('width', '150px');
  this.qu11o2.style('height', '50px');
  this.qu11o2.style('background', 'lightblue');
  this.qu11o2.style('color', rgb(240,0,0));
  this.qu11o2.style('font-size', '17.5px');
  this.qu11o4.position(1137,625.5);
  this.qu11o4.style('width', '150px');
  this.qu11o4.style('height', '50px');
  this.qu11o4.style('background', 'lightblue');   
  this.qu11o4.style('color', rgb(240,0,0));
  this.qu11o4.style('font-size', '17.5px');

    this.qu10.hide();
      this.qu10o1.hide();
      this.qu10o2.hide();
      this.qu10o3.hide();
      this.qu10o4.hide();
}); 

// ======================================
//                  qu11
// ======================================

this.qu11o1.mousePressed(()=>{
  qCheck = 12;
  q11 = "right";
  score += 1;

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

this.qu11o2.mousePressed(()=>{
  qCheck = 12;
  q11 = "wrong";
  

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

this.qu11o3.mousePressed(()=>{
  qCheck = 12;
  q11 = "wrong";
  

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

this.qu11o4.mousePressed(()=>{
  qCheck = 12;
  q11 = "wrong";
  

  this.qu12.position(10,80);
  this.qu12o1.position(417,208.5);
  this.qu12o1.style('width', '150px');
  this.qu12o1.style('height', '50px');
  this.qu12o1.style('background', 'lightblue');
  this.qu12o1.style('color', rgb(240,0,0));
  this.qu12o1.style('font-size', '17.5px');
  this.qu12o3.position(417,625.5);
  this.qu12o3.style('width', '150px');
  this.qu12o3.style('height', '50px');
  this.qu12o3.style('background', 'lightblue');
  this.qu12o3.style('color', rgb(240,0,0));
  this.qu12o3.style('font-size', '17.5px');
  this.qu12o2.position(1137,208.5);
  this.qu12o2.style('width', '150px');
  this.qu12o2.style('height', '50px');
  this.qu12o2.style('background', 'lightblue');
  this.qu12o2.style('color', rgb(240,0,0));
  this.qu12o2.style('font-size', '17.5px');
  this.qu12o4.position(1137,625.5);
  this.qu12o4.style('width', '150px');
  this.qu12o4.style('height', '50px');
  this.qu12o4.style('background', 'lightblue');   
  this.qu12o4.style('color', rgb(240,0,0));
  this.qu12o4.style('font-size', '17.5px');

    this.qu11.hide();
      this.qu11o1.hide();
      this.qu11o2.hide();
      this.qu11o3.hide();
      this.qu11o4.hide();
}); 

// ======================================
//                  qu12
// ======================================

this.qu12o1.mousePressed(()=>{
  qCheck = 13;
  q12 = "wrong";
  

  this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

this.qu12o2.mousePressed(()=>{
  qCheck = 13;
  q12 = "wrong";
  

  this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

this.qu12o3.mousePressed(()=>{
  qCheck = 13;
  q12 = "wrong";
  

  this.qu13.position(10,80);
    this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

this.qu12o4.mousePressed(()=>{
  qCheck = 13;
  q12 = "right";
  score += 1;

  this.qu13.position(10,80);
  this.qu13.position(10,80);
  this.qu13o1.position(417,208.5);
  this.qu13o1.style('width', '150px');
  this.qu13o1.style('height', '50px');
  this.qu13o1.style('background', 'lightblue');
  this.qu13o1.style('color', rgb(240,0,0));
  this.qu13o1.style('font-size', '17.5px');
  this.qu13o3.position(417,625.5);
  this.qu13o3.style('width', '150px');
  this.qu13o3.style('height', '50px');
  this.qu13o3.style('background', 'lightblue');
  this.qu13o3.style('color', rgb(240,0,0));
  this.qu13o3.style('font-size', '17.5px');
  this.qu13o2.position(1137,208.5);
  this.qu13o2.style('width', '150px');
  this.qu13o2.style('height', '50px');
  this.qu13o2.style('background', 'lightblue');
  this.qu13o2.style('color', rgb(240,0,0));
  this.qu13o2.style('font-size', '17.5px');
  this.qu13o4.position(1137,625.5);
  this.qu13o4.style('width', '150px');
  this.qu13o4.style('height', '50px');
  this.qu13o4.style('background', 'lightblue');   
  this.qu13o4.style('color', rgb(240,0,0));
  this.qu13o4.style('font-size', '17.5px');

    this.qu12.hide();
      this.qu12o1.hide();
      this.qu12o2.hide();
      this.qu12o3.hide();
      this.qu12o4.hide();
});

// ======================================
//                  qu13
// ======================================

this.qu13o1.mousePressed(()=>{
  qCheck = 14;
  q13 = "wrong";
  

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

this.qu13o2.mousePressed(()=>{
  qCheck = 14;
  q13 = "right";
  score += 1;

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

this.qu13o3.mousePressed(()=>{
  qCheck = 14;
  q13 = "wrong";
  

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

this.qu13o4.mousePressed(()=>{
  qCheck = 14;
  q13 = "wrong";
  

  this.qu14.position(10,80);
  this.qu14o1.position(417,208.5);
  this.qu14o1.style('width', '150px');
  this.qu14o1.style('height', '50px');
  this.qu14o1.style('background', 'lightblue');
  this.qu14o1.style('color', rgb(240,0,0));
  this.qu14o1.style('font-size', '17.5px');
  this.qu14o3.position(417,625.5);
  this.qu14o3.style('width', '150px');
  this.qu14o3.style('height', '50px');
  this.qu14o3.style('background', 'lightblue');
  this.qu14o3.style('color', rgb(240,0,0));
  this.qu14o3.style('font-size', '17.5px');
  this.qu14o2.position(1137,208.5);
  this.qu14o2.style('width', '150px');
  this.qu14o2.style('height', '50px');
  this.qu14o2.style('background', 'lightblue');
  this.qu14o2.style('color', rgb(240,0,0));
  this.qu14o2.style('font-size', '17.5px');
  this.qu14o4.position(1137,625.5);
  this.qu14o4.style('width', '150px');
  this.qu14o4.style('height', '50px');
  this.qu14o4.style('background', 'lightblue');   
  this.qu14o4.style('color', rgb(240,0,0));
  this.qu14o4.style('font-size', '17.5px');

    this.qu13.hide();
      this.qu13o1.hide();
      this.qu13o2.hide();
      this.qu13o3.hide();
      this.qu13o4.hide();
});

// ======================================
//                  qu14
// ======================================

this.qu14o1.mousePressed(()=>{
  qCheck = 15;
  q14 = "wrong";
  

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

this.qu14o2.mousePressed(()=>{
  qCheck = 15;
  q14 = "right";
  score += 1;

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

this.qu14o3.mousePressed(()=>{
  qCheck = 15;
  q14 = "wrong";
  

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

this.qu14o4.mousePressed(()=>{
  qCheck = 15;
  q14 = "wrong";
  

  this.qu15.position(10,80);
  this.qu15o1.position(417,208.5);
  this.qu15o1.style('width', '150px');
  this.qu15o1.style('height', '50px');
  this.qu15o1.style('background', 'lightblue');
  this.qu15o1.style('color', rgb(240,0,0));
  this.qu15o1.style('font-size', '17.5px');
  this.qu15o3.position(417,625.5);
  this.qu15o3.style('width', '150px');
  this.qu15o3.style('height', '50px');
  this.qu15o3.style('background', 'lightblue');
  this.qu15o3.style('color', rgb(240,0,0));
  this.qu15o3.style('font-size', '17.5px');
  this.qu15o2.position(1137,208.5);
  this.qu15o2.style('width', '150px');
  this.qu15o2.style('height', '50px');
  this.qu15o2.style('background', 'lightblue');
  this.qu15o2.style('color', rgb(240,0,0));
  this.qu15o2.style('font-size', '17.5px');
  this.qu15o4.position(1137,625.5);
  this.qu15o4.style('width', '150px');
  this.qu15o4.style('height', '50px');
  this.qu15o4.style('background', 'lightblue');   
  this.qu15o4.style('color', rgb(240,0,0));
  this.qu15o4.style('font-size', '17.5px');

    this.qu14.hide();
      this.qu14o1.hide();
      this.qu14o2.hide();
      this.qu14o3.hide();
      this.qu14o4.hide();
});

// ======================================
//                  qu15
// ======================================

this.qu15o1.mousePressed(()=>{
  qCheck = 16;
  q15 = "wrong";
  

  this.qu16.position(10,80);
  this.qu16o1.position(417,208.5);
  this.qu16o1.style('width', '150px');
  this.qu16o1.style('height', '50px');
  this.qu16o1.style('background', 'lightblue');
  this.qu16o1.style('color', rgb(240,0,0));
  this.qu16o1.style('font-size', '17.5px');
  this.qu16o3.position(417,625.5);
  this.qu16o3.style('width', '150px');
  this.qu16o3.style('height', '50px');
  this.qu16o3.style('background', 'lightblue');
  this.qu16o3.style('color', rgb(240,0,0));
  this.qu16o3.style('font-size', '17.5px');
  this.qu16o2.position(1137,208.5);
  this.qu16o2.style('width', '150px');
  this.qu16o2.style('height', '50px');
  this.qu16o2.style('background', 'lightblue');
  this.qu16o2.style('color', rgb(240,0,0));
  this.qu16o2.style('font-size', '15px');
  this.qu16o4.position(1137,625.5);
  this.qu16o4.style('width', '150px');
  this.qu16o4.style('height', '50px');
  this.qu16o4.style('background', 'lightblue');   
  this.qu16o4.style('color', rgb(240,0,0));
  this.qu16o4.style('font-size', '17.5px');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

this.qu15o2.mousePressed(()=>{
  qCheck = 16;
  q15 = "wrong";
  

  this.qu16.position(10,80);
  this.qu16o1.position(417,208.5);
  this.qu16o1.style('width', '150px');
  this.qu16o1.style('height', '50px');
  this.qu16o1.style('background', 'lightblue');
  this.qu16o1.style('color', rgb(240,0,0));
  this.qu16o1.style('font-size', '17.5px');
  this.qu16o3.position(417,625.5);
  this.qu16o3.style('width', '150px');
  this.qu16o3.style('height', '50px');
  this.qu16o3.style('background', 'lightblue');
  this.qu16o3.style('color', rgb(240,0,0));
  this.qu16o3.style('font-size', '17.5px');
  this.qu16o2.position(1137,208.5);
  this.qu16o2.style('width', '150px');
  this.qu16o2.style('height', '50px');
  this.qu16o2.style('background', 'lightblue');
  this.qu16o2.style('color', rgb(240,0,0));
  this.qu16o2.style('font-size', '15px');
  this.qu16o4.position(1137,625.5);
  this.qu16o4.style('width', '150px');
  this.qu16o4.style('height', '50px');
  this.qu16o4.style('background', 'lightblue');   
  this.qu16o4.style('color', rgb(240,0,0));
  this.qu16o4.style('font-size', '17.5px');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

this.qu15o3.mousePressed(()=>{
  qCheck = 16;
  q15 = "wrong";
  

  this.qu16.position(10,80);
  this.qu16o1.position(417,208.5);
  this.qu16o1.style('width', '150px');
  this.qu16o1.style('height', '50px');
  this.qu16o1.style('background', 'lightblue');
  this.qu16o1.style('color', rgb(240,0,0));
  this.qu16o1.style('font-size', '17.5px');
  this.qu16o3.position(417,625.5);
  this.qu16o3.style('width', '150px');
  this.qu16o3.style('height', '50px');
  this.qu16o3.style('background', 'lightblue');
  this.qu16o3.style('color', rgb(240,0,0));
  this.qu16o3.style('font-size', '17.5px');
  this.qu16o2.position(1137,208.5);
  this.qu16o2.style('width', '150px');
  this.qu16o2.style('height', '50px');
  this.qu16o2.style('background', 'lightblue');
  this.qu16o2.style('color', rgb(240,0,0));
  this.qu16o2.style('font-size', '15px');
  this.qu16o4.position(1137,625.5);
  this.qu16o4.style('width', '150px');
  this.qu16o4.style('height', '50px');
  this.qu16o4.style('background', 'lightblue');   
  this.qu16o4.style('color', rgb(240,0,0));
  this.qu16o4.style('font-size', '17.5px');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

this.qu15o4.mousePressed(()=>{
  qCheck = 16;
  q15 = "right";
  score += 1;

  this.qu16.position(10,80);
  this.qu16o1.position(417,208.5);
  this.qu16o1.style('width', '150px');
  this.qu16o1.style('height', '50px');
  this.qu16o1.style('background', 'lightblue');
  this.qu16o1.style('color', rgb(240,0,0));
  this.qu16o1.style('font-size', '17.5px');
  this.qu16o3.position(417,625.5);
  this.qu16o3.style('width', '150px');
  this.qu16o3.style('height', '50px');
  this.qu16o3.style('background', 'lightblue');
  this.qu16o3.style('color', rgb(240,0,0));
  this.qu16o3.style('font-size', '17.5px');
  this.qu16o2.position(1137,208.5);
  this.qu16o2.style('width', '150px');
  this.qu16o2.style('height', '50px');
  this.qu16o2.style('background', 'lightblue');
  this.qu16o2.style('color', rgb(240,0,0));
  this.qu16o2.style('font-size', '15px');
  this.qu16o4.position(1137,625.5);
  this.qu16o4.style('width', '150px');
  this.qu16o4.style('height', '50px');
  this.qu16o4.style('background', 'lightblue');   
  this.qu16o4.style('color', rgb(240,0,0));
  this.qu16o4.style('font-size', '17.5px');

    this.qu15.hide();
      this.qu15o1.hide();
      this.qu15o2.hide();
      this.qu15o3.hide();
      this.qu15o4.hide();
});

// ======================================
//                  qu16
// ======================================

this.qu16o1.mousePressed(()=>{
  qCheck = 17;
  q16 = "wrong";
  

  this.qu17.position(10,80);
  this.qu17o1.position(417,208.5);
  this.qu17o1.style('width', '150px');
  this.qu17o1.style('height', '50px');
  this.qu17o1.style('background', 'lightblue');
  this.qu17o1.style('color', rgb(240,0,0));
  this.qu17o1.style('font-size', '17.5px');
  this.qu17o3.position(417,625.5);
  this.qu17o3.style('width', '150px');
  this.qu17o3.style('height', '50px');
  this.qu17o3.style('background', 'lightblue');
  this.qu17o3.style('color', rgb(240,0,0));
  this.qu17o3.style('font-size', '17.5px');
  this.qu17o2.position(1137,208.5);
  this.qu17o2.style('width', '150px');
  this.qu17o2.style('height', '50px');
  this.qu17o2.style('background', 'lightblue');
  this.qu17o2.style('color', rgb(240,0,0));
  this.qu17o2.style('font-size', '17.5px');
  this.qu17o4.position(1137,625.5);
  this.qu17o4.style('width', '150px');
  this.qu17o4.style('height', '50px');
  this.qu17o4.style('background', 'lightblue');   
  this.qu17o4.style('color', rgb(240,0,0));
  this.qu17o4.style('font-size', '17.5px');

    this.qu16.hide();
      this.qu16o1.hide();
      this.qu16o2.hide();
      this.qu16o3.hide();
      this.qu16o4.hide();
});

this.qu16o2.mousePressed(()=>{
  qCheck = 17;
  q16 = "right";
  score += 1;

  this.qu17.position(10,80);
  this.qu17o1.position(417,208.5);
  this.qu17o1.style('width', '150px');
  this.qu17o1.style('height', '50px');
  this.qu17o1.style('background', 'lightblue');
  this.qu17o1.style('color', rgb(240,0,0));
  this.qu17o1.style('font-size', '17.5px');
  this.qu17o3.position(417,625.5);
  this.qu17o3.style('width', '150px');
  this.qu17o3.style('height', '50px');
  this.qu17o3.style('background', 'lightblue');
  this.qu17o3.style('color', rgb(240,0,0));
  this.qu17o3.style('font-size', '17.5px');
  this.qu17o2.position(1137,208.5);
  this.qu17o2.style('width', '150px');
  this.qu17o2.style('height', '50px');
  this.qu17o2.style('background', 'lightblue');
  this.qu17o2.style('color', rgb(240,0,0));
  this.qu17o2.style('font-size', '17.5px');
  this.qu17o4.position(1137,625.5);
  this.qu17o4.style('width', '150px');
  this.qu17o4.style('height', '50px');
  this.qu17o4.style('background', 'lightblue');   
  this.qu17o4.style('color', rgb(240,0,0));
  this.qu17o4.style('font-size', '17.5px');

    this.qu16.hide();
      this.qu16o1.hide();
      this.qu16o2.hide();
      this.qu16o3.hide();
      this.qu16o4.hide();
});

this.qu16o3.mousePressed(()=>{
  qCheck = 17;
  q16 = "wrong";
  

  this.qu17.position(10,80);
  this.qu17o1.position(417,208.5);
  this.qu17o1.style('width', '150px');
  this.qu17o1.style('height', '50px');
  this.qu17o1.style('background', 'lightblue');
  this.qu17o1.style('color', rgb(240,0,0));
  this.qu17o1.style('font-size', '17.5px');
  this.qu17o3.position(417,625.5);
  this.qu17o3.style('width', '150px');
  this.qu17o3.style('height', '50px');
  this.qu17o3.style('background', 'lightblue');
  this.qu17o3.style('color', rgb(240,0,0));
  this.qu17o3.style('font-size', '17.5px');
  this.qu17o2.position(1137,208.5);
  this.qu17o2.style('width', '150px');
  this.qu17o2.style('height', '50px');
  this.qu17o2.style('background', 'lightblue');
  this.qu17o2.style('color', rgb(240,0,0));
  this.qu17o2.style('font-size', '17.5px');
  this.qu17o4.position(1137,625.5);
  this.qu17o4.style('width', '150px');
  this.qu17o4.style('height', '50px');
  this.qu17o4.style('background', 'lightblue');   
  this.qu17o4.style('color', rgb(240,0,0));
  this.qu17o4.style('font-size', '17.5px');

    this.qu16.hide();
      this.qu16o1.hide();
      this.qu16o2.hide();
      this.qu16o3.hide();
      this.qu16o4.hide();
});

this.qu16o4.mousePressed(()=>{
  qCheck = 17;
  q16 = "wrong";
  

  this.qu17.position(10,80);
  this.qu17o1.position(417,208.5);
  this.qu17o1.style('width', '150px');
  this.qu17o1.style('height', '50px');
  this.qu17o1.style('background', 'lightblue');
  this.qu17o1.style('color', rgb(240,0,0));
  this.qu17o1.style('font-size', '17.5px');
  this.qu17o3.position(417,625.5);
  this.qu17o3.style('width', '150px');
  this.qu17o3.style('height', '50px');
  this.qu17o3.style('background', 'lightblue');
  this.qu17o3.style('color', rgb(240,0,0));
  this.qu17o3.style('font-size', '17.5px');
  this.qu17o2.position(1137,208.5);
  this.qu17o2.style('width', '150px');
  this.qu17o2.style('height', '50px');
  this.qu17o2.style('background', 'lightblue');
  this.qu17o2.style('color', rgb(240,0,0));
  this.qu17o2.style('font-size', '17.5px');
  this.qu17o4.position(1137,625.5);
  this.qu17o4.style('width', '150px');
  this.qu17o4.style('height', '50px');
  this.qu17o4.style('background', 'lightblue');   
  this.qu17o4.style('color', rgb(240,0,0));
  this.qu17o4.style('font-size', '17.5px');

    this.qu16.hide();
      this.qu16o1.hide();
      this.qu16o2.hide();
      this.qu16o3.hide();
      this.qu16o4.hide();
});

// ======================================
//                  qu17
// ======================================

this.qu17o1.mousePressed(()=>{
  qCheck = 18;
  q17 = "right";
  score += 1;

  this.qu18.position(10,80);
  this.qu18o1.position(417,208.5);
  this.qu18o1.style('width', '150px');
  this.qu18o1.style('height', '50px');
  this.qu18o1.style('background', 'lightblue');
  this.qu18o1.style('color', rgb(240,0,0));
  this.qu18o1.style('font-size', '17.5px');
  this.qu18o3.position(417,625.5);
  this.qu18o3.style('width', '150px');
  this.qu18o3.style('height', '50px');
  this.qu18o3.style('background', 'lightblue');
  this.qu18o3.style('color', rgb(240,0,0));
  this.qu18o3.style('font-size', '17.5px');
  this.qu18o2.position(1137,208.5);
  this.qu18o2.style('width', '150px');
  this.qu18o2.style('height', '50px');
  this.qu18o2.style('background', 'lightblue');
  this.qu18o2.style('color', rgb(240,0,0));
  this.qu18o2.style('font-size', '17.5px');
  this.qu18o4.position(1137,625.5);
  this.qu18o4.style('width', '150px');
  this.qu18o4.style('height', '50px');
  this.qu18o4.style('background', 'lightblue');   
  this.qu18o4.style('color', rgb(240,0,0));
  this.qu18o4.style('font-size', '17.5px');

    this.qu17.hide();
      this.qu17o1.hide();
      this.qu17o2.hide();
      this.qu17o3.hide();
      this.qu17o4.hide();
});

this.qu17o2.mousePressed(()=>{
  qCheck = 18;
  q17 = "wrong";
  

  this.qu18.position(10,80);
  this.qu18o1.position(417,208.5);
  this.qu18o1.style('width', '150px');
  this.qu18o1.style('height', '50px');
  this.qu18o1.style('background', 'lightblue');
  this.qu18o1.style('color', rgb(240,0,0));
  this.qu18o1.style('font-size', '17.5px');
  this.qu18o3.position(417,625.5);
  this.qu18o3.style('width', '150px');
  this.qu18o3.style('height', '50px');
  this.qu18o3.style('background', 'lightblue');
  this.qu18o3.style('color', rgb(240,0,0));
  this.qu18o3.style('font-size', '17.5px');
  this.qu18o2.position(1137,208.5);
  this.qu18o2.style('width', '150px');
  this.qu18o2.style('height', '50px');
  this.qu18o2.style('background', 'lightblue');
  this.qu18o2.style('color', rgb(240,0,0));
  this.qu18o2.style('font-size', '17.5px');
  this.qu18o4.position(1137,625.5);
  this.qu18o4.style('width', '150px');
  this.qu18o4.style('height', '50px');
  this.qu18o4.style('background', 'lightblue');   
  this.qu18o4.style('color', rgb(240,0,0));
  this.qu18o4.style('font-size', '17.5px');

    this.qu17.hide();
      this.qu17o1.hide();
      this.qu17o2.hide();
      this.qu17o3.hide();
      this.qu17o4.hide();
});

this.qu17o3.mousePressed(()=>{
  qCheck = 18;
  q17 = "wrong";
  

  this.qu18.position(10,80);
  this.qu18o1.position(417,208.5);
  this.qu18o1.style('width', '150px');
  this.qu18o1.style('height', '50px');
  this.qu18o1.style('background', 'lightblue');
  this.qu18o1.style('color', rgb(240,0,0));
  this.qu18o1.style('font-size', '17.5px');
  this.qu18o3.position(417,625.5);
  this.qu18o3.style('width', '150px');
  this.qu18o3.style('height', '50px');
  this.qu18o3.style('background', 'lightblue');
  this.qu18o3.style('color', rgb(240,0,0));
  this.qu18o3.style('font-size', '17.5px');
  this.qu18o2.position(1137,208.5);
  this.qu18o2.style('width', '150px');
  this.qu18o2.style('height', '50px');
  this.qu18o2.style('background', 'lightblue');
  this.qu18o2.style('color', rgb(240,0,0));
  this.qu18o2.style('font-size', '17.5px');
  this.qu18o4.position(1137,625.5);
  this.qu18o4.style('width', '150px');
  this.qu18o4.style('height', '50px');
  this.qu18o4.style('background', 'lightblue');   
  this.qu18o4.style('color', rgb(240,0,0));
  this.qu18o4.style('font-size', '17.5px');

    this.qu17.hide();
      this.qu17o1.hide();
      this.qu17o2.hide();
      this.qu17o3.hide();
      this.qu17o4.hide();
});

this.qu17o4.mousePressed(()=>{
  qCheck = 18;
  q17 = "wrong";
  

  this.qu18.position(10,80);
  this.qu18o1.position(417,208.5);
  this.qu18o1.style('width', '150px');
  this.qu18o1.style('height', '50px');
  this.qu18o1.style('background', 'lightblue');
  this.qu18o1.style('color', rgb(240,0,0));
  this.qu18o1.style('font-size', '17.5px');
  this.qu18o3.position(417,625.5);
  this.qu18o3.style('width', '150px');
  this.qu18o3.style('height', '50px');
  this.qu18o3.style('background', 'lightblue');
  this.qu18o3.style('color', rgb(240,0,0));
  this.qu18o3.style('font-size', '17.5px');
  this.qu18o2.position(1137,208.5);
  this.qu18o2.style('width', '150px');
  this.qu18o2.style('height', '50px');
  this.qu18o2.style('background', 'lightblue');
  this.qu18o2.style('color', rgb(240,0,0));
  this.qu18o2.style('font-size', '17.5px');
  this.qu18o4.position(1137,625.5);
  this.qu18o4.style('width', '150px');
  this.qu18o4.style('height', '50px');
  this.qu18o4.style('background', 'lightblue');   
  this.qu18o4.style('color', rgb(240,0,0));
  this.qu18o4.style('font-size', '17.5px');

    this.qu17.hide();
      this.qu17o1.hide();
      this.qu17o2.hide();
      this.qu17o3.hide();
      this.qu17o4.hide();
});

// ======================================
//                  qu18
// ======================================

this.qu18o1.mousePressed(()=>{
  qCheck = 19;
  q18 = "wrong";
  

  this.qu19.position(10,80);
  this.qu19o1.position(417,208.5);
  this.qu19o1.style('width', '150px');
  this.qu19o1.style('height', '50px');
  this.qu19o1.style('background', 'lightblue');
  this.qu19o1.style('color', rgb(240,0,0));
  this.qu19o1.style('font-size', '17.5px');
  this.qu19o3.position(417,625.5);
  this.qu19o3.style('width', '150px');
  this.qu19o3.style('height', '50px');
  this.qu19o3.style('background', 'lightblue');
  this.qu19o3.style('color', rgb(240,0,0));
  this.qu19o3.style('font-size', '17.5px');
  this.qu19o2.position(1137,208.5);
  this.qu19o2.style('width', '150px');
  this.qu19o2.style('height', '50px');
  this.qu19o2.style('background', 'lightblue');
  this.qu19o2.style('color', rgb(240,0,0));
  this.qu19o2.style('font-size', '17.5px');
  this.qu19o4.position(1137,625.5);
  this.qu19o4.style('width', '150px');
  this.qu19o4.style('height', '50px');
  this.qu19o4.style('background', 'lightblue');   
  this.qu19o4.style('color', rgb(240,0,0));
  this.qu19o4.style('font-size', '17.5px');

    this.qu18.hide();
      this.qu18o1.hide();
      this.qu18o2.hide();
      this.qu18o3.hide();
      this.qu18o4.hide();
});

this.qu18o2.mousePressed(()=>{
  qCheck = 19;
  q18 = "wrong";
  

  this.qu19.position(10,80);
  this.qu19o1.position(417,208.5);
  this.qu19o1.style('width', '150px');
  this.qu19o1.style('height', '50px');
  this.qu19o1.style('background', 'lightblue');
  this.qu19o1.style('color', rgb(240,0,0));
  this.qu19o1.style('font-size', '17.5px');
  this.qu19o3.position(417,625.5);
  this.qu19o3.style('width', '150px');
  this.qu19o3.style('height', '50px');
  this.qu19o3.style('background', 'lightblue');
  this.qu19o3.style('color', rgb(240,0,0));
  this.qu19o3.style('font-size', '17.5px');
  this.qu19o2.position(1137,208.5);
  this.qu19o2.style('width', '150px');
  this.qu19o2.style('height', '50px');
  this.qu19o2.style('background', 'lightblue');
  this.qu19o2.style('color', rgb(240,0,0));
  this.qu19o2.style('font-size', '17.5px');
  this.qu19o4.position(1137,625.5);
  this.qu19o4.style('width', '150px');
  this.qu19o4.style('height', '50px');
  this.qu19o4.style('background', 'lightblue');   
  this.qu19o4.style('color', rgb(240,0,0));
  this.qu19o4.style('font-size', '17.5px');

    this.qu18.hide();
      this.qu18o1.hide();
      this.qu18o2.hide();
      this.qu18o3.hide();
      this.qu18o4.hide();
});

this.qu18o3.mousePressed(()=>{
  qCheck = 19;
  q18 = "right";
  score += 1;

  this.qu19.position(10,80);
  this.qu19o1.position(417,208.5);
  this.qu19o1.style('width', '150px');
  this.qu19o1.style('height', '50px');
  this.qu19o1.style('background', 'lightblue');
  this.qu19o1.style('color', rgb(240,0,0));
  this.qu19o1.style('font-size', '17.5px');
  this.qu19o3.position(417,625.5);
  this.qu19o3.style('width', '150px');
  this.qu19o3.style('height', '50px');
  this.qu19o3.style('background', 'lightblue');
  this.qu19o3.style('color', rgb(240,0,0));
  this.qu19o3.style('font-size', '17.5px');
  this.qu19o2.position(1137,208.5);
  this.qu19o2.style('width', '150px');
  this.qu19o2.style('height', '50px');
  this.qu19o2.style('background', 'lightblue');
  this.qu19o2.style('color', rgb(240,0,0));
  this.qu19o2.style('font-size', '17.5px');
  this.qu19o4.position(1137,625.5);
  this.qu19o4.style('width', '150px');
  this.qu19o4.style('height', '50px');
  this.qu19o4.style('background', 'lightblue');   
  this.qu19o4.style('color', rgb(240,0,0));
  this.qu19o4.style('font-size', '17.5px');

    this.qu18.hide();
      this.qu18o1.hide();
      this.qu18o2.hide();
      this.qu18o3.hide();
      this.qu18o4.hide();
});

this.qu18o4.mousePressed(()=>{
  qCheck = 19;
  q18 = "wrong";
  

  this.qu19.position(10,80);
  this.qu19o1.position(417,208.5);
  this.qu19o1.style('width', '150px');
  this.qu19o1.style('height', '50px');
  this.qu19o1.style('background', 'lightblue');
  this.qu19o1.style('color', rgb(240,0,0));
  this.qu19o1.style('font-size', '17.5px');
  this.qu19o3.position(417,625.5);
  this.qu19o3.style('width', '150px');
  this.qu19o3.style('height', '50px');
  this.qu19o3.style('background', 'lightblue');
  this.qu19o3.style('color', rgb(240,0,0));
  this.qu19o3.style('font-size', '17.5px');
  this.qu19o2.position(1137,208.5);
  this.qu19o2.style('width', '150px');
  this.qu19o2.style('height', '50px');
  this.qu19o2.style('background', 'lightblue');
  this.qu19o2.style('color', rgb(240,0,0));
  this.qu19o2.style('font-size', '17.5px');
  this.qu19o4.position(1137,625.5);
  this.qu19o4.style('width', '150px');
  this.qu19o4.style('height', '50px');
  this.qu19o4.style('background', 'lightblue');   
  this.qu19o4.style('color', rgb(240,0,0));
  this.qu19o4.style('font-size', '17.5px');

    this.qu18.hide();
      this.qu18o1.hide();
      this.qu18o2.hide();
      this.qu18o3.hide();
      this.qu18o4.hide();
});


// ======================================
//                  qu19
// ======================================

this.qu19o1.mousePressed(()=>{
  qCheck = 20;
  q19 = "wrong";
  

  this.qu20.position(10,80);
  this.qu20o1.position(417,208.5);
  this.qu20o1.style('width', '150px');
  this.qu20o1.style('height', '50px');
  this.qu20o1.style('background', 'lightblue');
  this.qu20o1.style('color', rgb(240,0,0));
  this.qu20o1.style('font-size', '17.5px');
  this.qu20o3.position(417,625.5);
  this.qu20o3.style('width', '150px');
  this.qu20o3.style('height', '50px');
  this.qu20o3.style('background', 'lightblue');
  this.qu20o3.style('color', rgb(240,0,0));
  this.qu20o3.style('font-size', '17.5px');
  this.qu20o2.position(1137,208.5);
  this.qu20o2.style('width', '150px');
  this.qu20o2.style('height', '50px');
  this.qu20o2.style('background', 'lightblue');
  this.qu20o2.style('color', rgb(240,0,0));
  this.qu20o2.style('font-size', '17.5px');
  this.qu20o4.position(1137,625.5);
  this.qu20o4.style('width', '150px');
  this.qu20o4.style('height', '50px');
  this.qu20o4.style('background', 'lightblue');   
  this.qu20o4.style('color', rgb(240,0,0));
  this.qu20o4.style('font-size', '17.5px');

    this.qu19.hide();
      this.qu19o1.hide();
      this.qu19o2.hide();
      this.qu19o3.hide();
      this.qu19o4.hide();
});

this.qu19o2.mousePressed(()=>{
  qCheck = 20;
  q19 = "right";
  score += 1;

  this.qu20.position(10,80);
  this.qu20o1.position(417,208.5);
  this.qu20o1.style('width', '150px');
  this.qu20o1.style('height', '50px');
  this.qu20o1.style('background', 'lightblue');
  this.qu20o1.style('color', rgb(240,0,0));
  this.qu20o1.style('font-size', '17.5px');
  this.qu20o3.position(417,625.5);
  this.qu20o3.style('width', '150px');
  this.qu20o3.style('height', '50px');
  this.qu20o3.style('background', 'lightblue');
  this.qu20o3.style('color', rgb(240,0,0));
  this.qu20o3.style('font-size', '17.5px');
  this.qu20o2.position(1137,208.5);
  this.qu20o2.style('width', '150px');
  this.qu20o2.style('height', '50px');
  this.qu20o2.style('background', 'lightblue');
  this.qu20o2.style('color', rgb(240,0,0));
  this.qu20o2.style('font-size', '17.5px');
  this.qu20o4.position(1137,625.5);
  this.qu20o4.style('width', '150px');
  this.qu20o4.style('height', '50px');
  this.qu20o4.style('background', 'lightblue');   
  this.qu20o4.style('color', rgb(240,0,0));
  this.qu20o4.style('font-size', '17.5px');

    this.qu19.hide();
      this.qu19o1.hide();
      this.qu19o2.hide();
      this.qu19o3.hide();
      this.qu19o4.hide();
});

this.qu19o3.mousePressed(()=>{
  qCheck = 20;
  q19 = "wrong";
  

  this.qu20.position(10,80);
  this.qu20o1.position(417,208.5);
  this.qu20o1.style('width', '150px');
  this.qu20o1.style('height', '50px');
  this.qu20o1.style('background', 'lightblue');
  this.qu20o1.style('color', rgb(240,0,0));
  this.qu20o1.style('font-size', '17.5px');
  this.qu20o3.position(417,625.5);
  this.qu20o3.style('width', '150px');
  this.qu20o3.style('height', '50px');
  this.qu20o3.style('background', 'lightblue');
  this.qu20o3.style('color', rgb(240,0,0));
  this.qu20o3.style('font-size', '17.5px');
  this.qu20o2.position(1137,208.5);
  this.qu20o2.style('width', '150px');
  this.qu20o2.style('height', '50px');
  this.qu20o2.style('background', 'lightblue');
  this.qu20o2.style('color', rgb(240,0,0));
  this.qu20o2.style('font-size', '17.5px');
  this.qu20o4.position(1137,625.5);
  this.qu20o4.style('width', '150px');
  this.qu20o4.style('height', '50px');
  this.qu20o4.style('background', 'lightblue');   
  this.qu20o4.style('color', rgb(240,0,0));
  this.qu20o4.style('font-size', '17.5px');

    this.qu19.hide();
      this.qu19o1.hide();
      this.qu19o2.hide();
      this.qu19o3.hide();
      this.qu19o4.hide();
});

this.qu19o4.mousePressed(()=>{
  qCheck = 20;
  q19 = "wrong";
  

  this.qu20.position(10,80);
  this.qu20o1.position(417,208.5);
  this.qu20o1.style('width', '150px');
  this.qu20o1.style('height', '50px');
  this.qu20o1.style('background', 'lightblue');
  this.qu20o1.style('color', rgb(240,0,0));
  this.qu20o1.style('font-size', '17.5px');
  this.qu20o3.position(417,625.5);
  this.qu20o3.style('width', '150px');
  this.qu20o3.style('height', '50px');
  this.qu20o3.style('background', 'lightblue');
  this.qu20o3.style('color', rgb(240,0,0));
  this.qu20o3.style('font-size', '17.5px');
  this.qu20o2.position(1137,208.5);
  this.qu20o2.style('width', '150px');
  this.qu20o2.style('height', '50px');
  this.qu20o2.style('background', 'lightblue');
  this.qu20o2.style('color', rgb(240,0,0));
  this.qu20o2.style('font-size', '17.5px');
  this.qu20o4.position(1137,625.5);
  this.qu20o4.style('width', '150px');
  this.qu20o4.style('height', '50px');
  this.qu20o4.style('background', 'lightblue');   
  this.qu20o4.style('color', rgb(240,0,0));
  this.qu20o4.style('font-size', '17.5px');

    this.qu19.hide();
      this.qu19o1.hide();
      this.qu19o2.hide();
      this.qu19o3.hide();
      this.qu19o4.hide();
});

// ======================================
//                  qu20
// ======================================

this.qu20o1.mousePressed(()=>{
  qCheck = 21;
  q20 = "right";
  score += 1;

  this.qu21.position(10,80);
  this.qu21o1.position(417,208.5);
  this.qu21o1.style('width', '150px');
  this.qu21o1.style('height', '50px');
  this.qu21o1.style('background', 'lightblue');
  this.qu21o1.style('color', rgb(240,0,0));
  this.qu21o1.style('font-size', '17.5px');
  this.qu21o3.position(417,625.5);
  this.qu21o3.style('width', '150px');
  this.qu21o3.style('height', '50px');
  this.qu21o3.style('background', 'lightblue');
  this.qu21o3.style('color', rgb(240,0,0));
  this.qu21o3.style('font-size', '17.5px');
  this.qu21o2.position(1137,208.5);
  this.qu21o2.style('width', '150px');
  this.qu21o2.style('height', '50px');
  this.qu21o2.style('background', 'lightblue');
  this.qu21o2.style('color', rgb(240,0,0));
  this.qu21o2.style('font-size', '17.5px');
  this.qu21o4.position(1137,625.5);
  this.qu21o4.style('width', '150px');
  this.qu21o4.style('height', '50px');
  this.qu21o4.style('background', 'lightblue');   
  this.qu21o4.style('color', rgb(240,0,0));
  this.qu21o4.style('font-size', '17.5px');

    this.qu20.hide();
      this.qu20o1.hide();
      this.qu20o2.hide();
      this.qu20o3.hide();
      this.qu20o4.hide();
});

this.qu20o2.mousePressed(()=>{
  qCheck = 21;
  q20 = "wrong";
  

  this.qu21.position(10,80);
  this.qu21o1.position(417,208.5);
  this.qu21o1.style('width', '150px');
  this.qu21o1.style('height', '50px');
  this.qu21o1.style('background', 'lightblue');
  this.qu21o1.style('color', rgb(240,0,0));
  this.qu21o1.style('font-size', '17.5px');
  this.qu21o3.position(417,625.5);
  this.qu21o3.style('width', '150px');
  this.qu21o3.style('height', '50px');
  this.qu21o3.style('background', 'lightblue');
  this.qu21o3.style('color', rgb(240,0,0));
  this.qu21o3.style('font-size', '17.5px');
  this.qu21o2.position(1137,208.5);
  this.qu21o2.style('width', '150px');
  this.qu21o2.style('height', '50px');
  this.qu21o2.style('background', 'lightblue');
  this.qu21o2.style('color', rgb(240,0,0));
  this.qu21o2.style('font-size', '17.5px');
  this.qu21o4.position(1137,625.5);
  this.qu21o4.style('width', '150px');
  this.qu21o4.style('height', '50px');
  this.qu21o4.style('background', 'lightblue');   
  this.qu21o4.style('color', rgb(240,0,0));
  this.qu21o4.style('font-size', '17.5px');

    this.qu20.hide();
      this.qu20o1.hide();
      this.qu20o2.hide();
      this.qu20o3.hide();
      this.qu20o4.hide();
});

this.qu20o3.mousePressed(()=>{
  qCheck = 21;
  q20 = "wrong";
  

  this.qu21.position(10,80);
  this.qu21o1.position(417,208.5);
  this.qu21o1.style('width', '150px');
  this.qu21o1.style('height', '50px');
  this.qu21o1.style('background', 'lightblue');
  this.qu21o1.style('color', rgb(240,0,0));
  this.qu21o1.style('font-size', '17.5px');
  this.qu21o3.position(417,625.5);
  this.qu21o3.style('width', '150px');
  this.qu21o3.style('height', '50px');
  this.qu21o3.style('background', 'lightblue');
  this.qu21o3.style('color', rgb(240,0,0));
  this.qu21o3.style('font-size', '17.5px');
  this.qu21o2.position(1137,208.5);
  this.qu21o2.style('width', '150px');
  this.qu21o2.style('height', '50px');
  this.qu21o2.style('background', 'lightblue');
  this.qu21o2.style('color', rgb(240,0,0));
  this.qu21o2.style('font-size', '17.5px');
  this.qu21o4.position(1137,625.5);
  this.qu21o4.style('width', '150px');
  this.qu21o4.style('height', '50px');
  this.qu21o4.style('background', 'lightblue');   
  this.qu21o4.style('color', rgb(240,0,0));
  this.qu21o4.style('font-size', '17.5px');

    this.qu20.hide();
      this.qu20o1.hide();
      this.qu20o2.hide();
      this.qu20o3.hide();
      this.qu20o4.hide();
});

this.qu20o4.mousePressed(()=>{
  qCheck = 21;
  q20 = "wrong";
  

  this.qu21.position(10,80);
  this.qu21o1.position(417,208.5);
  this.qu21o1.style('width', '150px');
  this.qu21o1.style('height', '50px');
  this.qu21o1.style('background', 'lightblue');
  this.qu21o1.style('color', rgb(240,0,0));
  this.qu21o1.style('font-size', '17.5px');
  this.qu21o3.position(417,625.5);
  this.qu21o3.style('width', '150px');
  this.qu21o3.style('height', '50px');
  this.qu21o3.style('background', 'lightblue');
  this.qu21o3.style('color', rgb(240,0,0));
  this.qu21o3.style('font-size', '17.5px');
  this.qu21o2.position(1137,208.5);
  this.qu21o2.style('width', '150px');
  this.qu21o2.style('height', '50px');
  this.qu21o2.style('background', 'lightblue');
  this.qu21o2.style('color', rgb(240,0,0));
  this.qu21o2.style('font-size', '17.5px');
  this.qu21o4.position(1137,625.5);
  this.qu21o4.style('width', '150px');
  this.qu21o4.style('height', '50px');
  this.qu21o4.style('background', 'lightblue');   
  this.qu21o4.style('color', rgb(240,0,0));
  this.qu21o4.style('font-size', '17.5px');

    this.qu20.hide();
      this.qu20o1.hide();
      this.qu20o2.hide();
      this.qu20o3.hide();
      this.qu20o4.hide();
});

// ======================================
//                  qu21
// ======================================

this.qu21o1.mousePressed(()=>{
  qCheck = 22;
  q21 = "right";
  score += 1;

  this.qu22.position(10,80);
  this.qu22o1.position(417,208.5);
  this.qu22o1.style('width', '150px');
  this.qu22o1.style('height', '50px');
  this.qu22o1.style('background', 'lightblue');
  this.qu22o1.style('color', rgb(240,0,0));
  this.qu22o1.style('font-size', '17.5px');
  this.qu22o3.position(417,625.5);
  this.qu22o3.style('width', '150px');
  this.qu22o3.style('height', '50px');
  this.qu22o3.style('background', 'lightblue');
  this.qu22o3.style('color', rgb(240,0,0));
  this.qu22o3.style('font-size', '15px');
  this.qu22o2.position(1137,208.5);
  this.qu22o2.style('width', '150px');
  this.qu22o2.style('height', '50px');
  this.qu22o2.style('background', 'lightblue');
  this.qu22o2.style('color', rgb(240,0,0));
  this.qu22o2.style('font-size', '17.5px');
  this.qu22o4.position(1137,625.5);
  this.qu22o4.style('width', '150px');
  this.qu22o4.style('height', '50px');
  this.qu22o4.style('background', 'lightblue');   
  this.qu22o4.style('color', rgb(240,0,0));
  this.qu22o4.style('font-size', '17.5px');

    this.qu21.hide();
      this.qu21o1.hide();
      this.qu21o2.hide();
      this.qu21o3.hide();
      this.qu21o4.hide();
});

this.qu21o2.mousePressed(()=>{
  qCheck = 22;
  q21 = "wrong";
  

  this.qu22.position(10,80);
  this.qu22o1.position(417,208.5);
  this.qu22o1.style('width', '150px');
  this.qu22o1.style('height', '50px');
  this.qu22o1.style('background', 'lightblue');
  this.qu22o1.style('color', rgb(240,0,0));
  this.qu22o1.style('font-size', '17.5px');
  this.qu22o3.position(417,625.5);
  this.qu22o3.style('width', '150px');
  this.qu22o3.style('height', '50px');
  this.qu22o3.style('background', 'lightblue');
  this.qu22o3.style('color', rgb(240,0,0));
  this.qu22o3.style('font-size', '15px');
  this.qu22o2.position(1137,208.5);
  this.qu22o2.style('width', '150px');
  this.qu22o2.style('height', '50px');
  this.qu22o2.style('background', 'lightblue');
  this.qu22o2.style('color', rgb(240,0,0));
  this.qu22o2.style('font-size', '17.5px');
  this.qu22o4.position(1137,625.5);
  this.qu22o4.style('width', '150px');
  this.qu22o4.style('height', '50px');
  this.qu22o4.style('background', 'lightblue');   
  this.qu22o4.style('color', rgb(240,0,0));
  this.qu22o4.style('font-size', '17.5px');

    this.qu21.hide();
      this.qu21o1.hide();
      this.qu21o2.hide();
      this.qu21o3.hide();
      this.qu21o4.hide();
});

this.qu21o3.mousePressed(()=>{
  qCheck = 22;
  q21 = "wrong";
  

  this.qu22.position(10,80);
  this.qu22o1.position(417,208.5);
  this.qu22o1.style('width', '150px');
  this.qu22o1.style('height', '50px');
  this.qu22o1.style('background', 'lightblue');
  this.qu22o1.style('color', rgb(240,0,0));
  this.qu22o1.style('font-size', '17.5px');
  this.qu22o3.position(417,625.5);
  this.qu22o3.style('width', '150px');
  this.qu22o3.style('height', '50px');
  this.qu22o3.style('background', 'lightblue');
  this.qu22o3.style('color', rgb(240,0,0));
  this.qu22o3.style('font-size', '15px');
  this.qu22o2.position(1137,208.5);
  this.qu22o2.style('width', '150px');
  this.qu22o2.style('height', '50px');
  this.qu22o2.style('background', 'lightblue');
  this.qu22o2.style('color', rgb(240,0,0));
  this.qu22o2.style('font-size', '17.5px');
  this.qu22o4.position(1137,625.5);
  this.qu22o4.style('width', '150px');
  this.qu22o4.style('height', '50px');
  this.qu22o4.style('background', 'lightblue');   
  this.qu22o4.style('color', rgb(240,0,0));
  this.qu22o4.style('font-size', '17.5px');

    this.qu21.hide();
      this.qu21o1.hide();
      this.qu21o2.hide();
      this.qu21o3.hide();
      this.qu21o4.hide();
});

this.qu21o4.mousePressed(()=>{
  qCheck = 22;
  q21 = "wrong";
  

  this.qu22.position(10,80);
  this.qu22o1.position(417,208.5);
  this.qu22o1.style('width', '150px');
  this.qu22o1.style('height', '50px');
  this.qu22o1.style('background', 'lightblue');
  this.qu22o1.style('color', rgb(240,0,0));
  this.qu22o1.style('font-size', '17.5px');
  this.qu22o3.position(417,625.5);
  this.qu22o3.style('width', '150px');
  this.qu22o3.style('height', '50px');
  this.qu22o3.style('background', 'lightblue');
  this.qu22o3.style('color', rgb(240,0,0));
  this.qu22o3.style('font-size', '15px');
  this.qu22o2.position(1137,208.5);
  this.qu22o2.style('width', '150px');
  this.qu22o2.style('height', '50px');
  this.qu22o2.style('background', 'lightblue');
  this.qu22o2.style('color', rgb(240,0,0));
  this.qu22o2.style('font-size', '17.5px');
  this.qu22o4.position(1137,625.5);
  this.qu22o4.style('width', '150px');
  this.qu22o4.style('height', '50px');
  this.qu22o4.style('background', 'lightblue');   
  this.qu22o4.style('color', rgb(240,0,0));
  this.qu22o4.style('font-size', '17.5px');

    this.qu21.hide();
      this.qu21o1.hide();
      this.qu21o2.hide();
      this.qu21o3.hide();
      this.qu21o4.hide();
});

// ======================================
//                  qu22
// ======================================

this.qu22o1.mousePressed(()=>{
  qCheck = 23;
  q22 = "wrong";
  

  this.qu23.position(10,80);
  this.qu23o1.position(417,208.5);
  this.qu23o1.style('width', '150px');
  this.qu23o1.style('height', '50px');
  this.qu23o1.style('background', 'lightblue');
  this.qu23o1.style('color', rgb(240,0,0));
  this.qu23o1.style('font-size', '17.5px');
  this.qu23o3.position(417,625.5);
  this.qu23o3.style('width', '150px');
  this.qu23o3.style('height', '50px');
  this.qu23o3.style('background', 'lightblue');
  this.qu23o3.style('color', rgb(240,0,0));
  this.qu23o3.style('font-size', '13px');
  this.qu23o2.position(1137,208.5);
  this.qu23o2.style('width', '150px');
  this.qu23o2.style('height', '50px');
  this.qu23o2.style('background', 'lightblue');
  this.qu23o2.style('color', rgb(240,0,0));
  this.qu23o2.style('font-size', '17.5px');
  this.qu23o4.position(1137,625.5);
  this.qu23o4.style('width', '150px');
  this.qu23o4.style('height', '50px');
  this.qu23o4.style('background', 'lightblue');   
  this.qu23o4.style('color', rgb(240,0,0));
  this.qu23o4.style('font-size', '17.5px');

    this.qu22.hide();
      this.qu22o1.hide();
      this.qu22o2.hide();
      this.qu22o3.hide();
      this.qu22o4.hide();
});

this.qu22o2.mousePressed(()=>{
  qCheck = 23;
  q22 = "wrong";
  

  this.qu23.position(10,80);
  this.qu23o1.position(417,208.5);
  this.qu23o1.style('width', '150px');
  this.qu23o1.style('height', '50px');
  this.qu23o1.style('background', 'lightblue');
  this.qu23o1.style('color', rgb(240,0,0));
  this.qu23o1.style('font-size', '17.5px');
  this.qu23o3.position(417,625.5);
  this.qu23o3.style('width', '150px');
  this.qu23o3.style('height', '50px');
  this.qu23o3.style('background', 'lightblue');
  this.qu23o3.style('color', rgb(240,0,0));
  this.qu23o3.style('font-size', '13px');
  this.qu23o2.position(1137,208.5);
  this.qu23o2.style('width', '150px');
  this.qu23o2.style('height', '50px');
  this.qu23o2.style('background', 'lightblue');
  this.qu23o2.style('color', rgb(240,0,0));
  this.qu23o2.style('font-size', '17.5px');
  this.qu23o4.position(1137,625.5);
  this.qu23o4.style('width', '150px');
  this.qu23o4.style('height', '50px');
  this.qu23o4.style('background', 'lightblue');   
  this.qu23o4.style('color', rgb(240,0,0));
  this.qu23o4.style('font-size', '17.5px');

    this.qu22.hide();
      this.qu22o1.hide();
      this.qu22o2.hide();
      this.qu22o3.hide();
      this.qu22o4.hide();
});

this.qu22o3.mousePressed(()=>{
  qCheck = 23;
  q22 = "wrong";
  

  this.qu23.position(10,80);
  this.qu23o1.position(417,208.5);
  this.qu23o1.style('width', '150px');
  this.qu23o1.style('height', '50px');
  this.qu23o1.style('background', 'lightblue');
  this.qu23o1.style('color', rgb(240,0,0));
  this.qu23o1.style('font-size', '17.5px');
  this.qu23o3.position(417,625.5);
  this.qu23o3.style('width', '150px');
  this.qu23o3.style('height', '50px');
  this.qu23o3.style('background', 'lightblue');
  this.qu23o3.style('color', rgb(240,0,0));
  this.qu23o3.style('font-size', '13px');
  this.qu23o2.position(1137,208.5);
  this.qu23o2.style('width', '150px');
  this.qu23o2.style('height', '50px');
  this.qu23o2.style('background', 'lightblue');
  this.qu23o2.style('color', rgb(240,0,0));
  this.qu23o2.style('font-size', '17.5px');
  this.qu23o4.position(1137,625.5);
  this.qu23o4.style('width', '150px');
  this.qu23o4.style('height', '50px');
  this.qu23o4.style('background', 'lightblue');   
  this.qu23o4.style('color', rgb(240,0,0));
  this.qu23o4.style('font-size', '17.5px');

    this.qu22.hide();
      this.qu22o1.hide();
      this.qu22o2.hide();
      this.qu22o3.hide();
      this.qu22o4.hide();
});

this.qu22o4.mousePressed(()=>{
  qCheck = 23;
  q22 = "right";
  score += 1;

  this.qu23.position(10,80);
  this.qu23o1.position(417,208.5);
  this.qu23o1.style('width', '150px');
  this.qu23o1.style('height', '50px');
  this.qu23o1.style('background', 'lightblue');
  this.qu23o1.style('color', rgb(240,0,0));
  this.qu23o1.style('font-size', '17.5px');
  this.qu23o3.position(417,625.5);
  this.qu23o3.style('width', '150px');
  this.qu23o3.style('height', '50px');
  this.qu23o3.style('background', 'lightblue');
  this.qu23o3.style('color', rgb(240,0,0));
  this.qu23o3.style('font-size', '13px');
  this.qu23o2.position(1137,208.5);
  this.qu23o2.style('width', '150px');
  this.qu23o2.style('height', '50px');
  this.qu23o2.style('background', 'lightblue');
  this.qu23o2.style('color', rgb(240,0,0));
  this.qu23o2.style('font-size', '17.5px');
  this.qu23o4.position(1137,625.5);
  this.qu23o4.style('width', '150px');
  this.qu23o4.style('height', '50px');
  this.qu23o4.style('background', 'lightblue');   
  this.qu23o4.style('color', rgb(240,0,0));
  this.qu23o4.style('font-size', '17.5px');

    this.qu22.hide();
      this.qu22o1.hide();
      this.qu22o2.hide();
      this.qu22o3.hide();
      this.qu22o4.hide();
});

// ======================================
//                  qu23
// ======================================

this.qu23o1.mousePressed(()=>{
  qCheck = 24;
  q23 = "wrong";
  

  this.qu24.position(10,80);
  this.qu24o1.position(417,208.5);
  this.qu24o1.style('width', '150px');
  this.qu24o1.style('height', '50px');
  this.qu24o1.style('background', 'lightblue');
  this.qu24o1.style('color', rgb(240,0,0));
  this.qu24o1.style('font-size', '17.5px');
  this.qu24o3.position(417,625.5);
  this.qu24o3.style('width', '150px');
  this.qu24o3.style('height', '50px');
  this.qu24o3.style('background', 'lightblue');
  this.qu24o3.style('color', rgb(240,0,0));
  this.qu24o3.style('font-size', '17.5px');
  this.qu24o2.position(1137,208.5);
  this.qu24o2.style('width', '150px');
  this.qu24o2.style('height', '50px');
  this.qu24o2.style('background', 'lightblue');
  this.qu24o2.style('color', rgb(240,0,0));
  this.qu24o2.style('font-size', '17.5px');
  this.qu24o4.position(1137,625.5);
  this.qu24o4.style('width', '150px');
  this.qu24o4.style('height', '50px');
  this.qu24o4.style('background', 'lightblue');   
  this.qu24o4.style('color', rgb(240,0,0));
  this.qu24o4.style('font-size', '17.5px');

    this.qu23.hide();
      this.qu23o1.hide();
      this.qu23o2.hide();
      this.qu23o3.hide();
      this.qu23o4.hide();
});

this.qu23o2.mousePressed(()=>{
  qCheck = 24;
  q23 = "wrong";
  

  this.qu24.position(10,80);
  this.qu24o1.position(417,208.5);
  this.qu24o1.style('width', '150px');
  this.qu24o1.style('height', '50px');
  this.qu24o1.style('background', 'lightblue');
  this.qu24o1.style('color', rgb(240,0,0));
  this.qu24o1.style('font-size', '17.5px');
  this.qu24o3.position(417,625.5);
  this.qu24o3.style('width', '150px');
  this.qu24o3.style('height', '50px');
  this.qu24o3.style('background', 'lightblue');
  this.qu24o3.style('color', rgb(240,0,0));
  this.qu24o3.style('font-size', '17.5px');
  this.qu24o2.position(1137,208.5);
  this.qu24o2.style('width', '150px');
  this.qu24o2.style('height', '50px');
  this.qu24o2.style('background', 'lightblue');
  this.qu24o2.style('color', rgb(240,0,0));
  this.qu24o2.style('font-size', '17.5px');
  this.qu24o4.position(1137,625.5);
  this.qu24o4.style('width', '150px');
  this.qu24o4.style('height', '50px');
  this.qu24o4.style('background', 'lightblue');   
  this.qu24o4.style('color', rgb(240,0,0));
  this.qu24o4.style('font-size', '17.5px');

    this.qu23.hide();
      this.qu23o1.hide();
      this.qu23o2.hide();
      this.qu23o3.hide();
      this.qu23o4.hide();
});

this.qu23o3.mousePressed(()=>{
  qCheck = 24;
  q23 = "right";
  score += 1;

  this.qu24.position(10,80);
  this.qu24o1.position(417,208.5);
  this.qu24o1.style('width', '150px');
  this.qu24o1.style('height', '50px');
  this.qu24o1.style('background', 'lightblue');
  this.qu24o1.style('color', rgb(240,0,0));
  this.qu24o1.style('font-size', '17.5px');
  this.qu24o3.position(417,625.5);
  this.qu24o3.style('width', '150px');
  this.qu24o3.style('height', '50px');
  this.qu24o3.style('background', 'lightblue');
  this.qu24o3.style('color', rgb(240,0,0));
  this.qu24o3.style('font-size', '17.5px');
  this.qu24o2.position(1137,208.5);
  this.qu24o2.style('width', '150px');
  this.qu24o2.style('height', '50px');
  this.qu24o2.style('background', 'lightblue');
  this.qu24o2.style('color', rgb(240,0,0));
  this.qu24o2.style('font-size', '17.5px');
  this.qu24o4.position(1137,625.5);
  this.qu24o4.style('width', '150px');
  this.qu24o4.style('height', '50px');
  this.qu24o4.style('background', 'lightblue');   
  this.qu24o4.style('color', rgb(240,0,0));
  this.qu24o4.style('font-size', '17.5px');

    this.qu23.hide();
      this.qu23o1.hide();
      this.qu23o2.hide();
      this.qu23o3.hide();
      this.qu23o4.hide();
});

this.qu23o4.mousePressed(()=>{
  qCheck = 24;
  q23 = "wrong";
  

  this.qu24.position(10,80);
  this.qu24o1.position(417,208.5);
  this.qu24o1.style('width', '150px');
  this.qu24o1.style('height', '50px');
  this.qu24o1.style('background', 'lightblue');
  this.qu24o1.style('color', rgb(240,0,0));
  this.qu24o1.style('font-size', '17.5px');
  this.qu24o3.position(417,625.5);
  this.qu24o3.style('width', '150px');
  this.qu24o3.style('height', '50px');
  this.qu24o3.style('background', 'lightblue');
  this.qu24o3.style('color', rgb(240,0,0));
  this.qu24o3.style('font-size', '17.5px');
  this.qu24o2.position(1137,208.5);
  this.qu24o2.style('width', '150px');
  this.qu24o2.style('height', '50px');
  this.qu24o2.style('background', 'lightblue');
  this.qu24o2.style('color', rgb(240,0,0));
  this.qu24o2.style('font-size', '17.5px');
  this.qu24o4.position(1137,625.5);
  this.qu24o4.style('width', '150px');
  this.qu24o4.style('height', '50px');
  this.qu24o4.style('background', 'lightblue');   
  this.qu24o4.style('color', rgb(240,0,0));
  this.qu24o4.style('font-size', '17.5px');

    this.qu23.hide();
      this.qu23o1.hide();
      this.qu23o2.hide();
      this.qu23o3.hide();
      this.qu23o4.hide();
});

// ======================================
//                  qu24
// ======================================

this.qu24o1.mousePressed(()=>{
  qCheck = 25;
  q24 = "wrong";
  

  this.qu25.position(10,80);
  this.qu25o1.position(417,208.5);
  this.qu25o1.style('width', '150px');
  this.qu25o1.style('height', '50px');
  this.qu25o1.style('background', 'lightblue');
  this.qu25o1.style('color', rgb(240,0,0));
  this.qu25o1.style('font-size', '17.5px');
  this.qu25o3.position(417,625.5);
  this.qu25o3.style('width', '150px');
  this.qu25o3.style('height', '50px');
  this.qu25o3.style('background', 'lightblue');
  this.qu25o3.style('color', rgb(240,0,0));
  this.qu25o3.style('font-size', '17.5px');
  this.qu25o2.position(1137,208.5);
  this.qu25o2.style('width', '150px');
  this.qu25o2.style('height', '50px');
  this.qu25o2.style('background', 'lightblue');
  this.qu25o2.style('color', rgb(240,0,0));
  this.qu25o2.style('font-size', '17.5px');
  this.qu25o4.position(1137,625.5);
  this.qu25o4.style('width', '150px');
  this.qu25o4.style('height', '50px');
  this.qu25o4.style('background', 'lightblue');   
  this.qu25o4.style('color', rgb(240,0,0));
  this.qu25o4.style('font-size', '17.5px');

    this.qu24.hide();
      this.qu24o1.hide();
      this.qu24o2.hide();
      this.qu24o3.hide();
      this.qu24o4.hide();
});

this.qu24o2.mousePressed(()=>{
  qCheck = 25;
  q24 = "wrong";
  

  this.qu25.position(10,80);
  this.qu25o1.position(417,208.5);
  this.qu25o1.style('width', '150px');
  this.qu25o1.style('height', '50px');
  this.qu25o1.style('background', 'lightblue');
  this.qu25o1.style('color', rgb(240,0,0));
  this.qu25o1.style('font-size', '17.5px');
  this.qu25o3.position(417,625.5);
  this.qu25o3.style('width', '150px');
  this.qu25o3.style('height', '50px');
  this.qu25o3.style('background', 'lightblue');
  this.qu25o3.style('color', rgb(240,0,0));
  this.qu25o3.style('font-size', '17.5px');
  this.qu25o2.position(1137,208.5);
  this.qu25o2.style('width', '150px');
  this.qu25o2.style('height', '50px');
  this.qu25o2.style('background', 'lightblue');
  this.qu25o2.style('color', rgb(240,0,0));
  this.qu25o2.style('font-size', '17.5px');
  this.qu25o4.position(1137,625.5);
  this.qu25o4.style('width', '150px');
  this.qu25o4.style('height', '50px');
  this.qu25o4.style('background', 'lightblue');   
  this.qu25o4.style('color', rgb(240,0,0));
  this.qu25o4.style('font-size', '17.5px');

    this.qu24.hide();
      this.qu24o1.hide();
      this.qu24o2.hide();
      this.qu24o3.hide();
      this.qu24o4.hide();
});

this.qu24o3.mousePressed(()=>{
  qCheck = 25;
  q24 = "right";
  score += 1;

  this.qu25.position(10,80);
  this.qu25o1.position(417,208.5);
  this.qu25o1.style('width', '150px');
  this.qu25o1.style('height', '50px');
  this.qu25o1.style('background', 'lightblue');
  this.qu25o1.style('color', rgb(240,0,0));
  this.qu25o1.style('font-size', '17.5px');
  this.qu25o3.position(417,625.5);
  this.qu25o3.style('width', '150px');
  this.qu25o3.style('height', '50px');
  this.qu25o3.style('background', 'lightblue');
  this.qu25o3.style('color', rgb(240,0,0));
  this.qu25o3.style('font-size', '17.5px');
  this.qu25o2.position(1137,208.5);
  this.qu25o2.style('width', '150px');
  this.qu25o2.style('height', '50px');
  this.qu25o2.style('background', 'lightblue');
  this.qu25o2.style('color', rgb(240,0,0));
  this.qu25o2.style('font-size', '17.5px');
  this.qu25o4.position(1137,625.5);
  this.qu25o4.style('width', '150px');
  this.qu25o4.style('height', '50px');
  this.qu25o4.style('background', 'lightblue');   
  this.qu25o4.style('color', rgb(240,0,0));
  this.qu25o4.style('font-size', '17.5px');

    this.qu24.hide();
      this.qu24o1.hide();
      this.qu24o2.hide();
      this.qu24o3.hide();
      this.qu24o4.hide();
});

this.qu24o4.mousePressed(()=>{
  qCheck = 25;
  q24 = "wrong";
  

  this.qu25.position(10,80);
  this.qu25o1.position(417,208.5);
  this.qu25o1.style('width', '150px');
  this.qu25o1.style('height', '50px');
  this.qu25o1.style('background', 'lightblue');
  this.qu25o1.style('color', rgb(240,0,0));
  this.qu25o1.style('font-size', '17.5px');
  this.qu25o3.position(417,625.5);
  this.qu25o3.style('width', '150px');
  this.qu25o3.style('height', '50px');
  this.qu25o3.style('background', 'lightblue');
  this.qu25o3.style('color', rgb(240,0,0));
  this.qu25o3.style('font-size', '17.5px');
  this.qu25o2.position(1137,208.5);
  this.qu25o2.style('width', '150px');
  this.qu25o2.style('height', '50px');
  this.qu25o2.style('background', 'lightblue');
  this.qu25o2.style('color', rgb(240,0,0));
  this.qu25o2.style('font-size', '17.5px');
  this.qu25o4.position(1137,625.5);
  this.qu25o4.style('width', '150px');
  this.qu25o4.style('height', '50px');
  this.qu25o4.style('background', 'lightblue');   
  this.qu25o4.style('color', rgb(240,0,0));
  this.qu25o4.style('font-size', '17.5px');

    this.qu24.hide();
      this.qu24o1.hide();
      this.qu24o2.hide();
      this.qu24o3.hide();
      this.qu24o4.hide();
});

// ======================================
//             qu25 to result
// ======================================

this.qu25o1.mousePressed(()=>{
  qCheck = 26;
  q25 = "wrong";
  
  this.tellingScore.html("You have scored " + score + "/25");
  this.tellingScore.position(displayWidth/2 - 100,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  //this.tellingScore.style('color', rgb(240,0,0));

  this.tellingAboutUpdates.html("Stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "darkred");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu25.hide();
      this.qu25o1.hide();
      this.qu25o2.hide();
      this.qu25o3.hide();
      this.qu25o4.hide();

});

this.qu25o2.mousePressed(()=>{
  qCheck = 26;
  q25 = "right";
  score += 1;

  this.tellingScore.html("You have scored " + score + "/25");
  this.tellingScore.position(displayWidth/2 - 100,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  //this.tellingScore.style('color', rgb(240,0,0));

  this.tellingAboutUpdates.html("Stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "darkred");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu25.hide();
      this.qu25o1.hide();
      this.qu25o2.hide();
      this.qu25o3.hide();
      this.qu25o4.hide();
});

this.qu25o3.mousePressed(()=>{
  qCheck = 26;
  q25 = "wrong";
  
  this.tellingScore.html("You have scored " + score + "/25");
  this.tellingScore.position(displayWidth/2 - 100,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  //this.tellingScore.style('color', rgb(240,0,0));

  this.tellingAboutUpdates.html("Stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "darkred");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu25.hide();
      this.qu25o1.hide();
      this.qu25o2.hide();
      this.qu25o3.hide();
      this.qu25o4.hide();
});

this.qu25o4.mousePressed(()=>{
  qCheck = 26;
  q25 = "wrong";
  
  this.tellingScore.html("You have scored " + score + "/25");
  this.tellingScore.position(displayWidth/2 - 100,displayHeight/2 - 347.5);
  this.tellingScore.style('font-size', '30px');
  //this.tellingScore.style('color', rgb(240,0,0));

  this.tellingAboutUpdates.html("Stay tuned for further updates as you can know the correct answers of the questions you did wrong, and you will also be able to compete with your friends and families through multiple devices. You will also be having some more different types of questions.");
  this.tellingAboutUpdates.position(10,displayHeight/2 - 347.5 + 500);
  this.tellingAboutUpdates.style('font-size', '25px');
  this.tellingAboutUpdates.style('color', "darkred");

  this.madeby.html("This app is made by Aahan Gandhi with the help of his teacher Mrs. Roopa Tirumalasetti");
  this.madeby.position(10,displayHeight/2 - 180);
  this.madeby.style('font-size', '45px');
  this.madeby.style('color', 'orange');

    this.qu25.hide();
      this.qu25o1.hide();
      this.qu25o2.hide();
      this.qu25o3.hide();
      this.qu25o4.hide();
});



console.log(qCheck);












  }
  

}
