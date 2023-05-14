const search = () => {
    var contagem = 0;
    document.getElementById("texto-inicial").style.display = "none";
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname = document.getElementsByTagName("h5")
    
    
    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h5')[0];
        

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "block";
                contagem++;
                document.getElementById("resultadoNegativo").style.display = "";
                document.getElementById("texto-resultado").style.display = "block";
            }
            else {
                product[i].style.display = "";
            }

            if (contagem == 0) {
                document.getElementById("resultadoNegativo").style.display = "block";
                document.getElementById("texto-resultado").style.display = "none";
            }
        }
    }

}


