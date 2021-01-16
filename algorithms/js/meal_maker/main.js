const menu = {
    _courses = {
      appetizers: [],
      mains: [],
      desserts: [],
      get get_appetizers() {
  
      },
      set set_appetizers(appetizerIn) {
  
      },
      get get_mains() {
  
      },
      set set_mains(mainsIn) {
  
      },
      get get_desserts() {
  
      },
      set set_desserts(dessertsIn) {
  
      },
      get courses() {
        return {
          appetizers: this.get_appetizers,
          mains: this.get_mains,
          desserts: this.get_desserts
        }
      },
    },
    addDishtoCourse(courseName, dishName, dishPrice) {
      const dish = {
        name,
        price
      };
      this._courses[courseName].push(dish);
    }
  };