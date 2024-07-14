# clothing_recommendation.py

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

# Sample data
weather_data = pd.DataFrame({
    'temperature': [30, 20, 10, 0, -10],
    'humidity': [30, 40, 50, 60, 70]
})

clothing_data = pd.DataFrame({
    'type': ['Dress', 'Raincoat', 'Jacket', 'Coat', 'Heavy Coat'],
    'warmth_level': [1, 2, 3, 4, 5]
})

# Merging datasets (example)
data = weather_data.join(clothing_data)
X = data[['temperature', 'humidity']]
y = data['warmth_level']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model Training
model = RandomForestRegressor()
model.fit(X_train, y_train)

# Model Evaluation
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
print(f'Mean Absolute Error: {mae}')

# Making Predictions
new_weather_data = pd.DataFrame({'temperature': [25], 'humidity': [45]})
predicted_warmth_level = model.predict(new_weather_data)
print(f'Predicted Warmth Level: {predicted_warmth_level}')
