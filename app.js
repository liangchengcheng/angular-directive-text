angular.module('app',[])
    .directive('hello',function(){
        return{
            //A代表属性
            //E代表template
            //c代表类名
            restrict:'E',
            replace:true,//就是替换掉我们自定义的directive的标签
            template:'<div> hello lcc</div>>',
            link:function(){
                alert("我在这里");
            }
        }
    })
    .directive('jike',function(){
        return{
            restrict:'C',
            link:function(){
                alert("我是抽抽");
            }
        }
    })

