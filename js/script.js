// DEBUG -- Boolean
let debug = false;

// Function to Get API Data
async function loadDog() {
    // Fetch Endpoints + Parameters
    const fetchInput = "https://dog.ceo/api/breeds/image/random";

    // Fetch API
    const apiResponse = await fetch(fetchInput);

    // DEBUG -- Log API Response
    if (debug) {console.log(apiResponse);}

    /**
     * Checking API Health 
    */
    if (apiResponse.status == 200 && apiResponse.ok == true) {
        // Store Data
        const data = await apiResponse.json();

        // DEBUG -- Log Data
        if (debug) {console.log(data);}

        // Set Placeholder Image to Doggo
        const dogImage = document.getElementById("dogImage");

        dogImage.src = data.message;
    }
    else {
        // Log Issue & Alert User
        console.log("Unhealthy Response from API");
        alert("Unhealthy Response from API");
    }
}

// Set Up New Dog Button
function setRefreshBtn() {
    const refreshBtn = document.getElementById("refreshBtn");
    const refreshContainer = document.getElementsByClassName("refresh-container");

    refreshBtn.addEventListener("mouseenter", setGreen);

    refreshBtn.addEventListener("mouseleave", setBlack);

    refreshBtn.addEventListener("click", () => {
        refreshBtn.removeEventListener("mouseleave", setBlack);
        refreshBtn.classList.add("fa-spin");
        refreshBtn.style.color = "green";
        loadDog();
        setTimeout(() => {
            refreshBtn.classList.remove("fa-spin");
            refreshBtn.style.color = "black";
            refreshBtn.addEventListener("mouseleave", setBlack);
        }, 1000);
    });
}

function setBlack() {
    const refreshBtn = document.getElementById("refreshBtn");
    refreshBtn.style.color = "black";
}

function setGreen() {
    const refreshBtn = document.getElementById("refreshBtn");
    refreshBtn.style.color = "green";
}

function init(){
    // Load Initial Dog Image
    loadDog();
    
    // Set-Up Button for New Dog Image
    setRefreshBtn();

    // DEBUG Get Sources <a> Tags
    const aTags = document.getElementsByClassName("sourcesLink");
    console.log(aTags);
}
init();