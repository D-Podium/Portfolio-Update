document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'path_to_your_cv.pdf' with the actual path to your CV file
    var cvUrl = '';

    // Create a link element
    var link = document.createElement('a');
    link.href = cvUrl;
    
    // Set the download attribute to force download
    link.setAttribute('download', 'Resume.pdf');

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to initiate the download
    link.click();

    // Clean up: remove the link from the DOM
    document.body.removeChild(link);
});



//-------------------- SLIDE CARD --------------------//
let imageDiv = document.querySelectorAll(".image-div");

imageDiv.forEach((elem)=>{
    elem.addEventListener("click", ()=>{
        imageDiv.forEach((rev)=>{
            rev.classList.remove("active")
        })


        elem.classList.add("active");
    })
})