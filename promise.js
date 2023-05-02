
1
2
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
user = [{post:"post1",tim:time}]

function updateLastUserActivityTime(){
    var time = 0
    return new Promise((res,rej)=>{
        today = new Date();
            
            time+=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        res(time)

        
    })
}

function createPost(post){
    return new Promise((res,rev)=>{
        setTimeout(()=>{
            user.post = post


        },1000)


    })
}