window.onload = function()
{
    let visitas = localStorage.getItem("views");

    if(visitas == null)
    {
        visitas = 0;
    }else{
        visitas++;
    }

    localStorage.setItem("views", visitas);

    document.getElementById("views").innerText = visitas;


}