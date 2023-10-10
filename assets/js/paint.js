function configureListeners() {
    let images = // select img elements  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = '$14.99';
            colorName = 'Lime Green' 
            updatePrice(price, color); 
            break;           
        case 'pn2':
            price = '$11.14';
            colorName = 'Medium Brown';    
            break;            
        case 'pn3':
            price = '$22.99';
            colorName = 'Royal Blue'; 
            break;   
        case 'pn4':
            price = '$13.42';
            colorName = 'Solid Red'; 
            break;   
        case 'pn5':
            price = '$21.98';
            colorName = 'Solid White';      
            break;   
        case 'pn6':
            price = '$4.99';
            colorName = 'Solid Black';       
            break;   
        case 'pn7':
            price = '$8.22';
            colorName = 'Solid Cyan'; 
            break;   
        case 'pn8':
            price = '$11.99';
            colorName = 'Solid Purple'  
            break;   
        case 'pn9':
            price = '$14.99';
            colorName = 'Solid Yellow';  
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = 
        // display price
        
        let color = // select element with corresponding id
        //display color name
    }
    
}
