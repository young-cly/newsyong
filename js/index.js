    // 放大镜效果
    (function(){
        // 获取元素
        var zoomBox = document.querySelector('.zoom-box')//放大镜外面包裹的盒子
        var smallImage = document.querySelector('.small-image')//小图包裹的盒子
        var mask = document.querySelector('.mask-box')//半透明遮罩
        var largeImage = document.querySelector('.large-image')//大图包裹的盒子
        smallImage.onmouseenter = function(){
            mask.style.display = 'block'
            largeImage.style.display = 'block'
            mask.style.cursor = 'move'
        }
        smallImage.onmousemove = function(event){
            var left = event.clientX - smallImage.getBoundingClientRect().left - mask.offsetWidth / 2
            var top = event.clientY - smallImage.getBoundingClientRect().top -  mask.offsetHeight / 2
            if(left < 0 ){
                left = 0
            }else if(left > smallImage.offsetWidth - mask.offsetWidth ){
                left = smallImage.offsetWidth - mask.offsetWidth
            }
            if(top < 0 ){
                top = 0
            }else if(top > smallImage.offsetHeight - mask.offsetHeight ){
                top = smallImage.offsetHeight - mask.offsetHeight
            }
            // 遮罩的位置
            mask.style.top = top + 'px'
            mask.style.left = left + 'px'
            // 大图的位置

            largeImage.scrollLeft = left * 2 
            largeImage.scrollTop =  top * 2 

        }
        smallImage.onmouseleave = function(){
            mask.style.display = 'none'
            largeImage.style.display = 'none'
        }
    })();
    // 商品预览缩略图
    (function(){
        var preBtn = document.querySelector('#thumbBox .thumb-pre')
        var nextBtn = document.querySelector('#thumbBox .thumb-next')
        var thumbWrapper = document.querySelector('#thumbBox .thumb-wrapper')
        var smallImage = document.querySelector('.small-image img')//小图包裹的元素
        var largeImage = document.querySelector('.large-image img')//大图包裹的元素
        // 根据数创建缩略图数据
        goodData.imgsrc.forEach(function(imgItem,index){
            var imgBox = new Image()
           imgBox.src = imgItem.s
           imgBox.dataset.index = index
           thumbWrapper.appendChild(imgBox)

        })
        // 点击缩略图自动会更换对应的大图和小图
        thumbWrapper.onclick = function(event){
            if(event.target.nodeName === 'IMG'){
                console.log(event.target.dataset.index)
                smallImage.src = goodData.imgsrc[event.target.dataset.index].s
                largeImage.src = goodData.imgsrc[event.target.dataset.index].b
            }
        }
        // 缩略图单个图片所占的位置
        var imgItemWidth = thumbWrapper.firstElementChild.offsetWidth + parseInt(getStyle(thumbWrapper.firstElementChild,'marginRight'))
        // 点击上一个箭头
        preBtn.time = 0
        preBtn.onclick = function(event){
             // 事件节流
            if(event.timeStamp - preBtn.time <= 400 ){
                return
            }
            preBtn.time = event.timeStamp
            var left = thumbWrapper.offsetLeft + imgItemWidth*2
            if(left > 5){
                left = 5
            }
            thumbWrapper.style.left = left + 'px'
        }
        // 记录上次触发的时间
        nextBtn.time = 0
        // 点击下一个箭头
        nextBtn.onclick = function(event){
            // 事件节流
            if(event.timeStamp - nextBtn.time <= 400 ){
                return
            }
            nextBtn.time = event.timeStamp
            var left = thumbWrapper.offsetLeft - imgItemWidth * 2
            if (left < imgItemWidth*5 - imgItemWidth*goodData.imgsrc.length + 10){
               left = imgItemWidth*5 - imgItemWidth*goodData.imgsrc.length + 10
            }
            thumbWrapper.style.left = left + 'px'
        }

    })();
    // 侧边栏选项卡切换
    (function(){
        // 获取元素
        var tabNavItems = document.querySelectorAll('#sideBarTab .tab-nav-item')
        var tabPanelItems = document.querySelectorAll('#sideBarTab .tab-panel-item')
        // 调用函数实现选项卡
        tab(tabNavItems,tabPanelItems)
    })();
    // 商品详情的选项卡
    (function(){
        tab(document.querySelectorAll('#introTab .tab-nav-item'),document.querySelectorAll('#introTab .tab-panel-item'))
    })();
    (function(){})    // 