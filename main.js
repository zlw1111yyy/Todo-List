new Vue ({
    el:'#tasklist',
    data:{
        title:'To Do List',
        task:'',
        tasks:[
            {name:'吃饭'},
            {name:'睡觉'},
            {name:'打豆豆'},
        ]
    },
    methods:{
        newItem: function() {
            if(this.task.length === 0){
                return
            }
            if (this.editedTask != null) {
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }else{
                this.tasks.push({
                    name:this.task,
                });
            }
            this.task = "";
        },
        delItem: function(index) {
            this.tasks.splice(index,1);
        },
        editItem: function(index) {
            this.task = this.tasks[index].name;
            this.editedTask = index;
        },
    }
})