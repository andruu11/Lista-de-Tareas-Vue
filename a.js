var app = new Vue({
    el: '.contenedor',
    data: {
        titulo: 'Lista de Tareas',
        tareas: [{
            tarea: 'Aprender Vue.js',
            estado: false
        }, {
            tarea: 'Aprender Laravel',
            estado: false
        }, {
            tarea: 'Aprender Firebase',
            estado: false
        }],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function() {
            var texto = this.nuevaTarea.trim();
            if (texto) {
                this.tareas.push({
                    tarea: texto,
                    estado: false
                })
            }
            this.nuevaTarea = '';
        },
        borrar: function(index) {
            this.tareas.splice(index, 1);
        }
    }

})