<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plant Care Guide</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <header>
        <h1>Plant Care Guide</h1>
        <p>Dynamic Care Instructions & Plant Database</p>
    </header>

    <div class="controls">
        <div class="search-box">
            <input type="text" id="searchInput" placeholder="Search plants by name...">
        </div>
        <div class="select-box">
            <select id="plantSelect">
                <option value="">-- Select a Plant --</option>
            </select>
        </div>
    </div>

    <div class="plant-display" id="plantDisplay">
        <!-- Dynamic content injected via JavaScript -->
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
