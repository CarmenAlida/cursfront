var vm = new Vue ({
    el: '#app',
    data(){
        return {
        detailsAreVisible: false,
        friends: [
            {
                id: "Manuel",
                name: "Manuel Lorenz",
                phone: "0123-456789-1",
                email: "manuel@localhost.com",
            },
            {
                id: "Julie",
                name: "Julie Jones",
                phone: "456-478978-1",
                email: "julie@localhost.com",            
            },
           
        ]    
        
    }
}
});
    