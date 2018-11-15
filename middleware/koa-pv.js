// function pv(ctx){
//     global.console.log(ctx.path)
// }

// module.export=function(){
//     return async function(ctx,next){
//        pv(ctx)
//        await next()
//     }
// }



function pv(ctx){
    global.console.log('pv',ctx.path)
}

module.exports = function() {
    return async function (ctx,next){
        pv(ctx)
        await next()
    }
}