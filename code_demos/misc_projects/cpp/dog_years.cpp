#include <iostream>

int main() {

  int dog_name, dog_age;
  int early_years, later_years, human_years;

  // user-input for dogs name and age
  std::cout << "Enter your dog's name: ";
  std::cin >> dog_name;
  std::cout << "Enter your dog's age: ";
  std::cin >> dog_age;

  // The first two years of a dog's life count as 21 human years
  early_years = 21;

  // Each following year (2 years +) counts as 4 human years
  later_years = (dog_age - 2) * 4;

  // human equivalent of dog years
  human_years = early_years + later_years;

  std::cout << "My name is " << dog_name << " Ruff ruff! I am " << human_years << " years old in human years." << std::endl;

  return 0;
}
