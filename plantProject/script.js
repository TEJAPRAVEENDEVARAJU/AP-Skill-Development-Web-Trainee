document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const plantSelect = document.getElementById("plantSelect");
    const plantDisplay = document.getElementById("plantDisplay");

    // Fetch and populate options
    async function loadPlantOptions() {
        try {
            const response = await fetch("get_plants.php");
            const plants = await response.json();
            
            plantSelect.innerHTML = '<option value="">-- Select a Plant --</option>';
            plants.forEach(plant => {
                const option = document.createElement("option");
                option.value = plant.id;
                option.textContent = plant.name;
                plantSelect.appendChild(option);
            });

            if (plants.length > 0) {
                renderPlantDetails(plants[0]); // Display default plant
            }
        } catch (error) {
            console.error("Error loading plant list:", error);
        }
    }

    // Fetch plant details by ID or search term
    async function fetchPlantData(param, value) {
        try {
            const response = await fetch(`get_plants.php?${param}=${encodeURIComponent(value)}`);
            const plants = await response.json();

            if (plants.length > 0) {
                renderPlantDetails(plants[0]);
            } else {
                plantDisplay.innerHTML = `<p style="padding: 20px;">No plant found matching criteria.</p>`;
            }
        } catch (error) {
            console.error("Error fetching plant details:", error);
        }
    }

    // Render plant card dynamically
    function renderPlantDetails(plant) {
        plantDisplay.innerHTML = `
            <div class="plant-image-container">
                <img src="${plant.image_url}" alt="${plant.name}">
            </div>
            <div class="plant-details">
                <h2>${plant.name}</h2>
                <div class="scientific-name">${plant.scientific_name}</div>
                <p>${plant.description}</p>
                <div class="care-grid">
                    <div class="care-card">
                        <h4>Sunlight</h4>
                        <p>${plant.sunlight}</p>
                    </div>
                    <div class="care-card">
                        <h4>Soil</h4>
                        <p>${plant.soil}</p>
                    </div>
                    <div class="care-card">
                        <h4>Water</h4>
                        <p>${plant.water}</p>
                    </div>
                    <div class="care-card">
                        <h4>Temperature</h4>
                        <p>${plant.temperature}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Event listeners
    plantSelect.addEventListener("change", (e) => {
        if (e.target.value) {
            fetchPlantData("id", e.target.value);
        }
    });

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            fetchPlantData("search", query);
        } else {
            loadPlantOptions();
        }
    });

    loadPlantOptions();
});