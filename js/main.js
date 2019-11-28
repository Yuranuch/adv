$(document).ready(function(){
    $('.backgroundTransition').backgroundTransition({
        backgrounds:[
            { src: 'http://winallos.com/uploads/posts/2014-12/1417410095_fon-priroda-shirokoformatnye-nebo.jpg' },
            { src: 'https://w-dog.ru/wallpapers/10/19/346843697827766/priroda-pirs-most-re-reka-voda-zakat-vecher-krasivo-fon-oboi-shirokoformatnye-polnoekrannye-shirokoekrannye.jpg' },
            { src: 'https://images7.alphacoders.com/880/880818.jpg' }
        ],
        transitionDelay: 10,
        animationSpeed: 500
    });
});


!function(e,a,i,n){var o=function(a,i){this.elem=a,this.$elem=e(a),this.options=i,self=this};o.prototype={defaults:{classNameBottomImage:"image-bottom",classNameTopImage:"image-top",idNameDownloadImage:"image-download",backgrounds:[],imageKey:1,transitionDelay:10,animationSpeed:1e3},init:function(){return this.config=e.extend({},this.defaults,this.options),this.config.backgrounds.length>=2?(this.prepareMarkup(),this.loadNext(),this):(console.warn("BackgroundTransition requires at least 2 background images."),!1)},prepareMarkup:function(){var a=e("<div/>").addClass(this.config.classNameBottomImage+" initial").css("background-image","url("+this.config.backgrounds[0].src+")"),i=e("<div/>").addClass(this.config.classNameTopImage).css("display","none");e(this.elem).prepend(a,i).css("background-image","none")},loadNext:function(){this.config.imageKey==this.config.backgrounds.length&&(this.config.imageKey=0);var a=e.Deferred();e("<img/>").attr("id",this.config.idNameDownloadImage).load(function(){a.resolve()}).attr("src",this.config.backgrounds[this.config.imageKey].src).prependTo("body .backgroundTransition"),a.done(function(){setTimeout(self.replaceImage,1e3*self.config.transitionDelay)})},replaceImage:function(){var a=e("#"+self.config.idNameDownloadImage);e("#"+self.config.idNameDownloadImage).remove(),e("."+self.config.classNameTopImage).css("background-image","url("+a.attr("src")+")"),e("."+self.config.classNameTopImage).fadeIn(self.config.animationSpeed,"swing",function(){e("."+self.config.classNameBottomImage).css("background-image","url("+a.attr("src")+")"),e(this).hide(),self.config.imageKey++,self.loadNext()})}},o.defaults=o.prototype.defaults,e.fn.backgroundTransition=function(e){return this.each(function(){new o(this,e).init()})}}(jQuery,window,document);

$(document).ready(function(){

    $(function (){
        // $("#back-top").hide();

        $(window).scroll(function (){
            if ($(this).scrollTop() > 500){
                $("#back-top").fadeIn();
            } else{
                $("#back-top").fadeOut();
            }
        });

        $("#back-top a").click(function (){
            $("body,html").animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });
});


function menu_show(blockId) {
    var par = document.getElementsByClassName('form__nav');
    if ($(blockId).css('display') == 'none') {
        $(blockId).animate({width: 'show'}, 500);
        par[0].classList.add("active")
    }
}
function menu_hide(blockId) {
    var par = document.getElementsByClassName('menu__esc');
    if ($(blockId).css('display') == 'block') {
        $(blockId).animate({width: 'hide'}, 500);
        par[0].classList.remove("active")
    }
}

function search_show(blockId) {
    var par = document.getElementsByClassName('form__nav');
    if ($(blockId).css('display') == 'none') {
        $(blockId).animate({height: 'show'}, 500);
        par[0].classList.add("active")
    }
}
function search_hide(blockId) {
    var par = document.getElementsByClassName('esc');
    if ($(blockId).css('display') == 'block') {
        $(blockId).animate({height: 'hide'}, 500);
        par[0].classList.remove("active")
    }
}