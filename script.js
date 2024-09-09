document.addEventListener("DOMContentLoaded",function()
{
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit',function(e)
    {
        e.preventDefault();
        const name = document.getElementById('name').ariaValueMax;
        const email = document.getElementById('email').ariaValueMax;
        const message = document.getElementById('message').ariaValueMax;

        if (name&&email&&message)
        {
            alert("Asante kwa kutuma ujumbe wako,"+name+"!");
            contactForm.reset();
        }
        else 
        {
            alert("Tafadhali jaza sehemu zote za fomu.");
        }
    });
});