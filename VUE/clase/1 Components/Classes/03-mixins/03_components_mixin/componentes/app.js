const app = new Vue({
    el: '#app',
    data: {
        courses: [
            {
                id: 1,
                title: 'Curso introductorio JavaScript',
                subtitle: 'Aprende lo básico en JS',
                description: 'En este curso explicaremos de la mano de los mejores profesores JS los principios básicos',
                type: 'course-js',
                price: 7
            },
            {
                id: 2,
                title: 'Curso avanzado JavaScript',
                subtitle: 'Aprende lo avanzado en JS',
                description: 'En este curso explicaremos de la mano de los mejores profesores JS los principios avanzados',
                type: 'course-js',
                price: 7
            },
            {
                id: 3,
                title: 'Curso introductorio Cascading Style Sheets',
                subtitle: 'Aprende lo básico en CSS',
                description: 'En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos',
                type: 'course-css',
                price: 7
            },
            {
                id: 4,
                title: 'Curso avanzado Cascading Style Sheets',
                subtitle: 'Aprende lo avanzado en CSS',
                description: 'En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos',
                type: 'course-css',
                price: 7
            } ,   
            {
                id: 5,
                title: 'Curso avanzado Cascading VUE 1',
                subtitle: ' DESARROLLO VUE',
                description: 'En este curso explicaremos de la mano de los mejores profesores vue los principios básicos',
                type: 'course-vue', 
                price: 7
            } 
                             
        ],
        cart: [],
    },
    methods: {
        addToCart: function (course) {
            this.cart.push(course)
        },
    },
})

