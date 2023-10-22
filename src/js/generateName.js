const generateRandom = () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Agify API key


    // Function to fetch and display age prediction
    function predictAge() {

        // Get name from input
        const name = document.getElementById("nameInput").value;
      
        // API url
        const apiUrl = `https://api.agify.io?name=${name}&key=${apiKey}`;
      
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
      
            // Insert name and age
            document.getElementById("nameSpan").innerText = name;  
            document.getElementById("ageSpan").innerText = data.age;
      
          })
          .catch(error => console.error(error));
      
      }

    // Event listener for the button click
    document.getElementById("generateButton").addEventListener("click", predictAge);
};

export default generateRandom;