destinations = ["Paris, France", "Shanghai, China", "Los Angeles, USA", "São Paulo, Brazil", "Cairo, Egypt"]

# Create test traveler data list
test_traveler = ['Erin Wilkes', 'Shanghai, China', ['historical site', 'art']]

def get_destination_index(destination=""):
  destination_index = destinations.index(destination)
  return destination_index

#function test
# print(get_destination_index("Paris, France"))

def get_traveler_location(traveler):
  traveler_destination = traveler[1]
