//--01-- Correções de giro
//--02-- Implementar o giro individual dos niveis
document.addEventListener("DOMContentLoaded", function(){
    //setTimeout(()=>{ //atualizaçãp de código
        let rotateX = 0;
        let rotateY = 0;
        let rotateZ = 0;
        
        
        //---------------TAMANHO DO CUBO BASEADO NA TELA
        //---------------CONTROLE DE GIRO
        //---------------EIXOX - cima -> baixo ou baixo -> cima
        document.querySelector("#up").addEventListener("click", function(){
            tesseract("X", 30)
        });
        
        document.querySelector("#down").addEventListener("click", function(){
            //console.log("down");
            tesseract("X", -30)
        });

        //---------------EIXOY - esquerda -> direita ou direita -> esquerda
        document.querySelector("#left").addEventListener("click", function(){
            //console.log("left");
            tesseract("Y", 30)
        });

        document.querySelector("#right").addEventListener("click", function(){
            //console.log("rigth");
            tesseract("Y", -30)
        });
        //---------------EIXOZ 
        document.querySelector("#next").addEventListener("click", function(){
            //console.log("next");
            tesseract("Z", 30)
        });
        document.querySelector("#back").addEventListener("click", function(){
            //console.log("back");
            tesseract("Z", -30)
            
        });
        //---------------FIM DO CONTROLE DE GIRO   
    //}, 3000); //atualização de código
    
        let rotate_up_down = "rotateX"
        let rotate_left_ringht = "rotateY"
        


        function tesseract(eixo, rotate){
            let rotate_X = rotate //variavel para diferenciar X 
            let rotate_Y = rotate //variavel para diferenciar Y

            //-----------------------Correção da rotação para diferentes graus de Z -------------------------------------
            if(rotateZ === 0 || rotateZ === 360 || rotateZ === -360){
                rotate_up_down = "rotateX"
                rotate_left_ringht = "rotateY"
            }else{
                if(rotateZ === 90){
                    rotate_up_down = "rotateY"
                    rotate_left_ringht = "rotateX"
                    rotate_X = rotate_X * -1
                    if(rotateX === -90){ // Correção de X para Y
                        rotate_left_ringht = "rotateZ";
                        rotate_Y = rotate_Y * -1
                    }else{
                        if(rotateX === -270){ // Correção de X para Y
                            rotate_Y = rotate_Y * -1
                        }else{
                            if(rotateX === 90){ // Correção de X para Y
                                rotate_Y = rotate_Y * -1
                            }else{
                                if(rotateX === 270){ // Correção de X para Y
                                    rotate_Y = rotate_Y * -1
                                }
                            }
                        }
                    }
                }else{
                    if(rotateZ === -90){
                        rotate_up_down = "rotateY"
                        rotate_left_ringht = "rotateX"
                        rotate_Y = rotate_Y * -1
                        if(rotateX === 90){ // Correção de X para Y
                            rotate_Y = rotate_Y * -1
                        }else{
                            if(rotateX === 270){
                                rotate_Y = rotate_Y * -1
                            }else{
                                if(rotateX === -90){ // Correção de X para Y
                                    rotate_Y = rotate_Y * -1
                                }else{
                                    if(rotateX === -270){
                                        rotate_Y = rotate_Y * -1
                                    }
                                }
                            }
                        }
                    }else{
                        if(rotateZ === 180){
                            rotate_up_down = "rotateX"
                            rotate_left_ringht = "rotateY"
                            rotate_X = rotate_X * -1
                            rotate_Y = rotate_Y * -1
                            
                        }else{
                            if(rotateZ === -180){
                                rotate_up_down = "rotateX"
                                rotate_left_ringht = "rotateY"
                                rotate_X = rotate_X * -1
                                rotate_Y = rotate_Y * -1
                            }else{
                                if(rotateZ === 270){
                                    rotate_up_down = "rotateY"
                                    rotate_left_ringht = "rotateX"
                                    rotate_Y = rotate_Y * -1
                                    if(rotateX === 90){ // Correção de X para Y
                                        rotate_Y = rotate_Y * -1
                                    }else{
                                        if(rotateX === 270){ // Correção de X para Y
                                           rotate_Y = rotate_Y * -1
                                        }else{
                                            if(rotateX === -90){ // Correção de X para Y
                                                rotate_Y = rotate_Y * -1
                                            }else{
                                                if(rotateX === -270){
                                                    rotate_Y = rotate_Y * -1
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if(rotateZ === -270){
                                        rotate_up_down = "rotateY"
                                        rotate_left_ringht = "rotateX"
                                        rotate_X = rotate_X * -1
                                        if(rotateX === -90){ // Correção de X para Y
                                            rotate_Y = rotate_Y * -1
                                        }else{
                                            if(rotateX === -270){
                                                rotate_Y = rotate_Y * -1
                                            }else{
                                                if(rotateX === 90){
                                                    rotate_Y = rotate_Y * -1
                                                }else{
                                                    if(rotateX === 270){
                                                        rotate_Y = rotate_Y * -1
                                                    }
                                                } 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 
            //----------------------- Correção da rotação para diferentes graus de Z -------------------------------------
           
            //----------------------- Correção da rotação para diferentes graus de X -------------------------------------
            if(rotateX === 90){
                rotate_left_ringht = "rotateZ";
                rotate_Y = rotate_Y * -1
                if(rotateZ === 90){
                    rotate_left_ringht = "rotateX";
                }else{
                    if(rotateZ === -90){
                        rotate_left_ringht = "rotateX";
                    }
                } if(rotateZ === 270){
                    rotate_left_ringht = "rotateX";
                }
            }else{
                if(rotateX === -90){
                    rotate_left_ringht = "rotateZ";
                    if(rotateZ === 90){
                        rotate_Y = rotate_Y * -1
                        rotate_left_ringht = "rotateX";
                    }else{
                        if(rotateZ === -90){
                            rotate_Y = rotate_Y * -1
                            rotate_left_ringht = "rotateX";
                        }
                    }
                }else{
                    if(rotateX === 180){
                        rotate_Y = rotate_Y * -1
                        if(rotateZ === 90){
                            rotate_Y = rotate_Y * -1
                        }if(rotateZ === -90){
                            rotate_Y = rotate_Y * -1
                        }
                    }else{
                        if(rotateX === -180){
                            rotate_Y = rotate_Y * -1
                            if(rotateZ === 90){
                                rotate_Y = rotate_Y * -1
                            }if(rotateZ === -90){
                                rotate_Y = rotate_Y * -1
                            }
                        }else{
                            if(rotateX === 270){
                                rotate_left_ringht = "rotateZ";
                                if(rotateZ === 90){
                                    rotate_Y = rotate_Y * -1
                                    rotate_left_ringht = "rotateX";
                                }else{
                                    if(rotateZ === -90){
                                        rotate_Y = rotate_Y * -1
                                        rotate_left_ringht = "rotateX";
                                    }
                                }
                            }else{
                                if(rotateX === -270){
                                    rotate_left_ringht = "rotateZ";
                                    rotate_Y = rotate_Y * -1
                                    if(rotateZ === 90){
                                        rotate_left_ringht = "rotateX";
                                    }else{
                                        if(rotateZ === -90){
                                            rotate_left_ringht = "rotateX";
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }

            

            //----------------------- Correção da rotação para diferentes graus de X -------------------------------------
            
            //----------------------- CONTROLE DE GIRO -------------------------------------------------------------------
            //----------------------- Cada comando dado movimenta um container na tela -----------------------------------
            //----------------------- Há três container x, y e z, um emcapsulado o outro ---------------------------------
            //----------------------- Y está dentro de X que está dentro de Z --------------------------------------------
            if(eixo === "Z"){ 
                
                if(rotateZ === -360 || rotateZ === 360){
                    rotateZ = 0
                }
                rotateZ = rotateZ + rotate;
                
                let cuboZ = document.querySelectorAll(".cuboZ")
                cuboZ.forEach(element_cuboZ =>{
                    element_cuboZ.style.transform = "rotateZ("+rotateZ+"deg)";
                    console.log(`${eixo} - ${rotateZ}`)                    
                });
            }else{
                if(eixo === "Y"){
                    if(rotateY === -360 || rotateY === 360){
                        rotateY = 0;
                    }
                    rotateY = rotateY + rotate_Y;
                    
                    let cuboY = document.querySelectorAll(".cuboY")
                    cuboY.forEach(element_cuboY =>{
                        element_cuboY.style.transform = `${rotate_left_ringht}(${rotateY}deg)`;
                        console.log(`Y - ${rotateY}`)
                    });
                }else{
                    if(eixo === "X"){
                        if(rotateX === -360 || rotateX === 360){
                            rotateX = 0;
                        }
                        rotateX = rotateX + rotate_X;
            
                        let cuboX = document.querySelectorAll(".cuboX")
                        cuboX.forEach(element_cuboX =>{
                            element_cuboX.style.transform = `${rotate_up_down}(${rotateX}deg)`;
                            console.log(`X - ${rotateX}`)
                        });
                    }
                }
            }
            return rotateZ
            //console.log(`Z - ${rotateZ}`)
            //console.log(`X - ${rotateX}`)
            //console.log(`Y - ${rotateY}`)
        }
        
    
});
