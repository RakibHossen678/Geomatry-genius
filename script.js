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
    
    
    
}


//Rectengle
function calculateRectangleleArea(){
    const recWidth=document.getElementById('rectangle_width');
    const recvalue=parseInt(recWidth.value);

    const reclength=document.getElementById('rectangle_length');
    const recvaluee=parseInt(recWidth.value);

    const recArea=recvalue*recvaluee;
    console.log(recArea);

}