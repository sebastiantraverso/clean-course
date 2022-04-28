(() => {

  type Gender = 'M' | 'F'

  class Person {
    constructor(
      public name: string, 
      public gender: Gender, 
      public birthdate: Date
    ){}
  }

  const newPerson = new Person('Sebastian', 'M', new Date('1978-02-02'))
  console.log({ newPerson })

})();