$(function(){

    
    //初始化代码
    $('#itcast').fullpage({
        navigation:true,
        sectionsColor: ['#00bfff','#9acd32','#ffa500','#008000','#87ceeb'],
        // 滚出来调用的函数
        afterLoad:function(a,index){

            // 不管是哪一屏滚出来，都让第一屏和第二屏添加animation
            // 那么也就意味着，不管是哪一屏滚出来，第一和第二的动画立刻开始了
            // $('.section1').addClass('animation');
            // $('.section2').addClass('animation');

            // 哪一屏滚出来才给哪一屏加animation
            // if(index == 1){
            //     $('.section1').addClass('animation');
            // }else if(index == 2){
            //     $('.section2').addClass('animation');
            // }else if()

            /*
                $('.section')找到所有屏，是一个jQuery数组，eq(0)代表找到第一屏，eq(1)代表找到第二屏以此类推
                如果我要找到被滚出来的那一屏，有index就是被滚出来的页码数
                假如滚出来的是 第一屏：index:1  eq(0)
                假如滚出来的是 第二屏：index:2  eq(1)
                其实eq里的下标就是index-1
                所以eq(index-1)就能找到当前被滚出来的那一屏！
                只要就能实现哪一屏滚出来，才给哪一屏加animation
            */
            $('.section').eq(index-1).addClass('animation').siblings().removeClass('animation');
        }
    });

})