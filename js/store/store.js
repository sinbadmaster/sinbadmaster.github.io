const store = new Vuex.Store({
    state:{
        loading:null
    },
    mutations:{
        setLoading(s,val){
            s.loading = val;
            console.log(s.loading);
        },
        clearLoading(s){
            s.loading = null;
        }
    }
})