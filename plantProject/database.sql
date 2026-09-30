CREATE DATABASE IF NOT EXISTS plant_db;
USE plant_db;

CREATE TABLE IF NOT EXISTS plants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    scientific_name VARCHAR(100),
    image_url VARCHAR(255),
    description TEXT,
    sunlight VARCHAR(100),
    soil VARCHAR(100),
    water VARCHAR(100),
    temperature VARCHAR(100)
);

-- Insert initial sample data including Aloe Vera requirements
INSERT INTO plants (name, scientific_name, image_url, description, sunlight, soil, water, temperature) VALUES
('Aloe Vera', 'Aloe barbadensis miller', 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80', 'Aloe Vera is a succulent plant species known for its agricultural and medicinal uses.', 'Bright sunlight', 'Well-drained soil', 'Once every 2-3 weeks', '15-30°C'),
('Snake Plant', 'Dracaena trifasciata', 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80', 'An easy-care indoor plant known for its air-purifying qualities and upright leaves.', 'Indirect sunlight', 'Free-draining potting mix', 'Every 2-8 weeks', '21-32°C'),
('Peace Lily', 'Spathiphyllum', 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80', 'A popular indoor houseplant with elegant white flowers that thrives in shaded areas.', 'Medium indirect light', 'Moist, organic-rich soil', 'Once a week', '18-26°C');
