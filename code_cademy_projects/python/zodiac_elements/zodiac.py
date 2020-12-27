zodiac_elements = {"water": ["Cancer", "Scorpio", "Pisces"], 
                   "fire": ["Aries", "Leo", "Sagittarius"], 
                   "earth": ["Taurus", "Virgo", "Capricorn"], 
                   "air":["Gemini", "Libra", "Aquarius"]}

def welcome_message():
  print("#######################################################\n")
  print("Welcome to Zodiac element finder")
  print("The steps are simple; enter the element of which you wish to view and the console will output the results")
  print("Valid inputs: Elements[\"fire\", \"water\", \"earth\", \"air\"] Exit[\"exit\"]\n")
  print("#######################################################\n")

def user_select():
  return input("Enter Element: ")
  
def zodiac_element():
  element = input("Enter Element: ")
  if element != "exit":
    print(zodiac_elements[element])
    zodiac_element()
  else:
    exit(0)

welcome_message()
zodiac_element()
