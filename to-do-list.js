const input=[];



function addtodo()
{

    const inputElement = document.querySelector('.js-input');
    let inputText=inputElement.value;

    const dateElement = document.querySelector('.js-date');
    let dateText=dateElement.value;
   

    input.push({
        name:inputText,
        date:dateText
    });
    inputElement.value='';
    dateElement.value='';
    
    renderText();

}

function renderText(){
    let fulltext='';
    for(let i=0; i<input.length; i++)
    {
        const todoObject=input[i];
        //let name=todoObject.name;
        //let date=todoObject.date;
        const {name,date}=todoObject;
        const para=
        `   <div>  ${name} </div>
            <div>  ${date} </div> 
           
            <button class="delete-button  js-delete">Delete</button> 
            
        `;
        fulltext=fulltext+para;
       
    
    }
    document.querySelector('.js-para').innerHTML=fulltext;


    //eventlistener for delete button
    document.querySelectorAll('.js-delete').forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
         input.splice(index,1);
         renderText();
        });
     });

}


    



function enterkey(event){
    if(event.key==='Enter'){
        addtodo();
    }
}


//eventlistener for add button
document.querySelector('.js-add').addEventListener('click',()=>{
    addtodo()
});
