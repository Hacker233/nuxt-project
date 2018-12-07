export const state = () => ({
    person: [],
    personNew: ''
})

export const mutations = {
    getPerson: function (state,taker) {
        this.state.person.push(taker) 
    },
    getPersonNew: function (state,staker) {
        this.state.personNew = staker;
    }
}

export const actions = {
    setPersonNew({commit}){
        this.$axios.get('http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe')
        .then(response => {
            commit('getPersonNew',response.data.value.joke)
        })
        .catch ( error => {
            console.log(error);
        })
    }
}