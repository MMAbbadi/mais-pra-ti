class Task {
    constructor(year, month, day, type, description) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.type = type;
        this.description = description;
    }
  
    // Método para validar se todos os campos da tarefa foram preenchidos corretamente
    validateData() {
        for (let key in this) {
            if (this[key] === undefined || this[key] === "") {
                console.error(`The field ${key} is required.`);
                return false; // Retorna falso se algum campo estiver vazio ou indefinido
            }
        }
        return true; // Retorna verdadeiro se todos os campos forem válidos
    }
  }
  
  class Database {
      constructor() {
          this.initDatabase()
      }
  
      initDatabase() {
          const id = localStorage.getItem('id')
      
          if (id === null) {
              localStorage.setItem('id', '0')
          }
  
          
      }
    
      loadTasks() {
          
      }
      createTask(task) {
          let id = this.getNextId()
          localStorage.setItem(id, JSON.stringify(task))
          localStorage.setItem('id', id.toString())
      }
  
      removeTask(id) {
          localStorage.removeItem(id)
      }
  
      searchTasks(task) {
       
      }
      
      getNextId() {
          const currentId = localStorage.getItem('id');
          return parseInt(currentId) + 1;
      }
       
  }
  
  const database = new Database()
  
  // Função para registrar uma nova tarefa
  function registerTask() {
      let year        = document.getElementById('year').value
      let month       = document.getElementById('month').value
      let day         = document.getElementById('day').value
      let type        = document.getElementById('type').value
      let description = document.getElementById('description').value
  
      let task = new Task (year, month, day, type, description)
  
      if(task.validateData()){
          Database.createTask(task)
          alert('Tarefa Criada com Sucesso!')
      } else {
          alert('Preencha todos os campos!')
      }
  }
  
  