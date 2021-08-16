var masterchefstart,masterchefstartimage
var nextbutton,nextbuttonimage
var nextbutton2,nextbutton3,nextbutton4
var gamestate="start"
var idlisambarstart,idlisambarstartimage
var idlistep1,idlistep1image
var idlistep2,idlistep2image
var idlistep3,idlistep3image
var idlistep4,idlistep4image
var idlistep5,idlistep5image
var idlistep6,idlistep6image
var idlistep7,idlistep7image
var idlistep8,idlistep8image
var idlistep9,idlistep9image
var idlistep10,idlistep10image
var idlistep11,idlistep11image
var idlistep12,idlistep12image
var idlistep13,idlistep13image
var idlistep14,idlistep14image
var idlistep15,idlistep15image
var idlistep16,idlistep16image
var idlistep17,idlistep17image
var idlistep18,idlistep18image
var idlistep19,idlistep19image
var idlistep20,idlistep20image
var idlistep21,idlistep21image
var idlistep22,idlistep22image
var backbuttonimage



function preload(){
    masterchefstartimage=loadImage("masterchef start.png")
    nextbuttonimage=loadImage("nextbutton3.png")
    idlisambarstartimage=loadImage("idli sambar.jpg")
    idlistep1image=loadImage("step1 idli sambar.jpeg")
    idlistep2image=loadImage("step2 idli sambar.jpeg")
    idlistep3image=loadImage("step3 idli sambar.jpeg")
    idlistep4image=loadImage("step4 idli sambar.jpeg")
    idlistep5image=loadImage("step5 idli sambar.jpeg")
    idlistep6image=loadImage("step6 idli sambar.jpeg")
    idlistep7image=loadImage("step7 idli sambar.jpeg")
    idlistep8image=loadImage("step8 idli sambar.jpeg")
    idlistep9image=loadImage("step9 idli sambar.jpeg")
    idlistep10image=loadImage("step10 idli sambar.jpeg")
    idlistep11image=loadImage("step11 idli sambar.jpeg")
    idlistep12image=loadImage("step12 idli sambar.jpeg")
    idlistep13image=loadImage("step13 idli sambar.jpeg")
    idlistep14image=loadImage("step14 idli sambar.jpeg")
    idlistep15image=loadImage("step15 idli sambar.jpeg")
    idlistep16image=loadImage("step16 idli sambar.jpeg")
    idlistep17image=loadImage("step17 idli sambar.jpeg")
    idlistep18image=loadImage("step18 idli sambar.jpeg")
    idlistep19image=loadImage("step19 idli sambar.jpeg")
    idlistep20image=loadImage("step20 idli sambar.jpeg")
    idlistep21image=loadImage("step21 idli sambar.jpeg")
    idlistep22image=loadImage("step22 idli sambar.jpeg")
    backbuttonimage=loadImage("backbutton4.png")



}

function setup(){

createCanvas(windowWidth,windowHeight)

masterchefstart=createSprite(width/2,height/2,50,50)
masterchefstart.addImage(masterchefstartimage)
masterchefstart.scale=2.5
masterchefstart.visible=false

idlisambarstart=createSprite(width/2,height/2,50,50)
idlisambarstart.addImage(idlisambarstartimage)
idlisambarstart.scale=1.5
idlisambarstart.visible=false

idlistep1=createSprite(width/2,height/2,50,50)
idlistep1.addImage(idlistep1image)
idlistep1.scale=1
idlistep1.visible=false

idlistep2=createSprite(width/2,height/2,50,50)
idlistep2.addImage(idlistep2image)
idlistep2.scale=1
idlistep2.visible=false


idlistep3=createSprite(width/2,height/2,50,50)
idlistep3.addImage(idlistep3image)
idlistep3.scale=1
idlistep3.visible=false

idlistep4=createSprite(width/2,height/2,50,50)
idlistep4.addImage(idlistep4image)
idlistep4.scale=1
idlistep4.visible=false

idlistep5=createSprite(width/2,height/2,50,50)
idlistep5.addImage(idlistep5image)
idlistep5.scale=1
idlistep5.visible=false

idlistep6=createSprite(width/2,height/2,50,50)
idlistep6.addImage(idlistep6image)
idlistep6.scale=1
idlistep6.visible=false

idlistep7=createSprite(width/2,height/2,50,50)
idlistep7.addImage(idlistep7image)
idlistep7.scale=1
idlistep7.visible=false

idlistep8=createSprite(width/2,height/2,50,50)
idlistep8.addImage(idlistep8image)
idlistep8.scale=1
idlistep8.visible=false

idlistep9=createSprite(width/2,height/2,50,50)
idlistep9.addImage(idlistep9image)
idlistep9.scale=1
idlistep9.visible=false


idlistep10=createSprite(width/2,height/2,50,50)
idlistep10.addImage(idlistep10image)
idlistep10.scale=1
idlistep10.visible=false

idlistep11=createSprite(width/2,height/2,50,50)
idlistep11.addImage(idlistep11image)
idlistep11.scale=1
idlistep11.visible=false

idlistep12=createSprite(width/2,height/2,50,50)
idlistep12.addImage(idlistep12image)
idlistep12.scale=1
idlistep12.visible=false

idlistep13=createSprite(width/2,height/2,50,50)
idlistep13.addImage(idlistep13image)
idlistep13.scale=1
idlistep13.visible=false

idlistep14=createSprite(width/2,height/2,50,50)
idlistep14.addImage(idlistep14image)
idlistep14.scale=1
idlistep14.visible=false

idlistep15=createSprite(width/2,height/2,50,50)
idlistep15.addImage(idlistep15image)
idlistep15.scale=1
idlistep15.visible=false

idlistep16=createSprite(width/2,height/2,50,50)
idlistep16.addImage(idlistep16image)
idlistep16.scale=1
idlistep16.visible=false

idlistep17=createSprite(width/2,height/2,50,50)
idlistep17.addImage(idlistep17image)
idlistep17.scale=1
idlistep17.visible=false

idlistep18=createSprite(width/2,height/2,50,50)
idlistep18.addImage(idlistep18image)
idlistep18.scale=1
idlistep18.visible=false

idlistep19=createSprite(width/2,height/2,50,50)
idlistep19.addImage(idlistep19image)
idlistep19.scale=1
idlistep19.visible=false

idlistep20=createSprite(width/2,height/2,50,50)
idlistep20.addImage(idlistep20image)
idlistep20.scale=1
idlistep20.visible=false

idlistep21=createSprite(width/2,height/2,50,50)
idlistep21.addImage(idlistep21image)
idlistep21.scale=1
idlistep21.visible=false

idlistep22=createSprite(width/2,height/2,50,50)
idlistep22.addImage(idlistep22image)
idlistep22.scale=1.5
idlistep22.visible=false

nextbutton=createSprite(width/1.2,height/1.1,50,50)
nextbutton.addImage(nextbuttonimage)
nextbutton.scale=0.4
nextbutton.visible=false

nextbutton2=createSprite(width/1.2,height/2.7,50,50)
nextbutton2.addImage(nextbuttonimage)
nextbutton2.scale=0.4
nextbutton2.visible=false

nextbutton3=createSprite(width/1.2,height/2.3,50,50)
nextbutton3.addImage(nextbuttonimage)
nextbutton3.scale=0.4
nextbutton3.visible=false

nextbutton4=createSprite(width/1.2,height/1.7,50,50)
nextbutton4.addImage(nextbuttonimage)
nextbutton4.scale=0.4
nextbutton4.visible=false


nextbutton5=createSprite(width/1.2,height/2,50,50)
nextbutton5.addImage(nextbuttonimage)
nextbutton5.scale=0.4
nextbutton5.visible=false

nextbutton6=createSprite(width/1.2,height/1.4,50,50)
nextbutton6.addImage(nextbuttonimage)
nextbutton6.scale=0.4
nextbutton6.visible=false

nextbutton7=createSprite(width/1.2,height/1.2,50,50)
nextbutton7.addImage(nextbuttonimage)
nextbutton7.scale=0.4
nextbutton7.visible=false

nextbutton8=createSprite(width/1.2,height/3,50,50)
nextbutton8.addImage(nextbuttonimage)
nextbutton8.scale=0.4
nextbutton8.visible=false

nextbutton9=createSprite(width/1.2,height/1.2,50,50)
nextbutton9.addImage(nextbuttonimage)
nextbutton9.scale=0.4
nextbutton9.visible=false

nextbutton10=createSprite(width/1.2,height/3.1,50,50)
nextbutton10.addImage(nextbuttonimage)
nextbutton10.scale=0.4
nextbutton10.visible=false

nextbutton11=createSprite(width/1.2,height/4.3,50,50)
nextbutton11.addImage(nextbuttonimage)
nextbutton11.scale=0.4
nextbutton11.visible=false


nextbutton12=createSprite(width/1.2,height/1.1,50,50)
nextbutton12.addImage(nextbuttonimage)
nextbutton12.scale=0.4
nextbutton12.visible=false

nextbutton13=createSprite(width/1.2,height/2,50,50)
nextbutton13.addImage(nextbuttonimage)
nextbutton13.scale=0.4
nextbutton13.visible=false

nextbutton14=createSprite(width/1.2,height/4,50,50)
nextbutton14.addImage(nextbuttonimage)
nextbutton14.scale=0.4
nextbutton14.visible=false



nextbutton15=createSprite(width/1.2,height/2.1,50,50)
nextbutton15.addImage(nextbuttonimage)
nextbutton15.scale=0.4
nextbutton15.visible=false

nextbutton16=createSprite(width/1.2,height/2.9,50,50)
nextbutton16.addImage(nextbuttonimage)
nextbutton16.scale=0.4
nextbutton16.visible=false

nextbutton17=createSprite(width/1.2,height/4,50,50)
nextbutton17.addImage(nextbuttonimage)
nextbutton17.scale=0.4
nextbutton17.visible=false

nextbutton18=createSprite(width/1.2,height/3,50,50)
nextbutton18.addImage(nextbuttonimage)
nextbutton18.scale=0.4
nextbutton18.visible=false

nextbutton19=createSprite(width/1.2,height/1.3,50,50)
nextbutton19.addImage(nextbuttonimage)
nextbutton19.scale=0.4
nextbutton19.visible=false

nextbutton20=createSprite(width/1.2,height/4,50,50)
nextbutton20.addImage(nextbuttonimage)
nextbutton20.scale=0.4
nextbutton20.visible=false

nextbutton21=createSprite(width/1.2,height/1.5,50,50)
nextbutton21.addImage(nextbuttonimage)
nextbutton21.scale=0.4
nextbutton21.visible=false

nextbutton22=createSprite(width/1.2,height/3,50,50)
nextbutton22.addImage(nextbuttonimage)
nextbutton22.scale=0.4
nextbutton22.visible=false

nextbutton23=createSprite(width/1.2,height/1.3,50,50)
nextbutton23.addImage(nextbuttonimage)
nextbutton23.scale=0.4
nextbutton23.visible=false


nextbutton24=createSprite(width/1.2,height/4,50,50)
nextbutton24.addImage(nextbuttonimage)
nextbutton24.scale=0.4
nextbutton24.visible=false

backbutton1=createSprite(width/10,height/1.1,50,50)
backbutton1.addImage(backbuttonimage)
backbutton1.scale=1
backbutton1.visible=false

backbutton2=createSprite(width/10,height/3,50,50)
backbutton2.addImage(backbuttonimage)
backbutton2.scale=1
backbutton2.visible=false

backbutton3=createSprite(width/10,height/1.1,50,50)
backbutton3.addImage(backbuttonimage)
backbutton3.scale=1
backbutton3.visible=false

backbutton4=createSprite(width/10,height/3,50,50)
backbutton4.addImage(backbuttonimage)
backbutton4.scale=1
backbutton4.visible=false

backbutton5=createSprite(width/10,height/1.1,50,50)
backbutton5.addImage(backbuttonimage)
backbutton5.scale=1
backbutton5.visible=false

backbutton6=createSprite(width/10,height/3,50,50)
backbutton6.addImage(backbuttonimage)
backbutton6.scale=1
backbutton6.visible=false

backbutton7=createSprite(width/10,height/1.1,50,50)
backbutton7.addImage(backbuttonimage)
backbutton7.scale=1
backbutton7.visible=false

backbutton8=createSprite(width/10,height/3,50,50)
backbutton8.addImage(backbuttonimage)
backbutton8.scale=1
backbutton8.visible=false

backbutton9=createSprite(width/10,height/1.1,50,50)
backbutton9.addImage(backbuttonimage)
backbutton9.scale=1
backbutton9.visible=false

backbutton10=createSprite(width/10,height/3,50,50)
backbutton10.addImage(backbuttonimage)
backbutton10.scale=1
backbutton10.visible=false

backbutton11=createSprite(width/10,height/1.1,50,50)
backbutton11.addImage(backbuttonimage)
backbutton11.scale=1
backbutton11.visible=false

backbutton12=createSprite(width/10,height/3,50,50)
backbutton12.addImage(backbuttonimage)
backbutton12.scale=1
backbutton12.visible=false

backbutton13=createSprite(width/10,height/1.1,50,50)
backbutton13.addImage(backbuttonimage)
backbutton13.scale=1
backbutton13.visible=false

backbutton14=createSprite(width/10,height/3,50,50)
backbutton14.addImage(backbuttonimage)
backbutton14.scale=1
backbutton14.visible=false

backbutton15=createSprite(width/10,height/1.1,50,50)
backbutton15.addImage(backbuttonimage)
backbutton15.scale=1
backbutton15.visible=false

backbutton16=createSprite(width/10,height/3,50,50)
backbutton16.addImage(backbuttonimage)
backbutton16.scale=1
backbutton16.visible=false

backbutton17=createSprite(width/10,height/1.1,50,50)
backbutton17.addImage(backbuttonimage)
backbutton17.scale=1
backbutton17.visible=false

backbutton18=createSprite(width/10,height/3,50,50)
backbutton18.addImage(backbuttonimage)
backbutton18.scale=1
backbutton18.visible=false

backbutton19=createSprite(width/10,height/1.1,50,50)
backbutton19.addImage(backbuttonimage)
backbutton19.scale=1
backbutton19.visible=false

backbutton20=createSprite(width/10,height/3,50,50)
backbutton20.addImage(backbuttonimage)
backbutton20.scale=1
backbutton20.visible=false

backbutton21=createSprite(width/10,height/1.1,50,50)
backbutton21.addImage(backbuttonimage)
backbutton21.scale=1
backbutton21.visible=false


}

function draw(){
background("#f05f35")
drawSprites()

if(gamestate==="start"){
    nextbutton.visible=true
    masterchefstart.visible=true
    }

    if(mousePressedOver(nextbutton)&&gamestate==="start"){
        gamestate="tell"
    }

    if(gamestate==="tell"){
       
        masterchefstart.visible=false
        nextbutton2.visible=true
        nextbutton.visible=false
        idlisambarstart.visible=true

        textSize(30)
        fill("black")
textFont("Algerian")
    text("today we",width/70,height/2)
    text("will make",width/70,height/1.8)
    text("idli sambar",width/70,height/1.6)
    }
    if(mousePressedOver(nextbutton2)&&gamestate==="tell"){
        gamestate="step1"
    }

    if(gamestate==="step1"){
        textSize(80)
        fill("black")
textFont("Algerian")
    text("step 1 :",width/15,height/10)
    textSize(40)
    text("add 1 tsp",width/70,height/2)
    text("coconut oil to",width/70,height/1.8)
    text("pan",width/70,height/1.6)
        idlisambarstart.visible=false
        idlistep1.visible=true
        nextbutton3.visible=true
        nextbutton2.visible=false
    }


    if(mousePressedOver(nextbutton3)&&gamestate==="step1"){
        gamestate="step2"
    }

    if(gamestate==="step2"){
        textSize(80)
        fill("black")
textFont("Algerian")
    text("step 2 :",width/15,height/10)
    textSize(40)
    text("add 1/4 of cup",width/70,height/2)
    text("of coriander seeds",width/70,height/1.8)
    text("to the pan",width/70,height/1.6)
        idlisambarstart.visible=false
        idlistep2.visible=true
        idlistep1.visible=false
        nextbutton2.visible=false
        nextbutton4.visible=true
        nextbutton3.visible=false
        backbutton1.visible=true
    }

    if(mousePressedOver(nextbutton4)&&gamestate==="step2"){
        gamestate="step3"
    }

    if(gamestate==="step3"){
        textSize(80)
        fill("black")
textFont("Algerian")
    text("step 3 :",width/15,height/10)
    textSize(40)
    text("roast both of",width/70,height/2)
    text("them well",width/70,height/1.8)
        idlisambarstart.visible=false
        idlistep3.visible=true
        idlistep2.visible=false
        nextbutton2.visible=false
        nextbutton4.visible=false
        nextbutton5.visible=true
        idlistep4.visible=false
        backbutton1.visible=false
        backbutton2.visible=true
    }

    if(mousePressedOver(nextbutton5)&&gamestate==="step3"){
    gamestate="step4"
    }

    if(gamestate==="step4"){
        textSize(80)
        fill("black")
textFont("Algerian")
    text("step 4 :",width/15,height/10)
    textSize(40)
    text("add 30 gm",width/70,height/2)
    text("dried red chilli",width/70,height/1.8)
    text("to the oil",width/70,height/1.6)
        idlisambarstart.visible=false
        idlistep4.visible=true
        idlistep3.visible=false
        nextbutton2.visible=false
        nextbutton4.visible=false
        nextbutton5.visible=false
        idlistep4.visible=true
        backbutton2.visible=false
        backbutton3.visible=true
        nextbutton6.visible=true
    }

    if(mousePressedOver(nextbutton6)&&gamestate==="step4"){
        gamestate="step5"
        }
    
        if(gamestate==="step5"){
            textSize(80)
            fill("black")
    textFont("Algerian")
        text("step 5 :",width/15,height/10)
        textSize(40)
        text("transfer it to an",width/70,height/2)
        text("mixer when it",width/70,height/1.8)
        text("cools completely",width/70,height/1.6)
            idlisambarstart.visible=false
            idlistep5.visible=true
            idlistep4.visible=false
          
            nextbutton2.visible=false
            nextbutton4.visible=false
            nextbutton5.visible=false
            idlistep5.visible=true
            nextbutton6.visible=false
           nextbutton7.visible=true
           backbutton3.visible=false
           backbutton4.visible=true
        }

        if(mousePressedOver(nextbutton7)&&gamestate==="step5"){
            gamestate="step6"
            }
        
            if(gamestate==="step6"){
                textSize(80)
                fill("black")
        textFont("Algerian")
            text("step 6 :",width/15,height/10)
            textSize(40)
            text("grind it till it becomes powder and ",width/70,height/2)
            text(" keep it aside",width/70,height/1.8)
          
                idlisambarstart.visible=false
                idlistep5.visible=false
                nextbutton2.visible=false
                nextbutton4.visible=false
                nextbutton5.visible=false
                idlistep6.visible=true
                   
               nextbutton7.visible=false
               nextbutton8.visible=true
               backbutton4.visible=false
               backbutton5.visible=true

            }

            if(mousePressedOver(nextbutton8)&&gamestate==="step6"){
                gamestate="step7"
                }
            
                if(gamestate==="step7"){
                    textSize(80)
                    fill("black")
            textFont("Algerian")
                text("step 7 :",width/15,height/10)
                textSize(40)

                text("take a pan and heat the oil",width/70,height/2)
                text("and add 1/4 teaspoon",width/70,height/1.8)
                text("of methi or fenugreek",width/70,height/1.6)                   
                 idlisambarstart.visible=false
                    idlistep7.visible=true
                  
                    nextbutton2.visible=false
                    nextbutton4.visible=false
                    nextbutton5.visible=false
                    idlistep6.visible=false
                       
                   nextbutton7.visible=false
                   nextbutton8.visible=false
                              
                   nextbutton9.visible=true
                   backbutton5.visible=false
                   backbutton6.visible=true
    
                }

                if(mousePressedOver(nextbutton9)&&gamestate==="step7"){
                    gamestate="step8"
                    }
                
                    if(gamestate==="step8"){
                        textSize(80)
                        fill("black")
                textFont("Algerian")
                    text("step 8 :",width/15,height/10)
                    textSize(40)

                    text("now add oniion that is chopped",width/70,height/2)
                    text("in four halves ",width/70,height/1.8)
                        idlisambarstart.visible=false
                        idlistep8.visible=true
                      
                        nextbutton2.visible=false
                        nextbutton4.visible=false
                        nextbutton5.visible=false
                        idlistep6.visible=true
                           
                       nextbutton7.visible=false
                       nextbutton8.visible=false
                       nextbutton9.visible=false
                       nextbutton10.visible=true
                       backbutton6.visible=false
                       backbutton7.visible=true
                    }

                    if(mousePressedOver(nextbutton10)&&gamestate==="step8"){
                        gamestate="step9"
                        }
                    
                        if(gamestate==="step9"){
                            textSize(80)
                            fill("black")
                    textFont("Algerian")
                        text("step 9 :",width/15,height/10)
                        textSize(40)

                        text("now add chopped tomatoes",width/70,height/2)
                        text("one or two",width/70,height/1.8)
                            idlisambarstart.visible=false
                            idlistep9.visible=true
                          
                            nextbutton2.visible=false
                            nextbutton4.visible=false
                            nextbutton5.visible=false
                            idlistep6.visible=true
                               
                           nextbutton7.visible=false
                           nextbutton8.visible=false
                           nextbutton10.visible=false
                           nextbutton11.visible=true
                           backbutton7.visible=false
                           backbutton8.visible=true
                        }

                        if(mousePressedOver(nextbutton11)&&gamestate==="step9"){
                            gamestate="step10"
                            }
                        
                            if(gamestate==="step10"){
                                textSize(80)
                                fill("black")
                        textFont("Algerian")
                            text("step 10 :",width/15,height/10)
                            textSize(40)

                            text("now add 1 chopped",width/70,height/2)
                            text("potatoe",width/70,height/1.8)
                                idlisambarstart.visible=false
                                idlistep10.visible=true
                              
                                nextbutton2.visible=false
                                nextbutton4.visible=false
                                nextbutton5.visible=false
                                idlistep6.visible=true
                                   
                               nextbutton7.visible=false
                               nextbutton8.visible=false
                               nextbutton10.visible=false
                               nextbutton11.visible=false
                               nextbutton12.visible=true
                               backbutton8.visible=false
                               backbutton9.visible=true
                            }

                            if(mousePressedOver(nextbutton12)&&gamestate==="step10"){
                                gamestate="step11"
                                }
                            
                                if(gamestate==="step11"){
                                    textSize(80)
                                    fill("black")
                            textFont("Algerian")
                                text("step 11 :",width/15,height/10)
                                textSize(40)

                                text("add more vegetables if you want ",width/70,height/2)
                                text("and saute them well for",width/70,height/1.8)
                                text("2 minutes",width/70,height/1.6)     
                                    idlisambarstart.visible=false
                                    idlistep11.visible=true
                                  
                                    nextbutton2.visible=false
                                    nextbutton4.visible=false
                                    nextbutton5.visible=false
                                
                                       
                                   nextbutton7.visible=false
                                   nextbutton8.visible=false
                                   nextbutton10.visible=false
                                   nextbutton11.visible=false
                                   nextbutton12.visible=false
                                   nextbutton13.visible=true
                                   backbutton9.visible=false
                                   backbutton10.visible=true
                                }

                                if(mousePressedOver(nextbutton13)&&gamestate==="step11"){
                                    gamestate="step12"
                                    }
                                
                                    if(gamestate==="step12"){
                                        textSize(80)
                                        fill("black")
                                textFont("Algerian")
                                    text("step 12 :",width/15,height/10)
                                    textSize(40)

                                    text("now add 1/4 th of teaspoon of ",width/70,height/2)
                                    text("turmeric powder to vegetables",width/70,height/1.8)
                                        idlisambarstart.visible=false
                                        idlistep12.visible=true
                                      
                                        nextbutton2.visible=false
                                        nextbutton4.visible=false
                                        nextbutton5.visible=false
                                      
                                           
                                       nextbutton7.visible=false
                                       nextbutton8.visible=false
                                       nextbutton10.visible=false
                                       nextbutton11.visible=false
                                       nextbutton12.visible=false
                                       nextbutton13.visible=false
                                       nextbutton14.visible=true
                                       backbutton10.visible=false
                                       backbutton11.visible=true
                                    }


                                    if(mousePressedOver(nextbutton14)&&gamestate==="step12"){
                                        gamestate="step13"
                                        }
                                    
                                        if(gamestate==="step13"){
                                            textSize(80)
                                            fill("black")
                                    textFont("Algerian")
                                        text("step 13 :",width/15,height/10)
                                        textSize(40)

                                        text("now boil them well",width/70,height/2)
                                        text("for 10 minutes",width/70,height/1.8)
                                            idlisambarstart.visible=false
                                            idlistep13.visible=true
                                          
                                            nextbutton2.visible=false
                                            nextbutton4.visible=false
                                            nextbutton5.visible=false
                                          
                                               
                                           nextbutton7.visible=false
                                           nextbutton8.visible=false
                                           nextbutton10.visible=false
                                           nextbutton11.visible=false
                                           nextbutton12.visible=false
                                           nextbutton13.visible=false
                                           nextbutton14.visible=false
                                           nextbutton15.visible=true

                                           backbutton11.visible=false
                                           backbutton12.visible=true
                                        }

                                        if(mousePressedOver(nextbutton15)&&gamestate==="step13"){
                                            gamestate="step14"
                                            }
                                        
                                            if(gamestate==="step14"){
                                                textSize(80)
                                                fill("black")
                                        textFont("Algerian")
                                            text("step 14 :",width/15,height/10)
                                            textSize(40)

                text("take 3/4 of a cup of taramarind extract",width/70,height/2)
                text("(imli extract) and add it to the vegetables",width/70,height/1.8)
                                                idlisambarstart.visible=false
                                                idlistep14.visible=true
                                              
                                                nextbutton2.visible=false
                                                nextbutton4.visible=false
                                                nextbutton5.visible=false
                                              
                                                   
                                               nextbutton7.visible=false
                                               nextbutton8.visible=false
                                               nextbutton10.visible=false
                                               nextbutton11.visible=false
                                               nextbutton12.visible=false
                                               nextbutton13.visible=false
                                               nextbutton14.visible=false
                                               nextbutton15.visible=false
                                               nextbutton16.visible=true

                                               backbutton12.visible=false
                                               backbutton13.visible=true
        
                                            }


                                            if(mousePressedOver(nextbutton16)&&gamestate==="step14"){
                                                gamestate="step15"
                                                }
                                            
                                                if(gamestate==="step15"){
                                                    textSize(80)
                                                    fill("black")
                                            textFont("Algerian")
                                                text("step 15 :",width/15,height/10)
                                                textSize(40)

                                                text("now boil them all for 10 minutes",width/70,height/2)
                                                
                                                    idlisambarstart.visible=false
                                                    idlistep15.visible=true
                                                  
                                                    nextbutton2.visible=false
                                                    nextbutton4.visible=false
                                                    nextbutton5.visible=false
                                                  
                                                       
                                                   nextbutton7.visible=false
                                                   nextbutton8.visible=false
                                                   nextbutton10.visible=false
                                                   nextbutton11.visible=false
                                                   nextbutton12.visible=false
                                                   nextbutton13.visible=false
                                                   nextbutton14.visible=false
                                                   nextbutton15.visible=false
                                                   nextbutton16.visible=false
                                                   nextbutton17.visible=true
                                                   backbutton13.visible=false
                                                   backbutton14.visible=true
                                                }


                                                
                                            if(mousePressedOver(nextbutton17)&&gamestate==="step15"){
                                                gamestate="step16"
                                                }
                                            
                                                if(gamestate==="step16"){
                                                    textSize(80)
                                                    fill("black")
                                            textFont("Algerian")
                                                text("step 16 :",width/15,height/10)
                                                textSize(40)

                                                text("add 1 cup of toor dal which is",width/70,height/2)
                                                text("boiled and whisked",width/70,height/1.8)
                                                    idlisambarstart.visible=false
                                                    idlistep16.visible=true
                                                  
                                                    nextbutton2.visible=false
                                                    nextbutton4.visible=false
                                                    nextbutton5.visible=false
                                                  
                                                       
                                                   nextbutton7.visible=false
                                                   nextbutton8.visible=false
                                                   nextbutton10.visible=false
                                                   nextbutton11.visible=false
                                                   nextbutton12.visible=false
                                                   nextbutton13.visible=false
                                                   nextbutton14.visible=false
                                                   nextbutton15.visible=false
                                                   nextbutton16.visible=false
                                                   nextbutton17.visible=false
                                                   nextbutton18.visible=true
                                                   backbutton14.visible=false
                                                   backbutton15.visible=true

                                                }


                                                if(mousePressedOver(nextbutton18)&&gamestate==="step16"){
                                                    gamestate="step17"
                                                    }
                                                
                                                    if(gamestate==="step17"){
                                                        textSize(80)
                                                        fill("black")
                                                textFont("Algerian")
                                                    text("step 17 :",width/15,height/10)

                                                    textSize(40)

                                                    text("add some water if wanted and adjust consistency",width/70,height/2)
                                                        idlisambarstart.visible=false
                                                        idlistep17.visible=true
                                                      
                                                        nextbutton2.visible=false
                                                        nextbutton4.visible=false
                                                        nextbutton5.visible=false
                                                      
                                                           
                                                       nextbutton7.visible=false
                                                       nextbutton8.visible=false
                                                       nextbutton10.visible=false
                                                       nextbutton11.visible=false
                                                       nextbutton12.visible=false
                                                       nextbutton13.visible=false
                                                       nextbutton14.visible=false
                                                       nextbutton15.visible=false
                                                       nextbutton16.visible=false
                                                       nextbutton17.visible=false
                                                       nextbutton18.visible=false
                                                       nextbutton19.visible=true
                                                       backbutton15.visible=false
                                                       backbutton16.visible=true
                                                    }

                                                    if(mousePressedOver(nextbutton19)&&gamestate==="step17"){
                                                        gamestate="step18"
                                                        }
                                                    
                                                        if(gamestate==="step18"){
                                                            textSize(80)
                                                            fill("black")
                                                    textFont("Algerian")
                                                        text("step 18 :",width/15,height/10)

                                                        textSize(40)

                                                        text("add 4 tablespoon sambar powder that",width/70,height/2)
                                                        text("we made earlier",width/70,height/1.8)
                                                            idlisambarstart.visible=false
                                                            idlistep18.visible=true
                                                          
                                                            nextbutton2.visible=false
                                                            nextbutton4.visible=false
                                                            nextbutton5.visible=false
                                                          
                                                               
                                                           nextbutton7.visible=false
                                                           nextbutton8.visible=false
                                                           nextbutton10.visible=false
                                                           nextbutton11.visible=false
                                                           nextbutton12.visible=false
                                                           nextbutton13.visible=false
                                                           nextbutton14.visible=false
                                                           nextbutton15.visible=false
                                                           nextbutton16.visible=false
                                                           nextbutton17.visible=false
                                                           nextbutton18.visible=false
                                                           nextbutton19.visible=false
                                                           nextbutton20.visible=true
                                                           backbutton16.visible=false
                                                           backbutton17.visible=true
                                                        }

                                                        if(mousePressedOver(nextbutton20)&&gamestate==="step18"){
                                                            gamestate="step19"
                                                            }
                                                        
                                                            if(gamestate==="step19"){
                                                                textSize(80)
                                                                fill("black")
                                                        textFont("Algerian")
                                                            text("step 19 :",width/15,height/10)

                                                            textSize(40)

                                                            text("combine both of them well",width/70,height/2)
                                                                idlisambarstart.visible=false
                                                                idlistep19.visible=true
                                                              
                                                                nextbutton2.visible=false
                                                                nextbutton4.visible=false
                                                                nextbutton5.visible=false
                                                              
                                                                   
                                                               nextbutton7.visible=false
                                                               nextbutton8.visible=false
                                                               nextbutton10.visible=false
                                                               nextbutton11.visible=false
                                                               nextbutton12.visible=false
                                                               nextbutton13.visible=false
                                                               nextbutton14.visible=false
                                                               nextbutton15.visible=false
                                                               nextbutton16.visible=false
                                                               nextbutton17.visible=false
                                                               nextbutton18.visible=false
                                                               nextbutton19.visible=false
                                                               nextbutton20.visible=false
                                                               nextbutton21.visible=true

                                                               backbutton17.visible=false
                                                               backbutton18.visible=true
                                                            }

                                                            if(mousePressedOver(nextbutton21)&&gamestate==="step19"){
                                                                gamestate="step20"
                                                                }
                                                            
                                                                if(gamestate==="step20"){
                                                                    textSize(80)
                                                                    fill("black")
                                                            textFont("Algerian")
                                                                text("step 20 :",width/15,height/10)
                                                                textSize(40)

                                                                text("boil them all for 1 minute",width/70,height/2)
                                                                    idlisambarstart.visible=false
                                                                    idlistep20.visible=true
                                                                  
                                                                    nextbutton2.visible=false
                                                                    nextbutton4.visible=false
                                                                    nextbutton5.visible=false
                                                                  
                                                                       
                                                                   nextbutton7.visible=false
                                                                   nextbutton8.visible=false
                                                                   nextbutton10.visible=false
                                                                   nextbutton11.visible=false
                                                                   nextbutton12.visible=false
                                                                   nextbutton13.visible=false
                                                                   nextbutton14.visible=false
                                                                   nextbutton15.visible=false
                                                                   nextbutton16.visible=false
                                                                   nextbutton17.visible=false
                                                                   nextbutton18.visible=false
                                                                   nextbutton19.visible=false
                                                                   nextbutton20.visible=false
                                                                   nextbutton21.visible=false
                                                                   nextbutton22.visible=true
                                                                   backbutton18.visible=false
                                                                   backbutton19.visible=true
                                                                }

                                                                
                                                            if(mousePressedOver(nextbutton22)&&gamestate==="step20"){
                                                                gamestate="step21"
                                                                }
                                                            
                                                                if(gamestate==="step21"){
                                                                    textSize(80)
                                                                    fill("black")
                                                            textFont("Algerian")
                                                                text("step 21 :",width/15,height/10)
                                                                textSize(40)

                                                                text("add 4 table spoon coriander that",width/70,height/2)
                                                                text("is chopped.",width/70,height/1.8)
                                                                    idlisambarstart.visible=false
                                                                    idlistep21.visible=true
                                                                  
                                                                    nextbutton2.visible=false
                                                                    nextbutton4.visible=false
                                                                    nextbutton5.visible=false
                                                                  
                                                                       
                                                                   nextbutton7.visible=false
                                                                   nextbutton8.visible=false
                                                                   nextbutton10.visible=false
                                                                   nextbutton11.visible=false
                                                                   nextbutton12.visible=false
                                                                   nextbutton13.visible=false
                                                                   nextbutton14.visible=false
                                                                   nextbutton15.visible=false
                                                                   nextbutton16.visible=false
                                                                   nextbutton17.visible=false
                                                                   nextbutton18.visible=false
                                                                   nextbutton19.visible=false
                                                                   nextbutton20.visible=false
                                                                   nextbutton21.visible=false
                                                                   nextbutton22.visible=false
                                                                   nextbutton23.visible=true
                                                                   backbutton19.visible=false
                                                                   backbutton20.visible=true

                                                                }

                                                                if(mousePressedOver(nextbutton23)&&gamestate==="step21"){
                                                                    gamestate="step22"
                                                                    }
                                                                
                                                                    if(gamestate==="step22"){
                                                                        textSize(80)
                                                                        fill("black")
                                                                textFont("Algerian")
                                                                    text("step 22 :",width/15,height/10)
                                                                    textSize(40)

                                                                    text("our sambar is ready and serve it",width/70,height/2)
                                                                    text("with white urad dal idli",width/70,height/1.8)
                                                                        idlisambarstart.visible=false
                                                                        idlistep22.visible=true
                                                                      
                                                                        nextbutton2.visible=false
                                                                        nextbutton4.visible=false
                                                                        nextbutton5.visible=false
                                                                      
                                                                           
                                                                       nextbutton7.visible=false
                                                                       nextbutton8.visible=false
                                                                       nextbutton10.visible=false
                                                                       nextbutton11.visible=false
                                                                       nextbutton12.visible=false
                                                                       nextbutton13.visible=false
                                                                       nextbutton14.visible=false
                                                                       nextbutton15.visible=false
                                                                       nextbutton16.visible=false
                                                                       nextbutton17.visible=false
                                                                       nextbutton18.visible=false
                                                                       nextbutton19.visible=false
                                                                       nextbutton20.visible=false
                                                                       nextbutton21.visible=false
                                                                       nextbutton22.visible=false
                                                                       nextbutton23.visible=false
                                                                       backbutton20.visible=false
                                                                       backbutton21.visible=true

    
                                                                    }

                                                                    if(mousePressedOver(backbutton1)&&gamestate==="step2"){
                                                                        gamestate="step1"
                                                                        idlistep2.visible=false
                                                                        nextbutton4.visible=false
                                                                        backbutton1.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton2)&&gamestate==="step3"){
                                                                        gamestate="step2"
                                                                        idlistep3.visible=false
                                                                        nextbutton5.visible=false
                                                                        backbutton2.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton3)&&gamestate==="step4"){
                                                                        gamestate="step3"
                                                                        idlistep4.visible=false
                                                                        nextbutton6.visible=false
                                                                        backbutton3.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton4)&&gamestate==="step5"){
                                                                        gamestate="step4"
                                                                        idlistep5.visible=false
                                                                        nextbutton7.visible=false
                                                                        backbutton4.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton5)&&gamestate==="step6"){
                                                                        gamestate="step5"
                                                                        idlistep6.visible=false
                                                                        nextbutton8.visible=false
                                                                        backbutton5.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton6)&&gamestate==="step7"){
                                                                        gamestate="step6"
                                                                        idlistep7.visible=false
                                                                        nextbutton9.visible=false
                                                                        backbutton6.visible=false
                                                                    }

                                                                    
                                                                    if(mousePressedOver(backbutton7)&&gamestate==="step8"){
                                                                        gamestate="step7"
                                                                        idlistep8.visible=false
                                                                        nextbutton10.visible=false
                                                                        backbutton7.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton8)&&gamestate==="step9"){
                                                                        gamestate="step8"
                                                                        idlistep9.visible=false
                                                                        nextbutton11.visible=false
                                                                        backbutton8.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton9)&&gamestate==="step10"){
                                                                        gamestate="step9"
                                                                        idlistep10.visible=false
                                                                        nextbutton12.visible=false
                                                                        backbutton9.visible=false
                                                                    }

                                                                    
                                                                    if(mousePressedOver(backbutton10)&&gamestate==="step11"){
                                                                        gamestate="step10"
                                                                        idlistep11.visible=false
                                                                        nextbutton13.visible=false
                                                                        backbutton10.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton11)&&gamestate==="step12"){
                                                                        gamestate="step11"
                                                                        idlistep12.visible=false
                                                                        nextbutton14.visible=false
                                                                        backbutton11.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton12)&&gamestate==="step13"){
                                                                        gamestate="step12"
                                                                        idlistep13.visible=false
                                                                        nextbutton15.visible=false
                                                                        backbutton12.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton13)&&gamestate==="step14"){
                                                                        gamestate="step13"
                                                                        idlistep14.visible=false
                                                                        nextbutton16.visible=false
                                                                        backbutton13.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton14)&&gamestate==="step15"){
                                                                        gamestate="step14"
                                                                        idlistep15.visible=false
                                                                        nextbutton17.visible=false
                                                                        backbutton14.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton15)&&gamestate==="step16"){
                                                                        gamestate="step15"
                                                                        idlistep16.visible=false
                                                                        nextbutton18.visible=false
                                                                        backbutton15.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton16)&&gamestate==="step17"){
                                                                        gamestate="step16"
                                                                        idlistep17.visible=false
                                                                        nextbutton19.visible=false
                                                                        backbutton16.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton17)&&gamestate==="step18"){
                                                                        gamestate="step17"
                                                                        idlistep18.visible=false
                                                                        nextbutton20.visible=false
                                                                        backbutton17.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton18)&&gamestate==="step19"){
                                                                        gamestate="step18"
                                                                        idlistep19.visible=false
                                                                        nextbutton21.visible=false
                                                                        backbutton18.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton19)&&gamestate==="step20"){
                                                                        gamestate="step19"
                                                                        idlistep20.visible=false
                                                                        nextbutton22.visible=false
                                                                        backbutton19.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton20)&&gamestate==="step21"){
                                                                        gamestate="step20"
                                                                        idlistep21.visible=false
                                                                        nextbutton23.visible=false
                                                                        backbutton20.visible=false
                                                                    }

                                                                    if(mousePressedOver(backbutton21)&&gamestate==="step22"){
                                                                        gamestate="step21"
                                                                        idlistep22.visible=false
                                                                        nextbutton24.visible=false
                                                                        backbutton21.visible=false
                                                                    }

                                                                    

                                                                    

                                                                    
                                                                    


                                                                



                                        

}
