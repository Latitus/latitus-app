/**
 * Created by phaml_000 on 12/9/2015.
 */
App.service('BaseResponse', function() {
    this.messageInfo = "";
    this.success = false;
    this.body = [];
    this.ReturnData = function(data){
        if(data){
            if(data.messageInfo){
                this.messageInfo = data.messageInfo;
            } else {
                this.messageInfo = "";
            }
            if(data.success){
                this.success = data.success;
            } else {
                this.success = false;
            }
            if(data.body){
                this.body = body;
            } else {
                this.body = [];
            }
        }
        return data;
    }
});