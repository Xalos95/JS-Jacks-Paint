function configureListeners() {
    var images = document.getElementsByTagName('img') 

    // a loop that adds opacity depending on the images length
     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners  to make them dim in opacity
        document.getElementById(images[i].id).addEventListener('mouseover',addOpacity,false)
        document.getElementById(images[i].id).addEventListener('mouseout',removeOpacity,false)    
    } 
}

function addOpacity(event) {
    // add appropriate CSS class to dim the colors tabs
    if(!this.classList.contains('dim'))
    {
       this.classList.add('dim');
    }
    getProductInfo(event.target.id);     
}

//this function initiates the apperance of the color price and name as the event of moving the mouse over the paints options
function removeOpacity(event) {
     if(this.classList.contains('dim'))
     {
        this.classList.remove('dim');
     }

     //these fetch the correct price and name from the getProductInfo function
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

//when this fuction is called it returns the correct price and color depending on where the mouse is hovering 
function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = '$14.99';
            colorName = 'Lime Green' 
            updatePrice(price, colorName); 
            break;           
        case 'pn2':
            price = '$11.14';
            colorName = 'Medium Brown';   
            updatePrice(price, colorName); 
            break;            
        case 'pn3':
            price = '$22.99';
            colorName = 'Royal Blue'; 
            updatePrice(price, colorName);
            break;   
        case 'pn4':
            price = '$13.42';
            colorName = 'Solid Red'; 
            updatePrice(price, colorName);
            break;   
        case 'pn5':
            price = '$21.98';
            colorName = 'Solid White';    
            updatePrice(price, colorName);  
            break;   
        case 'pn6':
            price = '$4.99';
            colorName = 'Solid Black';    
            updatePrice(price, colorName);   
            break;   
        case 'pn7':
            price = '$8.22';
            colorName = 'Solid Cyan'; 
            updatePrice(price, colorName);
            break;   
        case 'pn8':
            price = '$11.99';
            colorName = 'Solid Purple'  
            updatePrice(price, colorName);
            break;   
        case 'pn9':
            price = '$14.99';
            colorName = 'Solid Yellow';  
            updatePrice(price, colorName);
            break;   
          default:              
    }
    //
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name')
        color.textContent = colorName; 
    }
    
}
