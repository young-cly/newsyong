// 函数库

/**
 * 获取元素的计算属性
 * @param Elment ele 元素
 * @param String attr css属性名
 * @param String 计算属性值
 */
 function getStyle(ele, attr) {
    if (window.getComputedStyle) {
       return  getComputedStyle(ele)[attr];
    } else {
       return ele.currentStyle[attr];
    }  
}
/**
 * 选项卡
 * @params nodeList 选项卡导航按钮的集合
 * @params nodeList 选项卡导航内容的集合
 * 
 * 
 */

function tab(tabNavItems,tabPanelItems){
           tabNavItems.forEach(function(tabNavItem,index){
               tabNavItem.onclick = function(){
                   // 排它
                   for(var i = 0;i < tabNavItems.length;i++){
                       tabNavItems[i].classList.remove('active')
                       tabPanelItems[i].classList.remove('active')
                   }
                   // 添加active
                   this.classList.add('active')
                   tabPanelItems[index].classList.add('active')
               }
           })
}
