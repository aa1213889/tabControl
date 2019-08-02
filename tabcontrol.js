class TabControl {
    constructor(options) {
        let _this = $(options.el);
        let _this_item = _this.find('.tab_title_item');
        let _this_page = _this.find('.tab_content_page');
        let defaults = {
            itemShow: 1,  //
            itemEvent: 'click',  //item切换方式 有两种：click mouseover
            changeAnimation: 'default', //切换动画 有四种选项： default horizontal vertical opacity
            autoPlay: false   //是否轮播
        };
        
        options = $.extend(defaults, options);

        function inital() {
            
        }

    }
}