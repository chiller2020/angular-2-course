System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.isClickedDown = false;
                    this.isClickedUp = false;
                    this.nVotes = 10;
                    this.vote = new core_1.EventEmitter();
                }
                VoterComponent.prototype.onClickUp = function () {
                    //handle click up reset clicked down
                    if (this.isClickedDown == true) {
                        this.isClickedDown = false;
                        this.nVotes++;
                    }
                    else if (this.isClickedUp == false) {
                        this.isClickedUp = true;
                        this.nVotes++;
                    }
                    this.vote.emit({ voteCount: this.nVotes });
                };
                VoterComponent.prototype.onClickDown = function () {
                    //handle click down reset clicked up
                    if (this.isClickedUp == true) {
                        this.isClickedUp = false;
                        this.nVotes--;
                    }
                    else if (this.isClickedDown == false) {
                        this.nVotes--;
                        this.isClickedDown = true;
                    }
                    this.vote.emit({ voteCount: this.nVotes });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "nVotes", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "vote", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "<div><i (click)=\"onClickUp()\" class=\"glyphicon glyphicon-menu-up\" [class.highlighted]=\"isClickedUp\"></i></div>\n              <div>{{nVotes}}</div>\n              <div><i (click)=\"onClickDown()\" class=\"glyphicon glyphicon-menu-down\" [class.highlighted]=\"isClickedDown\"></i></div> ",
                        styles: [".highlighted{color: yellow}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
            ;
        }
    }
});
//# sourceMappingURL=voter.component.js.map