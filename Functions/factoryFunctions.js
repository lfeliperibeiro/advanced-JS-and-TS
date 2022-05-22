function createFactory(name, lastName, subject){
  return {
    name,
    lastName,
    get fullName(){
      return `${this.name} ${this.lastName}`
    },

    set fullName(value){
      value = value.split(' ');
      this.name = value.shift();
      this.lastName = value.join(' ');
    },

    get subject(){
      return `${name} ${lastName} teaches ${subject}`
    },
  }
}

const fn = createFactory('John', 'Doe', 'Match' );
fn.fullName = 'John Doe';

console.log(fn.fullName);
console.log(fn.subject);

