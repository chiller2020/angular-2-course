System.register(['angular2/core', './like.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                    this.tweetData = { author: 'TestName', tweetHandle: '@TestHandle', tweetText: 'Hello Sample Tweet schalala', imageUrl: 'http://lorempixel.com/100/100/people' };
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "tweetData", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "<div class=\"media\">\n                 <div class=\"media-left\">\n                    <a href=\"#\">\n                      <img class=\"media-object\" src=\"{{tweetData.imageUrl}}\" alt=\"placeholder\">\n                    </a>\n                 </div>\n                 <div class=\"media-body\">\n                  <h4 class=\"media-heading\">\n                    {{ tweetData.author }} <span class=\"tweetHandle\"> {{ tweetData.tweetHandle }}</span>\n                  </h4>\n                   {{tweetData.tweetText}} \n                  <div>\n                    <like [nLikes]=\"tweetData.nLikes\"></like>\n                  </div>                \n                 </div>\n               </div>",
                        styles: [".tweetHandle{color:lightGrey}"],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
            ;
        }
    }
});
//# sourceMappingURL=tweet.component.js.map