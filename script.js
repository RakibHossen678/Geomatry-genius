// triangle
// document.title='play with dom'

function calculateTriangleArea(){
    //get triangle base value 

    const tribase=document.getElementById('triangle_base');
    const trivalue=parseInt(tribase.value);

    //get triangle height value 

    const triheight=document.getElementById('triangle_height');
    const trivalueh=parseInt(triheight.value);


    // calculate triangle Area

    const triArea=0.5*trivalue*trivalueh
    console.log(triArea);

    document.getElementById('calvalue').innerText= 'Area of Triangle is : ' + triArea;
    
    
    
}


//Rectengle

function calculateRectangleleArea(){
    const recWidth=document.getElementById('rectangle_width');
    const recvalue=parseInt(recWidth.value);

    const reclength=document.getElementById('rectangle_length');
    const recvaluee=parseInt(reclength.value);

    const recArea=recvalue * recvaluee;
    

    document.getElementById('calvalue').innerText= 'Area of Retangle is : '  +  recArea;

}

//Parallelogram

function calculteParallelogramArea(){
    const parallelBase=document.getElementById('parllel_base')
    const paraValue=parseInt(parallelBase.value);

    const parallelBaseheight=document.getElementById('parllel_height')
    const parallelValue=parseInt(parallelBase.value);

    const parallelArea=paraValue * parallelValue;

    document.getElementById('calvalue').innerText= 'Area of parallelogram is : '  +  parallelArea;

}


//Rhombus

function calculateRhombusArea(){
    //get triangle base value 

    const Rhombusd1=document.getElementById('Rhombus_d1');
    const rohomvalue=parseInt(Rhombusd1.value);

    //get triangle height value 

    const Rhombusd2=document.getElementById('Rhombus_d2');
    const Romvalueh=parseInt(Rhombusd2.value);


    // calculate triangle Area

    const RhombusArea=0.5*rohomvalue*Romvalueh
    console.log(RhombusArea);

    document.getElementById('calvalue').innerText= 'Area of Triangle is : ' + RhombusArea;
    
    
    
}

//Pentagon

function calculatePentagonArea(){
    

    const PentagonP=document.getElementById('Pentagon_p');
    const Pentagonvalue=parseInt(PentagonP.value);

  

    const PentagonBase=document.getElementById('Pentagon_base');
    const Pentagonvalueh=parseInt(PentagonBase.value);



    const PentagonArea=0.5*Pentagonvalue*Pentagonvalueh
    console.log(PentagonArea);

    document.getElementById('calvalue').innerText= 'Area of Triangle is : ' + PentagonArea;
    
    
    
}